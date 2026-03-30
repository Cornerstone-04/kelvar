import { GlitchText } from "./glitch-text";

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <GlitchText
        className="text-xs tracking-[0.3em] uppercase text-white/60 font-mono"
        text={children}
        delay={400}
        speed={100}
      />
      <span className="flex-1 h-px bg-white/20" />
    </div>
  );
}
