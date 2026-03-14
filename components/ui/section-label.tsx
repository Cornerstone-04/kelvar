import GlitchText from "./glitch-text";

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <GlitchText
        className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-mono"
        text={children}
        delay={400}
        speed={100}
      />
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}
