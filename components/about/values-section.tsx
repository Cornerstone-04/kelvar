import { values } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { motion } from "motion/react";

export const ValuesSection = () => {
  return (
    <div className="border-b border-border-col px-6 py-20 md:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-white/20 uppercase">
            03
          </span>
          <SectionLabel>Values</SectionLabel>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-border-col py-8 pr-8"
            >
              <div className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-white/20">
                0{i + 1}
              </div>
              <h3 className="mb-3 font-heading text-[1.5rem] font-bold text-white">
                {v.title}
              </h3>
              <p className="font-mono text-[0.75rem] leading-relaxed text-white/40">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
