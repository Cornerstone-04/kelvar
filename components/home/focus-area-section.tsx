import { focus } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { PillarGrid } from "./pillar-grid";
import Link from "next/link";

export function AreasOfFocusSection() {
  return (
    <section className="border-t border-[#ffffff12] px-10 py-28">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div className="flex-1">
          <SectionLabel>Areas of Focus</SectionLabel>
        </div>
        <Link
          href="/focus"
          className="shrink-0 mb-8 font-mono text-xxs uppercase tracking-[0.15em] text-muted border-b border-[#ffffff20] pb-px hover:text-primary hover:border-[#ffffff60] transition-all duration-200"
        >
          Explore All →
        </Link>
      </div>
      <PillarGrid items={focus} />
    </section>
  );
}
