# Global AI Agency Website — Design & Implementation Specification

## 1. Project Overview

Build a premium, modern, global-facing website for an AI-focused technology agency.

The agency should be positioned as an international partner for companies that want to design, build, modernize, or scale products and systems using artificial intelligence.

The company is not a local freelancer studio, personal portfolio, or small development shop.

The website should communicate:

- Global reach
- Senior technical capability
- AI expertise
- Product and engineering credibility
- Strategic thinking
- Enterprise readiness
- Speed without sacrificing quality
- Long-term partnership potential

The primary business model is an AI and software engineering agency.

The website should be designed to attract:

- Startups
- Scale-ups
- Mid-market companies
- Enterprise teams
- Product organizations
- Innovation teams
- Founders
- CTOs
- Heads of Engineering
- Heads of AI
- Digital transformation leaders

The agency should feel capable of working with clients in the United States, Europe, Asia-Pacific, and other international markets.

---

## 2. Core Positioning

The agency specializes primarily in AI-related engineering and consulting.

Primary positioning:

> We design and build intelligent software systems for companies worldwide.

The company should be presented as a combination of:

- AI engineering agency
- Agent systems studio
- Applied AI consultancy
- Software architecture partner
- Product engineering team
- AI platform engineering partner

The company should not look like a generic outsourcing company.

It should look like a high-end technical agency capable of taking a project from strategy and architecture through implementation and production launch.

---

## 3. Primary Service Categories

The website should organize services around a small number of strong categories.

### AI Agent Systems

Design and build production AI agents that can reason, retrieve information, use tools, interact with APIs, and complete multi-step workflows.

Possible capabilities:

- AI agents
- Agent orchestration
- Multi-agent systems
- Stateful workflows
- Tool calling
- Human-in-the-loop workflows
- Model Context Protocol integrations
- Structured outputs
- Agent memory
- Agent evaluation
- Agent observability

### Applied AI Products

Build customer-facing and internal products powered by modern AI models.

Possible capabilities:

- LLM applications
- AI copilots
- AI search
- AI assistants
- Generative AI products
- Intelligent workflow applications
- Document intelligence
- Knowledge assistants
- Recommendation systems
- AI-powered internal tools

### AI Automation

Automate repetitive business processes using AI and software systems.

Possible capabilities:

- Operations automation
- Customer support automation
- Research automation
- Sales workflow automation
- Internal process automation
- Document processing
- Data extraction
- AI-assisted decision workflows
- Back-office automation

### AI Platforms & Infrastructure

Build the internal systems required to operate AI safely and reliably at scale.

Possible capabilities:

- AI platform architecture
- Model gateways
- Model routing
- LLM infrastructure
- Evaluation systems
- RAG infrastructure
- Vector search
- Retrieval systems
- Observability
- AI tracing
- Model access layers
- Developer SDKs
- Guardrails
- AI reliability systems

### Custom Software Engineering

Build the software surrounding the AI system.

Possible capabilities:

- SaaS applications
- Web applications
- APIs
- Backend platforms
- Distributed systems
- Cloud infrastructure
- Internal tools
- Data platforms
- Third-party integrations

### AI Strategy & Architecture

Help companies determine what they should build and how they should build it.

Possible capabilities:

- AI opportunity assessment
- Technical discovery
- Architecture design
- Build-vs-buy analysis
- AI roadmap creation
- Technology selection
- Platform strategy
- Proof-of-concept planning
- Production readiness assessment

---

## 4. Brand Direction

The brand should feel:

- Global
- Sophisticated
- Technical
- Calm
- Modern
- Intelligent
- Premium
- Trustworthy

Avoid the visual language of:

- Crypto companies
- Cyberpunk projects
- Generic AI startups
- Freelancer portfolios
- Low-cost outsourcing agencies
- Template-based SaaS landing pages

The visitor should feel:

> This is a serious AI engineering company that can handle complex work.

---

## 5. Visual Inspiration

Use the structural sophistication of:

- IONYX-style agency storytelling
- OpenAI simplicity
- Linear precision
- Vercel product polish
- Anthropic restraint
- Modern premium consulting websites

Reference website:

`https://ionyx.framer.website/#build`

Use it only as structural and visual inspiration.

