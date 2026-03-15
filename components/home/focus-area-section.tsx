import { focus } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { PillarGrid } from "./pillar-grid";

export function AreasOfFocusSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-12">
        <SectionLabel>Areas of Focus</SectionLabel>
      </div>
      <PillarGrid items={focus} />
    </section>
  );
}
