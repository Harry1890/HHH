import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { workItems } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Small schematic for each project card. Three variants, drawn with the same
 * strokes so the row reads as one system rather than three stock images.
 */
function WorkGlyph({ variant }: { variant: number }) {
  const box = "fill-[var(--color-surface)] stroke-[var(--color-line-strong)]";
  const line = "stroke-[var(--color-line-strong)]";
  const accent = "stroke-[var(--color-accent)]";

  return (
    <svg viewBox="0 0 240 96" className="h-24 w-full" aria-hidden focusable="false">
      {variant === 0 && (
        <>
          {/* documents → index → permission-aware agent */}
          <rect x="16" y="22" width="40" height="52" rx="6" className={box} />
          <rect x="24" y="14" width="40" height="52" rx="6" className={box} />
          <line x1="64" y1="40" x2="100" y2="40" className={`${line} animate-dash`} />
          <rect x="100" y="24" width="48" height="32" rx="8" className={box} />
          <line x1="148" y1="40" x2="184" y2="40" className={`${line} animate-dash`} />
          <rect x="184" y="16" width="40" height="48" rx="10" className={`${box} ${accent}`} />
          <circle cx="204" cy="34" r="5" className="fill-[var(--color-accent)]" />
          <line x1="196" y1="50" x2="212" y2="50" className={accent} />
        </>
      )}
      {variant === 1 && (
        <>
          {/* planner fanning out to parallel actions */}
          <rect x="16" y="32" width="56" height="32" rx="8" className={`${box} ${accent}`} />
          <path d="M72 48 H100 V20 H128" fill="none" className={`${line} animate-dash`} />
          <path d="M72 48 H128" fill="none" className={`${line} animate-dash`} />
          <path d="M72 48 H100 V76 H128" fill="none" className={`${line} animate-dash`} />
          <rect x="128" y="8" width="96" height="24" rx="6" className={box} />
          <rect x="128" y="36" width="96" height="24" rx="6" className={box} />
          <rect x="128" y="64" width="96" height="24" rx="6" className={box} />
          <circle cx="140" cy="20" r="3" className="fill-[var(--color-accent-2)]" />
          <circle cx="140" cy="48" r="3" className="fill-[var(--color-accent-2)]" />
          <circle cx="140" cy="76" r="3" className="fill-[var(--color-line-strong)]" />
        </>
      )}
      {variant === 2 && (
        <>
          {/* SDK → gateway → shared services */}
          <rect x="16" y="36" width="44" height="24" rx="6" className={box} />
          <line x1="60" y1="48" x2="92" y2="48" className={`${line} animate-dash`} />
          <rect x="92" y="20" width="56" height="56" rx="12" className={`${box} ${accent}`} />
          <line x1="104" y1="38" x2="136" y2="38" className={accent} />
          <line x1="104" y1="48" x2="128" y2="48" className={accent} />
          <line x1="104" y1="58" x2="132" y2="58" className={accent} />
          <path d="M148 48 H172 V24 H192" fill="none" className={`${line} animate-dash`} />
          <path d="M148 48 H192" fill="none" className={`${line} animate-dash`} />
          <path d="M148 48 H172 V72 H192" fill="none" className={`${line} animate-dash`} />
          <rect x="192" y="14" width="32" height="20" rx="5" className={box} />
          <rect x="192" y="38" width="32" height="20" rx="5" className={box} />
          <rect x="192" y="62" width="32" height="20" rx="5" className={box} />
        </>
      )}
    </svg>
  );
}

export function Work() {
  return (
    <section id={SECTION_IDS.work} className="section-space scroll-mt-24">
      <Container>
        <SectionHeader
          label="Selected work"
          title="Representative systems we design and build."
          description="Anonymised engagements that show the shape of the work. Detailed case studies are shared on request."
          split
        />
        <RevealGroup as="ul" className="mt-16 grid gap-4 md:grid-cols-3 md:gap-5">
          {workItems.map((item, i) => (
            <RevealItem
              key={item.title}
              as="li"
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[3px] hover:shadow-float motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="border-b border-line bg-canvas px-6 pb-4 pt-6">
                <WorkGlyph variant={i} />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-title text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-canvas px-3 py-1 text-[13px] font-medium text-ink/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.1}>
          <p className="mt-6 text-[13px] text-muted">
            Project examples are generalised and anonymised. No client names, metrics or logos are shown without
            permission.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
