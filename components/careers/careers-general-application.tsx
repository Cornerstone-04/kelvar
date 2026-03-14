"use client";

import Link from "next/link";
import { site } from "@/lib/data";

export default function CareersGeneralApplication() {
  return (
    <div className="mt-16 border-t border-border-col pt-12">
      <p className="mb-4 font-mono text-[0.78rem] text-white/25">
        Don't see a role that fits? We're always open to exceptional people.
      </p>

      <Link
        href={`mailto:${site.email}?subject=General Application — Kelvar Industries`}
        className="border-b border-white/15 pb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40 no-underline transition-all duration-200 hover:border-white/50 hover:text-white"
      >
        Send a General Application →
      </Link>
    </div>
  );
}