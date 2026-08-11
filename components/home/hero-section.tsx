"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { platformSummaries } from "@/content/products/summaries";
import { site } from "@/content/site";
import { GlitchText } from "@/components/ui/glitch-text";
import { BsArrowRight } from "react-icons/bs";
import { LazyVideo } from "@/components/ui/lazy-video";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

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
      {/* Hero background video */}
      <LazyVideo
        src="/assets/videos/brand/kelvar-showcase.webm"
        eager
        poster="/assets/images/platforms/dome/sky-dome-poster.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-50 saturate-[0.6]"
      />

      {/* Noise / grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-size-[256px_256px] bg-repeat opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-[-10%] left-1/2 z-0 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285080_0%,transparent_65%)]" />

      {/* Horizon line */}
      <div className="absolute right-0 bottom-[38%] left-0 z-1 h-px bg-[linear-gradient(90deg,transparent_0%,#ffffff0f_30%,#ffffff0f_70%,transparent_100%)]" />

      {/* Hero content */}
      <motion.div
        style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        className="relative z-2 w-full px-6 md:px-10 py-12 md:py-24"
      >
        <GlitchText
          tag="p"
          text={site.location}
          delay={400}
          speed={100}
          className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted"
        />

        <motion.h1
          initial={false}
          className="mb-10 max-w-[14ch] font-heading text-[clamp(4.5rem,14vw,13rem)] leading-[0.9] font-black uppercase tracking-[-0.02em] text-primary"
        >
          Surveillance
          <br />
          That Moves
          <br />
          <span
            className="text-transparent [WebkitTextStroke:1px_#f5f5f940]"
            style={{ WebkitTextStroke: "2px rgba(245,245,249,0.5)" }}
          >
            Everywhere
          </span>
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            href="#platforms"
            className="kelvar-button-frame group inline-flex min-h-12 items-center justify-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
          >
            Explore Platforms <BsArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom drone nav strip */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute right-10 bottom-8 z-2 hidden gap-3 md:flex"
      >
        {platformSummaries.map((d) => (
          <a
            key={d.id}
            href={d.href ?? `/#${d.slug}`}
            className="group relative overflow-hidden border border-white/8 bg-white/4 px-4 py-2 font-mono text-xxs uppercase tracking-[0.2em] text-white/60 no-underline backdrop-blur-md transition-[color,background-color,border-color] duration-200 ease-out hover:border-white/15 hover:bg-white/8 hover:text-white/85"
          >
            {/* soft glow hover */}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative z-1">{d.name}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
