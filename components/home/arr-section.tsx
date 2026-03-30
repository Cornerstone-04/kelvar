"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollingText } from "../about/scrolling-text";
import { BsArrowRight } from "react-icons/bs";

const aarParagraphs = [
  {
    text: "Kelvar's Autonomous A.I. Robotics (AAR) division is the intelligence layer behind every platform we build. It is where motion becomes instinct, and machines evolve from tools into decision-making systems.",
    isScrolling: true,
  },
  {
    text: "AAR integrates advanced artificial intelligence with autonomous robotics to enable real-time perception, analysis, and response. Our systems do not simply observe — they interpret, adapt, and act within milliseconds, without reliance on constant human control.",
    isScrolling: true,
  },
  {
    text: "Through continuous learning and environmental awareness, Kelvar platforms maintain persistent vigilance across air, land, and sea. The result is a unified network of autonomous agents capable of coordinated operation, scalable deployment, and uncompromising situational awareness.",
    isScrolling: true,
  },
  {
    text: "This is not remote surveillance. This is independent security — engineered to think, move, and protect on its own.",
    isScrolling: true,
    className: "text-primary/70 italic",
  },
];

export function ArrSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-12">
        <SectionLabel>Autonomous A.I. Robotics</SectionLabel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
        {/* Left — headline */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-[-0.02em] text-primary mb-6"
          >
            Motion
            <br />
            Becomes
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              Instinct.
            </span>
          </motion.h2>
        </div>

        {/* Right — body copy */}
        <div className="flex flex-col gap-6">
          {aarParagraphs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`font-mono text-xs-plus leading-[1.85] ${
                item.className ?? "text-muted"
              }`}
            >
              {item.isScrolling ? (
                <ScrollingText text={item.text} />
              ) : (
                item.text
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA strip — leads to RD&D */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#ffffff12] bg-surface px-8 py-6"
      >
        <div>
          <p className="font-mono text-xxs uppercase tracking-[0.25em] text-dim mb-1">
            RD&amp;D — Research, Design &amp; Development
          </p>
          <p className="font-heading font-bold text-[1.2rem] text-primary">
            We don't wait for the future. We engineer it.
          </p>
        </div>
        <Link
          href="/research"
          className="shrink-0 inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80] whitespace-nowrap"
        >
          Explore RD&amp;D <BsArrowRight />
        </Link>
      </motion.div>
    </section>
  );
}
