"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { site } from "@/lib/data";
import { BsArrowUpRight } from "react-icons/bs";
import { Rule } from "../ui/rule";

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

export function CareersRoleItem({ role, index }: CareersRoleItemProps) {
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
        {/* Top row — title + location/type */}
        <div className="flex items-start justify-between gap-4 px-6 py-5">
          <div>
            <h3 className="mb-1.5 font-heading text-[1.3rem] font-bold text-white transition-colors group-hover:text-white/80">
              {role.title}
            </h3>
            <p className="font-mono text-xs-plus text-muted">
              {role.location} · {role.type}
            </p>
          </div>
          <BsArrowUpRight
            className="mt-1 shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60"
            size={16}
          />
        </div>

        <Rule />

        {/* Bottom row — summary */}
        <div className="px-6 py-4">
          <p className="font-mono text-xs-plus leading-relaxed text-muted group-hover:text-white/45 transition-colors duration-200">
            {role.summary}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
