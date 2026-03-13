"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { site } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-mono">
        {children}
      </span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-16.25 bg-bg">
      {/* Header */}
      <div
        className="px-6 md:px-12 py-20"
        style={{ borderBottom: "1px solid var(--border-col)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[0.6rem] tracking-[0.35em] uppercase text-white/25 font-mono mb-6"
        >
          Get in Touch
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black text-white leading-none"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Body */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderBottom: "1px solid var(--border-col)" }}
      >
        {/* Form */}
        <div
          className="px-6 md:px-12 py-16"
          style={{ borderRight: "1px solid var(--border-col)" }}
        >
          <SectionLabel>Send a Message</SectionLabel>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16"
            >
              <div className="font-heading font-black text-white text-[3rem] mb-4">
                ✓
              </div>
              <p className="text-white/40 font-mono text-[0.85rem]">
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
              {[
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
              ].map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-white/25 font-mono mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-transparent pb-2 text-[0.85rem] outline-none placeholder:text-white/15 text-white font-mono"
                    style={{ borderBottom: "1px solid var(--border-col)" }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.4)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-col)")
                    }
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-white/25 font-mono mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your enquiry..."
                  required
                  rows={4}
                  className="w-full bg-transparent pb-2 text-[0.85rem] outline-none resize-none placeholder:text-white/15 text-white font-mono"
                  style={{ borderBottom: "1px solid var(--border-col)" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-col)")
                  }
                />
              </motion.div>
              <button
                type="submit"
                className="px-8 py-4 text-xs tracking-[0.25em] uppercase font-mono text-bg bg-card border border-transparent hover:bg-surface/90 hover:border-muted transition-all ease-linear duration-200 cursor-pointer"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div
          className="px-6 md:px-12 py-16"
          style={{ background: "var(--surface)" }}
        >
          <SectionLabel>Details</SectionLabel>
          <div className="space-y-0">
            {[
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
            ].map((item, i) => (
              <div
                key={item.label}
                className="py-5"
                style={{ borderBottom: "1px solid var(--border-col)" }}
              >
                <div className="text-[0.58rem] tracking-[0.25em] uppercase text-white/20 font-mono mb-1">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[0.82rem] text-white/60 hover:text-white no-underline font-mono transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[0.82rem] text-white/50 font-mono">
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
