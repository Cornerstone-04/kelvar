"use client";

import { motion } from "motion/react";
import { GlitchText } from "@/components/ui/glitch-text";
import { Rule } from "@/components/ui/rule";
import Link from "next/link";
import { LazyVideo } from "@/components/ui/lazy-video";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

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
  href?: string;
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
        className={`flex items-start px-10 pt-10 md:pt-20 ${
          isEven ? "flex-row" : "flex-row-reverse"
        }`}
      >
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
            {drone.href ? (
              <Link
                href={drone.href}
                className="group/link inline-flex items-end gap-4"
              >
                {drone.name}
                <motion.span
                  aria-hidden="true"
                  className="inline-block text-[0.4em] text-dim transition-[color,transform] duration-200 group-hover/link:-translate-y-2 group-hover/link:translate-x-2 group-hover/link:text-primary"
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BsArrowUpRight />
                </motion.span>
              </Link>
            ) : (
              <>{drone.name}</>
            )}
          </h2>

          <div className={isOdd ? "md:text-right" : ""}>
            <GlitchText
              tag="p"
              className="max-w-[65ch] font-mono text-sm leading-[1.75] text-muted"
              text={drone.desc}
              speed={50}
            />

            {drone.slug === "stratokite" && (
              <Link
                href="/kelvarx"
                className="group/programme mt-4 inline-flex items-center gap-2 font-mono text-xxs uppercase tracking-[0.15em] text-muted transition-colors duration-200 hover:text-primary"
              >
                Explore the KELVARX programme
                <BsArrowUpRight className="transition-transform duration-300 group-hover/programme:-translate-y-0.5 group-hover/programme:translate-x-0.5" />
              </Link>
            )}
          </div>
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
        <Image
          src={
            drone.assets.image2
              ? drone.assets.image2 || drone.assets.image1
              : drone.assets.image1
          }
          alt={drone.name}
          fill
          sizes="(max-width: 768px) calc(100vw - 5rem), calc(100vw - 10rem)"
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
