import type { ReactNode } from "react";
import type {
  KelvarxApplication,
  KelvarxIntelligenceGroup,
  KelvarxSystem,
} from "@/types/kelvarx-types";
import { SectionLabel } from "@/components/ui/section-label";

type KainData = {
  name: string;
  description: string;
  groups: KelvarxIntelligenceGroup[];
};

type CommandData = {
  name: string;
  description: string;
  capabilities: string[];
};

export function KainNetwork({
  kain,
  systems,
  command,
  applications,
}: {
  kain: KainData;
  systems: KelvarxSystem[];
  command: CommandData;
  applications: KelvarxApplication[];
}) {
  return (
    <section
      id="kain"
      className="scroll-mt-20 border-b border-white/10 px-6 py-14 md:px-10 md:py-24"
    >
      <SectionLabel>Atmospheric Intelligence Network</SectionLabel>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
        <div>
          <h2 className="type-editorial">KAIN</h2>
          <p className="mt-6 font-mono text-xs-plus leading-[1.9] text-muted">
            {kain.description}
          </p>
          <p className="mt-8 border-l border-white/20 pl-5 font-mono text-xxs uppercase leading-relaxed tracking-[0.18em] text-dim">
            Proposed system architecture · not a live network status display
          </p>
        </div>
        <figure className="border border-white/10 bg-white/2 p-4 md:p-7">
          <figcaption className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-xxs uppercase tracking-[0.18em] text-dim">
            <span>KELVARX system flow</span>
            <span>Concept architecture</span>
          </figcaption>

          <ArchitectureLayer label="Platforms" tone="surface">
            {systems.map((system) => (
              <ArchitectureNode key={system.id} title={system.name}>
                {system.type}
              </ArchitectureNode>
            ))}
          </ArchitectureLayer>

          <FlowConnector label="collect" />

          <ArchitectureLayer label="Signals">
            {kain.groups.slice(0, 2).map((group) => (
              <ArchitectureNode key={group.label} title={group.label}>
                {group.items.slice(0, 3).join(" · ")}
              </ArchitectureNode>
            ))}
          </ArchitectureLayer>

          <FlowConnector label="fuse" />

          <div className="border border-white/25 bg-white/7 p-5 text-center">
            <p className="font-mono text-xxs uppercase tracking-[0.22em] text-muted">
              Shared intelligence layer
            </p>
            <p className="mt-3 font-heading text-3xl font-black text-primary">
              {kain.name}
            </p>
          </div>

          <FlowConnector label="coordinate" />

          <div className="grid gap-px bg-white/10 md:grid-cols-[0.78fr_1.22fr]">
            <ArchitectureNode title={command.name} emphasized>
              Missions · telemetry · fleet control
            </ArchitectureNode>
            <ArchitectureNode title="Operational outcomes">
              {applications
                .slice(0, 3)
                .map((application) => application.name)
                .join(" · ")}
            </ArchitectureNode>
          </div>
        </figure>
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

function ArchitectureLayer({
  label,
  children,
  tone = "default",
}: {
  label: string;
  children: ReactNode;
  tone?: "default" | "surface";
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-xxs uppercase tracking-[0.2em] text-dim">
        {label}
      </p>
      <div
        className={`grid gap-px bg-white/10 ${
          tone === "surface" ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function ArchitectureNode({
  title,
  children,
  emphasized = false,
}: {
  title: string;
  children: ReactNode;
  emphasized?: boolean;
}) {
  return (
    <div className={`p-4 ${emphasized ? "bg-white/8" : "bg-bg"}`}>
      <p className="font-heading text-xl font-bold text-primary">{title}</p>
      <p className="mt-3 font-mono text-xxs leading-relaxed text-muted">
        {children}
      </p>
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-14 items-center justify-center gap-3"
    >
      <span className="h-full w-px bg-white/20" />
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-dim">
        {label}
      </span>
    </div>
  );
}
