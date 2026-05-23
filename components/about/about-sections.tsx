"use client";

import { motion } from "motion/react";
import { site, team, values } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";

export function AboutSections() {
  return (
    <>
      <TextSection number="01" label="Mission" text={site.mission} />
      <TextSection number="02" label="Story" text={site.story} />
      <ValuesSection />
      <TeamSection />
    </>
  );
}

function TextSection({
  number,
  label,
  text,
}: {
  number: string;
  label: string;
  text: string;
}) {
  return (
    <div className="border-b border-border-col px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <SectionHeading number={number} label={label} />
        <div>
          <ScrollingText
            text={text}
            className="max-w-[75ch] font-mono text-xs-plus leading-[1.95]"
          />
        </div>
      </div>
    </div>
  );
}

function ValuesSection() {
  return (
    <div className="border-b border-border-col px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <SectionHeading number="03" label="Values" />

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-t border-border-col py-8 pr-8"
            >
              <div className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-white/20">
                0{index + 1}
              </div>
              <h3 className="mb-3 font-heading text-[1.5rem] font-bold text-white">
                {value.title}
              </h3>
              <p className="font-mono text-xs-plus leading-relaxed text-white/40">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <SectionHeading number="04" label="Team" />

        <div>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 gap-8 border-t border-border-col py-10 md:grid-cols-[160px_1fr]"
            >
              <div className="flex h-30 w-30 shrink-0 items-center justify-center border border-border-col bg-surface">
                <span className="font-heading text-3xl font-black text-white/15">
                  {member.name[0]}
                </span>
              </div>

              <div>
                <h3 className="mb-1 font-heading text-[1.4rem] font-bold text-white">
                  {member.name}
                </h3>
                <div className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                  {member.role}
                </div>
                <ScrollingText
                  text={member.bio}
                  className="max-w-[75ch] font-mono text-xs-plus leading-[1.85] text-white"
                />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border-col" />
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/20">
        {number}
      </span>
      <SectionLabel>{label}</SectionLabel>
    </div>
  );
}
