"use client";

import { ChevronDown } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { projectTypes, siteConfig } from "@/data/site";
import { MESSAGE_MAX_LENGTH, submitContact, type ContactPayload } from "@/lib/contact";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full rounded-xl border border-line bg-surface px-4 text-[16px] text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none";

const labelClass = "mb-1.5 block text-[14px] font-medium text-ink";

const EMPTY: ContactPayload = {
  name: "",
  email: "",
  company: "",
  country: "",
  projectType: "",
  message: "",
};

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; email: string }
  | { state: "mailto"; href: string }
  | { state: "error"; message: string; mailto: string };

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const update =
    (field: keyof ContactPayload) =>
    (event: { target: { value: string } }) =>
      setValues((v) => ({ ...v, [field]: event.target.value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const honeypot = (event.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    setStatus({ state: "sending" });
    const result = await submitContact(values, honeypot);
    if (result.method === "mailto") {
      // Delivery API not configured: hand off to the visitor's email client and keep the link visible.
      window.location.href = result.href;
      setStatus({ state: "mailto", href: result.href });
    } else if (result.ok) {
      setStatus({ state: "sent", email: values.email });
      setValues(EMPTY);
    } else {
      setStatus({ state: "error", message: result.error, mailto: result.mailto });
    }
  };

  const sending = status.state === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8"
      aria-describedby="contact-form-note"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={update("name")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update("email")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={update("company")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-country" className={labelClass}>
            Country / Region
          </label>
          <input
            id="contact-country"
            name="country"
            autoComplete="country-name"
            value={values.country}
            onChange={update("country")}
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-type" className={labelClass}>
            Project type
          </label>
          <div className="relative">
            <select
              id="contact-type"
              name="projectType"
              required
              value={values.projectType}
              onChange={update("projectType")}
              className={cn(fieldClass, "appearance-none pr-11", !values.projectType && "text-muted/60")}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Project details
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder="What are you building, what problem are you trying to solve, and where do you need help?"
            value={values.message}
            onChange={update("message")}
            className={cn(fieldClass, "h-auto resize-y py-3")}
          />
        </div>
      </div>

      {/* Honeypot: hidden from people, filled by bots; the API drops submissions that set it. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="contact-form-note" className="text-[13px] leading-snug text-muted">
          We read every message and reply by email.
        </p>
        <Button type="submit" size="lg" arrow disabled={sending}>
          {sending ? "Sending…" : "Start a Conversation"}
        </Button>
      </div>

      <div aria-live="polite" className="mt-4 text-[14px] text-muted">
        {status.state === "sent" && (
          <p className="text-ink">Thanks — your message has been sent. We will reply to {status.email}.</p>
        )}
        {status.state === "error" && (
          <p className="text-ink">
            {status.message}{" "}
            <a href={status.mailto} className="underline underline-offset-4">
              Email us directly at {siteConfig.contactEmail}
            </a>
            .
          </p>
        )}
        {status.state === "mailto" && (
          <p>
            Your email client should have opened. If it did not,{" "}
            <a href={status.href} className="text-ink underline underline-offset-4">
              click here
            </a>{" "}
            or write to us at{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-ink underline underline-offset-4">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
