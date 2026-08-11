"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";
import { NavigationMenu } from "./navigation/navigation-menu";
import { useNavbarVisibility } from "./navigation/use-navbar-visibility";

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hidden = useNavbarVisibility(menuOpen);
  const reduceMotion = useReducedMotion();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, transform: "translateY(0%)" }}
        animate={{
          opacity: 1,
          transform:
            reduceMotion || !hidden ? "translateY(0%)" : "translateY(-100%)",
        }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/5 bg-nav-background px-6 py-4 backdrop-blur-sm md:px-10 md:backdrop-blur-lg"
      >
        <Link href="/" className="no-underline" onClick={closeMenu}>
          <span className="block font-heading text-base font-semibold leading-[1.2] uppercase tracking-[0.2em] text-white/70">
            Kelvar
            <br />
            Industries
          </span>
        </Link>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 no-underline"
          onClick={closeMenu}
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
          aria-controls="site-navigation-dialog"
        >
          <motion.span
            className="block h-px w-9 origin-center bg-white"
            animate={{
              transform: menuOpen
                ? "translateY(5.5px) rotate(45deg)"
                : "translateY(0) rotate(0deg)",
            }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-9 origin-center bg-white"
            animate={{
              transform: menuOpen
                ? "translateY(-5.5px) rotate(-45deg)"
                : "translateY(0) rotate(0deg)",
            }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.nav>

      <NavigationMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
