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
      <div className="border-b border-border-col px-6 py-20 md:px-12">
        <SectionLabel>Get in touch</SectionLabel>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] leading-none font-black tracking-[-0.02em] text-white"
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 border-b border-border-col md:grid-cols-2">
        {/* Form */}
        <div className="border-r border-border-col px-6 py-16 md:px-12">
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
                  <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/25">
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
                <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/25">
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
        <div className="bg-surface px-6 py-16 md:px-12">
          <SectionLabel>Details</SectionLabel>

          <div className="space-y-0">
            {contact_info.map((item) => (
              <div key={item.label} className="border-b border-border-col py-5">
                <div className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.25em] text-white/20">
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
