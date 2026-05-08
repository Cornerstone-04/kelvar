import { research } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { motion } from "motion/react";

export function ResearchAreas() {
  return (
    <section className="px-6 py-12 md:px-10 md:py-24">
      <div className="mb-6 md:mb-12">
        <SectionLabel>Areas of Research</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-2">
        {research.areas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-bg py-10 md:px-8"
          >
            <div className="mb-4 font-mono text-xxs uppercase tracking-[0.2em] text-dim">
              {area.id}
            </div>

            <h3 className="mb-3 font-heading text-[1.6rem] font-bold text-primary">
              {area.title}
            </h3>

            <p className="font-mono text-xs-plus leading-[1.75] text-muted">
              {area.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
