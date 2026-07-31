import { GlitchText } from "./glitch-text";

export function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <GlitchText
        className={`text-xxs md:text-xs tracking-[0.3em] uppercase text-white/70 font-mono ${className}`}
        text={children}
        delay={400}
        speed={100}
      />
      <span className="flex-1 h-px bg-white/20" />
    </div>
  );
}
