"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { GlitchText } from "@/components/ui/glitch-text";
import { Rule } from "@/components/ui/rule";
import { research } from "@/lib/data";
import { ScrollingText } from "@/components/about/scrolling-text";
import { BsArrowRight } from "react-icons/bs";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-36 md:px-12">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285060_0%,transparent_65%)]" />

        <div className="relative z-1 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <SectionLabel>Kelvar Industries</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[clamp(3.5rem,12vw,10rem)] leading-none tracking-[-0.02em] text-primary mb-4"
          >
            Research,
            <br />
            Design &<br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              Development
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Intro — Ken's copy */}
      <section className="border-t border-[#ffffff12] px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-8">
              <SectionLabel>RD&amp;D</SectionLabel>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading font-bold text-[clamp(1.4rem,3vw,2rem)] leading-tight text-primary"
            >
              At Kelvar Industries, innovation is not outsourced — it is
              engineered at the core.
            </motion.p>
          </div>
          <div className="flex flex-col gap-5">
            {[
              "Our RD&D division drives the continuous evolution of autonomous surveillance through rigorous research, precision design, and real-world testing.",
              "We operate at the intersection of hardware, software, and intelligence — building systems that are not only functional, but adaptive, resilient, and future-ready. From early-stage concept modeling to full-scale deployment, every Kelvar platform is developed with a singular objective: operational superiority in dynamic environments.",
              "Our process is iterative and uncompromising. We test in complexity, refine through data, and deploy with confidence — ensuring that every system performs when it matters most.",
            ].map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="font-mono text-xs-plus leading-[1.85] text-muted"
              >
                <ScrollingText text={para} />
                {/*{para}*/}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* Research areas */}
      <section className="px-10 py-24">
        <div className="mb-12">
          <SectionLabel>Areas of Research</SectionLabel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ffffff12]">
          {research.areas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-bg px-8 py-10"
            >
              <div className="font-mono text-xxs tracking-[0.2em] text-dim mb-4 uppercase">
                {area.id}
              </div>
              <h3 className="font-heading font-bold text-[1.6rem] text-primary mb-3">
                {area.title}
              </h3>
              <p className="font-mono text-xs-plus leading-[1.75] text-muted">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Rule />

      {/* AAR connection */}
      <section className="border-t border-[#ffffff12] px-10 py-24 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <SectionLabel>Powered by AAR</SectionLabel>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading font-black text-[clamp(2rem,5vw,4rem)] leading-none text-primary mb-6"
            >
              Intelligence
              <br />
              Built In.
            </motion.h2>
            <p className="font-mono text-xs-plus leading-[1.85] text-muted mb-8">
              Every system that emerges from our RD&D division is powered by our
              Autonomous A.I. Robotics layer — ensuring that research translates
              directly into deployable, intelligent platforms.
            </p>
            <Link
              href="/#platforms"
              className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80]"
            >
              View Platforms <BsArrowRight />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-[#ffffff12]">
            {[
              { value: "3", label: "Active Platforms" },
              { value: "3", label: "Global Offices" },
              { value: "Air · Land · Sea", label: "Operational Domains" },
              { value: "Always On", label: "System Availability" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface px-6 py-8"
              >
                <div className="font-heading font-black text-[clamp(1.5rem,3.5vw,2.5rem)] text-primary leading-none mb-2">
                  {s.value}
                </div>
                <div className="font-mono text-xxs uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#ffffff12] px-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading font-black text-[clamp(2.5rem,8vw,6rem)] leading-none text-primary mb-6">
            Built to
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              Outlast.
            </span>
          </h2>
          <p className="font-mono text-xs-plus leading-[1.8] text-muted mb-10 max-w-xl mx-auto">
            Interested in partnering, investing, or learning more about our
            research programme?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80]"
          >
            Get in Touch <BsArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
