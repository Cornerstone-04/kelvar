"use client";

import { motion, useReducedMotion } from "motion/react";

export function ScrollingText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.p
      initial={reduceMotion ? false : { opacity: 0.72 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {text}
    </motion.p>
  );
}
