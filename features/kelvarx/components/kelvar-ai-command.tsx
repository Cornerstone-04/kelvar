import { SectionLabel } from "@/components/ui/section-label";

type CommandData = {
  name: string;
  description: string;
  capabilities: string[];
};

export function KelvarAiCommand({ command }: { command: CommandData }) {
  return (
    <section
      id="kelvar-ai-command"
      className="scroll-mt-20 border-b border-white/10 px-6 py-14 md:px-10 md:py-24"
    >
      <SectionLabel>Operational Intelligence Layer</SectionLabel>
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="type-editorial">{command.name}</h2>
          <p className="mt-6 font-mono text-xs-plus leading-[1.9] text-muted">
            {command.description}
          </p>
        </div>
        <div className="border border-white/10 bg-[#08082d] p-4 md:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xxs uppercase tracking-[0.18em] text-dim">
            <span>Command surface concept</span>
            <span className="text-muted">Illustrative</span>
          </div>
          <div className="mt-4 grid min-h-80 gap-4 md:grid-cols-[1.25fr_0.75fr]">
            <div className="relative overflow-hidden border border-white/8 bg-[radial-gradient(circle_at_65%_40%,rgba(245,245,249,0.12),transparent_6%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent)]">
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[42px_42px]" />
              <p className="absolute bottom-4 left-4 font-mono text-xxs uppercase tracking-[0.18em] text-dim">
                Atmospheric field / no live data
              </p>
            </div>
            <div className="grid gap-px bg-white/10">
              {[
                "Fleet overview",
                "Telemetry",
                "Mission state",
                "Intelligence events",
              ].map((label) => (
                <div key={label} className="bg-bg p-4">
                  <p className="font-mono text-xxs uppercase tracking-[0.16em] text-muted">
                    {label}
                  </p>
                  <div className="mt-4 h-px w-2/3 bg-white/10" />
                  <div className="mt-3 h-px w-1/2 bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {command.capabilities.map((capability) => (
          <div key={capability} className="bg-bg p-5">
            <p className="font-heading text-xl font-bold">{capability}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
