"use client";

import { SectionLabel } from "../section-label";
import { SpinningGlobe } from "./spinning-globe";

const nodes = [
  {
    id: "01",
    city: "Lagos",
    role: "West Africa Hub",
    coord: "06.5°N · 03.4°E",
  },
  { id: "02", city: "London", role: "Europe HQ", coord: "51.5°N · 00.1°W" },
  {
    id: "03",
    city: "Los Angeles",
    role: "West Coast Hub",
    coord: "34.0°N · 118.2°W",
  },
];

export function GlobalNetworkMap() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-16">
      <div className="mb-10">
        <SectionLabel>Global Reach</SectionLabel>
      </div>

      {/* Globe */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(320px, 55vw, 580px)" }}
      >
        <SpinningGlobe />
      </div>

      {/* Node cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff0f] mt-7">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="bg-bg px-6 py-5 transition-colors duration-200 hover:bg-surface"
          >
            <p className="font-mono text-xxs font-medium tracking-[0.25em] text-dim mb-2 uppercase">
              Node · {node.id}
            </p>
            <h3 className="font-heading text-[1.35rem] font-bold uppercase tracking-wide text-primary mb-1">
              {node.city}
            </h3>
            <p className="font-mono text-xs-plus tracking-[0.2em] text-muted uppercase">
              {node.role}
            </p>
            <p className="font-mono text-xxs tracking-[0.12em] text-dim mt-1">
              {node.coord}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
