import { siteConfig } from "@/data/site";
import { CONTACT_ERRORS, formatContactMessage, validateContactPayload } from "@/lib/contact";
import { verifyEmailDeliverability } from "@/lib/email-verification";

/**
 * POST /api/contact — delivers a contact-form submission by email via Resend.
 *
 * Environment (server-side only; never NEXT_PUBLIC_*):
 *   RESEND_API_KEY       required — without it the route answers 503 and the
 *                        form falls back to a mailto: link.
 *   CONTACT_FROM_EMAIL   optional — sender, e.g. "Orbion <hello@yourdomain.com>".
 *                        Defaults to Resend's shared test sender, which can only
 *                        deliver to the Resend account owner's own address.
 *   CONTACT_TO_EMAIL     optional — inbox; defaults to siteConfig.contactEmail.
 */
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = `${siteConfig.companyName} Website <onboarding@resend.dev>`;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "not_configured" }, { status: 503 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: CONTACT_ERRORS.invalid }, { status: 400 });
  }

  // Honeypot: the form hides this field, so only bots fill it. Pretend success and drop it.
  if ((body as { website?: unknown } | null)?.website) return Response.json({ ok: true });

  const result = validateContactPayload(body);
  if (!result.ok) return Response.json({ error: result.error }, { status: 400 });

  // Reject addresses that cannot receive a reply (typos, throwaway inboxes, domains with no mail server).
  const verdict = await verifyEmailDeliverability(result.payload.email);
  if (!verdict.ok) return Response.json({ error: verdict.message, field: "email" }, { status: 422 });

  const { subject, text } = formatContactMessage(result.payload);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
        to: [process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail],
        reply_to: result.payload.email,
        subject,
        text,
      }),
    });
    if (!response.ok) {
      // Log Resend's reason (e.g. unverified domain) — never the visitor's message.
      const detail = (await response.json().catch(() => null)) as { message?: string } | null;
      console.error(`Resend rejected the contact email (HTTP ${response.status}): ${detail?.message ?? "no details"}`);
      return Response.json({ error: CONTACT_ERRORS.delivery }, { status: 502 });
    }
  } catch (error) {
    console.error("Could not reach Resend.", error instanceof Error ? error.message : error);
    return Response.json({ error: CONTACT_ERRORS.delivery }, { status: 502 });
  }

  return Response.json({ ok: true });
}