Do not copy:

- Text
- Branding
- Logos
- Images
- Illustrations
- Exact layouts
- Exact animation sequences

The final site should feel brighter, cleaner, and more technical.

---

## 6. Visual Style

Primary background:

```css
#F7F7F5
```

Main surface:

```css
#FFFFFF
```

Primary text:

```css
#111111
```

Secondary text:

```css
#666660
```

Borders:

```css
rgba(17, 17, 17, 0.10)
```

Primary accent:

```css
#5C7CFF
```

Secondary accent:

```css
#6EB89B
```

Use accents sparingly.

The website should remain primarily neutral.

### Style Characteristics

Use:

- Large editorial headings
- Strong whitespace
- Clean grids
- Rounded cards
- Thin borders
- Soft shadows
- Subtle gradients
- High-quality motion
- Minimal icons
- Refined interactive states

Avoid:

- Excessive gradients
- Neon colors
- Heavy glow effects
- Large amounts of black
- Fake 3D AI robots
- Stock photography
- Overly complex animations

---

## 7. Typography

Preferred font:

- Geist

Alternatives:

- Inter
- Manrope
- Satoshi

Hero typography:

```css
font-size: clamp(64px, 7vw, 108px);
line-height: 0.95;
letter-spacing: -0.055em;
font-weight: 500;
```

Section headings:

```css
font-size: clamp(44px, 5vw, 76px);
line-height: 1;
letter-spacing: -0.045em;
font-weight: 500;
```

Body:

```css
font-size: 17px;
line-height: 1.6;
```

---

## 8. Recommended Technology Stack

Use:

```text
Next.js
React
TypeScript
Tailwind CSS
Framer Motion
Lucide React
```

Deployment target:

```text
Vercel
```

Version 1 should remain frontend-first.

Do not build an unnecessary traditional backend.

However, the architecture must allow future integrations.

---

## 9. Website Structure

Create a single high-end marketing website.

Recommended sections:

```text
01. Navigation
02. Hero
03. Global Trust / Capability Strip
04. Services
05. Featured AI Systems Visual
06. Industries / Use Cases
07. Process
08. Technical Capabilities
09. Why Work With Us
10. Selected Work
11. Global Delivery Model
12. About
13. FAQ
14. Contact
15. Book a Call
16. Footer
```

---

# 10. Navigation

Desktop structure:

```text
[LOGO]

Services
Solutions
Process
Work
About

Contact

[ Book a Call → ]
```

Use a floating sticky navigation.

Style:

- Max width: 1280px
- Rounded corners
- Thin border
- Transparent at the top
- Light translucent background after scroll
- Backdrop blur
- Minimal shadow

Mobile:

Use a clean full-screen or dropdown menu.

---

# 11. Hero Section

The hero should immediately communicate that this is a global AI agency.

Possible small label:

```text
GLOBAL AI ENGINEERING AGENCY
```

Recommended headline direction:

```text
We build intelligent
systems for companies
around the world.
```

Alternative:

```text
AI systems built
for the real world.
```

Supporting copy:

```text
We help ambitious companies design, build and scale
AI products, agent systems and modern software
from strategy to production.
```

Primary CTA:

```text
Start a Project →
```

Secondary CTA:

```text
Book a Call
```

Small trust line:

```text
Working with teams across the US, Europe and beyond.
```

Do not overstate specific geographic coverage unless confirmed later.

---

# 12. Hero Visual

Create a premium interactive visualization of an AI system.

Concept:

```text
User
 ↓
AI Application
 ↓
Agent Runtime
 ├── Models
 ├── Knowledge
 ├── Tools
 ├── APIs
 ├── Memory
 └── Human Approval
 ↓
Evaluation
 ↓
Production
```

Represent this using elegant cards and animated connections.

Possible labels:

```text
Agent Runtime
Model Router
Knowledge Layer
Tool Gateway
Evaluation
Tracing
Human Approval
```

Animation should be subtle.

A request pulse can occasionally move through the system.

Do not use a generic glowing AI brain.

---

# 13. Global Capability Strip

Create a slow horizontal ticker.

Example:

