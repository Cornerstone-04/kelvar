import { focus } from "@/content/home";
import { SectionLabel } from "../ui/section-label";
import { PillarGrid } from "./pillar-grid";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export function AreasOfFocusSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-28">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <SectionLabel as="h2">Areas of Focus</SectionLabel>
        </div>
        <Link
          href="/focus"
          className="kelvar-button-frame group inline-flex min-h-12 shrink-0 items-center gap-4 whitespace-nowrap border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
        >
          Explore All <BsArrowRight />
        </Link>
      </div>
      <PillarGrid items={focus} />
    </section>
  );
}
