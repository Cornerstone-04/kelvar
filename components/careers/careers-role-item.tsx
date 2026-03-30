"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { site } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

interface CareerRole {
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

interface CareersRoleItemProps {
  role: CareerRole;
  index: number;
}

export default function CareersRoleItem({ role, index }: CareersRoleItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group grid grid-cols-1 items-center gap-4 border-t border-border-col py-8 md:grid-cols-[1fr_auto]"
    >
      <div>
        <h3 className="mb-2 font-heading text-[1.4rem] font-bold text-white transition-colors group-hover:text-white/80">
          {role.title}
        </h3>

        <div className="mb-3 flex flex-wrap gap-3">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
            {role.department}
          </span>
          <span className="text-white/15">·</span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
            {role.location}
          </span>
          <span className="text-white/15">·</span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
            {role.type}
          </span>
        </div>

        <p className="max-w-2xl font-mono text-[0.78rem] leading-relaxed text-white/40">
          {role.summary}
        </p>
      </div>

      <Link
        href={`mailto:${site.email}?subject=Application — ${role.title}`}
        className="shrink-0 border border-white/15 px-6 py-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white"
      >
        Apply <BsArrowRight />
      </Link>
    </motion.div>
  );
}
