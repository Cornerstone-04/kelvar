"use client";

import Link from "next/link";
import { site } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export function CareersGeneralApplication() {
  return (
    <div className="mt-16 border-t border-border-col pt-12 font-medium">
      <p className="mb-4 font-mono text-xs-plus text-white/50">
        Don't see a role that fits? We're always open to exceptional people.
      </p>

      <Link
        href={`mailto:${site.email}?subject=General Application — Kelvar Industries`}
        target="_blank"
        rel="noferrer"
        className="shrink-0 border border-white/15 px-6 py-3 font-mono text-xxs uppercase tracking-[0.2em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white inline-flex  items-center gap-3 justify-center"
      >
        Send a General Application <BsArrowRight />
      </Link>
    </div>
  );
}
