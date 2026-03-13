"use client";

import { motion } from "motion/react";
import { site, values, team } from "@/lib/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-mono">{children}</span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-[65px]" style={{ background: "var(--bg)" }}>

      {/* Header */}
      <div className="px-6 md:px-12 py-20" style={{ borderBottom: "1px solid var(--border-col)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-[0.6rem] tracking-[0.35em] uppercase text-white/25 font-mono mb-6">
          About Kelvar Industries
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black text-white leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", letterSpacing: "-0.02em" }}>
          Built for the<br />
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
            Hardest
          </span>{" "}Missions
        </motion.h1>
      </div>

      {/* Mission */}
      <div className="px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12" style={{ borderBottom: "1px solid var(--border-col)" }}>
        <div>
          <SectionLabel>Mission</SectionLabel>
          <p className="text-white/60 font-mono text-[0.9rem] leading-[1.9]">{site.mission}</p>
        </div>
        <div>
          <SectionLabel>Story</SectionLabel>
          <p className="text-white/40 font-mono text-[0.82rem] leading-[1.9]">
            Placeholder — awaiting client content. Kelvar Industries was founded with the belief that the next generation of unmanned systems would be built not by legacy primes, but by focused, fast-moving engineering teams willing to tackle the hardest problems from first principles.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="px-6 md:px-12 py-20" style={{ borderBottom: "1px solid var(--border-col)" }}>
        <SectionLabel>Values</SectionLabel>
        <h2 className="font-heading font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {values.map((v, i) => (
            <motion.div key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 pr-8" style={{ borderLeft: "1px solid var(--border-col)", paddingLeft: "2rem" }}>
              <div className="text-[0.6rem] tracking-[0.3em] uppercase text-white/25 font-mono mb-3">0{i + 1}</div>
              <h3 className="font-heading font-bold text-white text-[1.4rem] mb-3">{v.title}</h3>
              <p className="text-white/40 font-mono text-[0.75rem] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="px-6 md:px-12 py-20">
        <SectionLabel>Team</SectionLabel>
        <h2 className="font-heading font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
          The People Behind It
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {team.map((member, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8" style={{ border: "1px solid var(--border-col)", marginTop: "-1px", marginLeft: "-1px" }}>
              <div className="w-16 h-16 mb-5 flex items-center justify-center"
                style={{ background: "var(--surface)", border: "1px solid var(--border-col)" }}>
                <span className="text-white/15 font-heading font-black text-2xl">{member.name[0]}</span>
              </div>
              <div className="font-heading font-bold text-white text-[1.1rem] mb-1">{member.name}</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 font-mono mb-4">{member.role}</div>
              <p className="text-white/40 font-mono text-[0.75rem] leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
