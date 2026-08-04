"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
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

  const closeMenu = () => {
    setLevel(null);
    setHovered(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 flex"
        >
          <div
            className="relative hidden flex-1 cursor-pointer md:flex"
            onClick={closeMenu}
          >
            <div className="absolute inset-0 bg-[#07072a99] backdrop-blur-md" />
          </div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full w-full flex-col gap-3 bg-[#07072af2] px-3 pt-24 pb-3 backdrop-blur-sm md:w-105 md:bg-[#07072ae6] md:backdrop-blur-xl"
          >
            <button
              onClick={closeMenu}
              className="absolute top-7 right-6 z-10 font-heading text-[1.4rem] text-white/35 transition-colors duration-200 hover:text-white"
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

            <div className="px-1 py-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-white/18">
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
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
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
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col gap-3"
    >
      <NavBlock
        id={`${level}-back`}
        label="Main Menu"
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
