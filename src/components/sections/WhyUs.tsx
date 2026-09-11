import { Container } from "@/components/layout/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { differentiators } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function WhyUs() {
  return (
    <section id={SECTION_IDS.why} className="section-space scroll-mt-24 border-y border-line bg-surface">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel>Why work with us</SectionLabel>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="text-heading mt-6 text-ink">
                  Beyond the prototype.
                  <br />
                  Built for production.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-lead mt-6 max-w-[460px]">
                  Demos are easy. Systems that stay reliable under real users, real data and real constraints are
                  the work.
                </p>
              </Reveal>
            </div>
          </div>

          <RevealGroup as="ol" className="mt-14 lg:col-span-7 lg:mt-0">
            {differentiators.map((item, i) => (
              <RevealItem
                key={item.title}
                as="li"
                className="grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-[72px_1fr] md:gap-8 lg:first:pt-2"
              >
                <span className="font-mono text-[13px] text-muted md:pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[24px] font-medium tracking-[-0.025em] text-ink md:text-[28px]">{item.title}</h3>
                  <p className="mt-3 max-w-[560px] text-[17px] leading-relaxed text-muted">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
