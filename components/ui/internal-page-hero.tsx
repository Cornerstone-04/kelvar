"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./section-label";
import { NoiseOverlay, AmbientField } from "./ambient-field";

type InternalPageHeroProps = {
  label: string;
  title: string;
  outline?: string;
  description?: string;
  className?: string;
};

export function InternalPageHero({
  label,
  title,
  outline,
  description,
  className = "",
}: InternalPageHeroProps) {
  return (
    <section
      className={`relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-18 md:px-12 md:pt-36 ${className}`}
    >
      <NoiseOverlay className="opacity-30" />
      <AmbientField className="opacity-80" />

      <div className="relative z-1 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <SectionLabel>{label}</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] font-black leading-none text-white"
        >
          {title}
          {outline && (
            <>
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#ffffff40]">
                {outline}
              </span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-[75ch] font-mono text-xs-plus leading-[1.9] text-white/42"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
