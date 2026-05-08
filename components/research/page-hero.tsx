import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

export function PageHero() {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-18 md:px-12 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#28285060_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-5xl">
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
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-[-0.02em] text-white"
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
  );
}
