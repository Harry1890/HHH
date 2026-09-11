import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { engagementModels } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function EngagementModels() {
  return (
    <section id={SECTION_IDS.engagement} className="section-space scroll-mt-24">
      <Container>
        <SectionHeader
          label="Engagement models"
          title="Flexible ways to work together."
          description="Choose the shape that fits your team today. Engagements often evolve as the system and the relationship mature."
          split
        />
        <RevealGroup as="ul" className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
          {engagementModels.map((model, i) => (
            <RevealItem
              key={model.title}
              as="li"
              className="flex gap-6 rounded-3xl border border-line bg-surface p-7 shadow-soft md:p-8"
            >
              <span className="font-mono text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-title text-ink">{model.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted">{model.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
