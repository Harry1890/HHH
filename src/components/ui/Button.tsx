import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Append a trailing arrow that nudges right on hover. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

interface AnchorProps extends BaseProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  rel?: string;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out select-none whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white border border-ink hover:bg-[#2a2a2a] hover:border-[#2a2a2a] active:translate-y-px",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink active:translate-y-px",
  ghost: "bg-transparent text-ink border border-transparent hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-[16px]",
};

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      )}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", arrow, className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  const ariaLabel = props["aria-label"];

  if (props.href !== undefined) {
    const { href, onClick, target, rel } = props;
    // Only in-app routes go through next/link; anchors, mailto: and external URLs stay plain.
    if (!href.startsWith("/")) {
      return (
        <a href={href} onClick={onClick} target={target} rel={rel} className={classes} aria-label={ariaLabel}>
          <Inner arrow={arrow}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} target={target} rel={rel} className={classes} aria-label={ariaLabel}>
        <Inner arrow={arrow}>{children}</Inner>
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
