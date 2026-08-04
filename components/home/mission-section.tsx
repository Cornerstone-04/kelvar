"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";
import { BsArrowRight } from "react-icons/bs";

export function MissionSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 md:px-10 py-12 md:py-32">
      <div className="max-w-300">
        <div className="mb-8">
          <SectionLabel as="h2">Mission</SectionLabel>
        </div>

        <p className="mb-10 font-heading text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.35] font-bold normal-case text-primary">
          {site.mission}
        </p>

        <Link
          href="/about"
          className="kelvar-button-frame group inline-flex min-h-12 items-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
        >
          Discover the Kelvar Story <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
