import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { CapabilityTicker } from "@/components/sections/CapabilityTicker";
import { Contact } from "@/components/sections/Contact";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GlobalDelivery } from "@/components/sections/GlobalDelivery";
import { Hero } from "@/components/sections/Hero";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { UseCases } from "@/components/sections/UseCases";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityTicker />
      <Services />
      <PlatformShowcase />
      <UseCases />
      <Process />
      <Capabilities />
      <WhyUs />
      <Work />
      <GlobalDelivery />
      <EngagementModels />
      <About />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
