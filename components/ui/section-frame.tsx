import type { ReactNode } from "react";
import { SectionLabel } from "./section-label";

type SectionFrameProps = {
  children: ReactNode;
  label?: string;
  className?: string;
  innerClassName?: string;
  surface?: "default" | "surface";
};

export function SectionFrame({
  children,
  label,
  className = "",
  innerClassName = "",
  surface = "default",
}: SectionFrameProps) {
  return (
    <section
      className={`border-t border-white/10 px-6 py-14 md:px-10 md:py-24 ${
        surface === "surface" ? "bg-surface" : ""
      } ${className}`}
    >
      <div className={innerClassName}>
        {label && (
          <div className="mb-8 md:mb-12">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
