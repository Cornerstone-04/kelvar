"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import { ethos, focus } from "@/lib/data";

function PillarGrid({ items }: { items: typeof ethos }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px bg-[#ffffff12]">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-bg p-6"
        >
          {/* Image */}
          <div className="group/img relative mb-4 aspect-video overflow-hidden bg-surface">
            <img
              src={item.image}
              alt={item.word}
              className="absolute inset-0 h-full w-full object-cover brightness-[0.45] saturate-[0.5] transition-all duration-500 ease-out group-hover/img:brightness-[0.7] group-hover/img:saturate-[0.7] group-hover/img:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,#07072a99_0%,transparent_60%)]" />
          </div>

          {/* ID */}
          <p className="mb-2 font-mono text-xxs tracking-[0.25em] text-dim uppercase">
            {item.id}
          </p>

          {/* Word */}
          <h3 className="font-heading text-[1.4rem] font-black uppercase leading-none tracking-[0.02em] text-primary mb-2">
            {item.word}
          </h3>

          {/* Sub */}
          <p className="font-mono text-[0.6rem] leading-relaxed text-muted">
            {item.sub}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function EthosSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-12">
        <SectionLabel>Ethos</SectionLabel>
      </div>
      <PillarGrid items={ethos} />
    </section>
  );
}

export function AreasOfFocusSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-12">
        <SectionLabel>Areas of Focus</SectionLabel>
      </div>
      <PillarGrid items={focus} />
    </section>
  );
}
