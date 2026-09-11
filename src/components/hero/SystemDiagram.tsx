import {
  Brain,
  Cable,
  Database,
  Gauge,
  HardDrive,
  Rocket,
  ShieldCheck,
  User,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated architecture of a production AI system. A request pulse travels
 * the spine every 8 seconds and each node lights up as it arrives — timed by
 * the `--d` custom property so the sequence costs no JavaScript.
 */

type Delay = { "--d": string } & CSSProperties;
const delay = (seconds: number): Delay => ({ "--d": `${seconds}s` });

function Node({
  label,
  detail,
  icon: IconComponent,
  at,
  className,
}: {
  label: string;
  detail?: string;
  icon?: ComponentType<LucideProps>;
  at: number;
  className?: string;
}) {
  return (
    <div
      style={delay(at)}
      className={cn(
        "animate-node flex w-full max-w-[280px] items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-soft",
        className,
      )}
    >
      {IconComponent && (
        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink">
          <IconComponent className="size-4" strokeWidth={1.6} aria-hidden />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-[14px] font-medium leading-tight text-ink">{label}</span>
        {detail && <span className="block truncate font-mono text-[11px] text-muted">{detail}</span>}
      </span>
    </div>
  );
}

function Connector({ at, label }: { at: number; label?: string }) {
  return (
    <div className="relative flex h-9 items-center justify-center" aria-hidden>
      <span className="relative block h-full w-px bg-line-strong">
        <span
          style={delay(at)}
          className="animate-pulse-travel absolute left-1/2 size-[7px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(92,124,255,0.18)]"
        />
      </span>
      {label && (
        <span className="absolute left-1/2 ml-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted/70">
          {label}
        </span>
      )}
    </div>
  );
}

function Chip({
  label,
  icon: IconComponent,
  at,
}: {
  label: string;
  icon: ComponentType<LucideProps>;
  at: number;
}) {
  return (
    <li
      style={delay(at)}
      className="animate-node flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink"
    >
      <IconComponent className="size-3.5 text-muted" strokeWidth={1.6} aria-hidden />
      {label}
    </li>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(92,124,255,0.12),transparent_70%)]"
      />
      <div className="rounded-[28px] border border-line bg-surface/70 p-4 shadow-float backdrop-blur-sm sm:p-6">
        {children}
      </div>
    </div>
  );
}

export function SystemDiagram() {
  return (
    <Frame>
      <figure className="m-0">
        <figcaption className="flex items-center justify-between px-1 pb-5">
          <span className="text-eyebrow text-muted">System overview</span>
          <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-ink">
            <span className="animate-status size-1.5 rounded-full bg-accent-2" aria-hidden />
            Healthy
          </span>
        </figcaption>

        <div className="flex flex-col items-center" role="list" aria-label="Request flow through the AI system">
          <div role="listitem" className="w-full max-w-[280px]">
            <Node label="User" detail="request · chat / api" icon={User} at={0} />
          </div>
          <Connector at={0.4} />
          <div role="listitem" className="w-full max-w-[280px]">
            <Node label="AI Application" detail="product surface" icon={Cable} at={1.0} />
          </div>
          <Connector at={1.4} />

          <div
            role="listitem"
            style={delay(2.0)}
            className="animate-node w-full rounded-[22px] border border-line bg-canvas p-3 sm:p-4"
          >
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="flex items-center gap-2 text-[14px] font-medium text-ink">
                <Brain className="size-4 text-accent" strokeWidth={1.6} aria-hidden />
                Agent Runtime
              </span>
              <span className="hidden font-mono text-[11px] text-muted sm:inline">planner · router · state</span>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label="Runtime components">
              <Chip label="Models" icon={Brain} at={2.3} />
              <Chip label="Knowledge" icon={Database} at={2.6} />
              <Chip label="Tools" icon={Wrench} at={2.9} />
              <Chip label="APIs" icon={Cable} at={3.2} />
              <Chip label="Memory" icon={HardDrive} at={3.5} />
              <Chip label="Human Approval" icon={ShieldCheck} at={3.8} />
            </ul>
          </div>

          <Connector at={4.4} />
          <div role="listitem" className="w-full max-w-[280px]">
            <Node label="Evaluation" detail="quality · safety · cost" icon={Gauge} at={5.0} />
          </div>
          <Connector at={5.4} />
          <div role="listitem" className="w-full max-w-[280px]">
            <Node label="Production" detail="tracing · monitoring" icon={Rocket} at={6.0} />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line px-1 pt-4 font-mono text-[11px] text-muted">
          <span>Model Router</span>
          <span aria-hidden>·</span>
          <span>Knowledge Layer</span>
          <span aria-hidden>·</span>
          <span>Tool Gateway</span>
          <span aria-hidden>·</span>
          <span>Tracing</span>
        </div>
      </figure>
    </Frame>
  );
}
