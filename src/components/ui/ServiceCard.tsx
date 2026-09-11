import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/types/site";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-line-strong hover:shadow-float motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8">
      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-2xl border border-line bg-canvas text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent-soft group-hover:text-accent">
          <Icon name={service.icon} className="size-5" />
        </span>
        <span className="text-eyebrow text-muted/70">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="text-title mt-8 text-ink">{service.title}</h3>
      <p className="mt-3 text-[16px] leading-relaxed text-muted">{service.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
        {service.capabilities.map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-line bg-canvas px-3 py-1 text-[13px] font-medium text-ink/80"
          >
            {capability}
          </li>
        ))}
      </ul>
    </article>
  );
}
