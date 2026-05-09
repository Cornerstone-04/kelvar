"use client";

import { motion } from "motion/react";

type DomainCapabilitiesProps = {
  capabilities: string[];
};

export function DomainCapabilities({ capabilities }: DomainCapabilitiesProps) {
  return (
    <div>
      <div className="mb-6 font-mono text-xxs uppercase tracking-[0.25em] text-dim">
        Capabilities
      </div>

      <div className="border-t border-[#ffffff12]">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex items-center gap-4 border-b border-[#ffffff12] py-4"
          >
            <span className="shrink-0 font-mono text-xxs tracking-[0.15em] text-dim">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-mono text-xs-plus text-muted">
              {capability}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
