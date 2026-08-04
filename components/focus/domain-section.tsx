"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";
import type { FocusDetail, FocusSystem } from "@/types/focus-types";

type FocusDomain = {
  id: string;
  word: string;
  image: string;
};

type DomainSectionProps = {
  domain: FocusDomain;
  detail: FocusDetail;
};

export function DomainSection({ domain, detail }: DomainSectionProps) {
  return (
    <section
      id={`focus-${domain.word.toLowerCase()}`}
      className="scroll-mt-32 border-b border-white/10 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(28rem,0.92fr)]"
    >
      <DomainHero domain={domain} />
      <div className="border-t border-white/10 px-6 py-12 md:px-10 md:py-20 lg:border-l lg:border-t-0">
        <DomainContent domain={domain} detail={detail} />
      </div>
    </section>
  );
}

function DomainHero({ domain }: { domain: FocusDomain }) {
  const isSpace = domain.word.toLowerCase() === "space";

  return (
    <div className="group relative aspect-video overflow-hidden lg:sticky lg:top-30 lg:h-[calc(100svh-7.5rem)] lg:aspect-auto">
      <Image
        src={domain.image}
        alt={domain.word}
        fill
        sizes="100vw"
        className={`object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.025] ${
          isSpace
            ? "brightness-[0.72] saturate-[0.65]"
            : "brightness-[0.48] saturate-[0.58]"
        }`}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_60%)]" />

      <span className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 font-heading text-[clamp(12rem,28vw,30rem)] font-black leading-none text-white/[0.035]">
        {domain.id}
      </span>

      <div className="absolute bottom-8 left-6 flex items-end gap-6 md:left-10 md:bottom-10">
        <span className="font-mono text-xxs font-bold tracking-[0.2em] text-muted">
          {domain.id}
        </span>

        <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-[-0.02em] text-primary">
          {domain.word}
        </h2>
      </div>
    </div>
  );
}

function DomainContent({ domain, detail }: DomainSectionProps) {
  return (
    <>
      <div className="mb-16 grid grid-cols-1 items-start gap-12">
        <div>
          <div className="mb-8">
            <SectionLabel>{detail.headline}</SectionLabel>
          </div>

          {detail.body.map((paragraph, index) => (
            <motion.div
              key={paragraph}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4 font-mono text-xs-plus leading-[1.85] text-muted"
            >
              <ScrollingText text={paragraph} />
            </motion.div>
          ))}
        </div>

        <DomainCapabilities capabilities={detail.capabilities} />
      </div>

      <DomainSystems domainName={domain.word} systems={detail.systems} />
    </>
  );
}

function DomainCapabilities({ capabilities }: { capabilities: string[] }) {
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

function DomainSystems({
  domainName,
  systems,
}: {
  domainName: string;
  systems: FocusSystem[];
}) {
  return (
    <div>
      <div className="mb-6 font-mono text-xxs uppercase tracking-[0.25em] text-muted">
        {domainName} Systems
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/8">
        {systems.map((system, index) => (
          <motion.div
            key={system.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-bg py-8 md:px-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mb-2 font-heading text-[1.6rem] font-black text-primary transition-colors group-hover:text-primary/80">
                  {system.name}
                </h3>

                <span className="mb-4 inline-flex border border-white/10 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-dim">
                  {system.slug === "dome" ? "Flagship" : "In Development"}
                </span>

                <p className="max-w-[45ch] font-mono text-xs-plus leading-[1.75] text-muted">
                  {system.desc}
                </p>
              </div>

              {system.slug && (
                <Link
                  href={
                    system.slug === "kelvarx" ? "/kelvarx" : `/#${system.slug}`
                  }
                  className="kelvar-button-frame inline-flex shrink-0 items-center justify-center gap-2 border px-4 py-2 font-mono text-xxs uppercase tracking-[0.15em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
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
