import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { openRoles, siteConfig } from "@/data/site";
import { buildMailto } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${siteConfig.companyName}, headquartered in ${siteConfig.headquarters}.`,
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      {/* Header. Matches Hero's top offset — this is the first section on the page, under the fixed navbar. */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(70%_60%_at_50%_0%,rgba(92,124,255,0.09),transparent_70%)]"
        />
        <Container>
          <Reveal>
            <SectionLabel accent>Careers</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-heading mt-7 max-w-[16ch] text-ink">
              Help us build systems companies actually run on.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-lead mt-6 max-w-[560px]">
              We&apos;re a small, senior team headquartered in {siteConfig.headquarters}, working with clients across
              the US, Europe and beyond. We hire people who can take an AI system from a rough idea to something
              reliable in production.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Founder quote. */}
      <section className="border-y border-line bg-surface py-16 md:py-20">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Reveal>
                <SectionLabel>From the team</SectionLabel>
              </Reveal>
            </div>
            <div className="mt-6 lg:col-span-9 lg:mt-0">
              <Reveal delay={0.06}>
                <p className="text-subheading max-w-[720px] text-ink">
                  &ldquo;We started {siteConfig.companyName} to build the kind of AI systems we always wanted to work
                  on — production-grade, not demos. If that sounds like your kind of problem, we want to hear from
                  you.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-[15px] font-medium text-muted">{siteConfig.coFounder} — Co-Founder</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Open roles. */}
      <section className="section-space">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Reveal>
                <SectionLabel>Open roles</SectionLabel>
              </Reveal>
            </div>
            <div className="mt-6 lg:col-span-9 lg:mt-0">
              <RevealGroup as="div" className="flex flex-col gap-5">
                {openRoles.map((role) => {
                  const mailto = buildMailto(
                    siteConfig.contactEmail,
                    `Application — ${role.title}`,
                    `Hi ${siteConfig.coFounder.split(" ")[0]},\n\nI'm interested in the ${role.title} role at ${siteConfig.companyName}.\n\n[Tell us a bit about yourself, and share a résumé, portfolio or GitHub link.]\n`,
                  );
                  return (
                    <RevealItem
                      key={role.title}
                      as="article"
                      className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8"
                    >
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-eyebrow text-muted">{role.department}</p>
                          <h2 className="mt-2 text-[24px] font-medium tracking-[-0.02em] text-ink">{role.title}</h2>
                          <p className="mt-2 text-[15px] text-muted">
                            {role.location} · {role.type}
                          </p>
                        </div>
                        <Button href={mailto} arrow className="shrink-0">
                          Apply
                        </Button>
                      </div>

                      <p className="mt-6 max-w-[640px] text-[16px] leading-relaxed text-ink/85">{role.summary}</p>

                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div>
                          <p className="text-eyebrow text-muted">What you&apos;ll do</p>
                          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/85">
                            {role.responsibilities.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-ink/40" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-eyebrow text-muted">What we&apos;re looking for</p>
                          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/85">
                            {role.requirements.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-ink/40" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealGroup>

              <Reveal delay={0.1}>
                <p className="mt-8 text-[15px] text-muted">
                  Don&apos;t see the right role?{" "}
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-ink underline underline-offset-4">
                    Email us at {siteConfig.contactEmail}
                  </a>{" "}
                  — we&apos;re always interested in hearing from strong AI and software engineers.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
