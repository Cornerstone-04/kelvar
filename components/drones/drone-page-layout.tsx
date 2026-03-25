"use client";

import { useRef } from "react";
import { LuHouse, LuBuilding2, LuFactory, LuGlobe } from "react-icons/lu";
import type { IconType } from "react-icons";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { GlitchText } from "@/components/ui/glitch-text";
import { Rule } from "@/components/ui/rule";
import type { DronePageData } from "@/lib/data";
import Image from "next/image";

const iconMap: Record<string, IconType> = {
  house: LuHouse,
  building: LuBuilding2,
  factory: LuFactory,
  globe: LuGlobe,
};

export default function DronePageLayout({ drone }: { drone: DronePageData }) {
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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover brightness-[0.3] saturate-[0.5]"
        >
          <source src={drone.assets.video} type="video/mp4" />
        </video>

        <div
          className="pointer-events-none absolute inset-0 z-1 bg-size-[256px_256px] bg-repeat opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="pointer-events-none absolute top-[-10%] left-1/2 z-0 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285080_0%,transparent_65%)]" />
        <div className="absolute right-0 bottom-[38%] left-0 z-1 h-px bg-[linear-gradient(90deg,transparent_0%,#ffffff0f_30%,#ffffff0f_70%,transparent_100%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-2 w-full px-10 py-24"
        >
          <GlitchText
            tag="p"
            text="Kelvar Industries"
            delay={400}
            speed={100}
            className="font-mono text-xxs uppercase tracking-[0.3em] text-muted mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 font-heading font-black text-[clamp(4rem,14vw,11rem)] leading-none tracking-[-0.02em] text-primary"
          >
            {drone.name}
            {drone.trademark && (
              <sup className="text-[0.25em] align-super ml-2 text-primary/30">
                ™
              </sup>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-mono text-xs-plus leading-[1.75] text-muted max-w-[55ch] mb-10"
          >
            {drone.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80]"
            >
              Enquire Now <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CONCEPT ── */}
      <section className="border-t border-[#ffffff12] px-10 py-32">
        <div className="max-w-300">
          <div className="mb-8">
            <SectionLabel>Concept</SectionLabel>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 font-heading text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.35] font-bold uppercase text-primary"
          >
            {drone.concept}
          </motion.p>
        </div>
      </section>

      <Rule />

      {/* ── FEATURES — alternating rows ── */}
      {drone.features.map((f, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={f.title}>
            <div
              className={`flex items-start gap-12 px-10 pt-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="min-w-8 pt-1.5">
                <GlitchText
                  tag="span"
                  className="font-mono text-xxs tracking-[0.2em] text-dim"
                  text={String(i + 1).padStart(2, "0")}
                  speed={60}
                />
              </div>
              <div
                className={`flex flex-1 flex-col md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <div className="mb-2 font-mono text-xxs tracking-[0.15em] uppercase text-dim">
                    {f.tag}
                  </div>
                  <h2
                    className={`mb-4 font-heading font-black text-[clamp(2rem,5vw,4rem)] leading-none text-primary ${!isEven ? "md:text-right" : ""}`}
                  >
                    {f.title}
                  </h2>
                  <p
                    className={`font-mono text-xs-plus leading-[1.75] text-muted max-w-[55ch] ${!isEven ? "md:ml-auto md:text-right" : ""}`}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative mx-10 mt-8 aspect-video overflow-hidden bg-card"
            >
              <Image
                src={f.image ?? drone.assets.image}
                alt={f.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover brightness-60 group-hover:brightness-75 saturate-[0.5] transition-all ease-linear"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,#07072a_0%,transparent_60%)]" />
            </motion.div>

            <Rule />
          </div>
        );
      })}

      {/* ── USE CASES ── */}
      <section className="border-t border-border-col px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Ideal For</SectionLabel>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border-col sm:grid-cols-2 lg:grid-cols-4">
          {drone.useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-bg overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={uc.image ?? "/images/sky-dome/SKY_DOME_DRONE_01.jpg"}
                  alt={uc.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover brightness-[0.55] saturate-[0.5] transition-all duration-500 hover:brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_55%)]" />
              </div>
              {/* Text */}
              <div className="px-6 py-6">
                <div className="mb-3 text-primary/40">
                  {(() => {
                    const Icon = iconMap[uc.icon] ?? LuGlobe;
                    return <Icon size={18} />;
                  })()}
                </div>
                <h3 className="mb-2 font-heading font-bold text-[1.3rem] text-primary">
                  {uc.label}
                </h3>
                <p className="font-mono text-xxs leading-relaxed text-muted">
                  {uc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── VISION ── */}
      <section className="border-t border-[#ffffff12] px-10 py-32">
        <div className="max-w-300">
          <div className="mb-8">
            <SectionLabel>Vision</SectionLabel>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 font-heading text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.35] font-bold uppercase text-primary"
          >
            {drone.vision}
          </motion.p>
        </div>
      </section>

      <Rule />

      {/* ── SPECS ── */}
      <section className="bg-surface px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Specifications</SectionLabel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="border-t border-border-col">
            {drone.specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-[180px_1fr] border-b border-border-col py-5"
              >
                <span className="font-mono text-xxs uppercase text-left tracking-[0.2em] text-dim">
                  {s.label}
                </span>
                <span className="font-mono text-xs-plus text-right text-primary">
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:block relative overflow-hidden bg-card self-stretch min-h-50"
          >
            <Image
              src="/images/sky-dome/SKY_DOME_DRONE_04.jpg"
              alt="Sky Dome — Side Profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover brightness-[0.6] saturate-[0.5] scale-110"
            />
          </motion.div>
        </div>
      </section>

      <Rule />

      {/* ── STATS ── */}
      <section className="px-10 py-24">
        <div className="mb-12">
          <SectionLabel>The Case for Change</SectionLabel>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border-col md:grid-cols-3">
          {drone.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-bg px-8 py-10"
            >
              <div className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] text-primary leading-none mb-3">
                {s.value}
              </div>
              <div className="font-mono text-xxs uppercase tracking-[0.15em] text-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── PHILOSOPHY ── */}
      <section className="bg-surface px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Philosophy</SectionLabel>
        </div>
        {drone.philosophy.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-border-col py-8 flex items-baseline gap-8"
          >
            <GlitchText
              tag="span"
              text={String(i + 1).padStart(2, "0")}
              speed={60}
              className="font-mono text-xxs tracking-[0.2em] text-dim shrink-0"
            />
            <p className="font-heading font-bold text-[clamp(1.3rem,2.8vw,2rem)] text-primary">
              {line}
            </p>
          </motion.div>
        ))}
        <div className="border-t border-border-col" />
      </section>

      <Rule />

      {/* ── INDUSTRIES ── */}
      <section className="px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Industries We Serve</SectionLabel>
        </div>
        {drone.industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border-t border-border-col py-6 flex items-center gap-8"
          >
            <GlitchText
              tag="span"
              text={String(i + 1).padStart(2, "0")}
              speed={60}
              className="font-mono text-xxs tracking-[0.2em] text-dim shrink-0"
            />
            <span className="font-mono text-xs-plus text-muted">{ind}</span>
          </motion.div>
        ))}
        <div className="border-t border-border-col" />
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-border-col px-10 py-32 text-center">
        <div className="pointer-events-none absolute top-[-20%] left-1/2 z-0 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285060_0%,transparent_65%)]" />
        <div className="relative z-1 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlitchText
              tag="p"
              text="Redefining Safety for a New Era"
              delay={300}
              speed={80}
              className="font-mono text-xxs uppercase tracking-[0.3em] text-muted mb-8"
            />
            <h2 className="mb-8 font-heading font-black text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.02em] text-primary">
              Intelligent.
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
              >
                Autonomous.
              </span>
              <br />
              Always On.
            </h2>
            <p className="font-mono text-xs-plus leading-[1.8] text-muted mb-12 max-w-2xl mx-auto">
              As the UK confronts rising threats — 642,170 fire incidents, 3.9
              million fraud cases, and 9.4 million recorded crimes — traditional
              static CCTV cannot keep pace. {drone.name}
              {drone.trademark ? <sup>TM</sup> : ""} delivers a next-generation
              response.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80]"
            >
              Get in Touch <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
