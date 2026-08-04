"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { NavigationMenu } from "./navigation/navigation-menu";
import { useNavbarVisibility } from "./navigation/use-navbar-visibility";

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hidden = useNavbarVisibility(menuOpen);

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/5 bg-nav-background px-6 py-4 backdrop-blur-sm md:px-10 md:backdrop-blur-lg"
      >
        <Link
          href="/"
          className="no-underline"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block font-heading text-base font-semibold leading-[1.2] uppercase tracking-[0.2em] text-white/70">
            Kelvar
            <br />
            Industries
          </span>
        </Link>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 no-underline"
          onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 flex flex-col justify-center gap-2 p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block h-px w-9 origin-center bg-white"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5.5 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-9 origin-center bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5.5 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.nav>

      <NavigationMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
