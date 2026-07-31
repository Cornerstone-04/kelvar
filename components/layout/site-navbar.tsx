"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  navLinks,
  platformNavLinks,
  researchNavLinks,
  site,
} from "@/content/site";
import { GlitchText } from "../ui/glitch-text";

const menuBgs: Record<string, string> = {
  "/": "#0d0d2ee6",
  "/#platforms": "#080d2ae6",
  "/research": "#080d2ae6",
  "/about": "#0a1130e6",
  "/focus": "#060e28e6",
  "/contact": "#04091fe6",
  "/careers": "#070a24e6",
};

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame: number | null = null;

    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        const latest = window.scrollY;
        setHidden(latest > previousY && latest > 80);
        previousY = latest;
        frame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: hidden && !open ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-50 flex py-4 items-center justify-between border-b border-white/5 bg-nav-background px-6 backdrop-blur-sm md:px-10 md:backdrop-blur-lg"
      >
        <Link href="/" className="no-underline" onClick={() => setOpen(false)}>
          <span className="block font-heading text-base font-semibold leading-[1.2] uppercase tracking-[0.2em] text-white/70">
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
            src="/assets/images/brand/kelvar-bird.png"
            alt="Kelvar Industries"
            width={60}
            height={60}
            className="rounded-sm opacity-90 transition-opacity duration-200 hover:opacity-100"
          />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="-mr-2 flex flex-col justify-center gap-2 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-9 origin-center bg-white"
            animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-9 origin-center bg-white"
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
          >
            {/* Close hit area on left — desktop */}
            <div
              className="relative hidden flex-1 cursor-pointer md:flex"
              onClick={() => setOpen(false)}
            >
              <div
                className="absolute inset-0 bg-[#07072a99] backdrop-blur-md"
              />
            </div>

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full w-full flex-col gap-3 bg-[#07072af2] px-3 pt-24 pb-3 backdrop-blur-sm md:w-105 md:bg-[#07072ae6] md:backdrop-blur-xl"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-7 right-6 z-10 font-heading text-[1.4rem] text-white/35 transition-colors duration-200 hover:text-white"
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Nav items — each is a flex-1 box */}
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHovered(href)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative max-h-40 flex-1 overflow-hidden"
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="relative z-1 flex h-full w-full items-end px-3 py-2 no-underline"
                  >
                    {/* Circle indicator */}
                    <div className="absolute top-3 left-3">
                      <div className="relative h-2 w-2 overflow-hidden rounded-full border border-white/40">
                        <motion.div
                          animate={{
                            scale: hovered === href ? 1 : 0,
                            opacity: hovered === href ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 rounded-full bg-white"
                        />
                      </div>
                    </div>

                    {/* Label */}
                    {hovered === href ? (
                      <GlitchText
                        tag="span"
                        text={label}
                        active={true}
                        speed={80}
                        className="font-heading text-[clamp(1.6rem,4vw,2.2rem)] font-bold uppercase tracking-[0.04em] text-white"
                      />
                    ) : (
                      <span className="font-heading text-[clamp(1.6rem,4vw,2.2rem)] font-bold uppercase tracking-[0.04em] text-white/35">
                        {label}
                      </span>
                    )}
                  </Link>

                  {(href === "/#platforms" || href === "/research") && (
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-3 top-3 z-2 grid gap-1 text-right"
                    >
                      {(href === "/#platforms"
                        ? platformNavLinks
                        : researchNavLinks
                      ).map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setOpen(false)}
                          className="min-h-8 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* bg base */}
                  <div className="absolute inset-0 border border-white/6 bg-white/3" />

                  {/* hover flood */}
                  <motion.div
                    animate={{ opacity: hovered === href ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                    style={{ background: menuBgs[href] ?? menuBgs["/"] }}
                  />
                </motion.div>
              ))}

              {/* Footer */}
              <div className="px-1 py-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-white/18">
                Kelvar Industries · {site.location}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
