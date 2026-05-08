import { PlatformTechnology } from "@/lib/platform-types";
import { SectionLabel } from "../ui/section-label";
import { motion } from "motion/react";

export function TechnologyGrid({
  technologies,
}: {
  technologies: PlatformTechnology[];
}) {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20">
      <div className="mb-12">
        <SectionLabel>Core Technologies</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-3">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-bg py-8 sm:px-6 md:px-8 md:py-10"
          >
            <div className="mb-4 font-mono text-xxs uppercase tracking-[0.2em] text-dim">
              {technology.id}
            </div>

            <h3 className="mb-3 font-heading text-[1.3rem] font-bold text-primary">
              {technology.title}
            </h3>

            <p className="font-mono text-xs-plus leading-[1.75] text-muted">
              {technology.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
