import type {
  CapabilityGroup,
  Differentiator,
  EngagementModel,
  FAQItem,
  FooterColumn,
  JobPosting,
  NavItem,
  ProcessStep,
  Region,
  Service,
  UseCase,
  WorkItem,
} from "@/types/site";

/**
 * Central site configuration.
 *
 * Every piece of business identity (name, email, URLs) lives here and is
 * imported wherever it is needed. Do not hardcode these values in components.
 */
export const siteConfig = {
  companyName: "Orbion",

  tagline: "AI engineering for companies worldwide.",

  headline: "We build intelligent systems for companies around the world.",

  description:
    "We help ambitious companies design, build and scale AI products, agent systems and modern software from strategy to production.",

  seoTitle: "Global AI Engineering Agency",
  seoDescription:
    "We design and build AI agents, intelligent products, automation systems, AI platforms and modern software for companies worldwide.",

  // Production domain — used for canonical URLs, OpenGraph/Twitter tags and the sitemap.
  siteUrl: "https://orbion.bond",

  // Used for every mailto link, the contact form and the footer.
  contactEmail: "jimmy@orbion.bond",

  // Headquarters city. Shown on the Careers page and in structured data.
  headquarters: "Huntsville, Alabama",

  // Shown on the Careers page.
  coFounder: "Jimmy Smith",

  // Calendly scheduling link. Every "Book a Call" CTA launches this URL (embedded on desktop, new tab on phones).
  // The owner connects Google Calendar inside Calendly; the site never talks to Google directly.
  calendlyUrl: "https://calendly.com/alverix-dev0220/30min",

  locationMessage: "Available for global remote engagements.",
  trustLine: "Working with teams across the US, Europe and beyond.",

  social: {
    linkedin: "",
  },
} as const;

// Home-page-relative ("/#…") so these still resolve correctly from other routes (e.g. /careers).
export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
];

export const tickerItems = [
  "AI Agents",
  "Applied AI",
  "Automation",
  "AI Platforms",
  "Global Delivery",
  "Cloud Systems",
  "Product Engineering",
  "AI Strategy",
];

