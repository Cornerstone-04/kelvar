"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { site } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { BsArrowRight } from "react-icons/bs";

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
      {/* Header */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-18 md:pt-36 md:px-12">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285060_0%,transparent_65%)]" />

        <div className="relative z-1 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <SectionLabel>Get In Touch</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[clamp(3.5rem,12vw,10rem)] leading-none tracking-[-0.02em] text-primary mb-4"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

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

              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-[#ffffff1f] px-8 py-4 font-mono text-xxs uppercase tracking-[0.15em] text-white/40 no-underline transition-all duration-200 ease-in-out hover:border-[#ffffff66] hover:text-white"
              >
                Send Message <BsArrowRight />
              </button>
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
