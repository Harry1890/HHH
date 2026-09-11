"use client";

import { useSyncExternalStore } from "react";
import { getVisitorTimezone } from "@/lib/utils";

interface RegionClockProps {
  /** IANA timezone to display. Omit to show the visitor's own timezone. */
  timezone?: string;
}

/** The wall clock is an external system: subscribe to it once a minute. */
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

/**
 * Current local time for a region. The server snapshot is `null`, so the
 * server renders a placeholder and the client fills in the time after
 * hydration — no markup mismatch, no state set inside effects.
 */
export function RegionClock({ timezone }: RegionClockProps) {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);

  if (minute === null) {
    return (
      <span className="font-mono text-[12px] text-muted" aria-hidden>
        --:--
      </span>
    );
  }

  const zone = timezone ?? getVisitorTimezone();
  const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: zone }).format(
    new Date(minute * 60_000),
  );
  const city = timezone ? zone.split("/").pop()?.replace(/_/g, " ") : "your time";

  return (
    <span className="font-mono text-[12px] text-muted">
      <span className="text-ink">{time}</span> · {city}
    </span>
  );
}
