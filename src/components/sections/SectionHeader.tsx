import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  /** Lay out the description beside the title on wide screens. */
  split?: boolean;
}

/** Shared eyebrow + heading + optional lead used at the top of each section. */
export function SectionHeader({ label, title, description, className, split }: SectionHeaderProps) {
  return (
    <div className={cn(split && "lg:grid lg:grid-cols-12 lg:items-end lg:gap-10", className)}>
      <div className={cn(split && "lg:col-span-7")}>
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-heading mt-6 max-w-[16ch] text-ink">{title}</h2>
        </Reveal>
      </div>
      {description && (
        <Reveal delay={0.12} className={cn(split ? "mt-6 lg:col-span-5 lg:mt-0" : "mt-6")}>
          <p className="text-lead max-w-[560px]">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
