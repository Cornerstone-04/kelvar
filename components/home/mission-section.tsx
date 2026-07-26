"use client";

import Link from "next/link";
import { site } from "@/content";
import { SectionLabel } from "@/components/ui/section-label";
import { BsArrowRight } from "react-icons/bs";

export function MissionSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-32">
      <div className="max-w-300">
        <div className="mb-8">
          <SectionLabel>Mission</SectionLabel>
        </div>

        <p className="mb-10 font-heading text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.35] font-bold normal-case text-primary">
          {site.mission}
        </p>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 border border-[#ffffff1f] px-[1.2rem] py-[0.6rem] font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/40 no-underline transition-all duration-200 ease-in-out hover:border-[#ffffff66] hover:text-white"
        >
          Read More <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
