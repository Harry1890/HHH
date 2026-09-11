"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

// The scheduler is only needed once a visitor asks for it; keep it out of the initial bundle.
const CalendlyBooking = dynamic(() => import("./CalendlyBooking").then((m) => m.CalendlyBooking), {
  ssr: false,
});

interface BookingContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

/** Owns the single Calendly dialog so every "Book a Call" CTA shares it. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const open = useCallback(() => {
    setMounted(true);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {mounted && <CalendlyBooking open={isOpen} onClose={close} />}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>.");
  return ctx;
}
