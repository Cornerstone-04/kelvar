"use client";

import { motion } from "motion/react";
import { GlitchText } from "@/components/ui/glitch-text";
import { Rule } from "@/components/ui/rule";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { LazyVideo } from "@/components/ui/lazy-video";

type Drone = {
  id: string;
  name: string;
  desc: string;
  assets: {
    image1: string;
    image2?: string;
    video?: string;
    videoPoster?: string;
  };
  slug?: string;
};

interface DronePlatformRowProps {
  drone: Drone;
  index: number;
}

export default function DronePlatformRow({
  drone,
  index,
}: DronePlatformRowProps) {
  const isEven = index % 2 === 0;
  const isOdd = !isEven;

  return (
    <div id={drone.slug}>
      {/* Label row */}
      <div
        className={`flex items-start gap-12 px-10 pt-10 md:pt-20 ${
          isEven ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Overline number */}
        <div className="min-w-8 pt-2.5">
          <GlitchText
            tag="span"
            className="font-mono text-xxs tracking-[0.2em] text-dim"
            text={drone.id}
            speed={60}
          />
        </div>

        {/* Name + description */}
        <div
          className={`flex flex-1 flex-col md:items-baseline-last md:gap-12 ${
            isOdd ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <h2
            className={`group mb-5 font-heading text-[clamp(3rem,9vw,7rem)] leading-[0.95] font-black uppercase text-primary ${
              isOdd ? "md:text-right" : ""
            }`}
          >
            {drone.slug === "dome" ? (
              <Link
                href={`/drones/${drone.slug}`}
                className="inline-flex items-baseline gap-4"
              >
                {drone.name}
                <motion.span
                  className="inline-block text-[0.4em] text-dim transition-colors group-hover:text-primary"
                  initial={{ x: -5, y: 5, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  whileHover={{ x: 3, y: -3 }}
                >
                  <BsArrowUpRight />
                </motion.span>
              </Link>
            ) : (
              <>{drone.name}</>
            )}
          </h2>

          <GlitchText
            tag="p"
            className={`max-w-[65ch] font-mono text-sm leading-[1.75] text-muted ${
              isOdd ? "md:text-right" : ""
            }`}
            text={drone.desc}
            speed={50}
          />
        </div>
      </div>

      {/* Image block 1 — JPG */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="relative mt-6 mb-0 mx-10 aspect-video overflow-hidden bg-surface"
      >
        <img
          src={
            drone.slug === "dome"
              ? drone.assets.image2 || drone.assets.image1
              : drone.assets.image1
          }
          alt={drone.name}
          className="absolute inset-0 h-full w-full object-cover brightness-80 saturate-[0.7]"
        />
      </motion.div>

      {/* Image block 2 — Video */}
      {drone.assets.video ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={`relative mt-6 mb-0 aspect-video overflow-hidden bg-card ${
            isEven ? "mr-10 md:mr-20 ml-10" : "mr-10 ml-10 md:ml-20"
          }`}
        >
          <LazyVideo
            src={drone.assets.video}
            poster={drone.assets.videoPoster}
            className={`absolute inset-0 h-full w-full object-cover brightness-[0.75] saturate-[0.7] ${
              isEven ? "object-[center_30%]" : "object-[center_70%]"
            }`}
          />
        </motion.div>
      ) : null}

      <Rule />
    </div>
  );
}
