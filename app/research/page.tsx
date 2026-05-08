"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { Rule } from "@/components/ui/rule";
import { research } from "@/lib/data";
import { ScrollingText } from "@/components/ui/scrolling-text";
import { BsArrowRight } from "react-icons/bs";
import { airConvoyDomains, coreTech, useCases } from "@/lib/air-convoy";
import {
  stratollites,
  stratosCoreTech,
  stratosUseCases,
} from "@/lib/kelvar-stratos";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-18 md:pt-36 md:px-12">
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
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(3rem,10vw,8rem)] leading-none font-black tracking-[-0.02em] text-white"
          >
            Research, Design
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #ffffff40" }}
            >
              &amp; Development
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Intro — Ken's copy */}
      <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-24">
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
              At Kelvar Industries, innovation is not outsourced, it is
              engineered at the core.
            </motion.p>
          </div>
          <div className="flex flex-col gap-5">
            {[
              "Our RD&D division drives the continuous evolution of autonomous surveillance through rigorous research, precision design, and real-world testing.",
              "We operate at the intersection of hardware, software, and intelligence, building systems that are not only functional, but adaptive, resilient, and future-ready. From early-stage concept modeling to full-scale deployment, every Kelvar platform is developed with a singular objective: operational superiority in dynamic environments.",
              "Our process is iterative and uncompromising. We test in complexity, refine through data, and deploy with confidence, ensuring that every system performs when it matters most.",
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

      {/* Quick Navigation */}
      <section className="px-6 md:px-10 py-8 md:py-12">
        <div className="flex  gap-4 md:gap-6">
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="#airconvoy"
            className="flex-1 p-3 md:px-6 md:py-4 border border-[#ffffff12] rounded-sm hover:border-primary hover:bg-surface transition-all ease-linear duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-base text-primary">
                AirConvoy
              </span>
              <BsArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
            </div>
            <p className="font-mono text-xxs text-muted mt-2">
              Tethered drone platform
            </p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="#stratos"
            className="flex-1 p-3 md:px-6 md:py-4 border border-[#ffffff12] rounded-sm hover:border-primary hover:bg-surface transition-all ease-linear duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-base text-primary">
                Stratos
              </span>
              <BsArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
            </div>
            <p className="font-mono text-xxs text-muted mt-2">
              Stratospheric platform
            </p>
          </motion.a>
        </div>
      </section>

      <Rule />

      {/* Research areas */}
      <section className="px-6 md:px-10 py-12 md:py-24">
        <div className="mb-6 md:mb-12">
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
              className="bg-bg md:px-8 py-10"
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

      <section className="pb-12 md:pb-24">
        {/* ── INTRO VIDEO — full bleed ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2 }}
          className="relative w-full overflow-hidden mb-0 aspect-video"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
          >
            <source src="/videos/airconvoy.mp4" type="video/mp4" />
          </video>

          {/* Stronger bottom fade so text below bleeds in cleanly */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_8%,transparent_50%)]" />
          {/* Subtle vignette on sides */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,7,42,0.5)_100%)]" />

          {/* Bottom-left label */}
          <div className="absolute left-6 bottom-8 md:left-10">
            {/*<p className="font-mono text-xxs uppercase tracking-[0.3em] text-white/35 mb-2">
              Solar Sentry System · Kelvar Industries
            </p>*/}
            <h2 className="font-heading font-black text-[clamp(4rem,10vw,8rem)] normal-case leading-none tracking-[-0.02em] text-primary">
              AirConvoy
              <sup className="text-[0.25em] align-super ml-1 text-primary">
                ™
              </sup>
            </h2>
            <p className="font-mono text-xs-plus md:text-base font-medium text-muted mt-2 max-w-[40ch]">
              Always Above
            </p>
          </div>
        </motion.div>

        {/* ── DESCRIPTION — below video ── */}
        <div className="px-6 md:px-10 py-12 md:py-20 border-b border-[#ffffff12]">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
            <div className="max-w-md">
              <div>
                <SectionLabel className="mb-3">Featured Platform</SectionLabel>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-heading font-bold text-[clamp(1.3rem,3vw,2rem)] leading-[1.15] text-primary"
              >
                AirConvoy is a core component of Kelvar Industries’ Solar Sentry
                System.
              </motion.p>

              <p className="mt-4 font-mono text-xxs font-semibold uppercase tracking-[0.2em] text-dim">
                Tri-Domain Tethered Aerial Platform
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[75ch] font-mono text-xs-plus leading-[1.9] text-muted"
            >
              AirConvoy is Kelvar Industries’ next‑generation tethered drone
              system engineered for continuous, high‑endurance surveillance,
              communication, and environmental monitoring across air, land, and
              maritime environments. Built for governments, security agencies,
              emergency services, oil &amps; gas operations, and critical
              infrastructure protection, AirConvoy delivers real‑time
              intelligence with zero downtime, thanks to its power‑over‑tether
              architecture and ultra‑secure data link.
            </motion.p>
          </div>
        </div>

        {/* ── DOMAIN SECTIONS ── */}
        {airConvoyDomains.map((d, i) => (
          <div key={d.id}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="relative w-full overflow-hidden aspect-video md:aspect-21/9"
            >
              <img
                src={d.image}
                alt={`AirConvoy — ${d.domain}`}
                className="absolute inset-0 h-full w-full object-cover brightness-50 saturate-[0.5]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_55%)]" />

              <div className="absolute bottom-0 left-6 right-6 pb-6 md:left-10 md:right-10 md:pb-8 flex items-end justify-between">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-heading normal-case font-black text-[clamp(4rem,10vw,8rem)] leading-none tracking-[-0.02em] text-primary"
                >
                  {d.domain}
                </motion.h3>
                <span className="font-mono text-xxs font-medium tracking-[0.2em] text-muted mb-2 md:mb-4 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* Capabilities */}
            <div className="px-6 md:px-10 pt-8 pb-16 md:pt-10 md:pb-20">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
                <div>
                  <p className="font-mono font-medium text-xxs uppercase tracking-[0.25em] text-muted leading-relaxed">
                    {d.headline}
                  </p>
                </div>
                <div className="border-t border-[#ffffff12]">
                  {d.capabilities.map((cap, ci) => (
                    <motion.div
                      key={ci}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.06 }}
                      className="border-b border-[#ffffff12] py-4 flex items-start gap-6"
                    >
                      <span className="font-mono text-xxs tracking-[0.15em] text-dim shrink-0">
                        {String(ci + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs-plus leading-relaxed text-muted">
                        {cap}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <Rule />
          </div>
        ))}

        {/* ── CORE TECHNOLOGIES ── */}
        <div className="px-6 md:px-10 py-12 md:py-20">
          <div className="mb-12">
            <SectionLabel>Core Technologies</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff12]">
            {coreTech.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg sm:px-6 md:px-8 py-8 md:py-10"
              >
                <div className="font-mono text-xxs tracking-[0.2em] text-dim mb-4 uppercase">
                  {t.id}
                </div>
                <h3 className="font-heading font-bold text-[1.3rem] text-primary mb-3">
                  {t.title}
                </h3>
                <p className="font-mono text-xs-plus leading-[1.75] text-muted">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Rule />

        {/* ── USE CASES ── */}
        <div className="px-6 md:px-10 py-12 md:py-20">
          <div className="mb-12">
            <SectionLabel>Use Cases</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff12]">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface px-6 md:px-8 py-8 md:py-10"
              >
                <h3 className="font-heading font-bold text-[1.2rem] text-primary mb-6">
                  {uc.category}
                </h3>
                <div className="border-t border-[#ffffff12]">
                  {uc.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="border-b border-[#ffffff12] py-4 flex items-center gap-4"
                    >
                      <span className="font-mono text-xxs text-dim shrink-0">
                        {String(ii + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs-plus text-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── KELVAR STRATOS PLATFORM SECTION ── */}
      {/* ── INTRO IMAGE — full bleed ── */}
      <section className="px-6 md:px-10 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2 }}
          className="relative w-full overflow-hidden mb-0 aspect-video"
        >
          <img
            src="/images/stratos/kelvar-stratos.jpg"
            alt="Kelvar Stratos - Stratospheric Platform"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
          />

          {/* Stronger bottom fade so text below bleeds in cleanly */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_8%,transparent_50%)]" />
          {/* Subtle vignette on sides */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,7,42,0.5)_100%)]" />

          {/* Bottom-left label */}
          <div className="absolute left-6 bottom-8 md:left-10">
            <h2 className="font-heading font-black text-[clamp(4rem,10vw,8rem)] normal-case leading-none tracking-[-0.02em] text-primary">
              Stratos
              <sup className="text-[0.25em] align-super ml-1 text-primary">
                ™
              </sup>
            </h2>
            <p className="font-mono text-xs-plus md:text-base font-medium text-muted mt-2 max-w-[40ch]">
              Stratospheric Supremacy
            </p>
          </div>
        </motion.div>

        {/* ── DESCRIPTION — below image ── */}
        <div className="sm:px-6 md:px-10 py-12 md:py-20 border-b border-[#ffffff12]">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
            <div className="max-w-md">
              <div>
                <SectionLabel className="mb-3">Featured Platform</SectionLabel>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-heading font-bold text-[clamp(1.3rem,3vw,2rem)] leading-[1.15] text-primary"
              >
                Stratos is Kelvar Industries&apos; next-generation stratospheric
                platform.
              </motion.p>

              <p className="mt-4 font-mono text-xxs font-semibold uppercase tracking-[0.2em] text-dim">
                Tri-Domain Stratospheric Platform
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[75ch] font-mono text-xs-plus leading-[1.9] text-muted"
            >
              Kelvar Stratos represents the pinnacle of stratospheric
              innovation—a tri-domain platform leveraging advanced balloon
              technology to deliver persistent surveillance, global
              communications, and environmental monitoring from 15–50 km
              altitude. Engineered for governments, defense agencies, emergency
              services, and scientific research institutions, Stratos provides
              unparalleled coverage, extended operational endurance, and minimal
              ground infrastructure requirements. With AI-driven autonomous
              control and modular payload integration, Stratos bridges the gap
              between conventional aircraft and space-based systems.
            </motion.p>
          </div>
        </div>

        {/* ── DOMAIN TYPES ── */}
        <div className="sm:px-6 md:px-10 py-12 md:py-20">
          <div className="mb-12">
            <SectionLabel>Platform Types</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff12]">
            {stratollites.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg sm:px-6 md:px-8 py-8 md:py-10"
              >
                {/* Number badge */}
                {/* <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xxs font-bold tracking-[0.2em] text-dim bg-surface px-3 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div> */}

                {/* Domain name */}
                <h3 className="font-heading font-bold text-[1.3rem] text-primary mb-2 leading-tight">
                  {d.domain}
                </h3>

                {/* Headline */}
                <p className="font-mono text-xxs tracking-widest text-muted uppercase mb-6 pb-6 border-b border-[#ffffff12]">
                  {d.headline}
                </p>

                {/* Capabilities */}
                <div className="space-y-3">
                  {d.capabilities.map((cap, ci) => (
                    <motion.div
                      key={ci}
                      initial={{ opacity: 0, x: -4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + ci * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="font-mono text-xxs font-bold tracking-[0.2em] text-dim py-1">
                        {String(ci + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs-plus leading-relaxed text-muted">
                        {cap}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Rule />

        {/* ── STRATOS CORE TECHNOLOGIES ── */}
        <div className="sm:px-6 md:px-10 py-12 md:py-20">
          <div className="mb-12">
            <SectionLabel>Core Technologies</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff12]">
            {stratosCoreTech.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg sm:px-6 md:px-8 py-5 md:py-10"
              >
                <div className="font-mono text-xxs tracking-[0.2em] text-dim mb-4 uppercase">
                  {t.id}
                </div>
                <h3 className="font-heading font-bold text-[1.3rem] text-primary mb-3">
                  {t.title}
                </h3>
                <p className="font-mono text-xs-plus leading-[1.75] text-muted">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Rule />

        {/* ── STRATOS USE CASES ── */}
        <div className="sm:px-6 md:px-10 py-12 md:py-20">
          <div className="mb-12">
            <SectionLabel>Use Cases</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff12]">
            {stratosUseCases.map((uc, i) => (
              <motion.div
                key={uc.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface px-6 md:px-8 py-8 md:py-10"
              >
                <h3 className="font-heading font-bold text-[1.2rem] text-primary mb-6">
                  {uc.category}
                </h3>
                <div className="border-t border-[#ffffff12]">
                  {uc.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="border-b border-[#ffffff12] py-4 flex items-center gap-4"
                    >
                      <span className="font-mono text-xxs text-dim shrink-0">
                        {String(ii + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs-plus text-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AAR connection */}
      <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-24 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
              {
                "Every system that emerges from our RD&D division is powered by our Autonomous A.I. Robotics layer, ensuring that research translates directly into deployable, intelligent platforms."
              }
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
      <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-24 text-center">
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
