"use client";

import { SectionLabel } from "../section-label";
import { SpinningGlobe } from "./spinning-globe";

const nodes = [
  { id: "01", city: "Lagos", role: "Africa HQ", coord: "06.5°N · 03.4°E" },
  { id: "02", city: "London", role: "Europe HQ", coord: "51.5°N · 00.1°W" },
  {
    id: "03",
    city: "Los Angeles",
    role: "America HQ",
    coord: "34.0°N · 118.2°W",
  },
];

export function GlobalNetworkMap() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-16">
      <div className="mb-12">
        <SectionLabel>Global Reach</SectionLabel>
      </div>

      {/* Two-column: text left, globe right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — write-up + node cards */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs-plus leading-[1.85] text-muted">
              Kelvar Industries operates across three continents — not because
              scale is a goal, but because the threats we address are global.
              From Lagos to London to Los Angeles, our teams design, deploy, and
              support autonomous security systems in the environments that need
              them most.
            </p>
            <p className="font-mono text-xs-plus leading-[1.85] text-muted">
              Each headquarters anchors a regional network of partners, clients,
              and development resources. Together, they form the operational
              backbone of a company built to protect people and property
              wherever they are — and wherever risk follows.
            </p>
          </div>

          {/* Node cards */}
          <div className="grid grid-cols-1 gap-px bg-[#ffffff0f]">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="bg-bg md:px-6 py-5 transition-colors duration-200 hover:bg-surface flex items-center justify-between"
              >
                <div>
                  <p className="font-mono text-xxs font-medium tracking-[0.25em] text-dim mb-1 uppercase">
                    Node · {node.id}
                  </p>
                  <h3 className="font-heading text-[1.35rem] font-bold uppercase tracking-wide text-primary">
                    {node.city}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs-plus tracking-[0.2em] text-muted uppercase mb-1">
                    {node.role}
                  </p>
                  <p className="font-mono text-xxs tracking-[0.12em] text-dim">
                    {node.coord}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — globe */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 45vw, 560px)" }}
        >
          <SpinningGlobe />
        </div>
      </div>
    </section>
  );
}
