"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { Rule } from "@/components/ui/rule";

const domains = [
  {
    id: "01",
    domain: "Air",
    headline: "Persistent Elevated Surveillance",
    image:
      "https://images.unsplash.com/photo-1446776811765-4b79af1adbc1?w=900&fm=jpg&q=75&fit=crop",
    capabilities: [
      "24/7 operation with uninterrupted power",
      "High-altitude tethered flight up to 150–300m",
      "AI-powered optical, thermal, and night-vision sensors",
      "Ideal for border monitoring, event security, and disaster assessment",
    ],
  },
  {
    id: "02",
    domain: "Land",
    headline: "Mobile or Fixed Deployment",
    image:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=900&fm=jpg&q=75&fit=crop",
    capabilities: [
      "Rapid deployment under 3 minutes",
      "Auto-stabilising flight in harsh wind conditions",
      "Vehicle-mounted, rooftop-mounted, and ground-station options",
      "Perfect for military convoys, police operations, and infrastructure sites",
    ],
  },
  {
    id: "03",
    domain: "Sea",
    headline: "Maritime & Offshore Operations",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&fm=jpg&q=75&fit=crop",
    capabilities: [
      "Corrosion-proof frame",
      "Saltwater-resistant tethering",
      "Stabilised maritime flight with ship roll compensation",
      "Useful for offshore oil platforms, coast guard patrols, and port control",
    ],
  },
];

const coreTech = [
  {
    id: "01",
    title: "AI Sensor Fusion",
    desc: "Integrates visual, thermal, acoustic, and radar feeds for real-time anomaly detection.",
  },
  {
    id: "02",
    title: "Encrypted Power-Data Tether",
    desc: "Continuous power supply, zero RF signature (stealth mode capable), and high-bandwidth, interference-proof communication.",
  },
  {
    id: "03",
    title: "Modular Payload System",
    desc: "Swap modules for lighting, surveillance, search & rescue, disaster response, communication relay, and environmental sensing.",
  },
];

const useCases = [
  {
    category: "Security & Defence",
    items: ["Fleet protection", "Tactical oversight", "Perimeter security"],
  },
  {
    category: "Public Safety",
    items: ["Fire detection", "Flood monitoring", "Crowd management"],
  },
  {
    category: "Commercial & Industrial",
    items: [
      "Port surveillance",
      "Pipeline inspection",
      "Offshore platform monitoring",
    ],
  },
];

export function AirConvoySection() {
  return (
    <section className="border-t border-[#ffffff12]">
      {/* Header */}
      <div className="px-10 py-20">
        <div className="mb-10">
          <SectionLabel>Featured Platform — RD&D</SectionLabel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-[clamp(3rem,9vw,7rem)] leading-none tracking-[-0.02em] text-primary"
            >
              AirConvoy
              <sup className="text-[0.25em] align-super ml-2 text-primary/30">
                ™
              </sup>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-mono text-xs-plus text-muted mt-3"
            >
              Tri-Domain Tethered Aerial System for Air, Land & Sea
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs-plus leading-[1.85] text-muted"
          >
            AirConvoy is Kelvar Industries' next-generation tethered drone
            system engineered for continuous, high-endurance surveillance,
            communication, and environmental monitoring across air, land, and
            maritime environments. Built for governments, security agencies,
            emergency services, oil & gas operations, and critical
            infrastructure protection — delivering real-time intelligence with
            zero downtime.
          </motion.p>
        </div>
      </div>

      <Rule />

      {/* Tri-domain rows */}
      {domains.map((d, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={d.id}>
            <div
              className={`flex items-start gap-12 px-10 pt-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="min-w-8 pt-2">
                <span className="font-mono text-xxs tracking-[0.2em] text-dim">
                  {d.id}
                </span>
              </div>
              <div
                className={`flex flex-1 flex-col md:gap-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <h3
                  className={`font-heading font-black text-[clamp(2.5rem,7vw,5rem)] leading-none text-primary shrink-0 ${!isEven ? "md:text-right" : ""}`}
                >
                  {d.domain}
                </h3>
                <div className={`flex-1 ${!isEven ? "md:text-right" : ""}`}>
                  <p className="font-mono text-xxs uppercase tracking-[0.2em] text-dim mb-3">
                    {d.headline}
                  </p>
                  <div
                    className={`border-t border-[#ffffff12] ${!isEven ? "md:ml-auto" : ""}`}
                    style={{ maxWidth: "44ch" }}
                  >
                    {d.capabilities.map((cap, ci) => (
                      <div
                        key={ci}
                        className="border-b border-[#ffffff12] py-3 flex items-start gap-3"
                      >
                        <span className="font-mono text-xxs text-dim shrink-0">
                          {String(ci + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xxs leading-relaxed text-muted">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Domain image — swap with Seun's when ready */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="relative mt-6 aspect-21/7 overflow-hidden bg-surface"
            >
              <img
                src={d.image}
                alt={`AirConvoy — ${d.domain} Domain`}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.4] saturate-[0.5]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_55%)]" />
              <div className="absolute bottom-6 left-10 font-mono text-xxs uppercase tracking-[0.25em] text-dim">
                Image pending — Seun's assets
              </div>
            </motion.div>

            <Rule />
          </div>
        );
      })}

      {/* Core Technologies */}
      <div className="px-10 py-16">
        <div className="mb-10">
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
              className="bg-bg px-8 py-10"
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

      {/* Use Cases */}
      <div className="px-10 py-16">
        <div className="mb-10">
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
              className="bg-surface px-8 py-10"
            >
              <h3 className="font-heading font-bold text-[1.2rem] text-primary mb-5">
                {uc.category}
              </h3>
              <div className="border-t border-[#ffffff12]">
                {uc.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="border-b border-[#ffffff12] py-3 flex items-center gap-3"
                  >
                    <span className="font-mono text-xxs text-dim shrink-0">
                      {String(ii + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xxs text-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tagline strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-10 mb-16 border border-[#ffffff12] bg-surface px-8 py-8 text-center"
      >
        <p className="font-heading font-black text-[clamp(1.5rem,4vw,3rem)] text-primary">
          "Unbroken Power. Unbroken Vision."
        </p>
        <p className="font-mono text-xxs uppercase tracking-[0.25em] text-dim mt-2">
          AirConvoy™ — Always Above.
        </p>
      </motion.div>
    </section>
  );
}
