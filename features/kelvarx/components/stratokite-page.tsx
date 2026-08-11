import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaSection } from "@/components/ui/cta-section";
import { LazyVideo } from "@/components/ui/lazy-video";
import { kelvarx } from "@/content/kelvarx";
import { stratokiteMedia } from "@/content/products/stratokite";
import { StratokiteMediaSection } from "./stratokite-media-section";
import { ProductSectionNav } from "@/components/products/product-section-nav";
import { ProductStatusBand } from "@/components/products/product-status-band";
import { ProductNarrativeIntro } from "@/components/products/product-narrative-intro";
import { TechnicalDataTable } from "@/components/products/technical-data-table";

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
            className="mb-8 inline-flex items-center gap-2 font-mono text-xxs uppercase tracking-[0.18em] text-muted transition-colors hover:text-white"
          >
            <BsArrowLeft /> KELVARX Programme
          </Link>
          <p className="font-mono text-xxs uppercase tracking-[0.24em] text-muted">
            KELVARX / Atmospheric platform
          </p>
          <h1 className="type-product mt-5">StratoKite</h1>
          <p className="mt-8 max-w-2xl font-mono text-xs-plus leading-[1.85] text-muted">
            {stratokite.description}
          </p>
        </div>
      </section>

      <ProductSectionNav
        productName="StratoKite"
        links={[
          { href: "#overview", label: "Overview" },
          { href: "#airframe", label: "Airframe" },
          { href: "#capabilities", label: "Capabilities" },
          { href: "#missions", label: "Mission profile" },
        ]}
      />

      <ProductStatusBand
        status="In development"
        items={[
          { label: "Programme", value: "KELVARX" },
          { label: "Platform class", value: stratokite.type },
          { label: "Primary role", value: "Atmospheric intelligence" },
        ]}
      />

      <div id="overview" className="scroll-mt-28">
        <ProductNarrativeIntro
          eyebrow="Platform Overview"
          title="A recoverable atmospheric platform built to observe, measure, and return."
          description={stratokite.description}
          statement="Performance figures remain unpublished while the platform is in development."
        />
      </div>

      <StratokiteMediaSection />

      <section
        id="capabilities"
        className="scroll-mt-28 px-6 py-14 md:px-10 md:py-24"
      >
        <SectionLabel>{stratokite.type}</SectionLabel>
        <div className="mt-10 grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
          <TechnicalDataTable
            title="Published technical profile"
            data={[
              { label: "Architecture", value: stratokite.type },
              { label: "Lift system", value: "Helium-assisted ascent" },
              { label: "Airframe", value: "Tail-sitter fixed-wing aircraft" },
              { label: "Navigation", value: "GPS tracking" },
              { label: "Processing", value: "AI edge processor" },
              { label: "Performance", value: "Pending platform validation" },
            ]}
          />
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            <SystemList title="Payload" items={stratokite.payload} />
            <SystemList
              title="Data collected"
              items={stratokite.dataCollected}
            />
          </div>
        </div>
      </section>

      <section
        id="missions"
        className="scroll-mt-28 border-t border-white/10 bg-surface px-6 py-14 md:px-10 md:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionLabel>Mission Profile</SectionLabel>
            <h2 className="type-editorial mt-7 max-w-xl text-primary">
              Designed around recoverable intelligence missions.
            </h2>
          </div>
          <SystemList title="Planned missions" items={stratokite.missions} />
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
      <h3 className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
        {title}
      </h3>
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
