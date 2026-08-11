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
    title: "Own the outcome",
    description:
      "Small teams carry real responsibility, from the first decision through testing and deployment.",
  },
  {
    title: "Build in the real world",
    description:
      "Ideas move beyond presentations. We prototype, test, learn, and improve against real operating conditions.",
  },
  {
    title: "Cross the disciplines",
    description:
      "Engineering, intelligence, design, and operations work together because autonomous systems cannot be built in silos.",
  },
];

export function CareersDisciplineStrip() {
  return (
    <section
      aria-label="Kelvar disciplines"
      className="border-b border-white/10 bg-surface px-6 py-5 md:px-10"
    >
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {disciplines.map((discipline) => (
          <li
            key={discipline}
            className="flex items-center gap-8 font-heading text-xl font-bold uppercase tracking-[0.08em] text-dim md:text-2xl"
          >
            <span>{discipline}</span>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full border border-white/30"
            />
          </li>
        ))}
      </ul>
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
              key={principle.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative min-h-64 overflow-hidden bg-bg p-7 md:p-10"
            >
              <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-none text-primary">
                {principle.title}
              </h3>
              <p className="mt-5 max-w-xl font-mono text-xs-plus leading-[1.8] text-muted">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
