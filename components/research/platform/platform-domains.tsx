"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Rule } from "@/components/ui/rule";
import { SectionLabel } from "@/components/ui/section-label";
import type { PlatformDomain, ResearchPlatform } from "@/types/research-types";
import { NumberedList } from "./numbered-list";

export function PlatformDomains({ platform }: { platform: ResearchPlatform }) {
  return platform.domainsLayout === "immersive" ? (
    <ImmersiveDomains platform={platform} />
  ) : (
    <CardDomains label={platform.domainsLabel} domains={platform.domains} />
  );
}

function ImmersiveDomains({ platform }: { platform: ResearchPlatform }) {
  return (
    <>
      {platform.domains.map((domain, index) => (
        <div key={domain.id}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full overflow-hidden md:aspect-21/9"
          >
            <Image
              src={domain.image}
              alt={`${platform.name} — ${domain.name}`}
              fill
              sizes="100vw"
              className="object-cover brightness-50 saturate-[0.5]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_55%)]" />
            <div className="absolute bottom-0 left-6 right-6 flex items-end justify-between pb-6 md:left-10 md:right-10 md:pb-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-heading text-[clamp(4rem,10vw,8rem)] font-black normal-case leading-none tracking-[-0.02em] text-primary"
              >
                {domain.name}
              </motion.h3>
              <span className="mb-2 shrink-0 font-mono text-xxs font-medium tracking-[0.2em] text-muted md:mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
          <div className="px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
              <p className="font-mono text-xxs font-medium uppercase leading-relaxed tracking-[0.25em] text-muted">
                {domain.headline}
              </p>
              <NumberedList items={domain.capabilities} animated />
            </div>
          </div>
          <Rule />
        </div>
      ))}
    </>
  );
}

function CardDomains({
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
            className="flex flex-col justify-between bg-bg py-8 sm:px-6 md:px-8 md:py-10"
          >
            <div>
              <div className="relative mb-6 aspect-4/5 w-full overflow-hidden border border-[#ffffff08] bg-[#ffffff05] sm:aspect-3/4 md:aspect-4/5">
                <Image
                  src={domain.image}
                  alt={domain.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="select-none object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </div>
              <h3 className="mb-2 font-heading text-[1.3rem] font-bold leading-tight text-primary">
                {domain.name}
              </h3>
              <p className="mb-6 border-b border-[#ffffff12] pb-6 font-mono text-xxs uppercase tracking-widest text-muted">
                {domain.headline}
              </p>
            </div>
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
