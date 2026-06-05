import { focus } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { PillarGrid } from "./pillar-grid";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export function AreasOfFocusSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-28">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <SectionLabel>Areas of Focus</SectionLabel>
        </div>
        <Link
          href="/focus"
          className="shrink-0 inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80] whitespace-nowrap"
        >
          Explore All <BsArrowRight />
        </Link>
      </div>
      <PillarGrid items={focus} />
    </section>
  );
}
