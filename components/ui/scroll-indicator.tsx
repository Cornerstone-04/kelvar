"use client";

import { motion } from "motion/react";

export function ScrollIndicator() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 z-3 w-9 md:w-14"
      style={{
        bottom: "clamp(1.25rem, 3vw, 2rem)",
        transform: "translateX(-50%)",
      }}
      initial={{ opacity: 0, y: -4 }}
      animate={{
        opacity: [0.35, 0.9, 0.35],
        y: [0, 7, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 60 15"
        fill="none"
      >
        <path
          d="M59.0454 0.767578L30.0227 14.0909L1 0.767577"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
