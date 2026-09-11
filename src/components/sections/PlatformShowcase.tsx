import {
  Activity,
  ArrowRight,
  Bot,
  Brain,
  Database,
  Gauge,
  Rocket,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sidebar: { label: string; icon: ComponentType<LucideProps>; active?: boolean }[] = [
  { label: "Agents", icon: Bot, active: true },
  { label: "Models", icon: Brain },
  { label: "Knowledge", icon: Database },
  { label: "Tools", icon: Wrench },
  { label: "Evaluations", icon: Gauge },
  { label: "Traces", icon: Activity },
  { label: "Deployments", icon: Rocket },
];

const metrics = [
  { label: "Status", value: "Healthy", tone: "good" },
  { label: "Latency", value: "1.4s" },
  { label: "Model", value: "Auto Route" },
  { label: "Evaluation", value: "Passed", tone: "good" },
  { label: "Trace", value: "#A93F1", mono: true },
] as const;

const pipeline = [
  { name: "Customer Request", detail: "chat · api" },
  { name: "Planner", detail: "3 steps" },
  { name: "Retrieve Context", detail: "12 chunks" },
  { name: "Select Model", detail: "auto route" },
  { name: "Execute Tools", detail: "2 calls" },
  { name: "Evaluate", detail: "passed" },
  { name: "Return Result", detail: "1.4s" },
];

/** Demo spans for the trace panel (ms). Purely illustrative. */
const spans = [
  { name: "planner", start: 0, duration: 210 },
  { name: "retrieve_context", start: 210, duration: 320 },
  { name: "select_model", start: 530, duration: 30 },
  { name: "model.generate", start: 560, duration: 620 },
  { name: "tools.execute", start: 1180, duration: 150 },
  { name: "evaluate", start: 1330, duration: 70 },
];
const TOTAL_MS = 1400;

type Delay = { "--d": string } & CSSProperties;
const delay = (seconds: number): Delay => ({ "--d": `${seconds}s` });

function Dashboard() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-canvas shadow-float">
      <div className="grid grid-cols-1 lg:grid-cols-[224px_1fr]">
        <aside className="min-w-0 border-b border-line bg-surface lg:border-b-0 lg:border-r">
          <div className="hidden items-center gap-2.5 px-5 py-5 lg:flex">
            <span aria-hidden className="size-6 rounded-md bg-ink" />
            <span className="text-[14px] font-medium text-ink">AI Platform</span>
          </div>
          <ul className="flex gap-1 overflow-x-auto px-3 py-3 lg:flex-col lg:px-3 lg:py-0 lg:pb-5" aria-label="Platform navigation">
            {sidebar.map((item) => (
              <li key={item.label} className="shrink-0">
                <span
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3 py-2 text-[14px]",
                    item.active ? "bg-canvas font-medium text-ink" : "text-muted",
                  )}
                >
                  <item.icon className="size-4" strokeWidth={1.6} aria-hidden />
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 p-5 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[12px] text-muted">
              Agents <span aria-hidden>/</span> <span className="text-ink">support-agent</span>
            </p>
            <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
              run · 2m ago
            </span>
          </div>

          <dl className="mt-5 flex flex-wrap gap-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-3 pr-3.5 text-[13px]"
              >
                <dt className="text-muted">{m.label}</dt>
                <dd className={cn("flex items-center gap-1.5 font-medium text-ink", "mono" in m && m.mono && "font-mono")}>
                  {"tone" in m && m.tone === "good" && (
                    <span aria-hidden className="animate-status size-1.5 rounded-full bg-accent-2" />
                  )}
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          <ol className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-3" aria-label="Request pipeline">
            {pipeline.map((step, i) => (
              <li
                key={step.name}
                style={delay(0.3 + i * 0.8)}
                className="animate-node relative flex flex-col gap-1 rounded-2xl border border-line bg-surface px-3.5 py-3"
              >
                <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[13px] font-medium leading-tight text-ink">{step.name}</span>
                <span className="font-mono text-[11px] text-muted">{step.detail}</span>
                {i < pipeline.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-[11px] top-1/2 hidden size-3 -translate-y-1/2 text-muted/60 lg:block"
                  />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-line bg-surface p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-ink">Trace #A93F1</p>
              <p className="font-mono text-[11px] text-muted">total 1.40s</p>
            </div>
            <ul className="mt-4 space-y-2" aria-label="Trace spans">
              {spans.map((span) => (
                <li key={span.name} className="grid grid-cols-[112px_1fr_48px] items-center gap-3 sm:grid-cols-[140px_1fr_56px]">
                  <span className="truncate font-mono text-[11px] text-muted">{span.name}</span>
                  <span className="relative h-2 rounded-full bg-canvas">
                    <span
                      className={cn(
                        "absolute inset-y-0 rounded-full",
                        span.name === "model.generate" ? "bg-accent" : "bg-ink/25",
                      )}
                      style={{
                        left: `${(span.start / TOTAL_MS) * 100}%`,
                        width: `${Math.max((span.duration / TOTAL_MS) * 100, 1.5)}%`,
                      }}
                    />
                  </span>
                  <span className="text-right font-mono text-[11px] text-muted">{span.duration}ms</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlatformShowcase() {
  return (
    <section id={SECTION_IDS.platform} className="section-space scroll-mt-24 border-y border-line bg-surface">
      <Container>
        <SectionHeader
          label="Featured platform"
          title="The intelligence layer behind modern products."
          description="Agents, models, knowledge, tools, evaluation and tracing — designed as one system so every request is observable, testable and safe to ship."
          split
        />
        <Reveal className="mt-16" amount={0.1}>
          <Dashboard />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-[13px] text-muted">
            Illustrative interface. Values shown are demo data, not client metrics.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
