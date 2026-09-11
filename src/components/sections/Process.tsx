"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types/site";

function Step({
  step,
  index,
  onActive,
}: {
  step: ProcessStep;
  index: number;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  // Mark the step active while it sits in the middle band of the viewport.
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} id={`process-step-${step.number}`} className="scroll-mt-32">
      <Reveal amount={0.3}>
        <article className="grid gap-6 border-t border-line pt-8 md:grid-cols-[96px_1fr] md:gap-10 md:pt-10">
          <span className="font-mono text-[13px] text-muted md:pt-2">{step.number}</span>
          <div>
            <h3 className="text-subheading text-ink">{step.title}</h3>
            <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-muted">{step.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${step.title} outputs`}>
              {step.outputs.map((output) => (
                <li
                  key={output}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] font-medium text-ink/80"
                >
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </li>
  );
}

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id={SECTION_IDS.process} className="section-space scroll-mt-24 border-y border-line bg-surface">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel>02 / How we work</SectionLabel>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="text-heading mt-6 text-ink">A clear path from problem to production.</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-lead mt-6 max-w-[480px]">
                  Four stages, each with concrete outputs. Enough structure to de-risk complex work, without slowing
                  it down.
                </p>
              </Reveal>

              <ol className="mt-10 hidden gap-3 lg:flex lg:flex-col" aria-label="Progress">
                {processSteps.map((step, i) => (
                  <li key={step.number} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={cn(
                        "h-px w-6 transition-[width,background-color] duration-500 ease-out motion-reduce:transition-none",
                        i === active ? "w-10 bg-ink" : "bg-line-strong",
                      )}
                    />
                    <a
                      href={`#process-step-${step.number}`}
                      aria-current={i === active ? "step" : undefined}
                      className={cn(
                        "text-[15px] transition-colors duration-300",
                        i === active ? "font-medium text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      {step.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol className="mt-16 space-y-12 lg:col-span-7 lg:mt-0 lg:space-y-16">
            {processSteps.map((step, i) => (
              <Step key={step.number} step={step} index={i} onActive={setActive} />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
