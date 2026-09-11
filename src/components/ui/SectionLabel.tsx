import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
  /** Use the accent dot for emphasis (e.g. hero eyebrow). */
  accent?: boolean;
}

export function SectionLabel({ children, className, accent }: SectionLabelProps) {
  return (
    <p className={cn("text-eyebrow flex items-center gap-2.5 text-muted", className)}>
      {accent && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
      {children}
    </p>
  );
}
