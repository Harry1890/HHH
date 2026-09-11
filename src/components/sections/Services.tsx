import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

export function Services() {
  return (
    <section id={SECTION_IDS.services} className="section-space scroll-mt-24">
      <Container>
        <SectionHeader
          label="01 / Services"
          title="From AI strategy to production systems."
          description="Six ways we help companies design, build and operate intelligent software — separately or as one end-to-end engagement."
          split
        />
        <RevealGroup className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {services.map((service, index) => (
            <RevealItem key={service.id}>
              <ServiceCard service={service} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
