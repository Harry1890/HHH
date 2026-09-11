"use client";

import type { MouseEvent, ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { shouldEmbedCalendly } from "@/lib/calendly";
import { useBooking } from "./BookingProvider";

interface BookCallButtonProps extends Pick<ButtonProps, "variant" | "size" | "arrow" | "className"> {
  children?: ReactNode;
  /** Runs on every click before the scheduler opens (e.g. to close a mobile menu). */
  onClick?: () => void;
}

/**
 * Any "Book a Call" CTA. It is a real link to `siteConfig.calendlyUrl`, so it
 * works before hydration, with modifier keys, and on phones (new tab). On wider
 * viewports a plain click opens the embedded scheduler instead of leaving the page.
 */
export function BookCallButton({ children = "Book a Call", onClick, ...props }: BookCallButtonProps) {
  const { open } = useBooking();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (modified || !shouldEmbedCalendly()) return;
    event.preventDefault();
    open();
  };

  return (
    <Button {...props} href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      {children}
    </Button>
  );
}
