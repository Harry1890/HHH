import { LogoMark } from "@/components/layout/LogoMark";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Larger lockup for the footer. */
  size?: "sm" | "md";
}

/** Logo lockup: the mark plus the company name from `siteConfig`. */
export function Logo({ className, size = "sm" }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label={`${siteConfig.companyName} — back to top`}
      className={cn("inline-flex items-center gap-2.5 text-ink", className)}
    >
      <LogoMark size={size === "sm" ? 28 : 36} className="shrink-0" />
      <span className={cn("font-medium tracking-[-0.02em]", size === "sm" ? "text-[17px]" : "text-[20px]")}>
        {siteConfig.companyName}
      </span>
    </a>
  );
}
