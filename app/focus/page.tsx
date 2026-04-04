"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { focus } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { Rule } from "@/components/ui/rule";
import { GlitchText } from "@/components/ui/glitch-text";
import { ScrollingText } from "@/components/about/scrolling-text";
import { BsArrowRight } from "react-icons/bs";

const domainDetail: Record<
  string,
  {
    headline: string;
    body: string[];
    capabilities: string[];
    systems: { name: string; desc: string; slug?: string }[];
  }
> = {
  AIR: {
    headline: "Eyes in the Sky. No Blind Spots.",
    body: [
      "Aerial surveillance transforms what's possible in security. Unlike fixed cameras, our autonomous aerial platforms reposition, track, and respond — covering ground continuously and without boundaries.",
      "Sky Dome leads our air division: a coordinated swarm of AI-powered micro-drones that create an adaptive protective dome over any environment. Each unit communicates with the others, adjusting patrol paths in real time based on detected movement, threat classification, and environmental conditions.",
    ],
    capabilities: [
      "AI threat detection & behavioural classification",
      "Autonomous swarm coordination & patrol routing",
      "Thermal, infrared, and HD optical imaging",
      "Night vision & low-light operation",
      "Real-time perimeter breach alerts",
      "Seamless integration with ground systems",
    ],
    systems: [
      {
        name: "SKY DOME",
        desc: "Autonomous aerial CCTV swarm for residential, commercial, and industrial security.",
        slug: "sky-dome",
      },
    ],
  },
  LAND: {
    headline: "Ground-Level Intelligence. Everywhere.",
    body: [
      "Land-based autonomous systems cover the environments people live and work in — urban streets, gated compounds, warehouses, indoor spaces, and remote perimeters. Where aerial coverage meets its limits, our ground units step in.",
      "Kelvar's land systems navigate complex terrain with precision, maintaining situational awareness at ground level. Designed for continuous operation, they integrate directly with aerial platforms to create a unified, layered security response.",
    ],
    capabilities: [
      "Autonomous indoor and outdoor navigation",
      "Obstacle detection and terrain adaptation",
      "Real-time anomaly and intrusion detection",
      "Integration with aerial surveillance layer",
      "Silent operation for sensitive environments",
      "Remote monitoring and manual override",
    ],
    systems: [
      {
        name: "ROBOBOT",
        desc: "Autonomous floor robot for interior surveillance and patrol in commercial and industrial spaces.",
        slug: "robobot",
      },
    ],
  },
  SEA: {
    headline: "Coastal. Offshore. Unreachable.",
    body: [
      "Coastal borders, offshore infrastructure, and maritime operations represent some of the most difficult environments to secure. Weather, water, and distance make traditional surveillance unreliable. Kelvar's waterproof platforms are built specifically for these conditions.",
      "Our sea-based systems deliver the same autonomous intelligence that protects homes and factories — now extended to ports, coastlines, fish farms, oil platforms, and marine research operations.",
    ],
    capabilities: [
      "Waterproof and saltwater-resistant design",
      "Over-sea survey and coastal patrol",
      "Offshore infrastructure monitoring",
      "GPS and inertial navigation in open water",
      "Long-endurance autonomous operation",
      "Emergency alert and incident response",
    ],
    systems: [
      {
        name: "HYDRAX",
        desc: "Waterproof drone for over-sea survey, coastal security, and offshore infrastructure monitoring.",
        slug: "hydrax",
      },
    ],
  },
};

export default function FocusPage() {
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
            Areas of
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              Focus
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-xs-plus leading-[1.8] text-muted max-w-[52ch]"
          >
            Kelvar operates across three domains — Air, Land, and Sea. Each
            demands a different kind of intelligence. Every system we build is
            engineered for its environment.
          </motion.p>
        </div>
      </section>

      {/* Domain sections */}
      {focus.map((domain, di) => {
        const detail = domainDetail[domain.word];
        return (
          <div key={domain.id}>
            {/* Domain hero image */}
            <div className="relative aspect-21/7 overflow-hidden">
              <img
                src={domain.image}
                alt={domain.word}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.45] saturate-[0.5]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_60%)]" />
              <div className="absolute bottom-8 left-10 flex items-end gap-6">
                <span className="font-mono text-xxs tracking-[0.2em] text-dim">
                  {domain.id}
                </span>
                <h2 className="font-heading font-black text-[clamp(4rem,12vw,10rem)] leading-none tracking-[-0.02em] text-primary">
                  {domain.word}
                </h2>
              </div>
            </div>

            {/* Headline + body */}
            <section className="border-t border-[#ffffff12] px-10 py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
                <div>
                  <div className="mb-8">
                    <SectionLabel>{detail.headline}</SectionLabel>
                  </div>
                  {detail.body.map((para, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="font-mono text-xs-plus leading-[1.85] text-muted mb-4"
                    >
                      <ScrollingText text={para} />
                    </motion.div>
                  ))}
                </div>

                {/* Capabilities */}
                <div>
                  <div className="font-mono text-xxs uppercase tracking-[0.25em] text-dim mb-6">
                    Capabilities
                  </div>
                  <div className="border-t border-[#ffffff12]">
                    {detail.capabilities.map((cap, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className="border-b border-[#ffffff12] py-4 flex items-center gap-4"
                      >
                        <span className="font-mono text-xxs tracking-[0.15em] text-dim shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs-plus text-muted">
                          {cap}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Systems in this domain */}
              <div>
                <div className="font-mono text-xxs uppercase tracking-[0.25em] text-muted mb-6">
                  {domain.word} Systems
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bg">
                  {detail.systems.map((sys, i) => (
                    <motion.div
                      key={sys.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-bg px-8 py-8 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-heading font-black text-[1.6rem] text-primary mb-2 group-hover:text-primary/80 transition-colors">
                            {sys.name}
                          </h3>
                          <p className="font-mono text-xs-plus leading-[1.75] text-muted max-w-[45ch]">
                            {sys.desc}
                          </p>
                        </div>
                        {sys.slug && (
                          <Link
                            href={`/drones/${sys.slug}`}
                            className="shrink-0 border border-[#ffffff26] px-4 py-2 font-mono text-xxs uppercase tracking-[0.15em] text-primary/50 hover:text-primary hover:border-[#ffffff60] transition-all duration-200 inline-flex justify-center items-center gap-2"
                          >
                            View <BsArrowRight />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {di < focus.length - 1 && <Rule />}
          </div>
        );
      })}

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
            Protect Every
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              Environment.
            </span>
          </h2>
          <p className="font-mono text-xs-plus leading-[1.8] text-muted mb-10 max-w-xl mx-auto">
            Whether the threat is on land, sea, or in the air — Kelvar has a
            system built for it.
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
