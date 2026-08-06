import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaSection } from "@/components/ui/cta-section";
import { LazyVideo } from "@/components/ui/lazy-video";
import { kelvarx } from "@/content/kelvarx";
import { stratokiteMedia } from "@/content/products/stratokite";
import { StratokiteMediaSection } from "./stratokite-media-section";

const stratokite = kelvarx.systems[0];

export function StratokitePage() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="relative flex min-h-svh items-end overflow-hidden px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <LazyVideo
          src={stratokiteMedia.hero.video}
          poster={stratokiteMedia.hero.poster}
          eager
          className="absolute inset-0 h-full w-full object-cover brightness-[0.48] saturate-[0.75]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_72%),linear-gradient(to_right,rgba(0,0,0,0.58),transparent_62%)]" />
        <div className="relative z-1 w-full">
          <Link
            href="/kelvarx"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xxs uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
          >
            <BsArrowLeft /> KELVARX Programme
          </Link>
          <p className="font-mono text-xxs uppercase tracking-[0.24em] text-muted">
            KELVARX / Platform 01
          </p>
          <h1 className="mt-5 font-heading text-[clamp(5rem,14vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.03em]">
            StratoKite
          </h1>
          <p className="mt-8 max-w-2xl font-mono text-xs-plus leading-[1.85] text-white/65">
            {stratokite.description}
          </p>
        </div>
      </section>

      <StratokiteMediaSection />

      <section className="px-6 py-14 md:px-10 md:py-24">
        <SectionLabel>{stratokite.type}</SectionLabel>
        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
          <SystemList title="Payload" items={stratokite.payload} />
          <SystemList title="Data" items={stratokite.dataCollected} />
          <SystemList title="Missions" items={stratokite.missions} />
        </div>
        <Link
          href="/kelvarx#stratos-series"
          className="kelvar-button-frame group mt-10 inline-flex min-h-12 items-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
        >
          Explore the complete Stratos Series <BsArrowRight />
        </Link>
      </section>

      <CtaSection
        title="Build Beyond"
        breakTitle="The Horizon"
        description="Discuss atmospheric intelligence, observation, and connectivity partnerships with the KELVARX team."
        linkHref="/contact"
        linkText="Discuss a Partnership"
      />
    </div>
  );
}

function SystemList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-bg p-6 md:p-8">
      <h2 className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
        {title}
      </h2>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="border-t border-white/8 pt-4 font-mono text-xs-plus leading-relaxed text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
