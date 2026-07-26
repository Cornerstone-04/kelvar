"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { ProductDetail } from "@/types/product-types";
import { GlitchText } from "@/components/ui/glitch-text";
import { KelvarButton } from "@/components/ui/kelvar-button";
import { NoiseOverlay } from "@/components/ui/ambient-field";

export function DroneVideoHero({ drone }: { drone: ProductDetail }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-[0.32] saturate-[0.58]"
      >
        <source src={drone.assets.videoAlt} type="video/mp4" />
      </video>

      <NoiseOverlay className="z-1 opacity-45" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_top,var(--bg)_0%,rgba(7,7,42,0.12)_44%,rgba(7,7,42,0.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-[38%] z-1 h-px bg-[linear-gradient(90deg,transparent_0%,#ffffff12_30%,#ffffff12_70%,transparent_100%)]" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-2 w-full px-6 py-12 md:px-10 md:py-24"
      >
        <GlitchText
          tag="p"
          text="Kelvar Industries / Autonomous Aerial CCTV"
          delay={400}
          speed={100}
          className="mb-6 font-mono text-xxs uppercase tracking-[0.3em] text-muted"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-heading text-[clamp(4rem,14vw,11rem)] font-black leading-none text-primary"
        >
          {drone.name}
          {drone.trademark && (
            <sup className="ml-2 align-super text-[0.25em] text-primary/30">
              ™
            </sup>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10 max-w-[58ch] font-mono text-xs-plus leading-[1.75] text-muted"
        >
          {drone.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <KelvarButton href="/contact">Enquire Now</KelvarButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
