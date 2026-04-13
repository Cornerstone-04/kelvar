"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { LuArrowUp } from "react-icons/lu";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex h-8 w-8 cursor-pointer items-center justify-center border border-white/10 bg-bg/80 backdrop-blur-lg transition-all ease-linear duration-300 hover:border-orange hover:bg-bg/95"
        >
          <LuArrowUp className="text-sm text-white/80 transition-colors duration-300 group-hover:text-orange" />

          <span className="absolute -left-px -top-px h-1.5 w-1.5 border-l border-t border-white/30 group-hover:border-white/90 ease-linear transition-all duration-300" />
          <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-white/30 transition-colors duration-300 group-hover:border-white/90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
