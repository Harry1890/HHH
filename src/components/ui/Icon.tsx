import {
  Bot,
  Boxes,
  Code2,
  Compass,
  Database,
  Headset,
  Layers,
  Rocket,
  Search,
  Settings2,
  Sparkles,
  Workflow,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconName } from "@/types/site";

const icons: Record<IconName, ComponentType<LucideProps>> = {
  bot: Bot,
  sparkles: Sparkles,
  workflow: Workflow,
  layers: Layers,
  code: Code2,
  compass: Compass,
  database: Database,
  headset: Headset,
  settings: Settings2,
  search: Search,
  boxes: Boxes,
  rocket: Rocket,
};

interface IconProps extends LucideProps {
  name: IconName;
}

/** Resolve a data-driven icon name to its Lucide component. */
export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden strokeWidth={1.6} {...props} />;
}
