import { PlatformDomain } from "@/lib/platform-types";
import { SectionLabel } from "../ui/section-label";
import { motion } from "motion/react";

export function CardDomains({
  label,
  domains,
}: {
  label: string;
  domains: PlatformDomain[];
}) {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20">
      <div className="mb-12">
        <SectionLabel>{label}</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-3">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-bg py-8 sm:px-6 md:px-8 md:py-10"
          >
            <h3 className="mb-2 font-heading text-[1.3rem] font-bold leading-tight text-primary">
              {domain.name}
            </h3>

            <p className="mb-6 border-b border-[#ffffff12] pb-6 font-mono text-xxs uppercase tracking-widest text-muted">
              {domain.headline}
            </p>

            <div className="space-y-3">
              {domain.capabilities.map((capability, capabilityIndex) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: -4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + capabilityIndex * 0.05,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="py-1 font-mono text-xxs font-bold tracking-[0.2em] text-dim">
                    {String(capabilityIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-xs-plus leading-relaxed text-muted">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
