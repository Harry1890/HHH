import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Larger lockup for the footer. */
  size?: "sm" | "md";
  /** Preload the mark — set on the navbar instance. */
  priority?: boolean;
}

/** Logo lockup: the mark plus the company name from `siteConfig`. */
export function Logo({ className, size = "sm", priority = false }: LogoProps) {
  return (
    <Link
      href="/#top"
      aria-label={`${siteConfig.companyName} — back to top`}
      className={cn("inline-flex items-center gap-2.5 text-ink", className)}
    >
      <LogoMark size={size === "sm" ? 28 : 36} priority={priority} className="shrink-0" />
      {/* Wordmark echoes the brand lockup: uppercase, generously tracked. */}
      <span className={cn("font-semibold uppercase tracking-[0.2em]", size === "sm" ? "text-[14px]" : "text-[16px]")}>
        {siteConfig.companyName}
      </span>
    </Link>
  );
}
