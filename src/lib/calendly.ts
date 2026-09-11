import { siteConfig } from "@/data/site";

/**
 * Calendly integration (Version 1 scheduling).
 *
 * The site only launches Calendly's scheduling experience; availability,
 * time zones, confirmations and Google Calendar sync all happen inside
 * Calendly. Nothing here talks to Google.
 */

/** Official embed script — exposes `window.Calendly`. Loaded lazily on first use. */
const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

/** Origin of the embedded scheduler; used to trust postMessage events. */
const CALENDLY_ORIGIN = "https://calendly.com";

/** Below this width the CTA opens Calendly in a new tab instead of the modal. */
export const EMBED_MEDIA_QUERY = "(min-width: 768px)";

/** How long to wait for widget.js before offering the new-tab fallback. */
const LOAD_TIMEOUT_MS = 10000;

interface CalendlyApi {
  initInlineWidget(options: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, unknown>;
    utm?: Record<string, string>;
  }): void;
}

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

/** Calendly postMessage event names we react to. */
export type CalendlyEvent =
  | "calendly.profile_page_viewed"
  | "calendly.event_type_viewed"
  | "calendly.date_and_time_selected"
  | "calendly.event_scheduled";

/**
 * The scheduling URL with embed-only display parameters.
 * Colours mirror the site palette so the scheduler reads as part of the page.
 */
export function buildCalendlyEmbedUrl(): string {
  const url = new URL(siteConfig.calendlyUrl);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "ffffff");
  url.searchParams.set("text_color", "111111");
  url.searchParams.set("primary_color", "5c7cff");
  return url.toString();
}

/** True when the viewport is wide enough for the embedded scheduler. */
export function shouldEmbedCalendly(): boolean {
  return typeof window !== "undefined" && window.matchMedia(EMBED_MEDIA_QUERY).matches;
}

let pending: Promise<CalendlyApi> | null = null;

/** Load widget.js once and resolve with the Calendly API; rejects if it is blocked or times out. */
export function loadCalendly(): Promise<CalendlyApi> {
  if (typeof window === "undefined") return Promise.reject(new Error("Calendly is browser-only."));
  if (window.Calendly) return Promise.resolve(window.Calendly);
  if (pending) return pending;

  pending = new Promise<CalendlyApi>((resolve, reject) => {
    const fail = (message: string) => {
      window.clearTimeout(timer);
      pending = null;
      reject(new Error(message));
    };
    const timer = window.setTimeout(() => fail("Timed out loading Calendly."), LOAD_TIMEOUT_MS);

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener(
      "load",
      () => {
        window.clearTimeout(timer);
        if (window.Calendly) resolve(window.Calendly);
        else fail("Calendly did not initialise.");
      },
      { once: true },
    );
    script.addEventListener("error", () => fail("Failed to load Calendly."), { once: true });

    if (!existing) {
      script.src = WIDGET_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  });
  return pending;
}

/** Narrow a window `message` event to one sent by the embedded Calendly scheduler. */
export function getCalendlyEvent(event: MessageEvent): CalendlyEvent | null {
  if (event.origin !== CALENDLY_ORIGIN) return null;
  const name = (event.data as { event?: unknown } | null)?.event;
  return typeof name === "string" && name.startsWith("calendly.") ? (name as CalendlyEvent) : null;
}
