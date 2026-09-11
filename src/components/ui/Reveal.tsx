"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION } from "@/lib/constants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in seconds (used to stagger siblings). */
  delay?: number;
  /** Render as a different element, e.g. "li" or "section". */
  as?: "div" | "section" | "li" | "article" | "header";
  /** Animate once the element is this far into the viewport (0–1). */
  amount?: number;
}

/**
 * Fade + rise on scroll. Under `prefers-reduced-motion` the content is simply
 * rendered in place.
 */
export function Reveal({ children, className, delay = 0, as = "div", amount = 0.25 }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : MOTION.reveal.y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : MOTION.reveal.duration,
        ease: MOTION.reveal.ease,
        delay: reduce ? 0 : delay,
      },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </Component>
  );
}

/**
 * Parent for a group of `RevealItem`s. Children are staggered as the group
 * scrolls into view.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : MOTION.stagger } },
      }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : MOTION.reveal.y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : MOTION.reveal.duration, ease: MOTION.reveal.ease },
        },
      }}
    >
      {children}
    </Component>
  );
}
