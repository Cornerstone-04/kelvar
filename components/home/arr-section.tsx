"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { GlitchText } from "@/components/ui/glitch-text";

const pillars = [
  {
    id: "01",
    title: "Autonomy",
    desc: "Systems that think, decide, and act without human intervention — reducing response time from minutes to milliseconds.",
  },
  {
    id: "02",
    title: "Artificial Intelligence",
    desc: "Machine learning models that classify threats, learn environments, and improve accuracy with every deployment.",
  },
  {
    id: "03",
    title: "Robotics",
    desc: "Physical platforms engineered to operate in real-world conditions — from urban streets to offshore infrastructure.",
  },
];

export function ArrSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-12">
        <SectionLabel>Research, Design & Development</SectionLabel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-[-0.02em] text-primary mb-6"
          >
            Autonomous.
            <br />
            Intelligent.
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              Relentless.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs-plus leading-[1.85] text-muted max-w-[48ch]"
          >
            Kelvar's R&D division engineers the intelligence behind every
            platform we build. We don't ship products — we develop systems
            capable of protecting people and property without limits.
          </motion.p>
        </div>

        <div className="border-t border-[#ffffff12]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b border-[#ffffff12] py-8 flex gap-8 items-start"
            >
              <GlitchText
                tag="span"
                text={p.id}
                speed={60}
                className="font-mono text-xxs tracking-[0.2em] text-dim shrink-0 mt-1"
              />
              <div>
                <h3 className="font-heading font-bold text-[1.3rem] text-primary mb-2">
                  {p.title}
                </h3>
                <p className="font-mono text-xs-plus leading-[1.75] text-muted">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#ffffff12] bg-surface px-8 py-6"
      >
        <div>
          <p className="font-mono text-xxs uppercase tracking-[0.25em] text-dim mb-1">
            The Lab
          </p>
          <p className="font-heading font-bold text-[1.2rem] text-primary">
            We don't wait for the future. We engineer it.
          </p>
        </div>
        <Link
          href="/research"
          className="shrink-0 inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80] whitespace-nowrap"
        >
          Explore R&amp;D →
        </Link>
      </motion.div>
    </section>
  );
}
