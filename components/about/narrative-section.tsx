"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollingText } from "@/components/ui/scrolling-text";

const revealTransition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

export function NarrativeSection() {
  return (
    <section className="border-b border-border-col px-6 py-14 md:px-12 md:py-24">
      <div className="grid gap-px bg-white/10 xl:grid-cols-2">
        <NarrativePanel label="Mission" text={site.mission} emphasis />
        <NarrativePanel label="Story" text={site.story} />
      </div>
    </section>
  );
}

function NarrativePanel({
  label,
  text,
  emphasis = false,
}: {
  label: string;
  text: string;
  emphasis?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={revealTransition}
      className="group relative overflow-hidden bg-bg p-7 md:p-10 xl:min-h-136 xl:p-12"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-white/30"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ ...revealTransition, delay: 0.15 }}
      />
      <div>
        <SectionLabel>{label}</SectionLabel>
      </div>
      <ScrollingText
        text={text}
        className={`mt-14 max-w-[68ch] font-mono leading-[1.95] text-white/62 ${emphasis ? "text-[clamp(1rem,1.55vw,1.35rem)]" : "text-sm md:text-base"}`}
      />
    </motion.article>
  );
}
