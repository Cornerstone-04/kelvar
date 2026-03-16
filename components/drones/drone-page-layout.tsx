"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { GlitchText } from "@/components/ui/glitch-text";
import type { DronePageData } from "@/lib/data";

export default function DronePageLayout({ drone }: { drone: DronePageData }) {
  const primaryFeatures = drone.features.filter((f) => f.tag === "Primary");
  const secondaryFeatures = drone.features.filter((f) => f.tag === "Secondary");

  return (
    <div className="min-h-screen bg-bg">
      {/* ── HERO ── */}
      <section className="relative flex min-h-svh items-end overflow-hidden border-b border-border-col">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover brightness-[0.3] saturate-[0.5]"
        >
          <source src={drone.assets.video} type="video/mp4" />
        </video>

        {/* grain */}
        <div
          className="pointer-events-none absolute inset-0 z-1 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285060_0%,transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-2 w-full px-8 py-20 md:px-12"
        >
          <GlitchText
            tag="p"
            text="Kelvar Industries"
            delay={400}
            speed={80}
            className="font-mono text-xxs uppercase tracking-[0.3em] text-muted mb-6"
          />

          <h1 className="font-heading font-black text-[clamp(4rem,14vw,11rem)] leading-none tracking-[-0.02em] text-primary mb-4">
            {drone.name}
            {drone.trademark && (
              <sup className="text-[0.3em] align-super ml-1 text-primary/40">
                ™
              </sup>
            )}
          </h1>

          <p className="font-mono text-xs-plus leading-[1.7] text-muted max-w-[55ch] mb-10">
            {drone.tagline}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-white/60"
          >
            Enquire Now <span>→</span>
          </Link>
        </motion.div>
      </section>

      {/* ── CONCEPT ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div>
            <SectionLabel>Concept</SectionLabel>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-mono text-xs-plus leading-[1.9] text-muted max-w-[65ch]"
          >
            {drone.concept}
          </motion.p>
        </div>
      </section>

      {/* ── PRIMARY FEATURES ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Primary Features</SectionLabel>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-col sm:grid-cols-3">
            {primaryFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg px-8 py-10"
              >
                <div className="mb-3 font-mono text-xxs tracking-[0.25em] text-dim">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-[1.35rem] text-primary mb-3">
                  {f.title}
                </h3>
                <p className="font-mono text-xxs leading-relaxed text-muted">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECONDARY FEATURES ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Secondary Features</SectionLabel>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-col sm:grid-cols-3">
            {secondaryFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface px-8 py-10"
              >
                <div className="mb-3 font-mono text-xxs tracking-[0.25em] text-dim">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-[1.35rem] text-primary mb-3">
                  {f.title}
                </h3>
                <p className="font-mono text-xxs leading-relaxed text-muted">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Ideal For</SectionLabel>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-col sm:grid-cols-2 lg:grid-cols-4">
            {drone.useCases.map((uc, i) => (
              <motion.div
                key={uc.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-bg px-8 py-10"
              >
                <div className="mb-4 text-2xl">{uc.icon}</div>
                <h3 className="font-heading font-bold text-[1.2rem] text-primary mb-2">
                  {uc.label}
                </h3>
                <p className="font-mono text-xxs leading-relaxed text-muted">
                  {uc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Specifications</SectionLabel>
          </div>
          <div className="border-t border-border-col">
            {drone.specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-border-col py-5 hover:bg-card/30 transition-colors duration-200"
              >
                <span className="font-mono text-xxs uppercase tracking-[0.2em] text-dim mb-1 md:mb-0">
                  {s.label}
                </span>
                <span className="font-mono text-xs-plus text-primary">
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div>
            <SectionLabel>Vision</SectionLabel>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-heading font-black text-[clamp(1.5rem,3.5vw,2.4rem)] leading-[1.15] text-primary max-w-4xl">
              {drone.vision}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>The Case for Change</SectionLabel>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border-col md:grid-cols-3">
            {drone.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-surface px-8 py-10"
              >
                <div className="font-heading font-black text-[clamp(1.8rem,4vw,3rem)] text-primary leading-none mb-3">
                  {s.value}
                </div>
                <div className="font-mono text-xxs uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Our Philosophy</SectionLabel>
          </div>
          <div className="space-y-0">
            {drone.philosophy.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-border-col py-7 flex items-baseline gap-6"
              >
                <span className="font-mono text-xxs tracking-[0.25em] text-dim shrink-0">
                  0{i + 1}
                </span>
                <p className="font-heading font-bold text-[clamp(1.2rem,2.5vw,1.8rem)] text-primary">
                  {line}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-border-col" />
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="border-b border-border-col px-8 py-24 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">
          <div>
            <SectionLabel>Industries</SectionLabel>
          </div>
          <div className="space-y-0">
            {drone.industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-t border-border-col py-5 flex items-center gap-6"
              >
                <span className="font-mono text-xxs tracking-[0.25em] text-dim shrink-0">
                  0{i + 1}
                </span>
                <span className="font-mono text-xs-plus text-muted">{ind}</span>
              </motion.div>
            ))}
            <div className="border-t border-border-col" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 py-24 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xxs uppercase tracking-[0.3em] text-muted mb-6">
              Redefining Safety for a New Era
            </p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,8vw,6rem)] text-primary leading-none mb-6">
              Intelligent.
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px rgba(245,245,249,0.25)" }}
              >
                Autonomous.
              </span>
              <br />
              Always On.
            </h2>
            <p className="font-mono text-xs-plus leading-[1.8] text-muted mb-10 max-w-[3xl] mx-auto">
              As the UK confronts rising threats — 642,170 fire incidents, 3.9
              million fraud cases, and 9.4 million recorded crimes — traditional
              static CCTV cannot keep pace. {drone.name}™ delivers a
              next-generation response.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-white/60"
            >
              Get in Touch <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
