"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { ethos } from "@/content/home";
import { PillarGrid } from "./pillar-grid";

export function EthosSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-28">
      <div className="mb-6 md:mb-12">
        <SectionLabel as="h2">Ethos</SectionLabel>
      </div>
      <PillarGrid items={ethos} />
    </section>
  );
}
