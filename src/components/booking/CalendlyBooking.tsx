"use client";

import { AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { siteConfig } from "@/data/site";
import { buildCalendlyEmbedUrl, getCalendlyEvent, loadCalendly } from "@/lib/calendly";

interface CalendlyBookingProps {
  open: boolean;
  onClose: () => void;
}

type Status = "loading" | "ready" | "scheduled" | "error";

const TITLE_ID = "calendly-booking-title";

const SUBTITLE: Record<Status, string> = {
  loading: "Pick a time that works for you. Confirmation and calendar invitations are sent by Calendly.",
  ready: "Pick a time that works for you. Confirmation and calendar invitations are sent by Calendly.",
  scheduled: "Booked. Your calendar invitation is on its way.",
  error: "The scheduler could not be loaded on this page.",
};

/**
 * "Book a Call" dialog: Calendly's official inline embed inside the site's own
 * accessible modal, so the visitor stays on the page while scheduling.
 * Availability, time zones, confirmations and Google Calendar sync are all
 * handled by Calendly.
 */
export function CalendlyBooking({ open, onClose }: CalendlyBookingProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  // Mount the inline widget when the dialog opens; tear it down when it closes.
  useEffect(() => {
    if (!open) return;
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    setStatus("loading");

    loadCalendly()
      .then((calendly) => {
        if (cancelled) return;
        calendly.initInlineWidget({ url: buildCalendlyEmbedUrl(), parentElement: host });
        host
          .querySelector("iframe")
          ?.addEventListener("load", () => !cancelled && setStatus((s) => (s === "loading" ? "ready" : s)), {
            once: true,
          });
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, [open]);

  // Calendly reports progress to the parent window via postMessage.
  useEffect(() => {
    if (!open) return;
    const onMessage = (event: MessageEvent) => {
      const name = getCalendlyEvent(event);
      if (!name) return;
      if (name === "calendly.event_scheduled") setStatus("scheduled");
      else setStatus((s) => (s === "loading" ? "ready" : s));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} labelledBy={TITLE_ID} size="xl">
      <div className="shrink-0 border-b border-line px-6 pb-5 pr-16 pt-6 sm:px-8">
        <h2 id={TITLE_ID} className="text-[24px] font-medium tracking-[-0.03em] text-ink">
          Book a Call
        </h2>
        <p className="mt-1.5 text-[15px] text-muted" aria-live="polite">
          {SUBTITLE[status]}
        </p>
      </div>

      <div className="relative min-h-0 flex-[1_1_720px] bg-surface">
        <div
          ref={hostRef}
          className="h-full w-full"
          aria-busy={status === "loading"}
          hidden={status === "error"}
        />

        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface text-muted">
            <Loader2 className="size-5 animate-spin motion-reduce:animate-none" aria-hidden />
            <p className="text-[14px]">Loading scheduler…</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex h-full flex-col items-center justify-center px-6 py-16 text-center">
            <span className="flex size-11 items-center justify-center rounded-full border border-line bg-canvas text-ink">
              <AlertCircle className="size-5" aria-hidden />
            </span>
            <p className="mt-5 max-w-[420px] text-[16px] text-ink">
              Calendly seems to be blocked in this browser. Open it in a new tab, or email us and we will find a time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" arrow>
                Open Calendly
              </Button>
              <Button href={`mailto:${siteConfig.contactEmail}`} variant="secondary">
                Email us
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
