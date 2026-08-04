import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { site } from "@/content/site";

export function GeneralApplication() {
  return (
    <div className="mt-8 grid gap-8 border border-white/10 bg-surface p-7 md:mt-16 md:grid-cols-[1fr_auto] md:items-end md:p-10">
      <div>
        <p className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
          General application
        </p>
        <h3 className="mt-5 font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-none text-primary">
          Your discipline isn&apos;t listed?
        </h3>
        <p className="mt-4 max-w-xl font-mono text-xs-plus leading-[1.8] text-muted">
          We&apos;re always open to exceptional people who can strengthen what
          Kelvar is building.
        </p>
      </div>
      <Link
        href={`mailto:${site.email}?subject=General Application — Kelvar Industries`}
        target="_blank"
        rel="noopener noreferrer"
        className="kelvar-button-frame group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
      >
        Send a General Application <BsArrowRight />
      </Link>
    </div>
  );
}
