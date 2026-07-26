import Image from "next/image";
import { motion } from "motion/react";
import type {
  ResearchPlatform,
  PlatformDomain,
  PlatformTechnology,
  PlatformUseCase,
} from "@/types/research-types";
import { Rule } from "../ui/rule";
import { SectionLabel } from "../ui/section-label";
import { StratosStorySection } from "./stratos/stratos-story-section";
import { LazyVideo } from "../ui/lazy-video";

export function PlatformSection({ platform }: { platform: ResearchPlatform }) {
  if (platform.kind === "stratos") {
    return <StratosStorySection platform={platform} story={platform.story} />;
  }

  return (
    <>
      <section id={platform.id} className="scroll-mt-24 pb-12 md:pb-24">
        <PlatformHero platform={platform} />
        <PlatformIntro platform={platform} />
        <PlatformDomains platform={platform} />
        {platform.domainsLayout === "cards" && <Rule />}
        <TechnologyGrid technologies={platform.coreTech} />
        <Rule />
        <UseCaseGrid useCases={platform.useCases} />
      </section>

      <Rule />
    </>
  );
}

function PlatformHero({ platform }: { platform: ResearchPlatform }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2 }}
      className="relative mb-0 aspect-video w-full overflow-hidden"
    >
      {platform.hero.kind === "video" ? (
        <LazyVideo
          src={platform.hero.src}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
        />
      ) : (
        <Image
          src={platform.hero.src}
          alt={platform.hero.alt}
          fill
          priority={platform.id === "stratos"}
          sizes="100vw"
          className="object-cover brightness-[0.55]"
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_8%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,7,42,0.5)_100%)]" />

      <div className="absolute bottom-8 left-6 md:left-10">
        <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] font-black normal-case leading-none text-primary">
          {platform.name}
          {platform.trademark && (
            <sup className="ml-1 align-super text-[0.25em] text-primary">™</sup>
          )}
        </h2>

        <p className="mt-2 max-w-[40ch] font-mono text-xs-plus font-medium text-muted md:text-base">
          {platform.tagline}
        </p>
      </div>
    </motion.div>
  );
}

function PlatformIntro({ platform }: { platform: ResearchPlatform }) {
  return (
    <div className="border-b border-[#ffffff12] px-6 py-12 md:px-10 md:py-20">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="max-w-xl">
          <SectionLabel className="mb-3">{platform.label}</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-[clamp(1.3rem,3vw,2rem)] font-bold leading-[1.15] text-primary"
          >
            {platform.introTitle}
          </motion.h2>

          <p className="mt-4 font-mono text-xxs font-semibold uppercase tracking-[0.2em] text-dim">
            {platform.type}
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs-plus leading-[1.9] text-muted"
        >
          {platform.description}
        </motion.p>
      </div>
    </div>
  );
}

function PlatformDomains({ platform }: { platform: ResearchPlatform }) {
  if (platform.domainsLayout === "immersive") {
    return (
      <>
        {platform.domains.map((domain, index) => (
          <div key={domain.id}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="relative aspect-video w-full overflow-hidden md:aspect-21/9"
            >
              <Image
                src={domain.image}
                alt={`${platform.name} — ${domain.name}`}
                fill
                sizes="100vw"
                className="object-cover brightness-50 saturate-[0.5]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_55%)]" />

              <div className="absolute bottom-0 left-6 right-6 flex items-end justify-between pb-6 md:left-10 md:right-10 md:pb-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-heading text-[clamp(4rem,10vw,8rem)] font-black normal-case leading-none tracking-[-0.02em] text-primary"
                >
                  {domain.name}
                </motion.h3>

                <span className="mb-2 shrink-0 font-mono text-xxs font-medium tracking-[0.2em] text-muted md:mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            <CapabilitySplit domain={domain} />
            <Rule />
          </div>
        ))}
      </>
    );
  }

  return <CardDomains label={platform.domainsLabel} domains={platform.domains} />;
}

function CardDomains({
  label,
  domains,
}: {
  label: string;
  domains: PlatformDomain[];
}) {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20">
      <div className="mb-12">
        <SectionLabel>{label}</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-3">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between bg-bg py-8 sm:px-6 md:px-8 md:py-10"
          >
            <div>
              <div className="relative mb-6 aspect-4/5 w-full overflow-hidden border border-[#ffffff08] bg-[#ffffff05] sm:aspect-3/4 md:aspect-4/5">
                <Image
                  src={domain.image}
                  alt={domain.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="select-none object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </div>

              <h3 className="mb-2 font-heading text-[1.3rem] font-bold leading-tight text-primary">
                {domain.name}
              </h3>

              <p className="mb-6 border-b border-[#ffffff12] pb-6 font-mono text-xxs uppercase tracking-widest text-muted">
                {domain.headline}
              </p>
            </div>

            <div className="space-y-3">
              {domain.capabilities.map((capability, capabilityIndex) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: -4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + capabilityIndex * 0.05,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="py-1 font-mono text-xxs font-bold tracking-[0.2em] text-dim">
                    {String(capabilityIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-xs-plus leading-relaxed text-muted">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CapabilitySplit({ domain }: { domain: PlatformDomain }) {
  return (
    <div className="px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <p className="font-mono text-xxs font-medium uppercase leading-relaxed tracking-[0.25em] text-muted">
          {domain.headline}
        </p>

        <NumberedList items={domain.capabilities} animated />
      </div>
    </div>
  );
}

function TechnologyGrid({
  technologies,
}: {
  technologies: PlatformTechnology[];
}) {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20">
      <div className="mb-12">
        <SectionLabel>Core Technologies</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-3">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-bg py-8 sm:px-6 md:px-8 md:py-10"
          >
            <div className="mb-4 font-mono text-xxs uppercase tracking-[0.2em] text-dim">
              {technology.id}
            </div>

            <h3 className="mb-3 font-heading text-[1.3rem] font-bold text-primary">
              {technology.title}
            </h3>

            <p className="font-mono text-xs-plus leading-[1.75] text-muted">
              {technology.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function UseCaseGrid({ useCases }: { useCases: PlatformUseCase[] }) {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20">
      <div className="mb-12">
        <SectionLabel>Use Cases</SectionLabel>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#ffffff12] md:grid-cols-3">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-surface px-6 py-8 md:px-8 md:py-10"
          >
            <h3 className="mb-6 font-heading text-[1.2rem] font-bold text-primary">
              {useCase.category}
            </h3>

            <NumberedList items={useCase.items} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function NumberedList({
  items,
  animated = false,
}: {
  items: string[];
  animated?: boolean;
}) {
  return (
    <div className="border-t border-[#ffffff12]">
      {items.map((item, index) => {
        const content = (
          <>
            <span className="shrink-0 font-mono text-xxs tracking-[0.15em] text-dim">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-mono text-xs-plus leading-relaxed text-muted">
              {item}
            </span>
          </>
        );

        if (animated) {
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-6 border-b border-[#ffffff12] py-4"
            >
              {content}
            </motion.div>
          );
        }

        return (
          <div
            key={item}
            className="flex items-center gap-4 border-b border-[#ffffff12] py-4"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
