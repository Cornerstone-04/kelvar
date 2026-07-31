"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { LuArrowUp } from "react-icons/lu";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame: number | null = null;
    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 500);
        frame = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-6 right-6 z-40 flex h-8 w-8 cursor-pointer items-center justify-center border border-white/70 bg-bg backdrop-blur-lg transition-colors duration-300 ease-out hover:bg-bg/95 md:bottom-8 md:right-8"
        >
          <LuArrowUp className="relative z-2 text-sm text-white/80 transition-colors duration-300 group-hover:text-primary" />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-px top-1 h-[calc(100%-0.5rem)] w-[calc(100%+0.125rem)] origin-center scale-y-100 bg-bg transition-transform duration-300 ease-out group-hover:scale-y-0"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px left-1 h-[calc(100%+0.125rem)] w-[calc(100%-0.5rem)] origin-center scale-x-100 bg-bg transition-transform delay-100 duration-300 ease-out group-hover:scale-x-0"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
