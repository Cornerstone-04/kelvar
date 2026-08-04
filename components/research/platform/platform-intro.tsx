"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import type { ResearchPlatform } from "@/types/research-types";

export function PlatformIntro({ platform }: { platform: ResearchPlatform }) {
  return (
    <div className="border-b border-[#ffffff12] px-6 py-12 md:px-10 md:py-20">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="max-w-xl">
          <SectionLabel className="mb-3">{platform.label}</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-[clamp(1.3rem,3vw,2rem)] font-bold leading-[1.15] text-primary"
          >
            {platform.introTitle}
          </motion.h2>
          <p className="mt-4 font-mono text-xxs font-semibold uppercase tracking-[0.2em] text-dim">
            {platform.type}
          </p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs-plus leading-[1.9] text-muted"
        >
          {platform.description}
        </motion.p>
      </div>
    </div>
  );
}
