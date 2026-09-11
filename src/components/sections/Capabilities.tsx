import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { capabilityGroups } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function Capabilities() {
  return (
    <section id={SECTION_IDS.capabilities} className="section-space scroll-mt-24">
      <Container>
        <SectionHeader
          label="Technical capabilities"
          title="Engineering across the full AI stack."
          description="From agent orchestration and retrieval to the cloud infrastructure underneath — one team covers the whole system."
          split
        />
        <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilityGroups.map((group) => (
            <RevealItem key={group.title}>
              <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink">{group.title}</h3>
              <ul className="mt-5 divide-y divide-line border-t border-line">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 py-2.5 text-[15px] text-muted">
                    <span aria-hidden className="size-1 rounded-full bg-ink/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