```text
AI AGENTS ✦ APPLIED AI ✦ AUTOMATION ✦ AI PLATFORMS ✦ CLOUD SYSTEMS ✦ PRODUCT ENGINEERING ✦
```

Add:

```text
GLOBAL DELIVERY
```

as one of the labels.

Respect `prefers-reduced-motion`.

---

# 14. Services Section

Section label:

```text
01 / SERVICES
```

Headline:

```text
From AI strategy
to production systems.
```

Create six premium cards.

### AI Agent Systems

```text
Design and build production AI agents that reason,
retrieve information, use tools and complete complex workflows.
```

### Applied AI Products

```text
Turn modern AI capabilities into useful products,
copilots, search experiences and intelligent applications.
```

### AI Automation

```text
Automate research, operations, support and internal
workflows using AI combined with reliable software systems.
```

### AI Platforms

```text
Build shared infrastructure for models, retrieval,
evaluation, observability and agent execution.
```

### Custom Software

```text
Build the applications, APIs, cloud services and
platforms required around the AI layer.
```

### AI Strategy

```text
Define what to build, what to buy, how to architect
the system and how to move from experiment to production.
```

---

# 15. Featured AI Platform Section

Create one major visual section that demonstrates technical depth.

Suggested heading:

```text
The intelligence layer
behind modern products.
```

Build a realistic AI platform dashboard mockup.

Possible sidebar:

```text
Agents
Models
Knowledge
Tools
Evaluations
Traces
Deployments
```

Main visual:

```text
Customer Request
      ↓
Planner
      ↓
Retrieve Context
      ↓
Select Model
      ↓
Execute Tools
      ↓
Evaluate
      ↓
Return Result
```

Additional UI details:

```text
Status: Healthy
Latency: 1.4s
Model: Auto Route
Evaluation: Passed
Trace: #A93F1
```

These are visual demo values only.

Do not imply they are real client metrics.

---

# 16. Industries / Use Cases

The agency should not look limited to one vertical.

Possible section title:

```text
AI systems for
real business problems.
```

Use-case categories:

### Enterprise Knowledge

```text
Connect internal knowledge, documents and data
to secure AI assistants and agent workflows.
```

### Customer Experience

```text
Build intelligent support, search and conversational
experiences for customers.
```

### Operations

```text
Automate repetitive workflows across internal teams
and operational systems.
```

### Research & Intelligence

```text
Build AI systems that collect, analyze, synthesize
and act on large amounts of information.
```

### Developer Platforms

```text
Create shared AI infrastructure that multiple
product and engineering teams can use.
```

### AI-Native Products

```text
Launch new products whose core experience depends
on modern AI models and agent systems.
```

---

# 17. Process Section

Section label:

```text
02 / HOW WE WORK
```

Headline:

```text
A clear path from
problem to production.
```

Use four stages.

## 01 — Discover

```text
Understand the business problem, users, workflows,
existing systems and constraints.
```

## 02 — Architect

```text
Define the technical approach, system boundaries,
data flow, models, integrations and production architecture.
```

## 03 — Build

```text
Develop the product using production-quality
software engineering practices.
```

## 04 — Launch & Improve

```text
Deploy, observe, evaluate and continuously improve
the system based on real-world usage.
```

Desktop can use a sticky storytelling interaction.

Mobile should stack sections naturally.

---

# 18. Technical Capabilities

Heading:

```text
Engineering across
the full AI stack.
```

Create grouped capability columns.

## Agent Systems

```text
Agent orchestration
Stateful workflows
Tool calling
Multi-agent systems
Human-in-the-loop
MCP integrations
Structured outputs
Agent memory
```

## Applied AI

```text
LLM applications
RAG
Embeddings
Vector search
Hybrid retrieval
Reranking
AI search
Document intelligence
```

## AI Platform

```text
Model routing
LLM gateways
Evaluation systems
Observability
Tracing
Prompt management
AI reliability
Developer SDKs
```

## Software Engineering

```text
APIs
Backend systems
Distributed systems
Event-driven systems
Data platforms
Cloud infrastructure
Internal tools
Web applications
```

## Cloud & Production

```text
AWS
Kubernetes
Docker
Terraform
PostgreSQL
Redis
CI/CD
OpenTelemetry
```

---

# 19. Why Work With Us

Main message:

