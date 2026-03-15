import { site } from "@/lib/data";
import {GlitchText} from "../ui/glitch-text";
import { motion } from "motion/react";

export const AboutHeroSection = () => {
  return (
    <div className="relative flex min-h-[60svh] items-end overflow-hidden border-b border-border-col px-6 pb-16 pt-36 md:px-12">
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
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(3rem,10vw,8rem)] leading-none font-black tracking-[-0.02em] text-white"
        >
          Inspired by
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px #ffffff40" }}
          >
            Vigilance
          </span>{" "}
          in Motion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-[55ch] font-mono text-[0.82rem] leading-[1.9] text-white/40"
        >
          {site.tagline}
        </motion.p>
      </div>
    </div>
  );
};
