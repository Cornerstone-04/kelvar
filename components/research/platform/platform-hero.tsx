"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LazyVideo } from "@/components/ui/lazy-video";
import type { ResearchPlatform } from "@/types/research-types";

export function PlatformHero({ platform }: { platform: ResearchPlatform }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2 }}
      className="relative mb-0 aspect-video w-full overflow-hidden"
    >
      {platform.hero.kind === "video" ? (
        <LazyVideo
          src={platform.hero.src}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
        />
      ) : (
        <Image
          src={platform.hero.src}
          alt={platform.hero.alt}
          fill
          priority={platform.id === "stratos"}
          sizes="100vw"
          className="object-cover brightness-[0.55]"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_8%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,7,42,0.5)_100%)]" />
      <div className="absolute bottom-8 left-6 md:left-10">
        <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] font-black normal-case leading-none text-primary">
          {platform.name}
          {platform.trademark && (
            <sup className="ml-1 align-super text-[0.25em] text-primary">™</sup>
          )}
        </h2>
        <p className="mt-2 max-w-[40ch] font-mono text-xs-plus font-medium text-muted md:text-base">
          {platform.tagline}
        </p>
      </div>
    </motion.div>
  );
}
