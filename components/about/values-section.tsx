"use client";

import { motion, useReducedMotion } from "motion/react";
import { values } from "@/content/about";
import { AboutSectionHeading } from "./section-heading";

export function ValuesSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="border-b border-border-col px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <AboutSectionHeading label="Values" />
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-bg p-7 md:p-9"
            >
              <div className="mb-8 flex justify-end">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={
                    reduceMotion ? undefined : { opacity: [0.25, 1, 0.25] }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>
              <h3 className="mb-3 font-heading text-[1.7rem] font-bold text-white transition-opacity group-hover:opacity-80">
                {value.title}
              </h3>
              <p className="font-mono text-xs-plus leading-relaxed text-muted">
                {value.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