```text
Beyond the prototype.
Built for production.
```

Create four differentiators.

### Senior Engineering

```text
Architecture and implementation are approached
with production reliability and long-term maintainability in mind.
```

### AI + Software

```text
We combine AI capabilities with the software engineering
required to make them useful in real products.
```

### Business-Aware Architecture

```text
Technology decisions are guided by business constraints,
security, cost, speed and future flexibility.
```

### Global Collaboration

```text
Structured communication and async-friendly workflows
make distributed international collaboration practical.
```

---

# 20. Selected Work

Do not use fake brands.

Do not invent client testimonials.

Use anonymized or conceptual project examples until real case studies are available.

### Enterprise Knowledge Agent

```text
A permission-aware AI system designed to retrieve
internal knowledge and support complex employee workflows.
```

Tags:

```text
RAG
Agent Systems
Enterprise Search
Access Control
```

### AI Operations Platform

```text
A multi-step automation platform designed to coordinate
research, decision-making and operational actions.
```

Tags:

```text
Agents
Automation
APIs
Observability
```

### Shared AI Developer Platform

```text
A reusable internal platform for model access,
retrieval, evaluation and agent orchestration.
```

Tags:

```text
AI Platform
Evaluation
Model Routing
Developer Infrastructure
```

---

# 21. Global Delivery Section

This section is important because the company is positioned as a global agency.

Possible label:

```text
GLOBAL DELIVERY
```

Heading:

```text
Built to work
across borders.
```

Supporting copy:

```text
We work with distributed teams using clear technical ownership,
structured communication and modern async collaboration.
```

Possible visual:

```text
North America
Europe
Asia-Pacific
Remote-first
```

Do not imply legal entities or offices in locations unless they actually exist.

Use wording such as:

```text
Available for global remote engagements.
```

instead of:

```text
Offices worldwide.
```

unless real offices exist.

---

# 22. Engagement Models

Optional but recommended for an agency website.

Heading:

```text
Flexible ways to work together.
```

### Project Delivery

```text
A defined product, platform or AI system delivered
from discovery through implementation and launch.
```

### Embedded Engineering

```text
Senior AI and software engineers work directly
alongside the client's internal product and engineering teams.
```

### Technical Advisory

```text
Architecture, AI strategy and technical decision support
for teams that already have implementation capacity.
```

### Prototype to Production

```text
Take an existing AI prototype and rebuild the architecture,
evaluation and infrastructure required for production.
```

---

# 23. About Section

Keep the copy concise.

Suggested direction:

```text
AI is becoming part of the software stack.

The difficult part is no longer simply calling a model.
The difficult part is turning intelligence into reliable,
secure and useful production systems.

That is what we build.
```

Supporting line:

```text
AI engineering. Agent systems. Software architecture.
Built for companies operating globally.
```

---

# 24. FAQ

Recommended questions:

```text
What types of AI projects do you take on?

Do you work with companies outside the United States?

Can you work with our existing engineering team?

Can you build an AI proof of concept?

Can you turn an existing prototype into a production system?

Do you build custom AI agents?

Do you provide AI strategy and architecture consulting?

How do projects typically start?

How long does a project take?

Do you provide ongoing support after launch?
```

Use an accessible animated accordion.

---

# 25. Contact Section

Heading:

```text
Let's build something
intelligent.
```

Supporting copy:

```text
Tell us what you are building, what problem you are trying
to solve, and where you need help.
```

Fields:

```text
Name
Work Email
Company
Country / Region
Project Type
Project Details
```

Project Type options:

```text
AI Agent System
Applied AI Product
AI Automation
AI Platform
Custom Software
AI Strategy / Architecture
Other
```

CTA:

```text
Start a Conversation →
```

---

# 26. Contact Email Integration — Version 1

The site should remain frontend-first.

Create a central configuration file.

Example:

```ts
export const siteConfig = {
  companyName: "YOUR COMPANY",
  contactEmail: "YOUR_EMAIL_ADDRESS"
};
```

Use the email value everywhere.

For basic direct email links:

```tsx
<a href={`mailto:${siteConfig.contactEmail}`}>
  Contact Us
</a>
```

The contact form can initially generate a `mailto:` link containing:

