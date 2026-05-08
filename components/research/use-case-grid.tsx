import { PlatformUseCase } from "@/lib/platform-types";
import { SectionLabel } from "../ui/section-label";
import { motion } from "motion/react";
import { NumberedList } from "./numbered-list";

export function UseCaseGrid({ useCases }: { useCases: PlatformUseCase[] }) {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20">
      <div className="mb-12">
        <SectionLabel>Use Cases</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-3">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-surface px-6 py-8 md:px-8 md:py-10"
          >
            <h3 className="mb-6 font-heading text-[1.2rem] font-bold text-primary">
              {useCase.category}
            </h3>

            <NumberedList items={useCase.items} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
