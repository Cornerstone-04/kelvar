import { GlitchText } from "./glitch-text";

export function SectionLabel({
  children,
  className,
  as = "p",
}: {
  children: string;
  className?: string;
  as?: "p" | "h2" | "h3";
}) {
  return (
    <div className="flex items-center gap-4">
      <GlitchText
        tag={as}
        className={`text-xxs md:text-xs tracking-[0.3em] uppercase text-white/70 font-mono ${className}`}
        text={children}
        delay={400}
        speed={100}
      />
      <span className="flex-1 h-px bg-white/20" />
    </div>
  );
}
