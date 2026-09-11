import { ArrowUpRight } from "lucide-react";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function Contact() {
  return (
    <section id={SECTION_IDS.contact} className="section-space scroll-mt-24 border-y border-line bg-surface">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-heading mt-6 text-ink">Let&apos;s build something intelligent.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lead mt-6 max-w-[460px]">
                Tell us what you are building, what problem you are trying to solve, and where you need help.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-6 border-t border-line pt-8">
                <div>
                  <p className="text-eyebrow text-muted">Email</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="group mt-2 inline-flex items-center gap-1.5 text-[18px] font-medium text-ink"
                  >
                    {siteConfig.contactEmail}
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    />
                  </a>
                </div>
                <div>
                  <p className="text-eyebrow text-muted">Prefer to talk?</p>
                  <div className="mt-3">
                    <BookCallButton variant="secondary" arrow>
                      Schedule a Call
                    </BookCallButton>
                  </div>
                </div>
                <p className="text-[14px] text-muted">{siteConfig.locationMessage}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1} amount={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
