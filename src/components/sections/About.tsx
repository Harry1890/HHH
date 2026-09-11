import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SECTION_IDS } from "@/lib/constants";

export function About() {
  return (
    <section id={SECTION_IDS.about} className="section-space scroll-mt-24 border-y border-line bg-surface">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionLabel>About</SectionLabel>
            </Reveal>
          </div>
          <div className="mt-6 lg:col-span-9 lg:mt-0">
            <Reveal delay={0.06}>
              <p className="text-subheading max-w-[22ch] text-ink md:text-[clamp(32px,3.6vw,52px)]">
                AI is becoming part of the software stack.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-[760px] text-[clamp(20px,2vw,28px)] leading-[1.35] tracking-[-0.02em] text-ink/85">
                The difficult part is no longer simply calling a model. The difficult part is turning intelligence
                into reliable, secure and useful production systems.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-[clamp(20px,2vw,28px)] font-medium leading-[1.35] tracking-[-0.02em] text-ink">
                That is what we build.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-eyebrow mt-12 max-w-[560px] leading-[1.9] text-muted">
                AI engineering. Agent systems. Software architecture.
                <br />
                Built for companies operating globally.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
