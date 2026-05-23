import Link from "next/link";
import type { ReactNode } from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

type KelvarButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
};

const baseClass =
  "inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-3 font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-white/50";

export function KelvarButton({
  href,
  children,
  className = "",
  external,
  type = "button",
}: KelvarButtonProps) {
  const content = (
    <>
      {children}
      {external ? <BsArrowUpRight /> : <BsArrowRight />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} ${className}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseClass} ${className}`}>
      {content}
    </button>
  );
}
