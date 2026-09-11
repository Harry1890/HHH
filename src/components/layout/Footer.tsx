import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { footerColumns, legalLinks, siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const connectLinks = [
    { label: "Email", href: `mailto:${siteConfig.contactEmail}` },
    ...(siteConfig.social.linkedin ? [{ label: "LinkedIn", href: siteConfig.social.linkedin }] : []),
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-sm">
            <Logo size="md" />
            <p className="mt-5 text-[16px] text-muted">{siteConfig.tagline}</p>
            <div className="mt-6">
              <BookCallButton variant="secondary" arrow />
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-eyebrow text-muted">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-ink/80 transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Connect">
            <p className="text-eyebrow text-muted">Connect</p>
            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[15px] text-ink/80 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[14px] text-muted">{siteConfig.locationMessage}</p>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.companyName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
