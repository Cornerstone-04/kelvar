"use client";

import { motion } from "motion/react";
import { careers } from "@/content/careers";
import { SectionLabel } from "@/components/ui/section-label";

export function CareersPerks() {
  return (
    <section className="border-b border-border-col bg-surface px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
        <div>
          <SectionLabel>Why Kelvar</SectionLabel>
          <h2 className="type-editorial mt-7 text-primary">
            Build where your work matters.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          {careers.perks.map((perk, i) => (
            <motion.article
              key={perk}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group min-h-52 bg-surface p-6 md:p-8"
            >
              <p className="max-w-xs font-heading text-2xl font-bold leading-tight text-white/68 transition-colors group-hover:text-primary">
                {perk}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
