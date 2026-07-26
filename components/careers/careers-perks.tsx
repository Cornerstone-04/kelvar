"use client";

import { motion } from "motion/react";
import { careers } from "@/content/careers";
import { SectionLabel } from "@/components/ui/section-label";
import { BsArrowReturnRight } from "react-icons/bs";

export function CareersPerks() {
  return (
    <div className="border-b border-border-col bg-surface px-6 py-16 md:px-12">
      <SectionLabel>Why Kelvar</SectionLabel>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
        {careers.perks.map((perk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border border-border-col px-4 py-4 font-mono text-[0.72rem] text-white/60 flex items-center"
          >
            <span className="mr-2 text-white/50">
              <BsArrowReturnRight />
            </span>
            {perk}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
