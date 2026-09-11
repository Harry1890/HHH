# Global AI Agency Website

Single-page marketing site for a global AI engineering agency, built from
[`docs/global_ai_agency_website_spec.md`](docs/global_ai_agency_website_spec.md).

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide.
Version 1 is frontend-only and prerenders as static HTML; deploy target is Vercel.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Before launch — one file to edit

All business identity lives in [`src/data/site.ts`](src/data/site.ts) (`siteConfig`):

| Field | Used for |
| --- | --- |
| `companyName` | Logo lockup, page titles, footer, JSON-LD, OG image (the mark itself lives in `components/layout/LogoMark.tsx` + `app/icon.svg`) |
| `contactEmail` | Every `mailto:` link and the contact form |
| `calendlyUrl` | Every "Book a Call" CTA (embedded scheduler on desktop, new tab on phones) |
| `siteUrl` | Canonical URL, OpenGraph, `robots.txt` and `sitemap.xml` |
| `social.linkedin` | Footer "Connect" column (hidden while empty) |

The same file holds all page copy (services, use cases, process, FAQ, work examples, etc.),
and `legalLinks` for the Privacy / Terms footer links.

## How contact and booking work in Version 1

- **Contact form** — `submitContact` (`src/lib/contact.ts`) POSTs to `src/app/api/contact/route.ts`,
  a serverless function that validates the submission (shared validator, honeypot field) and
  delivers it by email through Resend's REST API with the visitor's address as `reply_to`.
  If `RESEND_API_KEY` is not set the route answers 503 and the form falls back to a pre-filled
  `mailto:` link, so the site still works with no backend. See **Contact form delivery** below.
- **Email validation** — before sending, `src/lib/email-verification.ts` rejects addresses that cannot
  receive a reply: malformed addresses, throwaway inboxes (the `disposable-email-domains` list,
  ~120k domains) and domains with no mail server (MX/A lookup over DNS-over-HTTPS, Node DNS as
  fallback; inconclusive DNS never blocks a visitor). Rejections come back as `422` with a
  `field: "email"` hint and show inline under the field. It cannot prove a specific mailbox exists —
  add a verification API (Kickbox, ZeroBounce, Abstract, …) as a fourth step there if needed.
- **Book a Call** — every CTA is a link to `siteConfig.calendlyUrl` (`src/components/booking/BookCallButton.tsx`).
  On viewports ≥ 768px a click opens `CalendlyBooking`, which mounts Calendly's official inline embed
  (`widget.js`, loaded on demand) inside the site's accessible modal; on phones, with modifier keys,
  or if the script is blocked, Calendly opens in a new tab. The site never calls Google APIs —
  connect Google Calendar inside Calendly, and it handles availability, time zones, confirmations,
  reminders, rescheduling and cancellation. Suggested Calendly setup: an event named
  "Discovery Call", 30 minutes, with Google Meet enabled. `src/lib/calendly.ts` holds the loader,
  the embed URL (brand colours, no GDPR banner) and the desktop/phone breakpoint.

## Contact form delivery (Resend)

1. Sign up at [resend.com](https://resend.com) using the inbox that receives inquiries
   (`siteConfig.contactEmail`). Until you verify a domain, Resend's shared test sender can only
   deliver to the account owner's own address — which is exactly this inbox.
2. Create an API key and put it in `.env.local` as `RESEND_API_KEY=re_…` (see `.env.example`),
   then restart `npm run dev`. Submit the form once to confirm the email arrives.
3. On Vercel add the same variable under *Settings → Environment Variables* and redeploy.
4. When you have a domain, verify it in Resend and set `CONTACT_FROM_EMAIL="Orbion <hello@yourdomain.com>"`
   so messages come from your own address. `CONTACT_TO_EMAIL` optionally overrides the inbox.

Secrets stay server-side: never prefix them with `NEXT_PUBLIC_`.

## Project layout

```
src/
├── app/            layout, page, globals.css, icon, opengraph-image, robots, sitemap, api/contact
├── components/
│   ├── layout/     Navbar, Footer, Container, Logo
│   ├── sections/   One component per page section
│   ├── hero/       Animated AI system diagram
│   ├── booking/    BookingProvider (context), BookCallButton, CalendlyBooking (embed)
│   └── ui/         Button, Modal, Accordion, Reveal, SectionLabel, ServiceCard, Icon
├── data/site.ts    siteConfig + all content
├── lib/            utils, constants, contact service, calendly service
└── types/site.ts   Content types
```

## Design system notes

- Tokens (colours, fonts, shadows) are Tailwind v4 `@theme` variables in `src/app/globals.css`;
  typography scales (`text-display`, `text-heading`, …) are `@utility` classes there too.
- Ambient animations (ticker, request pulse, status dots) are CSS-only and disabled under
  `prefers-reduced-motion`; scroll reveals use Framer Motion and also respect reduced motion.
- Trust rules from the spec are followed: no invented clients, logos, metrics, offices or
  testimonials. Dashboard values are labelled as demo data.
