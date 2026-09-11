/** Anchor targets used by navigation, CTAs and the footer. */
export const SECTION_IDS = {
  hero: "top",
  services: "services",
  platform: "platform",
  solutions: "solutions",
  process: "process",
  capabilities: "capabilities",
  why: "why-us",
  work: "work",
  delivery: "global-delivery",
  engagement: "engagement",
  about: "about",
  faq: "faq",
  contact: "contact",
} as const;

/** Shared motion timings (seconds). Keep animations calm and consistent. */
export const MOTION = {
  reveal: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, y: 20 },
  stagger: 0.08,
} as const;
