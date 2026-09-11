import { promises as dns } from "node:dns";
import disposableExact from "disposable-email-domains";
import disposableWildcard from "disposable-email-domains/wildcard.json";

/**
 * Server-side email deliverability checks for the contact form.
 * (Server-only: import from route handlers, never from client code.)
 *
 * Layers, cheapest first:
 *   1. syntax      — well-formed local part and domain with a real TLD
 *   2. disposable  — throwaway inbox providers (community-maintained list)
 *   3. mail server — the domain publishes MX records (or A/AAAA, the RFC 5321 fallback)
 *
 * What this cannot tell you is whether the specific mailbox exists — large
 * providers do not expose that. If junk still gets through, add a mailbox
 * verification API (Kickbox, ZeroBounce, Abstract, …) as a fourth step at the
 * end of `verifyEmailDeliverability`; keep its key server-side.
 */

export type EmailRejection = "syntax" | "disposable" | "no_mail_server";

export type EmailVerdict = { ok: true } | { ok: false; reason: EmailRejection; message: string };

/** Visitor-facing copy for each rejection; `{domain}` is filled in. */
const MESSAGES: Record<EmailRejection, string> = {
  syntax: "Please enter a valid email address.",
  disposable: "Temporary inboxes are not accepted — please use your work or personal email address.",
  no_mail_server: "We could not find a mail server for {domain}. Please check the address.",
};

const LOCAL_PART = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
const DOMAIN_LABEL = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/;

export async function verifyEmailDeliverability(email: string): Promise<EmailVerdict> {
  const parts = splitEmail(email);
  if (!parts) return reject("syntax", email);
  if (isDisposableDomain(parts.domain)) return reject("disposable", parts.domain);
  if ((await domainAcceptsMail(parts.domain)) === false) return reject("no_mail_server", parts.domain);
  return { ok: true };
}

function reject(reason: EmailRejection, domain: string): EmailVerdict {
  return { ok: false, reason, message: MESSAGES[reason].replace("{domain}", domain) };
}

function splitEmail(email: string): { local: string; domain: string } | null {
  const at = email.lastIndexOf("@");
  if (at < 1 || at === email.length - 1 || email.length > 254) return null;
  const local = email.slice(0, at);
  const domain = email.slice(at + 1).toLowerCase();
  if (local.length > 64 || !LOCAL_PART.test(local)) return null;
  const labels = domain.split(".");
  // Needs a real TLD; a bare host like "localhost" cannot receive external mail.
  if (labels.length < 2 || !labels.every((label) => DOMAIN_LABEL.test(label))) return null;
  if (!/^[a-z]{2,}$/.test(labels[labels.length - 1])) return null;
  return { local, domain };
}

// ---------- disposable providers ----------

const DISPOSABLE = new Set<string>(disposableExact);
const DISPOSABLE_SUFFIXES: readonly string[] = disposableWildcard;

function isDisposableDomain(domain: string): boolean {
  if (DISPOSABLE.has(domain)) return true;
  // Wildcard entries cover every subdomain of a provider (e.g. "*.33mail.com").
  return DISPOSABLE_SUFFIXES.some((suffix) => domain === suffix || domain.endsWith(`.${suffix}`));
}

// ---------- mail server lookup ----------

/**
 * true  — the domain can receive mail
 * false — it definitely cannot (no such domain, no MX/A/AAAA, or an explicit "null MX")
 * null  — could not determine (resolver unreachable); callers must not block on this
 */
async function domainAcceptsMail(domain: string): Promise<boolean | null> {
  const mx = await lookup(domain, "MX");
  if (mx === null) return null;
  // RFC 7505 "null MX" (a single record pointing at the root) declares the domain never accepts mail.
  if (mx.length > 0) return !(mx.length === 1 && /^0\s+\.?$/.test(mx[0]));
  // No MX: SMTP falls back to the domain's address records.
  const [a, aaaa] = await Promise.all([lookup(domain, "A"), lookup(domain, "AAAA")]);
  if (a === null && aaaa === null) return null;
  return (a?.length ?? 0) > 0 || (aaaa?.length ?? 0) > 0;
}

type RecordType = "MX" | "A" | "AAAA";
const DNS_TYPE_CODE: Record<RecordType, number> = { A: 1, MX: 15, AAAA: 28 };
const DOH_ENDPOINT = "https://cloudflare-dns.com/dns-query";
const LOOKUP_TIMEOUT_MS = 4000;

/** Record data for the name (empty when the name or record type does not exist); null when unreachable. */
async function lookup(domain: string, type: RecordType): Promise<string[] | null> {
  return (await lookupOverHttps(domain, type)) ?? (await lookupWithResolver(domain, type));
}

/** DNS-over-HTTPS: works in any environment with outbound HTTPS, unaffected by local resolver config. */
async function lookupOverHttps(domain: string, type: RecordType): Promise<string[] | null> {
  try {
    const url = `${DOH_ENDPOINT}?name=${encodeURIComponent(domain)}&type=${type}`;
    const response = await fetch(url, {
      headers: { accept: "application/dns-json" },
      signal: AbortSignal.timeout(LOOKUP_TIMEOUT_MS),
    });
    if (!response.ok) return null;
    const body = (await response.json()) as { Status: number; Answer?: { type: number; data: string }[] };
    // 0 = NOERROR, 3 = NXDOMAIN; anything else (SERVFAIL, REFUSED…) is inconclusive.
    if (body.Status !== 0 && body.Status !== 3) return null;
    return (body.Answer ?? []).filter((r) => r.type === DNS_TYPE_CODE[type]).map((r) => r.data);
  } catch {
    return null;
  }
}

/** Node's resolver as a fallback when DoH is unreachable. */
async function lookupWithResolver(domain: string, type: RecordType): Promise<string[] | null> {
  try {
    if (type === "MX") {
      const records = await dns.resolveMx(domain);
      return records.map((r) => `${r.priority} ${r.exchange || "."}`);
    }
    return type === "A" ? await dns.resolve4(domain) : await dns.resolve6(domain);
  } catch (error) {
    const code = (error as { code?: string } | null)?.code;
    return code === "ENOTFOUND" || code === "ENODATA" ? [] : null;
  }
}
