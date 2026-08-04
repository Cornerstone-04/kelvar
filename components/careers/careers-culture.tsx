"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

const disciplines = [
  "Engineering",
  "Artificial Intelligence",
  "Robotics",
  "Industrial Design",
  "Operations",
];

const principles = [
  {
    number: "01",
    title: "Own the outcome",
    description:
      "Small teams carry real responsibility, from the first decision through testing and deployment.",
  },
  {
    number: "02",
    title: "Build in the real world",
    description:
      "Ideas move beyond presentations. We prototype, test, learn, and improve against real operating conditions.",
  },
  {
    number: "03",
    title: "Cross the disciplines",
    description:
      "Engineering, intelligence, design, and operations work together because autonomous systems cannot be built in silos.",
  },
];

export function CareersDisciplineStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden border-b border-white/10 bg-surface py-5">
      <motion.div
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center"
      >
        {[...disciplines, ...disciplines].map((discipline, index) => (
          <div
            key={`${discipline}-${index}`}
            className="flex items-center gap-8 px-8 font-heading text-2xl font-bold uppercase tracking-[0.08em] text-white/38 md:text-3xl"
          >
            <span>{discipline}</span>
            <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export function CareersCulture() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/10 px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="mt-7 max-w-xl font-heading text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.88] text-primary">
            Hard problems.
            <br />
            Real responsibility.
          </h2>
          <p className="mt-7 max-w-lg font-mono text-xs-plus leading-[1.9] text-muted">
            Kelvar is an early-stage engineering company. The work is
            collaborative, experimental, and grounded in systems that must
            perform beyond the studio and the lab.
          </p>
        </div>

        <div className="grid gap-px bg-white/10">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative min-h-64 overflow-hidden bg-bg p-7 md:p-10"
            >
              <span className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
                {principle.number}
              </span>
              <h3 className="mt-14 font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-none text-primary">
                {principle.title}
              </h3>
              <p className="mt-5 max-w-xl font-mono text-xs-plus leading-[1.8] text-muted">
                {principle.description}
              </p>
              <span className="pointer-events-none absolute -bottom-12 right-3 font-heading text-[11rem] font-black leading-none text-white/2.5 transition-transform duration-700 group-hover:-translate-y-3">
                {principle.number}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
