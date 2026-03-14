"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { drones, site } from "@/lib/data";
import GlitchText from "@/components/ui/glitch-text";
import { Rule } from "@/components/ui/rule";
import { SectionLabel } from "@/components/ui/section-label";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-bg">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-svh items-end overflow-hidden"
      >
        {/* Noise / grain texture */}
        <div
          className="pointer-events-none absolute inset-0 z-1 bg-size-[256px_256px] bg-repeat opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Radial glow from top-centre */}
        <div className="pointer-events-none absolute top-[-10%] left-1/2 z-0 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285080_0%,transparent_65%)]" />

        {/* Horizon line */}
        <div className="absolute right-0 bottom-[38%] left-0 z-1 h-px bg-[linear-gradient(90deg,transparent_0%,#ffffff0f_30%,#ffffff0f_70%,transparent_100%)]" />

        {/* Hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-2 w-full px-10 py-24"
        >
          <GlitchText
            tag="p"
            text={site.location}
            delay={400}
            className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-[14ch] font-heading text-[clamp(4.5rem,14vw,13rem)] leading-[0.9] font-black uppercase tracking-[-0.02em] text-primary"
          >
            Engineering
            <br />
            Unmanned
            <br />
            <span
              className="text-transparent [WebkitTextStroke:1px_#f5f5f940]"
              style={{ WebkitTextStroke: "2px #f5f5f940" }}
            >
              Flight
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link
              href="#platforms"
              className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary no-underline transition-colors duration-200 ease-in-out hover:border-[#ffffff80]"
            >
              Explore Platforms <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom drone nav strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute right-10 bottom-6 z-2 hidden gap-6 md:flex"
        >
          {drones.map((d) => (
            <a
              key={d.id}
              href={`#drone-${d.id}`}
              className="font-mono text-xs uppercase tracking-[0.2em]  text-white/25 no-underline transition-colors duration-200 ease-linear hover:text-white/70"
            >
              {d.name}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="border-t border-[#ffffff12] px-10 py-32">
        <div className="max-w-200">
          <div className="mb-8">
            <SectionLabel>Mission</SectionLabel>
          </div>

          <p className="mb-10 font-heading text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.35] font-bold uppercase text-primary">
            {site.mission}
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-[#ffffff1f] px-[1.2rem] py-[0.6rem] font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/40 no-underline transition-all duration-200 ease-in-out hover:border-[#ffffff66] hover:text-white"
          >
            Read More →
          </Link>
        </div>
      </section>

      {/* ── DRONE PLATFORMS ── */}
      <section id="platforms" className="border-t border-[#ffffff12]">
        {drones.map((drone, i) => (
          <div key={drone.id} id={`drone-${drone.id}`}>
            {/* Label row */}
            <div
              className={`flex items-start gap-12 px-10 pt-12 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Overline number */}
              <div className="min-w-8 pt-2.5">
                <GlitchText
                  className="font-mono text-xxs tracking-[0.2em] text-dim"
                  text={drone.id}
                  speed={60}
                />
                {/*<span className="font-mono text-xxs tracking-[0.2em] text-dim">
                  {drone.id}
                </span>*/}
              </div>

              {/* Name + description */}
              <div
                className={`flex flex-1 flex-col md:items-baseline-last md:gap-12 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <h2
                  className={`mb-5 font-heading text-[clamp(3rem,9vw,7rem)] leading-[0.95] font-black uppercase text-primary ${
                    i % 2 !== 0 ? "md:text-right" : ""
                  }`}
                >
                  {drone.name}
                </h2>

                <GlitchText
                  className={`max-w-[65ch] font-mono text-xs-plus leading-[1.75] text-muted ${
                    i % 2 !== 0 ? "md:text-right" : ""
                  }`}
                  text={drone.desc}
                  speed={50}
                />
              </div>
            </div>

            {/* Image block 1 — JPG */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="relative mt-6 mb-0 mx-10 aspect-16/7 overflow-hidden bg-surface"
            >
              <img
                src={drone.assets.image}
                alt={drone.name}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.55] saturate-[0.7]"
              />
            </motion.div>

            {/* Image block 2 — Video */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className={`relative mt-6 mb-0 aspect-video overflow-hidden bg-card ${
                i % 2 === 0 ? "mr-20 ml-10" : "mr-10 ml-20"
              }`}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-cover brightness-[0.45] saturate-[0.6] ${
                  i % 2 === 0 ? "object-[center_30%]" : "object-[center_70%]"
                }`}
              >
                <source src={drone.assets.video} type="video/mp4" />
              </video>
            </motion.div>

            <Rule />
          </div>
        ))}
      </section>

      {/* ── NEWSROOM PREVIEW ── */}
      <section className="border-t border-[#ffffff12] px-10 py-28">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="flex items-center gap-3 font-heading text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase text-primary">
            Press
            <span className="text-[1.2rem] font-normal">↗</span>
          </h2>

          <Link
            href="/press"
            className="border-b border-[#ffffff26] pb-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted no-underline transition-colors"
          >
            See All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px bg-[#ffffff12]">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-bg p-6">
              <div className="relative mb-4 aspect-video overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,#28284699_0%,transparent_60%)]" />
              </div>

              <p className="mb-2 font-mono text-[0.7rem] leading-normal text-primary">
                Placeholder press headline — awaiting client content
              </p>

              <p className="font-mono text-[0.6rem] text-muted">
                Placeholder Outlet
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
