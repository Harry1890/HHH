import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqItems, siteConfig } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id={SECTION_IDS.faq} className="section-space scroll-mt-24">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel>FAQ</SectionLabel>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="text-heading mt-6 text-ink">Questions, answered.</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-lead mt-6 max-w-[380px]">
                  Anything else? Email{" "}
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  .
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal className="mt-12 lg:col-span-8 lg:mt-0" amount={0.1}>
            <Accordion items={faqItems} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