```text
Name
Email
Company
Country
Project Type
Message
```

This keeps Version 1 backend-free.

Important:

A `mailto:` form depends on the user's configured email client.

Therefore, design the code so it can later be replaced by a proper serverless contact form.

---

# 27. Future Production Contact Form

Recommended future architecture:

```text
Visitor
  ↓
Website Form
  ↓
POST /api/contact
  ↓
Vercel Serverless Function
  ↓
Resend
  ↓
Agency Email
```

Possible alternatives:

```text
Formspree
EmailJS
Postmark
SendGrid
```

Preferred:

```text
Vercel + Resend
```

Never expose private email API credentials in frontend JavaScript.

---

# 28. Book a Call

Use Calendly as the scheduling system for Version 1.

The website should not build a custom calendar system.

The agency owner will connect Calendly to their Google Calendar.

The booking flow should be:

```text
Agency Website
      ↓
Book a Call
      ↓
Calendly
      ↓
Check Google Calendar availability
      ↓
Visitor selects an available time
      ↓
Booking is confirmed
      ↓
Event is added to Google Calendar
```

Calendly should handle:

- Calendar availability
- Time-zone conversion
- Available time slots
- Booking confirmation
- Google Calendar synchronization
- Meeting creation
- Rescheduling
- Cancellation

The website should only be responsible for launching the scheduling experience.

---

# 29. Calendly Integration

Store the Calendly scheduling URL in the central site configuration.

Example:

```ts
export const siteConfig = {
  companyName: "YOUR COMPANY NAME",
  contactEmail: "YOUR_EMAIL_ADDRESS",
  calendlyUrl: "https://calendly.com/YOUR-USERNAME/YOUR-EVENT"
};
```

Do not hardcode the Calendly URL across multiple components.

Every scheduling CTA must read from:

```ts
siteConfig.calendlyUrl
```

Examples of scheduling CTAs:

```text
Book a Call
Schedule a Call
Let's Talk
```

The primary website CTA should remain:

```text
Book a Call
```

---

# 30. Calendly Booking Experience

Preferred event name:

```text
Discovery Call
```

Recommended duration:

```text
30 minutes
```

Do not use:

```text
AI Project Consultation
```

as the default event name.

The website already communicates that the company is an AI agency, so the booking experience should remain broad, simple, and professional.

Preferred visitor experience:

```text
Website
   ↓
Book a Call
   ↓
Calendly scheduling interface
   ↓
Choose date
   ↓
Choose available time
   ↓
Enter contact details
   ↓
Confirm booking
```

### Preferred Desktop Behavior

Open Calendly in a modal or popup overlay using Calendly's official embed functionality.

The visitor should ideally remain on the agency website during scheduling.

### Preferred Mobile Behavior

Use the embedded scheduler if it works cleanly.

If the mobile experience is better in a separate page, open the Calendly scheduling URL in a new browser tab.

### Google Calendar

The agency owner should connect their Google Calendar directly inside Calendly.

The website itself should not connect directly to the Google Calendar API in Version 1.

Calendly should use the connected Google Calendar to:

- Detect busy periods
- Prevent double bookings
- Show only valid available times
- Add confirmed meetings to the correct calendar

If Google Meet is enabled through Calendly, Calendly may also create the meeting link automatically.

### Implementation Rule

Do not create:

```text
CalendarPicker
TimePicker
/api/calendar/availability
/api/calendar/book
Google OAuth logic
Google Calendar API logic
```

for Version 1.

Use Calendly instead.

This keeps the website simple, reliable, and frontend-focused.

# 31. Final CTA

Create a strong final conversion section.

Suggested copy:

```text
Have an AI project
worth building properly?
```

Supporting line:

```text
Let's turn the idea into a reliable production system.
```

Buttons:

```text
Start a Project →
Book a Call
```

Use a subtle radial gradient or large abstract AI-system background.

---

# 32. Footer

Suggested structure:

```text
[LOGO]

AI engineering for companies worldwide.

Services
AI Agent Systems
Applied AI
Automation
AI Platforms
Software Engineering
AI Strategy

Company
About
Work
Process
Contact

Connect
Email
LinkedIn

Available for global remote engagements.

© 2026 COMPANY NAME
Privacy
Terms
```

