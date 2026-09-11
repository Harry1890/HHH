import { Globe2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { RegionClock } from "@/components/sections/RegionClock";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { regions, siteConfig } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

/** Representative timezone for each region card (display only). */
const regionTimezones: Record<string, string | undefined> = {
  "North America": "America/New_York",
  Europe: "Europe/London",
  "Asia-Pacific": "Asia/Singapore",
};

const principles = [
  "Clear technical ownership for every workstream",
  "Written decisions, architecture notes and demos",
  "Scheduled overlap for reviews and planning",
  "Async-first delivery across time zones",
];

export function GlobalDelivery() {
  return (
    <section id={SECTION_IDS.delivery} className="section-space scroll-mt-24 border-y border-line bg-surface">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Global delivery</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-heading mt-6 text-ink">Built to work across borders.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lead mt-6 max-w-[480px]">
                We work with distributed teams using clear technical ownership, structured communication and modern
                async collaboration.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                {principles.map((principle) => (
                  <li key={principle} className="flex items-start gap-3 text-[16px] text-ink/80">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-2" />
                    {principle}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 flex items-center gap-2 text-[14px] text-muted">
                <Globe2 className="size-4" strokeWidth={1.6} aria-hidden />
                {siteConfig.locationMessage}
              </p>
            </Reveal>
          </div>

          <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {regions.map((region) => (
              <RevealItem
                key={region.name}
                as="li"
                className="flex min-h-[180px] flex-col justify-between rounded-3xl border border-line bg-canvas p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-ink">{region.name}</h3>
                  <RegionClock timezone={regionTimezones[region.name]} />
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-muted">{region.detail}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
