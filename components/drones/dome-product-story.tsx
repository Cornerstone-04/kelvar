"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  LuBuilding2,
  LuFactory,
  LuGlobe,
  LuHouse,
  LuRadar,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import type { ProductDetail } from "@/types/product-types";
import { SectionFrame } from "@/components/ui/section-frame";
import { SectionLabel } from "@/components/ui/section-label";
import { MetricGrid } from "@/components/ui/metric-grid";
import { KelvarButton } from "@/components/ui/kelvar-button";

const iconMap: Record<string, IconType> = {
  house: LuHouse,
  building: LuBuilding2,
  factory: LuFactory,
  globe: LuGlobe,
};

export function DomeProductStory({ product }: { product: ProductDetail }) {
  const primaryFeatures = product.features.filter(
    (feature) => feature.tag === "Primary",
  );
  const secondaryFeatures = product.features.filter(
    (feature) => feature.tag === "Secondary",
  );

  return (
    <>
      <SectionFrame>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Concept</SectionLabel>
            <h2 className="mt-8 max-w-3xl font-heading text-[clamp(2rem,5vw,6rem)] font-black leading-[0.9] text-primary">
              Static CCTV becomes an autonomous protective field.
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs-plus leading-[1.95] text-muted md:text-sm"
          >
            {product.concept}
          </motion.p>
        </div>
      </SectionFrame>

      <SectionFrame surface="surface" label="Autonomous Response Loop">
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {["Detect", "Classify", "Coordinate", "Respond"].map(
            (step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-surface p-6 md:p-8"
              >
                <p className="font-mono text-xxs uppercase tracking-[0.22em] text-dim">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-heading text-[2.3rem] font-black leading-none text-primary">
                  {step}
                </h3>
                <p className="mt-4 font-mono text-xs-plus leading-relaxed text-muted">
                  {responseCopy[index]}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </SectionFrame>

      <SectionFrame label="System Architecture">
        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.62fr)_minmax(0,1.18fr)]">
          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6 md:p-8 lg:sticky lg:top-24 lg:self-start">
            <LuRadar className="mb-8 text-primary/55" size={28} />
            <h3 className="font-heading text-[2.6rem] font-black leading-none text-primary">
              Mobile, sensing, self-coordinated CCTV.
            </h3>
            <p className="mt-5 font-mono text-xs-plus leading-[1.85] text-muted">
              {product.vision}
            </p>
          </div>
          <div className="grid gap-px bg-white/10">
            {primaryFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid bg-bg/90 md:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1fr)]"
              >
                <div className="relative min-h-72 overflow-hidden">
                  <Image
                    src={feature.image ?? product.assets.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 38vw"
                    className="object-cover brightness-[0.68] saturate-[0.62]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_58%)]" />
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <p className="font-mono text-xxs uppercase tracking-[0.22em] text-dim">
                    Primary / {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-10">
                    <h3 className="font-heading text-[2.25rem] font-black leading-none text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-4 font-mono text-xs-plus leading-[1.8] text-muted">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame surface="surface" label="Mission Readiness">
        <div className="grid gap-8 ">
          <div className="grid lg:grid-cols-[minmax(18rem,1fr)_minmax(0,0.8fr)]">
            <h2 className="font-heading text-[clamp(2.5rem,5vw,5.5rem)] font-black leading-[0.9] text-primary">
              Designed for everyday spaces and high-risk environments.
            </h2>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {product.useCases.map((useCase, index) => {
              const Icon = iconMap[useCase.icon] ?? LuGlobe;
              return (
                <motion.article
                  key={useCase.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="bg-surface p-6"
                >
                  <Icon className="mb-6 text-primary/45" size={22} />
                  <h3 className="font-heading text-[1.7rem] font-bold leading-none text-primary">
                    {useCase.label}
                  </h3>
                  <p className="mt-4 font-mono text-xs-plus leading-relaxed text-muted">
                    {useCase.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame label="Sensor & Deployment Profile">
        <div className="grid gap-8 lg:grid-cols-2">
          <MetricGrid
            metrics={product.stats}
            columns="grid-cols-2 md:grid-cols-3"
          />
          <div>
            <div className="border-t border-white/15">
              {product.specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-[minmax(8rem,0.48fr)_1fr] gap-4 border-b border-white/15 py-5"
                >
                  <span className="font-mono text-xxs uppercase tracking-[0.18em] text-dim">
                    {spec.label}
                  </span>
                  <span className="text-right font-mono text-xs-plus text-primary">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2">
              {secondaryFeatures.map((feature) => (
                <div key={feature.title} className="bg-bg/90 p-5">
                  <h3 className="font-heading text-[1.55rem] font-bold leading-none text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame surface="surface" label="Operating Philosophy">
        <div className="border-y border-white/15">
          {product.philosophy.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid gap-5 border-b border-white/15 py-7 last:border-b-0 md:grid-cols-[5rem_1fr]"
            >
              <span className="font-mono text-xxs tracking-[0.22em] text-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-[clamp(1.4rem,3vw,2.35rem)] font-bold leading-tight text-primary">
                {line}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionFrame>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-16 text-center md:px-10 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,245,249,0.1),transparent_42%)]" />
        <div className="relative z-1 mx-auto max-w-3xl">
          <h2 className="font-heading text-[clamp(3rem,10vw,8rem)] font-black leading-none text-primary">
            Intelligent.
            <br />
            Autonomous.
            <br />
            Always On.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-mono text-xs-plus leading-[1.8] text-muted">
            As the UK confronts rising threats, 642,170 fire incidents, 3.9
            million fraud cases, and 9.4 million recorded crimes, traditional
            static CCTV cannot keep pace. {product.name}
            {product.trademark ? <sup>TM</sup> : ""} delivers a next-generation
            response.
          </p>
          <div className="mt-10">
            <KelvarButton href="/contact">Get in Touch</KelvarButton>
          </div>
        </div>
      </section>
    </>
  );
}

const responseCopy = [
  "Persistent patrols create live visibility across blind spots, perimeter edges, and high-risk zones.",
  "AI models interpret fire, smoke, unusual behaviour, vehicle movement, and perimeter breaches in real time.",
  "Each drone communicates with the wider network, creating overlapping coverage instead of isolated camera feeds.",
  "The system repositions, tracks, and escalates faster than static infrastructure can react.",
];