export const services: Service[] = [
  {
    id: "ai-agent-systems",
    title: "AI Agent Systems",
    description:
      "Design and build production AI agents that reason, retrieve information, use tools and complete complex workflows.",
    icon: "bot",
    capabilities: [
      "Agent orchestration",
      "Multi-agent systems",
      "Tool calling",
      "Human-in-the-loop",
      "MCP integrations",
      "Agent evaluation",
    ],
  },
  {
    id: "applied-ai-products",
    title: "Applied AI Products",
    description:
      "Turn modern AI capabilities into useful products, copilots, search experiences and intelligent applications.",
    icon: "sparkles",
    capabilities: [
      "LLM applications",
      "AI copilots",
      "AI search",
      "Document intelligence",
      "Knowledge assistants",
      "Recommendation systems",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automate research, operations, support and internal workflows using AI combined with reliable software systems.",
    icon: "workflow",
    capabilities: [
      "Operations automation",
      "Support automation",
      "Research automation",
      "Document processing",
      "Data extraction",
      "Decision workflows",
    ],
  },
  {
    id: "ai-platforms",
    title: "AI Platforms",
    description:
      "Build shared infrastructure for models, retrieval, evaluation, observability and agent execution.",
    icon: "layers",
    capabilities: [
      "Model gateways & routing",
      "RAG infrastructure",
      "Evaluation systems",
      "Tracing & observability",
      "Guardrails",
      "Developer SDKs",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Build the applications, APIs, cloud services and platforms required around the AI layer.",
    icon: "code",
    capabilities: [
      "SaaS & web applications",
      "APIs & backend platforms",
      "Distributed systems",
      "Cloud infrastructure",
      "Data platforms",
      "Third-party integrations",
    ],
  },
  {
    id: "ai-strategy",
    title: "AI Strategy",
    description:
      "Define what to build, what to buy, how to architect the system and how to move from experiment to production.",
    icon: "compass",
    capabilities: [
      "Opportunity assessment",
      "Technical discovery",
      "Architecture design",
      "Build-vs-buy analysis",
      "AI roadmaps",
      "Production readiness",
    ],
  },
];

export const useCases: UseCase[] = [
  {
    title: "Enterprise Knowledge",
    description:
      "Connect internal knowledge, documents and data to secure AI assistants and agent workflows.",
    icon: "database",
  },
  {
    title: "Customer Experience",
    description:
      "Build intelligent support, search and conversational experiences for customers.",
    icon: "headset",
  },
  {
    title: "Operations",
    description:
      "Automate repetitive workflows across internal teams and operational systems.",
    icon: "settings",
  },
  {
    title: "Research & Intelligence",
    description:
      "Build AI systems that collect, analyze, synthesize and act on large amounts of information.",
    icon: "search",
  },
  {
    title: "Developer Platforms",
    description:
      "Create shared AI infrastructure that multiple product and engineering teams can use.",
    icon: "boxes",
  },
  {
    title: "AI-Native Products",
    description:
      "Launch new products whose core experience depends on modern AI models and agent systems.",
    icon: "rocket",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business problem, users, workflows, existing systems and constraints.",
    outputs: ["Problem definition", "Success criteria", "System inventory", "Risk map"],
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Define the technical approach, system boundaries, data flow, models, integrations and production architecture.",
    outputs: ["Architecture design", "Model & tooling selection", "Data flow", "Delivery plan"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the product using production-quality software engineering practices.",
    outputs: ["Working software", "Evaluation suites", "Observability", "Documentation"],
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Deploy, observe, evaluate and continuously improve the system based on real-world usage.",
    outputs: ["Production deployment", "Monitoring", "Evaluation loops", "Iteration roadmap"],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Agent Systems",
    items: [
      "Agent orchestration",
      "Stateful workflows",
      "Tool calling",
      "Multi-agent systems",
      "Human-in-the-loop",
      "MCP integrations",
      "Structured outputs",
      "Agent memory",
    ],
  },
  {
    title: "Applied AI",
    items: [
      "LLM applications",
      "RAG",
      "Embeddings",
      "Vector search",
      "Hybrid retrieval",
      "Reranking",
      "AI search",
      "Document intelligence",
    ],
  },
  {
    title: "AI Platform",
    items: [
      "Model routing",
      "LLM gateways",
      "Evaluation systems",
      "Observability",
      "Tracing",
      "Prompt management",
      "AI reliability",
      "Developer SDKs",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "APIs",
      "Backend systems",
      "Distributed systems",
      "Event-driven systems",
      "Data platforms",
      "Cloud infrastructure",
      "Internal tools",
      "Web applications",
    ],
  },
  {
    title: "Cloud & Production",
    items: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "CI/CD",
      "OpenTelemetry",
    ],
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Senior Engineering",
    description:
      "Architecture and implementation are approached with production reliability and long-term maintainability in mind.",
  },
  {
    title: "AI + Software",
    description:
      "We combine AI capabilities with the software engineering required to make them useful in real products.",
  },
  {
    title: "Business-Aware Architecture",
    description:
      "Technology decisions are guided by business constraints, security, cost, speed and future flexibility.",
  },
  {
    title: "Global Collaboration",
    description:
      "Structured communication and async-friendly workflows make distributed international collaboration practical.",
  },
];

export const workItems: WorkItem[] = [
  {
    title: "Enterprise Knowledge Agent",
    description:
      "A permission-aware AI system designed to retrieve internal knowledge and support complex employee workflows.",
    tags: ["RAG", "Agent Systems", "Enterprise Search", "Access Control"],
  },
  {
    title: "AI Operations Platform",
    description:
      "A multi-step automation platform designed to coordinate research, decision-making and operational actions.",
    tags: ["Agents", "Automation", "APIs", "Observability"],
  },
  {
    title: "Shared AI Developer Platform",
    description:
      "A reusable internal platform for model access, retrieval, evaluation and agent orchestration.",
    tags: ["AI Platform", "Evaluation", "Model Routing", "Developer Infrastructure"],
  },
];

export const regions: Region[] = [
  { name: "North America", detail: "Overlap with US and Canadian working hours." },
  { name: "Europe", detail: "Overlap with UK and Central European working hours." },
  { name: "Asia-Pacific", detail: "Async-first collaboration with scheduled overlap." },
  { name: "Remote-first", detail: "Distributed delivery with clear technical ownership." },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Project Delivery",
    description:
      "A defined product, platform or AI system delivered from discovery through implementation and launch.",
  },
  {
    title: "Embedded Engineering",
    description:
      "Senior AI and software engineers work directly alongside the client's internal product and engineering teams.",
  },
  {
    title: "Technical Advisory",
    description:
      "Architecture, AI strategy and technical decision support for teams that already have implementation capacity.",
  },
  {
    title: "Prototype to Production",
    description:
      "Take an existing AI prototype and rebuild the architecture, evaluation and infrastructure required for production.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What types of AI projects do you take on?",
    answer:
      "We focus on AI agent systems, applied AI products, AI automation, AI platform infrastructure and the custom software around them. Typical projects range from a focused proof of concept to a multi-quarter production platform. We also take on strategy and architecture engagements for teams that are deciding what to build.",
  },
  {
    question: "Do you work with companies outside the United States?",
    answer:
      "Yes. We work with clients across North America, Europe, Asia-Pacific and other regions as a remote-first team. Engagements are structured around clear ownership, written communication and scheduled overlap so that time zones do not slow delivery down.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Yes. Embedded engineering is one of our standard engagement models. We integrate with your repositories, tooling, review process and rituals, and we document decisions so your team owns the system after we leave.",
  },
  {
    question: "Can you build an AI proof of concept?",
    answer:
      "Yes. A proof of concept is often the right first step. We scope it around a concrete question, define what success looks like up front, and build it in a way that can be carried forward into production rather than thrown away.",
  },
  {
    question: "Can you turn an existing prototype into a production system?",
    answer:
      "Yes. This is one of the most common requests we receive. We assess the prototype, then rebuild the architecture, evaluation, observability, security and infrastructure required to run it reliably at scale.",
  },
  {
    question: "Do you build custom AI agents?",
    answer:
      "Yes. We design and build agents that plan, retrieve context, call tools and APIs, maintain state and hand off to humans when needed. We pay particular attention to evaluation, tracing and guardrails so that agents behave predictably in production.",
  },
  {
    question: "Do you provide AI strategy and architecture consulting?",
    answer:
      "Yes. We help teams assess opportunities, choose between building and buying, select models and infrastructure, and define a roadmap from experiment to production. Advisory work can stand alone or lead into implementation.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "Most projects start with a short conversation about your goals and constraints, followed by a discovery phase. Discovery produces a clear problem definition, architecture direction and delivery plan before any significant build work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A focused proof of concept can take a few weeks. Production systems typically run over several months and are delivered in increments so that value is visible early and the plan can adapt to what we learn.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer ongoing engineering, monitoring, evaluation and improvement after launch. Many clients continue with an embedded or advisory arrangement so the system keeps improving as usage and models evolve.",
  },
];

export const openRoles: JobPosting[] = [
  {
    title: "AI Engineer",
    location: `${siteConfig.headquarters} (Remote-friendly)`,
    type: "Full-time",
    department: "Engineering",
    summary:
      "Design and build the agent systems, retrieval pipelines and production infrastructure behind our clients' AI products — from architecture through deployment.",
    responsibilities: [
      "Design and build AI agent systems, RAG pipelines and applied AI products for clients",
      "Take systems from prototype to production: evaluation, observability, guardrails and reliability",
      "Work directly with clients' engineering teams to integrate with their existing codebase and infrastructure",
      "Contribute to architecture decisions across models, retrieval, tooling and cloud infrastructure",
    ],
    requirements: [
      "Experience shipping production software, ideally including LLM-based systems or agents",
      "Strong grasp of API design, distributed systems and cloud infrastructure (AWS, Docker, Kubernetes)",
      "Comfortable owning a problem from discovery through production, not just a notebook prototype",
      "Clear written communication — much of our collaboration with clients and each other happens async",
    ],
  },
];

export const projectTypes = [
  "AI Agent System",
  "Applied AI Product",
  "AI Automation",
  "AI Platform",
  "Custom Software",
  "AI Strategy / Architecture",
  "Other",
] as const;

export type ProjectType = (typeof projectTypes)[number];

// Home-page-relative ("/#…") so these still resolve correctly from other routes (e.g. /careers).
export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "AI Agent Systems", href: "/#services" },
      { label: "Applied AI", href: "/#services" },
      { label: "Automation", href: "/#services" },
      { label: "AI Platforms", href: "/#services" },
      { label: "Software Engineering", href: "/#services" },
      { label: "AI Strategy", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Work", href: "/#work" },
      { label: "Process", href: "/#process" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

// TODO: point these at real pages (e.g. /privacy, /terms) once they exist.
export const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];
