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
  "kelvar-button-frame group inline-flex min-h-12 items-center justify-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary";

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
      {external ? (
        <BsArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      ) : (
        <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
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
