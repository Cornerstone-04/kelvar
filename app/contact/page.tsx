"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { site } from "@/content";
import { SectionLabel } from "@/components/ui/section-label";
import { KelvarButton } from "@/components/ui/kelvar-button";
import { InternalPageHero } from "@/components/ui/internal-page-hero";

const fields = [
  { label: "Full Name", type: "text", placeholder: "Your name" },
  {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    label: "Organisation",
    type: "text",
    placeholder: "Company or institution",
  },
  {
    label: "Subject",
    type: "text",
    placeholder: "Partnership, investment, general...",
  },
];

const contact_info = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  { label: "Location", value: site.location },
  {
    label: "Availability",
    value: "Open to partnerships, investment & collaboration",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-bg pt-16.25">
      <InternalPageHero
        label="Get In Touch"
        title="Contact"
        outline="Kelvar"
        description="For partnerships, investment conversations, demonstrations, or general enquiries, contact the Kelvar Industries team."
      />

      {/* Body */}
      <div className="grid grid-cols-1 border-b border-border-col md:grid-cols-2">
        {/* Form */}
        <div className="border-r border-border-col px-6 py-16 md:px-12 flex flex-col gap-4">
          <SectionLabel>Send a Message</SectionLabel>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16"
            >
              <div className="mb-4 font-heading text-[3rem] font-black text-white">
                ✓
              </div>
              <p className="font-mono text-[0.85rem] text-white/40">
                Message received. We'll be in touch within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8"
            >
              {fields.map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <label className="mb-2 block font-semibold font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full border-b border-border-col bg-transparent pb-2 font-mono text-[0.85rem] text-white outline-none placeholder:text-white/15 transition-colors focus:border-white/40"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <label className="mb-2 block font-mono font-semibold text-[0.6rem] uppercase tracking-[0.25em] text-muted">
                  Message
                </label>

                <textarea
                  placeholder="Tell us about your enquiry..."
                  required
                  rows={4}
                  className="w-full resize-none border-b border-border-col bg-transparent pb-2 font-mono text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/15 focus:border-white/40"
                />
              </motion.div>

              <KelvarButton type="submit">Send Message</KelvarButton>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="bg-surface px-6 py-16 md:px-12 flex flex-col gap-4">
          <SectionLabel>Details</SectionLabel>

          <div className="space-y-0">
            {contact_info.map((item) => (
              <div key={item.label} className="border-b border-border-col py-5">
                <div className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.25em] text-muted">
                  {item.label}
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    className="font-mono text-[0.82rem] text-white/60 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-mono text-[0.82rem] text-white/50">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
