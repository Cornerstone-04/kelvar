"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { KelvarxProgramme } from "@/types/kelvarx-types";
import { SectionLabel } from "@/components/ui/section-label";

export function KelvarxHero({
  programme,
}: {
  programme: KelvarxProgramme;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="relative min-h-[88svh] overflow-hidden border-y border-white/10">
        {programme.hero.src && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={programme.hero.src}
              alt={programme.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top brightness-[0.42] saturate-[0.7]"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,rgba(7,7,42,0.2)_48%,rgba(7,7,42,0.75)_100%)]" />
        <div className="relative flex min-h-[88svh] flex-col justify-end px-6 py-12 md:px-10 md:py-20">
          <p className="max-w-3xl font-mono text-xxs uppercase tracking-[0.28em] text-white/65 md:text-xs">
            {programme.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-[clamp(5rem,15vw,13rem)] font-black leading-[0.8] text-primary">
            {programme.name}
          </h2>
          <p className="mt-7 max-w-3xl font-mono text-xs-plus leading-[1.9] text-white/68 md:text-sm">
            {programme.description}
          </p>
          <nav
            aria-label="KELVARX sections"
            className="mt-10 flex flex-wrap gap-2 font-mono text-xxs uppercase tracking-[0.16em]"
          >
            {[
              ["Stratos Series", "#stratos-series"],
              ["KAIN", "#kain"],
              ["AI Command", "#kelvar-ai-command"],
              ["Applications", "#kelvarx-applications"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="min-h-11 border border-white/15 px-4 py-3 text-white/55 transition-colors hover:border-white/50 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="grid gap-8 border-b border-white/10 px-6 py-14 md:px-10 md:py-24 lg:grid-cols-2 lg:items-end">
        <div>
          <SectionLabel>Division Vision</SectionLabel>
          <h3 className="mt-6 max-w-3xl font-heading text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.88]">
            Atmospheric intelligence for a connected future.
          </h3>
        </div>
        <p className="font-mono text-xs-plus leading-[1.95] text-muted md:text-sm">
          {programme.vision}
        </p>
      </div>
    </>
  );
}
