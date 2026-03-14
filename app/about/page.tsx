"use client";

import { motion } from "motion/react";
import { site, values, team } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import GlitchText from "@/components/ui/glitch-text";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg pt-16.25">
      {/* Header */}
      <div className="border-b border-border-col px-6 py-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <GlitchText
            className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-white/25"
            text="About Kelvar Industries"
            delay={300}
            speed={100}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] leading-none font-black tracking-[-0.02em] text-white"
        >
          Inspired by
          <br />
          <span
            className="text-transparent [WebkitTextStroke:1px_#ffffff40]"
            style={{ WebkitTextStroke: "2px #ffffff40" }}
          >
            Vigilance
          </span>{" "}
          in Motion
        </motion.h1>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 gap-12 border-b border-border-col px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <SectionLabel>Mission</SectionLabel>
          <p className="font-mono text-[0.9rem] leading-[1.9] text-white/60">
            {site.mission}
          </p>
        </div>

        <div>
          <SectionLabel>Story</SectionLabel>
          <p className="font-mono text-[0.82rem] leading-[1.9] text-white/40">
            {site.story}
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="border-b border-border-col px-6 py-20 md:px-12">
        <SectionLabel>Values</SectionLabel>

        <h2 className="mb-12 font-heading text-[clamp(1.8rem,5vw,3.5rem)] font-black text-white">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l border-border-col py-8 pr-8 pl-8"
            >
              <div className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/25">
                0{i + 1}
              </div>

              <h3 className="mb-3 font-heading text-[1.4rem] font-bold text-white">
                {v.title}
              </h3>

              <p className="font-mono text-[0.75rem] leading-relaxed text-white/40">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="px-6 py-20 md:px-12">
        <SectionLabel>Team</SectionLabel>

        <h2 className="mb-12 font-heading text-[clamp(1.8rem,5vw,3.5rem)] font-black text-white">
          The People Behind It
        </h2>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="-mt-px -ml-px border border-border-col p-8"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center border border-border-col bg-surface">
                <span className="font-heading text-2xl font-black text-white/15">
                  {member.name[0]}
                </span>
              </div>

              <div className="mb-1 font-heading text-[1.1rem] font-bold text-white">
                {member.name}
              </div>

              <div className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                {member.role}
              </div>

              <p className="font-mono text-[0.75rem] leading-relaxed text-white/40">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
