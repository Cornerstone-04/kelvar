import type {
  KelvarxIntelligenceGroup,
  KelvarxSystem,
} from "@/types/kelvarx-types";
import { SectionLabel } from "@/components/ui/section-label";

type KainData = {
  name: string;
  description: string;
  groups: KelvarxIntelligenceGroup[];
};

export function KainNetwork({
  kain,
  systems,
}: {
  kain: KainData;
  systems: KelvarxSystem[];
}) {
  return (
    <section
      id="kain"
      className="scroll-mt-20 border-b border-white/10 px-6 py-14 md:px-10 md:py-24"
    >
      <SectionLabel>Atmospheric Intelligence Network</SectionLabel>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <h3 className="font-heading text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.85]">
            KAIN
          </h3>
          <p className="mt-6 font-mono text-xs-plus leading-[1.9] text-muted">
            {kain.description}
          </p>
        </div>
        <div
          role="img"
          aria-label="Three Stratos systems feed atmospheric and visual information into the shared KAIN intelligence layer."
          className="border border-white/10 bg-white/2 p-5 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {systems.map((system) => (
              <div
                key={system.id}
                className="relative border border-white/10 p-4 font-heading text-xl font-bold"
              >
                {system.name}
                <span className="absolute -bottom-5 left-1/2 h-5 w-px bg-white/35 md:-bottom-10 md:h-10" />
              </div>
            ))}
          </div>
          <div className="mt-10 border border-white/20 bg-white/5 p-5 text-center">
            <p className="font-mono text-xxs uppercase tracking-[0.24em] text-primary">
              Shared intelligence layer
            </p>
            <p className="mt-3 font-heading text-3xl font-black">{kain.name}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
        {kain.groups.map((group) => (
          <div key={group.label} className="bg-bg p-6">
            <h4 className="font-heading text-2xl font-bold">{group.label}</h4>
            <ul className="mt-5 space-y-3 font-mono text-xs-plus text-muted">
              {group.items.map((item) => (
                <li key={item} className="border-t border-white/8 pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