---

# 33. Component Architecture

Recommended folder structure:

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Container.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── CapabilityTicker.tsx
│   │   ├── Services.tsx
│   │   ├── PlatformShowcase.tsx
│   │   ├── UseCases.tsx
│   │   ├── Process.tsx
│   │   ├── Capabilities.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Work.tsx
│   │   ├── GlobalDelivery.tsx
│   │   ├── EngagementModels.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── booking/
│   │   └── CalendlyBooking.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── ServiceCard.tsx
│       ├── Accordion.tsx
│       ├── Reveal.tsx
│       └── Modal.tsx
│
├── data/
│   └── site.ts
│
├── lib/
│   ├── constants.ts
│   └── utils.ts
│
└── types/
    └── site.ts
```

---

# 34. Central Site Configuration

All important business information should live in one configuration object.

Example:

```ts
export const siteConfig = {
  companyName: "YOUR COMPANY NAME",

  tagline:
    "AI engineering for companies worldwide.",

  headline:
    "We build intelligent systems for companies around the world.",

  description:
    "We help ambitious companies design, build and scale AI products, agent systems and modern software from strategy to production.",

  contactEmail:
    "YOUR_EMAIL_ADDRESS",

  calendlyUrl:
    "https://calendly.com/YOUR-USERNAME/YOUR-EVENT",

  locationMessage:
    "Available for global remote engagements.",

  social: {
    linkedin: ""
  }
};
```

Do not hardcode company name, email, LinkedIn URL, or booking URL in multiple components.

---

# 35. Motion Design

Use Framer Motion.

Animations should feel refined.

Basic reveal:

```text
opacity: 0 → 1
translateY: 20px → 0
duration: 0.6–0.9 seconds
```

Use staggered children.

Cards:

```text
hover translateY: -3px
```

Buttons:

```text
arrow translateX: 4px
```

Platform visualization:

- subtle moving connection lines
- slow status pulses
- gentle card movement
- occasional request flow animation

Avoid:

- excessive bouncing
- extreme scaling
- full-screen transitions
- animation on every element

---

# 36. Responsive Design

Required widths:

```text
390 × 844
768 × 1024
1440 × 900
1920 × 1080
```

Breakpoints:

```text
Mobile: 320–767
Tablet: 768–1023
Desktop: 1024+
Large Desktop: 1440+
```

Mobile must be intentionally designed.

Do not simply shrink the desktop layout.

---

# 37. Layout

Main content width:

```css
max-width: 1280px;
margin: 0 auto;
```

Text width:

```css
max-width: 760px;
```

Horizontal padding:

```text
Desktop: 32–48px
Tablet: 24px
Mobile: 18–20px
```

Vertical section spacing:

```text
Desktop: 140–190px
Mobile: 90–110px
```

Whitespace should be treated as an important design element.

---

# 38. Accessibility

Implement:

```text
Semantic HTML
Keyboard navigation
Visible focus states
ARIA labels
Accessible forms
Color contrast
Reduced-motion support
Proper heading structure
Accessible modal behavior
```

Booking modal must support:

```text
ESC to close
Focus trapping
Keyboard navigation
```

---

# 39. Performance

Target:

```text
Lighthouse Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Use:

```text
next/image
optimized fonts
lazy loading
minimal client components
dynamic imports when useful
```

Avoid unnecessary dependencies.

---

# 40. SEO

Suggested metadata:

```text
Title:
COMPANY NAME — Global AI Engineering Agency

Description:
We design and build AI agents, intelligent products,
automation systems, AI platforms and modern software
for companies worldwide.
```

Implement:

```text
OpenGraph
Twitter metadata
favicon
robots
sitemap
canonical metadata
```

Future SEO pages may include:

```text
/services/ai-agent-development
/services/applied-ai
/services/ai-automation
/services/ai-platform-engineering
/services/ai-consulting
```

Version 1 can remain a single-page site.

---

# 41. Trust Rules

Because the website represents a global agency, credibility is critical.

Do not invent:

- Client logos
- Customer names
- Revenue claims
- Fake testimonials
- Fake case-study metrics
- Fake office locations
- Fake awards
- Fake team size
- Fake partner certifications

