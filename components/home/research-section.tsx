"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import { GlitchText } from "@/components/ui/glitch-text";
import { research } from "@/lib/data";

export function RAndDSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-12">
        <SectionLabel>Research & Development</SectionLabel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] leading-none text-primary mb-6">
            {research.headline}
          </h2>
          <p className="font-heading font-bold text-[clamp(1.1rem,2.5vw,1.6rem)] leading-[1.35] text-primary/60 mb-8">
            {research.subheadline}
          </p>
          <p className="font-mono text-xs-plus leading-[1.85] text-muted max-w-[55ch]">
            {research.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border-t border-[#ffffff12]"
        >
          {research.areas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border-b border-[#ffffff12] py-6 flex items-start gap-6"
            >
              <GlitchText
                tag="span"
                text={area.id}
                speed={60}
                className="font-mono text-xxs tracking-[0.2em] text-dim shrink-0 pt-0.5"
              />
              <div>
                <h3 className="font-heading font-bold text-[1.2rem] text-primary uppercase mb-2">
                  {area.title}
                </h3>
                <p className="font-mono text-xxs leading-relaxed text-muted">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Link
        href="/research"
        className="inline-flex items-center gap-2 border border-[#ffffff1f] px-[1.2rem] py-[0.6rem] font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/40 no-underline transition-all duration-200 ease-in-out hover:border-[#ffffff66] hover:text-white"
      >
        Explore the Lab →
      </Link>
    </section>
  );
}