"use client";

import { motion } from "motion/react";
import { press, site } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-mono">{children}</span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}

export default function PressPage() {
  return (
    <div className="min-h-screen pt-[65px]" style={{ background: "var(--bg)" }}>

      {/* Header */}
      <div className="px-6 md:px-12 py-20" style={{ borderBottom: "1px solid var(--border-col)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[0.6rem] tracking-[0.35em] uppercase text-white/25 font-mono mb-6">
          Media & Press
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black text-white leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", letterSpacing: "-0.02em" }}>
          Newsroom
        </motion.h1>
      </div>

      {/* Press articles */}
      <div className="px-6 md:px-12 py-20">
        <SectionLabel>Coverage</SectionLabel>
        <div className="space-y-0">
          {press.map((item, i) => (
            <motion.a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr_80px] gap-4 md:gap-8 py-8 items-center no-underline"
              style={{ borderTop: "1px solid var(--border-col)" }}>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 font-mono">{item.outlet}</div>
              <h3 className="font-heading font-bold text-white/70 group-hover:text-white transition-colors duration-200"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}>
                {item.headline}
              </h3>
              <div className="text-[0.6rem] tracking-[0.1em] text-white/20 font-mono md:text-right">{item.date}</div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Press contact */}
      <div className="px-6 md:px-12 py-16" style={{ borderTop: "1px solid var(--border-col)", background: "var(--surface)" }}>
        <SectionLabel>Press Enquiries</SectionLabel>
        <p className="text-white/40 font-mono text-[0.82rem] mb-4">
          For media requests, interview opportunities, or press kit access, please contact:
        </p>
        <a href={`mailto:${site.email}?subject=Press Enquiry`}
          className="text-[0.78rem] font-mono text-white/60 hover:text-white no-underline border-b border-white/15 hover:border-white/50 pb-1 transition-all duration-200">
          {site.email}
        </a>
      </div>

    </div>
  );
}
