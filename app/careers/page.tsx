"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { careers, site } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-mono">{children}</span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-[65px]" style={{ background: "var(--bg)" }}>

      {/* Header */}
      <div className="px-6 md:px-12 py-20" style={{ borderBottom: "1px solid var(--border-col)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[0.6rem] tracking-[0.35em] uppercase text-white/25 font-mono mb-6">
          Join the Team
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black text-white leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", letterSpacing: "-0.02em" }}>
          {careers.headline}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/40 font-mono text-[0.9rem] leading-relaxed max-w-xl">
          {careers.intro}
        </motion.p>
      </div>

      {/* Perks */}
      <div className="px-6 md:px-12 py-16" style={{ borderBottom: "1px solid var(--border-col)", background: "var(--surface)" }}>
        <SectionLabel>Why Kelvar</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {careers.perks.map((perk, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-4 py-4 text-[0.72rem] text-white/60 font-mono"
              style={{ border: "1px solid var(--border-col)" }}>
              <span className="text-white/20 mr-2">→</span>{perk}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Roles */}
      <div className="px-6 md:px-12 py-20">
        <SectionLabel>Open Positions</SectionLabel>
        <h2 className="font-heading font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
          Current Openings
        </h2>
        <div className="space-y-0">
          {careers.roles.map((role, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-8 items-center"
              style={{ borderTop: "1px solid var(--border-col)" }}>
              <div>
                <h3 className="font-heading font-bold text-white text-[1.4rem] mb-2 group-hover:text-white/80 transition-colors">
                  {role.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 font-mono">{role.department}</span>
                  <span className="text-white/15">·</span>
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 font-mono">{role.location}</span>
                  <span className="text-white/15">·</span>
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 font-mono">{role.type}</span>
                </div>
                <p className="text-white/40 font-mono text-[0.78rem] leading-relaxed max-w-2xl">{role.summary}</p>
              </div>
              <Link href={`mailto:${site.email}?subject=Application — ${role.title}`}
                className="shrink-0 px-6 py-3 text-[0.6rem] tracking-[0.2em] uppercase font-mono no-underline text-white/60 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-200">
                Apply →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-12" style={{ borderTop: "1px solid var(--border-col)" }}>
          <p className="text-white/25 font-mono text-[0.78rem] mb-4">
            Don't see a role that fits? We're always open to exceptional people.
          </p>
          <Link href={`mailto:${site.email}?subject=General Application — Kelvar Industries`}
            className="text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-white/40 hover:text-white border-b border-white/15 hover:border-white/50 pb-1 transition-all duration-200">
            Send a General Application →
          </Link>
        </div>
      </div>

    </div>
  );
}
