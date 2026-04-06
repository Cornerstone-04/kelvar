"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function PressPreviewSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 md:px-10 py-28">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="flex items-center gap-3 font-heading text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase text-primary">
          Press
          <span className="text-[1.2rem] font-normal">↗</span>
        </h2>

        <Link
          href="/press"
          className="border-b border-[#ffffff26] pb-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted no-underline transition-colors inline-flex gap-3 items-center"
        >
          See All Articles <BsArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px bg-[#ffffff12]">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-bg p-6">
            <div className="relative mb-4 aspect-video overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,#28284699_0%,transparent_60%)]" />
            </div>

            <p className="mb-2 font-mono text-[0.7rem] leading-normal text-primary">
              Placeholder press headline — awaiting client content
            </p>

            <p className="font-mono text-[0.6rem] text-muted">
              Placeholder Outlet
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
