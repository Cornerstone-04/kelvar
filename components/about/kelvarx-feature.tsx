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

const revealTransition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

export function KelvarxFeature() {
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
      if (pointerFrame.current !== null)
        cancelAnimationFrame(pointerFrame.current);
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
        )
          return;
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
          className="object-cover brightness-[0.34] saturate-[0.72] transition-transform duration-1400 ease-out group-hover:scale-[1.025]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-1 bg-[linear-gradient(90deg,rgba(7,7,42,0.96)_0%,rgba(7,7,42,0.62)_54%,rgba(7,7,42,0.35)_100%)]" />
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { backgroundImage: glow }}
        className="pointer-events-none absolute inset-0 -z-1"
      />

      <div className="mx-auto flex min-h-[62svh] max-w-440 flex-col justify-between">
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
