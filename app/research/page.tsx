"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { GlitchText } from "@/components/ui/glitch-text";
import { Rule } from "@/components/ui/rule";
import { research, site } from "@/lib/data";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg pt-16">
      {/* Header */}
      <section className="border-t border-[#ffffff12] px-10 pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlitchText
            tag="p"
            text="Kelvar Industries"
            delay={400}
            speed={80}
            className="font-mono text-xxs uppercase tracking-[0.3em] text-muted mb-6"
          />
          <h1 className="font-heading font-black text-[clamp(4rem,12vw,9rem)] leading-none tracking-[-0.02em] text-primary mb-6">
            {research.headline}
          </h1>
          <p className="font-heading font-bold text-[clamp(1.2rem,2.8vw,2rem)] leading-[1.3] text-primary/55 max-w-[30ch]">
            {research.subheadline}
          </p>
        </motion.div>
      </section>

      <Rule />

      {/* Overview */}
      <section className="px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div>
            <SectionLabel>Overview</SectionLabel>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-mono text-xs-plus leading-[1.95] text-muted max-w-[65ch]"
          >
            {research.desc}
          </motion.p>
        </div>
      </section>

      <Rule />

      {/* Research areas */}
      <section className="px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Research Areas</SectionLabel>
        </div>

        {research.areas.map((area, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={area.id}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`flex items-start gap-12 py-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="min-w-8 pt-1">
                  <GlitchText
                    tag="span"
                    text={area.id}
                    speed={60}
                    className="font-mono text-xxs tracking-[0.2em] text-dim"
                  />
                </div>
                <div
                  className={`flex flex-1 flex-col md:flex-row md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <h2
                      className={`font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-primary mb-6 ${!isEven ? "md:text-right" : ""}`}
                    >
                      {area.title}
                    </h2>
                    <p
                      className={`font-mono text-xs-plus leading-[1.85] text-muted max-w-[52ch] ${!isEven ? "md:ml-auto" : ""}`}
                    >
                      {area.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
              <Rule />
            </div>
          );
        })}
      </section>

      {/* Philosophy */}
      <section className="bg-surface px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Philosophy</SectionLabel>
        </div>
        {[
          "Security technology should outthink the threat — not just react to it.",
          "Autonomous systems must earn trust through reliability, not just capability.",
          "The best intelligence is invisible until it is needed.",
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-border-col py-8 flex items-baseline gap-8"
          >
            <GlitchText
              tag="span"
              text={String(i + 1).padStart(2, "0")}
              speed={60}
              className="font-mono text-xxs tracking-[0.2em] text-dim shrink-0"
            />
            <p className="font-heading font-bold text-[clamp(1.2rem,2.5vw,1.8rem)] text-primary">
              {line}
            </p>
          </motion.div>
        ))}
        <div className="border-t border-border-col" />
      </section>

      <Rule />

      {/* CTA */}
      <section className="relative overflow-hidden px-10 py-32 text-center">
        <div className="pointer-events-none absolute top-[-20%] left-1/2 z-0 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285060_0%,transparent_65%)]" />
        <div className="relative z-1 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlitchText
              tag="p"
              text="Work With Us"
              delay={300}
              speed={80}
              className="font-mono text-xxs uppercase tracking-[0.3em] text-muted mb-8"
            />
            <h2 className="font-heading font-black text-[clamp(3rem,8vw,6rem)] leading-none tracking-[-0.02em] text-primary mb-8">
              Build What
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
              >
                Doesn't Exist.
              </span>
            </h2>
            <p className="font-mono text-xs-plus leading-[1.8] text-muted mb-12 max-w-[48ch] mx-auto">
              If you're working on problems at the edge of autonomous systems,
              computer vision, or swarm intelligence — we want to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80]"
            >
              Get in Touch <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
