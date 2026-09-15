"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll and close on ESC while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Close the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container-site">
        <nav
          aria-label="Primary"
          className={cn(
            "flex h-14 items-center justify-between rounded-full border px-2 pl-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
            scrolled || menuOpen
              ? "border-line bg-surface/80 shadow-nav backdrop-blur-xl supports-[backdrop-filter]:bg-surface/70"
              : "border-transparent bg-transparent",
          )}
        >
          <Logo priority />

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[15px] font-medium text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 lg:flex">
            <Button href="/#contact" variant="ghost">
              Contact
            </Button>
            <BookCallButton arrow size="md" />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-site flex min-h-full flex-col pb-8 pt-6">
              <ul className="divide-y divide-line border-y border-line">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 + i * 0.04, duration: reduce ? 0 : 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-5 text-[28px] font-medium tracking-[-0.03em] text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <li>
                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="block py-5 text-[28px] font-medium tracking-[-0.03em] text-ink"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button href="/#contact" variant="secondary" size="lg" onClick={closeMenu}>
                  Start a Project
                </Button>
                <BookCallButton size="lg" arrow onClick={closeMenu} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
