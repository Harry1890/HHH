import { BookCallButton } from "@/components/booking/BookCallButton";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/** Abstract system background: a faint grid with a few connected nodes. */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_100%,rgba(92,124,255,0.14),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-60 [mask-image:radial-gradient(42%_55%_at_50%_50%,transparent_45%,black_80%)]"
      >
        <g fill="none" stroke="rgba(17,17,17,0.12)">
          <path d="M120 300 C 260 300, 260 120, 400 120 S 540 260, 680 260 S 820 90, 960 90" className="animate-dash" />
          <path d="M200 80 C 320 80, 340 220, 460 220 S 600 340, 760 340 S 900 200, 1080 200" className="animate-dash" />
        </g>
        <g fill="#5C7CFF">
          <circle cx="400" cy="120" r="3" />
          <circle cx="680" cy="260" r="3" />
          <circle cx="460" cy="220" r="3" />
          <circle cx="960" cy="90" r="3" />
        </g>
        <g fill="rgba(17,17,17,0.25)">
          <circle cx="120" cy="300" r="2.5" />
          <circle cx="760" cy="340" r="2.5" />
          <circle cx="1080" cy="200" r="2.5" />
          <circle cx="200" cy="80" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <Backdrop />
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <h2 className="text-heading text-ink">Have an AI project worth building properly?</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lead mx-auto mt-6 max-w-[480px]">
              Let&apos;s turn the idea into a reliable production system.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`/#${SECTION_IDS.contact}`} size="lg" arrow>
                Start a Project
              </Button>
              <BookCallButton variant="secondary" size="lg" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
