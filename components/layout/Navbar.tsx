"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

const menuBgs: Record<string, string> = {
  "/": "linear-gradient(135deg, #0d0d2e 0%, #1a1a4e 100%)",
  "/about": "linear-gradient(135deg, #07072d 0%, #282846 100%)",
  "/careers": "linear-gradient(135deg, #0a0a20 0%, #1c1c38 100%)",
  "/press": "linear-gradient(135deg, #080718 0%, #14142e 100%)",
  "/contact": "linear-gradient(135deg, #060615 0%, #0f0f28 100%)",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: hidden && !open ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-3.75 backdrop-blur-lg"
        style={{
          background: "rgba(7,7,42,0.75)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Link
          href="/"
          className="no-underline font-semibold text-sm font-heading tracking-[0.2em] uppercase leading-[1.2] block"
          onClick={() => setOpen(false)}
        >
          <span style={{ color: "rgba(255,255,255,0.7)" }}>
            Kelvar
            <br />
            Industries
          </span>
        </Link>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 no-underline"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/kelvar-bird.png"
            alt="Kelvar Industries"
            width={40}
            height={40}
            className="rounded-sm opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center gap-1.25 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-9 bg-white origin-center"
            animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px bg-white origin-center w-9"
            animate={{ rotate: open ? -45 : 0, y: open ? -5.5 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex"
            style={{ background: "rgba(7,7,42,0.3)" }}
          >
            {/* Left preview panel — desktop only */}
            <div className="hidden md:block flex-1 relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: "#07072a" }}
              />
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    key={hovered}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                    style={{ background: menuBgs[hovered] }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-105 flex flex-col justify-between py-20 px-10 relative"
              style={{
                background: "#07072a",
                borderLeft: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 transition-colors duration-200"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.4rem",
                  color: "rgba(255,255,255,0.35)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
                aria-label="Close menu"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-1 mt-4">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => setHovered(href)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      paddingBottom: "1.25rem",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 no-underline"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full shrink-0 block"
                        animate={{
                          background:
                            hovered === href ? "white" : "transparent",
                          borderColor:
                            hovered === href
                              ? "white"
                              : "rgba(255,255,255,0.25)",
                          scale: hovered === href ? 1.3 : 1,
                        }}
                        style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                        transition={{ duration: 0.15 }}
                      />
                      <span
                        className="uppercase font-heading font-bold tracking-[0.04em] "
                        style={{
                          fontSize: "clamp(2rem, 5vw, 2.6rem)",
                          color:
                            hovered === href
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.3)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div
                className="font-mono text-[0.6rem] tracking-[0.15em] uppercase"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                Kelvar Industries · London, UK
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
