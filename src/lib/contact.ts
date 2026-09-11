import { projectTypes, siteConfig } from "@/data/site";
import { buildMailto } from "@/lib/utils";

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  country: string;
  projectType: string;
  message: string;
}

export type ContactResult =
  | { method: "api"; ok: true }
  | { method: "api"; ok: false; error: string; mailto: string }
  | { method: "mailto"; href: string };

export const MESSAGE_MAX_LENGTH = 5000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Error copy shown to the visitor; the server returns the same strings. */
export const CONTACT_ERRORS = {
  invalid: "Please check the form and try again.",
  delivery: "We could not send your message just now.",
} as const;

const trimmed = (value: unknown, max: number): string => (typeof value === "string" ? value.trim().slice(0, max) : "");

/**
 * Normalise and validate a raw submission. Shared by the form (before sending)
 * and the API route (never trust the client), so both agree on what is valid.
 */
export function validateContactPayload(
  input: unknown,
): { ok: true; payload: ContactPayload } | { ok: false; error: string } {
  const raw = (input ?? {}) as Record<string, unknown>;
  const payload: ContactPayload = {
    name: trimmed(raw.name, 120),
    email: trimmed(raw.email, 254).toLowerCase(),
    company: trimmed(raw.company, 120),
    country: trimmed(raw.country, 80),
    projectType: trimmed(raw.projectType, 60),
    message: trimmed(raw.message, MESSAGE_MAX_LENGTH),
  };

  const valid =
    payload.name.length > 0 &&
    EMAIL_PATTERN.test(payload.email) &&
    (projectTypes as readonly string[]).includes(payload.projectType) &&
    payload.message.length > 0;

  return valid ? { ok: true, payload } : { ok: false, error: CONTACT_ERRORS.invalid };
}

/** Subject and plain-text body for the inquiry email; mirrors the form so nothing is lost. */
export function formatContactMessage(payload: ContactPayload): { subject: string; text: string } {
  const subject = `Project inquiry — ${payload.projectType}${payload.company ? ` (${payload.company})` : ""}`;
  const text = [
    `Name: ${payload.name}`,
    `Work email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    `Country / Region: ${payload.country || "—"}`,
    `Project type: ${payload.projectType}`,
    "",
    "Project details:",
    payload.message,
  ].join("\n");
  return { subject, text };
}

/** mailto: link carrying the whole message — the fallback when server-side delivery is unavailable. */
export function buildContactMailto(payload: ContactPayload): string {
  const { subject, text } = formatContactMessage(payload);
  return buildMailto(siteConfig.contactEmail, subject, text);
}

/**
 * Single entry point for contact submissions.
 *
 * Sends the message through `POST /api/contact` (a serverless function that
 * delivers it by email). If the API reports it is not configured — no
 * `RESEND_API_KEY` in the environment — the form falls back to a mailto: link
 * so the site keeps working without any backend.
 */
export async function submitContact(payload: ContactPayload, honeypot = ""): Promise<ContactResult> {
  const mailto = buildContactMailto(payload);
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, website: honeypot }),
    });
    if (response.ok) return { method: "api", ok: true };
    if (response.status === 503) return { method: "mailto", href: mailto };

    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    const error = response.status === 400 && body?.error ? body.error : CONTACT_ERRORS.delivery;
    return { method: "api", ok: false, error, mailto };
  } catch {
    return { method: "api", ok: false, error: CONTACT_ERRORS.delivery, mailto };
  }
}
