"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
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
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={heroRef}
      className={`relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-18 md:px-12 md:pt-36 ${className}`}
    >
      <NoiseOverlay className="opacity-30" />
      <AmbientField className="opacity-80" />

      <motion.div
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }
        className="relative z-1 max-w-5xl"
      >
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
          className="type-product max-w-[14ch] text-white"
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
            className="mt-8 max-w-[75ch] font-mono text-xs-plus leading-[1.9] text-muted"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
