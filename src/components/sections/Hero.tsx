import { BookCallButton } from "@/components/booking/BookCallButton";
import { SystemDiagram } from "@/components/hero/SystemDiagram";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function Hero() {
  return (
    <section id={SECTION_IDS.hero} className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44">
      {/* Soft top glow so the page does not open on a flat slab of grey. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(70%_60%_at_50%_0%,rgba(92,124,255,0.09),transparent_70%)]"
      />
      <Container>
        <Reveal>
          <SectionLabel accent>Global AI engineering agency</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          {/* 21ch forces the three-line break: "We build intelligent / systems for companies / around the world." */}
          <h1 className="text-display mt-7 max-w-[21ch] text-ink">
            We build intelligent systems for companies around the world.
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <p className="text-lead max-w-[520px]">{siteConfig.description}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={`#${SECTION_IDS.contact}`} size="lg" arrow>
                  Start a Project
                </Button>
                <BookCallButton variant="secondary" size="lg" />
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mt-8 text-[14px] text-muted">{siteConfig.trustLine}</p>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="lg:col-span-6 lg:col-start-7" amount={0.1}>
            <div className="mx-auto max-w-[560px] lg:ml-auto lg:mr-0">
              <SystemDiagram />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
