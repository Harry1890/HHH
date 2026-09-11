/**
 * Join class names, skipping falsy values. Small enough that a dependency
 * (clsx / tailwind-merge) is not worth adding.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Resolve the visitor's IANA timezone, falling back to UTC on the server. */
export function getVisitorTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

/** Build a mailto: URL with a subject and body that survive URL encoding. */
export function buildMailto(to: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which mail clients do not decode.
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
