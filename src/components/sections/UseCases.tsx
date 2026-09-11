import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useCases } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function UseCases() {
  return (
    <section id={SECTION_IDS.solutions} className="section-space scroll-mt-24">
      <Container>
        <SectionHeader
          label="Solutions"
          title="AI systems for real business problems."
          description="We are not tied to one vertical. The same engineering discipline applies wherever intelligence needs to be reliable, secure and useful."
          split
        />
        {/* 1px gaps over a line-coloured background draw the hairline grid at any column count. */}
        <RevealGroup
          as="ul"
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((useCase) => (
            <RevealItem
              key={useCase.title}
              as="li"
              className="group bg-surface p-7 transition-colors duration-300 hover:bg-canvas md:p-8"
            >
              <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-canvas text-ink transition-colors duration-300 group-hover:bg-surface">
                <Icon name={useCase.icon} className="size-[18px]" />
              </span>
              <h3 className="text-title mt-7 text-ink">{useCase.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">{useCase.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
