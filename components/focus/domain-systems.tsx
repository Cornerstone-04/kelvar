"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import type { FocusSystem } from "@/types/focus-types";

type DomainSystemsProps = {
  domainName: string;
  systems: FocusSystem[];
};

export function DomainSystems({ domainName, systems }: DomainSystemsProps) {
  return (
    <div>
      <div className="mb-6 font-mono text-xxs uppercase tracking-[0.25em] text-muted">
        {domainName} Systems
      </div>

      <div className="grid grid-cols-1 gap-px bg-bg md:grid-cols-2">
        {systems.map((system, index) => (
          <motion.div
            key={system.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-bg py-8 md:px-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mb-2 font-heading text-[1.6rem] font-black text-primary transition-colors group-hover:text-primary/80">
                  {system.name}
                </h3>

                <p className="max-w-[45ch] font-mono text-xs-plus leading-[1.75] text-muted">
                  {system.desc}
                </p>
              </div>

              {system.slug && (
                <Link
                  href={`/drones/${system.slug}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#ffffff26] px-4 py-2 font-mono text-xxs uppercase tracking-[0.15em] text-primary/50 transition-all duration-200 hover:border-[#ffffff60] hover:text-primary"
                >
                  View <BsArrowRight />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
