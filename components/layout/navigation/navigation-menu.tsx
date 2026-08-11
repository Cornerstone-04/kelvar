"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  navLinks,
  platformNavLinks,
  researchNavLinks,
  site,
} from "@/content/site";
import { NavBlock } from "./nav-block";

type MenuLevel = "platforms" | "research";

export function NavigationMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [level, setLevel] = useState<MenuLevel | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setLevel(null);
    setHovered(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>(
          'button:not([disabled]), a[href]:not([tabindex="-1"])',
        )
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [closeMenu, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.25 }}
          className="fixed inset-0 z-40 flex"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          id="site-navigation-dialog"
          ref={dialogRef}
        >
          <div
            className="relative hidden flex-1 cursor-pointer md:flex"
            onClick={closeMenu}
          >
            <div className="absolute inset-0 bg-[#07072a99] backdrop-blur-md" />
          </div>

          <motion.div
            initial={
              reduceMotion ? { opacity: 0 } : { transform: "translateX(100%)" }
            }
            animate={{ opacity: 1, transform: "translateX(0%)" }}
            exit={
              reduceMotion ? { opacity: 0 } : { transform: "translateX(100%)" }
            }
            transition={{
              duration: reduceMotion ? 0.15 : 0.36,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="relative flex h-full w-full flex-col gap-3 bg-[#07072af2] px-3 pt-24 pb-3 backdrop-blur-sm md:w-105 md:bg-[#07072ae6] md:backdrop-blur-xl"
          >
            <button
              onClick={closeMenu}
              className="absolute top-7 right-6 z-10 font-heading text-[1.4rem] text-dim transition-colors duration-200 hover:text-white"
              aria-label="Close menu"
            >
              ✕
            </button>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                {level ? (
                  <Submenu
                    level={level}
                    hovered={hovered}
                    onHover={setHovered}
                    onBack={() => setLevel(null)}
                    onNavigate={closeMenu}
                  />
                ) : (
                  <MainMenu
                    hovered={hovered}
                    onHover={setHovered}
                    onOpenLevel={setLevel}
                    onNavigate={closeMenu}
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="px-1 py-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-dim">
              Kelvar Industries · {site.location}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type MenuProps = {
  hovered: string | null;
  onHover: (id: string | null) => void;
  onNavigate: () => void;
};

function MainMenu({
  hovered,
  onHover,
  onOpenLevel,
  onNavigate,
}: MenuProps & { onOpenLevel: (level: MenuLevel) => void }) {
  return (
    <motion.div
      key="main-menu"
      initial={{ opacity: 0, transform: "translateX(-4%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(-4%)" }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      className="absolute inset-0 flex flex-col gap-3"
    >
      {navLinks.map(({ href, label }, index) => {
        const targetLevel =
          href === "/#platforms"
            ? "platforms"
            : href === "/research"
              ? "research"
              : null;

        return (
          <NavBlock
            key={href}
            id={href}
            label={label}
            href={targetLevel ? undefined : href}
            index={index}
            active={hovered === href}
            onHover={onHover}
            onClick={targetLevel ? () => onOpenLevel(targetLevel) : undefined}
            onNavigate={onNavigate}
            direction={targetLevel ? "forward" : undefined}
          />
        );
      })}
    </motion.div>
  );
}

function Submenu({
  level,
  hovered,
  onHover,
  onBack,
  onNavigate,
}: MenuProps & { level: MenuLevel; onBack: () => void }) {
  const links = level === "platforms" ? platformNavLinks : researchNavLinks;
  const overview = level === "platforms" ? "/#platforms" : "/research";

  return (
    <motion.div
      key={level}
      initial={{ opacity: 0, transform: "translateX(4%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(4%)" }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      className="absolute inset-0 flex flex-col gap-3"
    >
      <div className="flex items-end justify-between border-b border-white/10 px-2 pt-1 pb-3">
        <div>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-dim">
            You are viewing
          </p>
          <h2 className="mt-1 font-heading text-xl font-bold uppercase tracking-[0.08em] text-primary">
            {level === "platforms" ? "Platforms" : "Research & development"}
          </h2>
        </div>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-dim">
          Submenu
        </span>
      </div>
      <NavBlock
        id={`${level}-back`}
        label="Back to Main Menu"
        index={0}
        active={hovered === `${level}-back`}
        onHover={onHover}
        onClick={onBack}
        direction="back"
      />
      <NavBlock
        id={`${level}-overview`}
        label={level === "platforms" ? "Platform Overview" : "RD&D Overview"}
        href={overview}
        index={1}
        active={hovered === `${level}-overview`}
        onHover={onHover}
        onNavigate={onNavigate}
      />
      {links.map((link, index) => (
        <NavBlock
          key={link.href}
          id={`${level}-${link.href}`}
          label={link.label}
          href={link.href}
          index={index + 2}
          active={hovered === `${level}-${link.href}`}
          onHover={onHover}
          onNavigate={onNavigate}
        />
      ))}
    </motion.div>
  );
}
