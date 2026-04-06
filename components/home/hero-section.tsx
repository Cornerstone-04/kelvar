"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { drones, site } from "@/lib/data";
import { GlitchText } from "@/components/ui/glitch-text";
import { BsArrowRight } from "react-icons/bs";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      {/* Hero background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-50 saturate-[0.6]"
      >
        <source src="/videos/kelvar_showcase.mp4" type="video/mp4" />
      </video>

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
        style={{ y: heroY, opacity: heroOpacity }}
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-[14ch] font-heading text-[clamp(4.5rem,14vw,13rem)] leading-[0.9] font-black uppercase tracking-[-0.02em] text-primary"
        >
          CCTV
          <br />
          That Moves
          <br />
          <span
            className="text-transparent [WebkitTextStroke:1px_#f5f5f940]"
            style={{ WebkitTextStroke: "2px #f5f5f940" }}
          >
            Everywhere
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            href="#platforms"
            className="inline-flex justify-center items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary no-underline transition-colors duration-200 ease-in-out hover:border-[#ffffff80]"
          >
            Explore Platforms <BsArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom drone nav strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute right-10 bottom-8 z-2 hidden gap-3 md:flex"
      >
        {drones.map((d) => (
          <a
            key={d.id}
            href={`/#${d.slug}`}
            className="group relative overflow-hidden border border-white/8 bg-white/4 px-4 py-2 font-mono text-xxs uppercase tracking-[0.2em] text-white/25 no-underline backdrop-blur-md transition-all duration-300 ease-linear hover:border-white/15 hover:bg-white/8 hover:text-white/70"
          >
            {/* soft glow hover */}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative z-1">{d.name}</span>
          </a>
        ))}
      </motion.div>

      {/*scroll indicator*/}
      {/*<motion.div className="md:hidden" style={{ opacity: indicatorOpacity }}>
        <ScrollIndicator />
      </motion.div>*/}
    </section>
  );
}