Use generalized project examples until real evidence is provided.

The design should create trust through:

- Strong technical language
- High-quality presentation
- Clear services
- Realistic architecture visuals
- Professional process
- Good writing
- Excellent UI quality

---

# 42. Tone of Voice

Copy should be:

- Direct
- Intelligent
- Calm
- Technical
- Business-aware
- International
- Confident without hype

Avoid phrases such as:

```text
Revolutionary AI
Game-changing innovation
Cutting-edge disruption
Transform your future
Unlock limitless possibilities
```

Prefer concrete language such as:

```text
Design
Build
Integrate
Deploy
Evaluate
Scale
Operate
Automate
Modernize
```

---

# 43. Primary Conversion Goals

Every section should support one of two actions:

### Primary

```text
Start a Project
```

### Secondary

```text
Book a Call
```

Avoid too many competing CTAs.

---

# 44. Recommended Page Narrative

The page should tell this story:

```text
Who are you?
↓
A global AI engineering agency.

What do you build?
↓
AI agents, intelligent products, automation,
AI platforms and supporting software.

Can you actually build complex systems?
↓
Show technical platform visualization and capabilities.

How do you work?
↓
Discover → Architect → Build → Launch.

What business problems can you solve?
↓
Show real use cases.

Why should I trust you?
↓
Senior engineering, production focus,
business-aware architecture, global delivery.

How can we work together?
↓
Project delivery, embedded engineering,
technical advisory.

What should I do next?
↓
Start a Project or Book a Call.
```

---

# 45. Claude Code Build Requirements

Claude Code must build the full Version 1 website.

Required:

```text
✓ Next.js project
✓ TypeScript
✓ Tailwind CSS
✓ Responsive navigation
✓ Mobile navigation
✓ Hero
✓ Animated AI architecture visual
✓ Global capability ticker
✓ Services
✓ AI platform showcase
✓ Use cases
✓ Process
✓ Technical capabilities
✓ Why us
✓ Selected work
✓ Global delivery
✓ Engagement models
✓ About
✓ FAQ
✓ Contact form
✓ Configurable contact email
✓ Calendly booking integration
✓ Final CTA
✓ Footer
✓ Responsive layout
✓ Scroll animations
✓ Accessibility
✓ SEO metadata
✓ Reduced-motion support
```

Do not stop after scaffolding.

Build all major sections.

---

# 46. Claude Code Quality Pass

After implementation:

1. Run the application.
2. Resolve all TypeScript errors.
3. Resolve all browser console errors.
4. Check mobile overflow.
5. Check navigation behavior.
6. Check all anchors.
7. Test Calendly booking flow.
8. Test contact email behavior.
9. Check desktop at 1440px.
10. Check desktop at 1920px.
11. Check mobile at approximately 390px.
12. Improve weak typography.
13. Improve weak spacing.
14. Remove placeholder-looking components.
15. Remove unnecessary borders.
16. Reduce animation where it feels excessive.
17. Ensure the hero is the strongest section.
18. Ensure the website feels like one consistent design system.

---

# 47. Final Instruction for Claude Code

```text
Build the complete website described in this specification.

This is a global AI engineering agency website, not a personal portfolio
and not a generic software outsourcing website.

The company primarily sells AI engineering services, including AI agent
systems, applied AI products, AI automation, AI platforms, software
engineering and AI strategy.

Use the IONYX reference for structural inspiration only.

The visual target is a combination of:

- premium global agency
- OpenAI-level simplicity
- Linear-level precision
- Vercel-level product polish
- serious software engineering credibility

The website should be bright, spacious, modern and technically credible.

Do not use a heavy dark theme.

Do not use generic AI robot imagery.

Do not invent fake customers, testimonials, offices or performance claims.

Version 1 should be frontend-first.

The contact email must be controlled from one central configuration
variable.

Use Calendly for scheduling.

The agency owner will connect Calendly to Google Calendar.

The website should launch the Calendly scheduling experience from every
Book a Call CTA using one centrally configured Calendly URL.

Do not build a custom Google Calendar integration for Version 1.

Do not ask for approval after every section.

Implement the full page, run it, fix errors, test responsiveness and
perform a final visual polish pass before considering the work complete.
```
