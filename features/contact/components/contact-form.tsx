"use client";

import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { KelvarButton } from "@/components/ui/kelvar-button";
import { SectionLabel } from "@/components/ui/section-label";
import { site } from "@/content/site";
import {
  buildContactMailto,
  parseContactForm,
  validateContactFields,
} from "../lib/validate-contact";
import type { ContactFieldErrors } from "../types";

const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    name: "organisation",
    label: "Organisation",
    type: "text",
    placeholder: "Company or institution",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Partnership, investment, general...",
  },
] as const;

export function ContactForm() {
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [composerOpened, setComposerOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = parseContactForm(new FormData(event.currentTarget));
    const nextErrors = validateContactFields(values);

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setComposerOpened(true);
    window.location.href = buildContactMailto(site.email, values);
  };

  return (
    <div className="flex flex-col gap-4 border-r border-border-col px-6 py-16 md:px-12">
      <SectionLabel>Send a Message</SectionLabel>

      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {fields.map((field, index) => {
          const error = errors[field.name];
          const errorId = `${field.name}-error`;

          return (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <label
                htmlFor={field.name}
                className="mb-2 block font-mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-muted"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                maxLength={
                  field.name === "email"
                    ? 254
                    : field.name === "subject"
                      ? 160
                      : 120
                }
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className="w-full border-b border-border-col bg-transparent pb-2 font-mono text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/15 focus:border-white/40"
              />
              {error && (
                <p
                  id={errorId}
                  className="mt-2 font-mono text-xxs text-red-300"
                >
                  {error}
                </p>
              )}
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <label
            htmlFor="message"
            className="mb-2 block font-mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your enquiry..."
            required
            maxLength={2_000}
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full resize-none border-b border-border-col bg-transparent pb-2 font-mono text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/15 focus:border-white/40"
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-2 font-mono text-xxs text-red-300"
            >
              {errors.message}
            </p>
          )}
        </motion.div>

        <KelvarButton type="submit">Open Email Composer</KelvarButton>
        <p
          className="max-w-xl font-mono text-xxs leading-relaxed text-muted"
          aria-live="polite"
        >
          {composerOpened
            ? `Your email app should open now. If it does not, email ${site.email} directly.`
            : "Submitting opens your email application. No message is sent until you review and send it there."}
        </p>
      </form>
    </div>
  );
}
