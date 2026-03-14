"use client";

import { motion } from "motion/react";
import { careers } from "@/lib/data";

export default function CareersHeader() {
  return (
    <div className="border-b border-border-col px-6 py-20 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-white/25"
      >
        Join the Team
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-6 font-heading text-[clamp(3rem,10vw,8rem)] leading-none font-black tracking-[-0.02em] text-white"
      >
        {careers.headline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl font-mono text-[0.9rem] leading-relaxed text-white/40"
      >
        {careers.intro}
      </motion.p>
    </div>
  );
}