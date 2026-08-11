"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GlitchText } from "@/components/ui/glitch-text";

const menuBackgrounds: Record<string, string> = {
  "/": "#0d0d2ee6",
  "/#platforms": "#080d2ae6",
  "/research": "#080d2ae6",
  "/about": "#0a1130e6",
  "/focus": "#060e28e6",
  "/contact": "#04091fe6",
  "/careers": "#070a24e6",
};

type NavBlockProps = {
  id: string;
  label: string;
  index: number;
  href?: string;
  active: boolean;
  onHover: (id: string | null) => void;
  onClick?: () => void;
  onNavigate?: () => void;
  direction?: "back" | "forward";
};

export function NavBlock({
  id,
  label,
  index,
  href,
  active,
  onHover,
  onClick,
  onNavigate,
  direction,
}: NavBlockProps) {
  const pathname = usePathname();
  const hrefPath = href?.split("#")[0] || "/";
  const current = Boolean(href && pathname === hrefPath);
  const content = (
    <>
      <div className="absolute top-3 left-3">
        <div className="relative h-2 w-2 overflow-hidden rounded-full border border-white/40">
          <motion.div
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 rounded-full bg-white"
          />
        </div>
      </div>

      {active ? (
        <GlitchText
          tag="span"
          text={label}
          active
          speed={80}
          className="font-heading text-[clamp(1.6rem,4vw,2.2rem)] font-bold uppercase tracking-[0.04em] text-white"
        />
      ) : (
        <span className="font-heading text-[clamp(1.6rem,4vw,2.2rem)] font-bold uppercase tracking-[0.04em] text-muted">
          {label}
        </span>
      )}

      {direction && (
        <span
          className={`absolute right-4 bottom-3 font-mono text-base text-dim transition-transform duration-300 ${
            direction === "back"
              ? "group-hover:-translate-x-1"
              : "group-hover:translate-x-1"
          }`}
        >
          {direction === "back" ? <BsArrowLeft /> : <BsArrowRight />}
        </span>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(12px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{
        duration: 0.32,
        delay: 0.04 + index * 0.045,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(id)}
      onBlur={() => onHover(null)}
      className="group relative max-h-40 flex-1 overflow-hidden"
    >
      {href ? (
        <Link
          href={href}
          onClick={onNavigate}
          aria-current={current ? "page" : undefined}
          className="relative z-1 flex h-full w-full items-end px-3 py-2 text-left no-underline"
        >
          {content}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="relative z-1 flex h-full w-full items-end px-3 py-2 text-left"
        >
          {content}
        </button>
      )}

      <div className="pointer-events-none absolute inset-0 border border-white/6 bg-white/3" />
      <motion.div
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0"
        style={{ background: menuBackgrounds[id] ?? menuBackgrounds["/"] }}
      />
    </motion.div>
  );
}
