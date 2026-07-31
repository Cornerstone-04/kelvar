"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { KelvarxSystem } from "@/types/kelvarx-types";
import { SectionLabel } from "@/components/ui/section-label";

export function StratosSeries({ systems }: { systems: KelvarxSystem[] }) {
  return (
    <section
      id="stratos-series"
      className="scroll-mt-20 border-b border-white/10 px-6 py-14 md:px-10 md:py-24"
    >
      <SectionLabel>KELVARX Stratos Series</SectionLabel>
      <h3 className="mt-7 max-w-4xl font-heading text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.85]">
        Three systems. One atmospheric intelligence layer.
      </h3>
      <div className="mt-16 grid gap-20">
        {systems.map((system, index) => (
          <SystemStory key={system.id} system={system} index={index} />
        ))}
      </div>
    </section>
  );
}

function SystemStory({
  system,
  index,
}: {
  system: KelvarxSystem;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-start"
    >
      <div
        className={`relative min-h-112 overflow-hidden border border-white/10 bg-surface ${
          index % 2 ? "lg:order-2" : ""
        }`}
      >
        {system.media.src ? (
          <Image
            src={system.media.src}
            alt={system.media.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover brightness-[0.7] saturate-[0.72]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent)]">
            <div className="text-center">
              <p className="font-heading text-5xl font-black text-white/15">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 font-mono text-xxs uppercase tracking-[0.22em] text-white/35">
                {system.media.placeholder}
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,42,0.72),transparent_55%)]" />
      </div>

      <div className={index % 2 ? "lg:order-1" : ""}>
        <p className="font-mono text-xxs uppercase tracking-[0.22em] text-muted">
          {system.type}
        </p>
        <h4 className="mt-4 font-heading text-[clamp(3rem,6vw,6rem)] font-black leading-[0.85]">
          {system.href ? (
            <Link
              href={system.href}
              className="transition-opacity hover:opacity-75"
            >
              {system.name}
            </Link>
          ) : (
            system.name
          )}
        </h4>
        <p className="mt-6 font-mono text-xs-plus leading-[1.85] text-muted">
          {system.description}
        </p>
        <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <SystemList title="Payload" items={system.payload} />
          <SystemList title="Data" items={system.dataCollected} />
          <SystemList title="Missions" items={system.missions} />
        </div>
      </div>
    </motion.article>
  );
}

function SystemList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-bg p-5">
      <h5 className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
        {title}
      </h5>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-t border-white/8 pt-3 font-mono text-[0.7rem] leading-relaxed text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
