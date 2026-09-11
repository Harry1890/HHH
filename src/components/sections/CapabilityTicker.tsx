import { tickerItems } from "@/data/site";

function TickerRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14">
      {tickerItems.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap md:gap-14">
          <span className="text-eyebrow text-[13px] text-ink/80">{item}</span>
          <span aria-hidden className="text-[10px] text-accent">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Slow horizontal ticker. The list is rendered twice so the CSS translate of
 * -50% loops seamlessly; the duplicate is hidden from assistive tech.
 */
export function CapabilityTicker() {
  return (
    <section aria-label="Capabilities" className="border-y border-line bg-surface">
      <div className="flex overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-ticker flex w-max">
          <TickerRow />
          <TickerRow hidden />
        </div>
      </div>
    </section>
  );
}
