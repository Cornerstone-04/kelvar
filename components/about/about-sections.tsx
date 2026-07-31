"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import { team, values } from "@/content/about";
import { site } from "@/content/site";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";

const revealTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function AboutSections() {
  return (
    <>
      <NarrativeSection />
      <KelvarxFeature />
      <ValuesSection />
      <TeamSection />
    </>
  );
}

function NarrativeSection() {
  return (
    <section className="border-b border-border-col px-6 py-14 md:px-12 md:py-24">
      <div className="grid gap-px bg-white/10 xl:grid-cols-2">
        <NarrativePanel
          number="01"
          label="Mission"
          text={site.mission}
          emphasis
        />
        <NarrativePanel number="02" label="Story" text={site.story} />
      </div>
    </section>
  );
}

function NarrativePanel({
  number,
  label,
  text,
  emphasis = false,
}: {
  number: string;
  label: string;
  text: string;
  emphasis?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={revealTransition}
      className="group relative overflow-hidden bg-bg p-7 md:p-10 xl:min-h-[34rem] xl:p-12"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-white/30"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ ...revealTransition, delay: 0.15 }}
      />
      <SectionHeading number={number} label={label} />
      <ScrollingText
        text={text}
        className={`mt-14 max-w-[68ch] font-mono leading-[1.95] text-white/62 ${
          emphasis
            ? "text-[clamp(1rem,1.55vw,1.35rem)]"
            : "text-sm md:text-base"
        }`}
      />
      <span className="pointer-events-none absolute -bottom-10 right-5 font-heading text-[12rem] font-black leading-none text-white/[0.025] transition-transform duration-700 group-hover:-translate-y-3 md:text-[18rem]">
        {number}
      </span>
    </motion.article>
  );
}

function KelvarxFeature() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerFrame = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const glowX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const glowY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const glow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(245,245,249,0.12), transparent 32%)`,
  );
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  useEffect(
    () => () => {
      if (pointerFrame.current !== null) {
        cancelAnimationFrame(pointerFrame.current);
      }
    },
    [],
  );

  return (
    <motion.section
      ref={sectionRef}
      onPointerMove={(event) => {
        if (
          reduceMotion ||
          event.pointerType === "touch" ||
          window.matchMedia("(pointer: coarse)").matches
        ) {
          return;
        }
        const bounds = event.currentTarget.getBoundingClientRect();
        const nextX = ((event.clientX - bounds.left) / bounds.width) * 100;
        const nextY = ((event.clientY - bounds.top) / bounds.height) * 100;

        if (pointerFrame.current !== null) return;
        pointerFrame.current = requestAnimationFrame(() => {
          pointerX.set(nextX);
          pointerY.set(nextY);
          pointerFrame.current = null;
        });
      }}
      className="group relative isolate min-h-[80svh] overflow-hidden border-b border-border-col px-6 py-20 md:px-12 md:py-28"
    >
      <motion.div
        style={reduceMotion ? undefined : { y: imageY }}
        className="absolute -inset-y-[8%] inset-x-0 -z-2"
      >
        <Image
          src="/assets/images/platforms/stratos/stratos-space-2.jpg"
          alt="KELVARX near-space platform concept"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.34] saturate-[0.72] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-1 bg-[linear-gradient(90deg,rgba(7,7,42,0.96)_0%,rgba(7,7,42,0.62)_54%,rgba(7,7,42,0.35)_100%)]" />
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { backgroundImage: glow }}
        className="pointer-events-none absolute inset-0 -z-1"
      />

      <div className="mx-auto flex min-h-[62svh] max-w-[110rem] flex-col justify-between">
        <div className="flex items-center justify-between gap-6 font-mono text-xxs uppercase tracking-[0.24em] text-white/45">
          <span>Programme / Space</span>
          <span className="hidden md:block">Atmospheric Intelligence</span>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="max-w-5xl"
        >
          <p className="font-mono text-xxs uppercase tracking-[0.28em] text-muted">
            Our next frontier
          </p>
          <h2 className="mt-5 font-heading text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.025em]">
            KELVARX
          </h2>
          <p className="mt-7 max-w-2xl font-mono text-xs-plus leading-[1.9] text-white/65 md:text-sm">
            A developing programme connecting atmospheric platforms, shared
            intelligence, and autonomous mission control across the Space
            domain.
          </p>
          <Link
            href="/kelvarx"
            className="kelvar-button-frame group/link mt-9 inline-flex min-h-12 items-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
          >
            Explore KELVARX
            <motion.span
              aria-hidden="true"
              className="text-primary transition-transform duration-300 group-hover/link:translate-x-2"
            >
              <BsArrowRight />
            </motion.span>
          </Link>
        </motion.div>

        <div className="grid gap-2 border-t border-white/15 pt-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/36 sm:grid-cols-3">
          <TelemetryItem index="01" label="Platforms collect" />
          <TelemetryItem index="02" label="KAIN connects" />
          <TelemetryItem index="03" label="AI Command interprets" />
        </div>
      </div>
    </motion.section>
  );
}

function TelemetryItem({ index, label }: { index: string; label: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0.2, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Number(index) * 0.08 }}
      className="flex items-center gap-3"
    >
      <span className="text-white/55">{index}</span>
      <span>{label}</span>
    </motion.div>
  );
}

function ValuesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-border-col px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <SectionHeading number="03" label="Values" />

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-bg p-7 md:p-9"
            >
              <div className="mb-8 flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.3em] text-white/20">
                <span>0{index + 1}</span>
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
              <h3 className="mb-3 font-heading text-[1.7rem] font-bold text-white transition-opacity group-hover:opacity-80">
                {value.title}
              </h3>
              <p className="font-mono text-xs-plus leading-relaxed text-white/40">
                {value.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-12 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <SectionHeading number="04" label="Team" />

        <div>
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: index * 0.08 }}
              className="group grid grid-cols-1 gap-8 border-t border-border-col py-10 md:grid-cols-[160px_1fr]"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: -2, scale: 1.03 }}
                className="flex h-30 w-30 shrink-0 items-center justify-center border border-border-col bg-surface transition-colors group-hover:border-white/40"
              >
                <span className="font-heading text-3xl font-black text-white/15">
                  {member.name[0]}
                </span>
              </motion.div>

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
            </motion.article>
          ))}
          <div className="border-t border-border-col" />
        </div>
      </div>
    </section>
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
