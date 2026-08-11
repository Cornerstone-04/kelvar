"use client";

import { motion, useReducedMotion } from "motion/react";
import { team } from "@/content/about";
import { ScrollingText } from "@/components/ui/scrolling-text";
import { AboutSectionHeading } from "./section-heading";

const revealTransition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

export function TeamSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <AboutSectionHeading label="Team" />
        <div>
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: index * 0.08 }}
              className="group grid grid-cols-1 gap-8 border-t border-border-col py-10 md:grid-cols-[160px_1fr]"
            >
              <motion.div
                whileHover={
                  reduceMotion ? undefined : { rotate: -2, scale: 1.03 }
                }
                className="flex h-30 w-30 shrink-0 items-center justify-center border border-border-col bg-surface transition-colors group-hover:border-white/40"
              >
                <span className="font-heading text-3xl font-black text-white/15">
                  {member.name[0]}
                </span>
              </motion.div>
              <div>
                <h3 className="mb-1 font-heading text-[1.4rem] font-bold text-white">
                  {member.name}
                </h3>
                <div className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-dim">
                  {member.role}
                </div>
                <ScrollingText
                  text={member.bio}
                  className="max-w-[75ch] font-mono text-xs-plus leading-[1.85] text-white"
                />
              </div>
            </motion.article>
          ))}
          <div className="border-t border-border-col" />
        </div>
      </div>
    </section>
  );
}
