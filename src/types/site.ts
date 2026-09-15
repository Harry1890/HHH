export type IconName =
  | "bot"
  | "sparkles"
  | "workflow"
  | "layers"
  | "code"
  | "compass"
  | "database"
  | "headset"
  | "settings"
  | "search"
  | "boxes"
  | "rocket";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  capabilities: string[];
}

export interface UseCase {
  title: string;
  description: string;
  icon: IconName;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  outputs: string[];
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface WorkItem {
  title: string;
  description: string;
  tags: string[];
}

export interface Region {
  name: string;
  detail: string;
}

export interface EngagementModel {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface JobPosting {
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}
