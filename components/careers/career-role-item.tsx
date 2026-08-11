"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Rule } from "@/components/ui/rule";
import { site } from "@/content/site";
import type { CareerRole } from "@/types/content-types";

export function CareerRoleItem({
  role,
  index,
}: {
  role: CareerRole;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        href={`mailto:${site.email}?subject=Application — ${role.title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-border-col no-underline transition-colors duration-200 hover:border-white/20"
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5">
          <div>
            <span className="mb-3 inline-flex border border-white/10 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-dim">
              {role.department}
            </span>
            <h3 className="mb-1.5 font-heading text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-none text-white transition-colors group-hover:text-white/80">
              {role.title}
            </h3>
            <p className="font-mono text-xs-plus text-muted">
              {role.location} · {role.type}
            </p>
          </div>
          <BsArrowUpRight
            className="mt-1 shrink-0 text-dim transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            size={16}
          />
        </div>
        <Rule />
        <div className="px-6 py-4">
          <p className="font-mono text-xs-plus leading-relaxed text-muted transition-colors duration-200 group-hover:text-primary">
            {role.summary}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
