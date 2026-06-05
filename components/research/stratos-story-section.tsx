"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import type {
  Platform,
  PlatformStory,
  PlatformStoryMedia,
} from "@/lib/platform-types";
import { Rule } from "../ui/rule";
import { SectionLabel } from "../ui/section-label";
import { MetricGrid } from "../ui/metric-grid";

export function StratosStorySection({
  platform,
  story,
}: {
  platform: Platform;
  story: PlatformStory;
}) {
  return (
    <>
      <section
        id={platform.id}
        className="relative isolate scroll-mt-24 overflow-hidden pb-16 md:pb-24"
      >
        {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(148,148,168,0.16),transparent_34%),radial-gradient(circle_at_85%_26%,rgba(245,245,249,0.08),transparent_28%)]" />*/}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-224 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_55%)]" />

        <StoryHero platform={platform} story={story} />
        <OverviewBand story={story} />
        <ArchitectureBlock story={story} />
        <PlatformTypesBlock story={story} />
        <OperationsBlock story={story} />
        <ApplicationsBlock story={story} />
        <CostAnalysisBlock story={story} />
        <AdvantagesBlock story={story} />
      </section>

      <Rule />
    </>
  );
}

function StoryHero({
  platform,
  story,
}: {
  platform: Platform;
  story: PlatformStory;
}) {
  return (
    <div className="relative min-h-[88vh] overflow-hidden border-b border-white/10">
      <Image
        src={story.hero.src}
        alt={story.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top brightness-[0.48] saturate-[0.78]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,rgba(7,7,42,0.25)_38%,rgba(7,7,42,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(7,7,42,0.8)_100%)]" />

      <div className="relative flex min-h-[88vh] flex-col justify-end px-6 pb-8 pt-32 md:px-10 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <p className="font-mono text-xxs font-semibold uppercase tracking-[0.28em] text-white/65 md:text-xs">
            {story.eyebrow}
          </p>

          <h2 className="mt-5 max-w-5xl font-heading text-[clamp(4.75rem,13vw,12rem)] font-black normal-case leading-[0.82] text-primary">
            {platform.name}
            {platform.trademark && (
              <sup className="ml-1 align-super text-[0.22em] text-primary">
                ™
              </sup>
            )}
          </h2>

          <p className="mt-5 max-w-232 font-heading text-[clamp(2rem,4.6vw,5rem)] font-bold uppercase leading-[0.9] text-primary/90">
            {story.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid gap-px bg-white/10 lg:grid-cols-[minmax(0,1.45fr)_minmax(22rem,0.9fr)]"
        >
          <div className="bg-bg/90 p-5 backdrop-blur-md md:p-7">
            <p className="max-w-5xl font-mono text-xs-plus leading-[1.85] text-muted md:text-sm">
              {story.summary}
            </p>
          </div>

          <MetricGrid
            metrics={story.metrics}
            columns="sm:grid-cols-3 lg:grid-cols-1 "
          />
        </motion.div>
      </div>
    </div>
  );
}

function OverviewBand({ story }: { story: PlatformStory }) {
  return (
    <StoryFrame className="border-b border-white/10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
        <div>
          <SectionLabel>{story.overview.label}</SectionLabel>
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl font-heading text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[0.9] text-primary"
          >
            {story.overview.title}
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs-plus leading-[1.95] text-muted md:text-sm"
        >
          {story.overview.body}
        </motion.p>
      </div>
    </StoryFrame>
  );
}

function ArchitectureBlock({ story }: { story: PlatformStory }) {
  return (
    <StoryFrame className="border-b border-white/10">
      <SectionLabel>{story.architecture.label}</SectionLabel>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(20rem,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <h3 className="max-w-3xl font-heading text-[clamp(2.4rem,5vw,5.5rem)] font-black leading-[0.9] text-primary">
          {story.architecture.title}
        </h3>

        <p className="max-w-5xl font-mono text-xs-plus leading-[1.9] text-muted">
          {story.architecture.body}
        </p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(22rem,1fr)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-168 2xl:min-h-224 overflow-hidden border border-white/10 bg-[#FEFDFB]"
        >
          <Image
            src={story.architecture.diagram.src}
            alt={story.architecture.diagram.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 58vw"
            className="object-contain p-4 md:p-8"
          />

          <div className="absolute left-4 top-4 border border-bg/10 bg-bg/80 px-3 py-2 backdrop-blur md:left-6 md:top-6">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/65">
              Component schematic
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6 md:p-8">
            <p className="font-mono text-xxs uppercase tracking-[0.25em] text-dim">
              Hybrid System Logic
            </p>
            <h4 className="mt-5 font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-none text-primary">
              Lift, power, sensing, and stabilisation operate as one stack.
            </h4>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-1">
            {story.architecture.parts.map((part, index) => (
              <motion.div
                key={part.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-bg/88 p-5 md:p-6"
              >
                <div className="flex items-start justify-between gap-5">
                  <h4 className="font-heading text-[1.7rem] font-bold leading-none text-primary">
                    {part.name}
                  </h4>
                  <span className="shrink-0 font-mono text-xxs text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs-plus leading-relaxed text-muted">
                  {part.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="mt-6 grid gap-px bg-white/10 md:grid-cols-4">
        {story.architecture.parts.map((part, index) => (
          <motion.div
            key={`${part.name}-signal`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-surface px-5 py-4"
          >
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-dim">
              Layer {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-heading text-xl font-bold leading-none text-primary">
              {part.name}
            </p>
          </motion.div>
        ))}
      </div> */}
    </StoryFrame>
  );
}

function PlatformTypesBlock({ story }: { story: PlatformStory }) {
  return (
    <StoryFrame className="border-b border-white/10">
      <SectionLabel>{story.platformTypes.label}</SectionLabel>
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.08fr)]">
        <div>
          <h3 className="font-heading text-[clamp(2.3rem,5vw,5.25rem)] font-black leading-[0.9] text-primary">
            {story.platformTypes.title}
          </h3>
          <p className="mt-5 max-w-xl font-mono text-xs-plus leading-[1.9] text-muted">
            {story.platformTypes.intro}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/15 md:block" />
          <div className="grid gap-5">
            {story.platformTypes.types.map((type, index) => (
              <motion.article
                key={type.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative border border-white/10 bg-white/2.5 p-5 md:ml-10 md:p-7"
              >
                <span className="absolute -left-13 top-7 hidden h-8 w-8 border border-white/15 bg-bg text-center font-mono text-xxs leading-8 text-muted md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="font-heading text-[2rem] font-bold leading-none text-primary">
                  {type.name}
                </h4>
                <p className="mt-4 font-mono text-xs-plus leading-[1.85] text-muted">
                  {type.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </StoryFrame>
  );
}

function OperationsBlock({ story }: { story: PlatformStory }) {
  const sharedDescription = story.operations.panels[0]?.body;

  return (
    <StoryFrame className="border-b border-white/10">
      <SectionLabel>{story.operations.label}</SectionLabel>
      <div className="my-8 grid gap-8 lg:grid-cols-[minmax(20rem,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <h3 className="font-heading text-[clamp(3.2rem,5vw,5.5rem)] font-black leading-[0.86] text-primary">
          {story.operations.title}
        </h3>
        {sharedDescription && (
          <p className="font-mono text-xs-plus leading-[1.95] text-muted md:text-sm">
            {sharedDescription}
          </p>
        )}
      </div>

      <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {story.operations.panels.map((panel, index) => (
          <motion.article
            key={panel.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden bg-white/2.5 "
          >
            {panel.media && (
              <MediaPanel media={panel.media} priority={index === 0} />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(7,7,42,0.92),rgba(7,7,42,0.5)_58%,transparent)] p-6 pt-24 md:p-8 md:pt-32">
              <p className="font-mono text-xxs uppercase tracking-[0.25em] text-muted">
                0{index + 1} / {panel.label}
              </p>
              <h4 className="mt-4 max-w-[14ch] font-heading text-[clamp(2rem,4vw,3.75rem)] font-black leading-[0.9] text-primary">
                {panel.title}
              </h4>
            </div>
          </motion.article>
        ))}
      </div>
    </StoryFrame>
  );
}

function ApplicationsBlock({ story }: { story: PlatformStory }) {
  return (
    <StoryFrame className="border-b border-white/10">
      <SectionLabel>{story.applications.label}</SectionLabel>
      <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.08fr)] mt-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h3 className="mt-6 font-heading text-[clamp(2.4rem,5vw,5.25rem)] font-black leading-[0.9] text-primary">
            {story.applications.title}
          </h3>
        </div>

        <div className="grid gap-px bg-white/10">
          {story.applications.items.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg/88 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <h4 className="font-heading text-[2rem] font-bold leading-none text-primary">
                  {item.name}
                </h4>
                <span className="font-mono text-xxs text-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 font-mono text-xs-plus leading-[1.85] text-muted">
                {item.body}
              </p>

              {item.subApplications && (
                <div className="mt-6 grid gap-px bg-white/10 md:grid-cols-3">
                  {item.subApplications.map((subApplication) => (
                    <div key={subApplication.name} className="bg-surface p-4">
                      <h5 className="font-heading text-xl font-bold leading-none text-primary">
                        {subApplication.name}
                      </h5>
                      <p className="mt-3 font-mono text-xxs leading-relaxed text-muted">
                        {subApplication.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </StoryFrame>
  );
}

function CostAnalysisBlock({ story }: { story: PlatformStory }) {
  return (
    <StoryFrame className="border-b border-white/10">
      <SectionLabel>{story.costAnalysis.label}</SectionLabel>

      <div className="mb-12 mt-8 grid gap-8 lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,0.9fr)] lg:items-end">
        <header className="max-w-3xl">
          <h3 className="font-heading text-[clamp(2.4rem,5vw,5.25rem)] font-black leading-[0.9] text-primary">
            {story.costAnalysis.title}
          </h3>
        </header>

        <p className="max-w-3xl font-mono text-xs-plus leading-[1.9] text-muted md:text-sm">
          {story.costAnalysis.intro}
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
        {story.costAnalysis.options.map((option, index) => {
          return (
            <motion.article
              key={option.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex min-h-full flex-col bg-bg/90 p-6 md:p-8 xl:p-10"
            >
              <div className="flex flex-col gap-5">
                <h4 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-primary">
                  {option.name}
                </h4>

                <p className="w-fit border border-white/15 px-3 py-2 font-heading text-[clamp(1.5rem,3vw,3.5rem)] font-black leading-none text-primary">
                  {option.position}
                </p>
              </div>

              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                <CostField label="Upfront" value={option.upfront} />
                <CostField label="Recurring" value={option.recurring} />
                <CostField label="Timeline" value={option.timeline} />
                <CostField label="Constraint" value={option.constraint} />
              </div>

              <p className="mt-4 border-t border-white/10 pt-4 font-mono text-xs-plus leading-[1.75] text-primary/82">
                {option.summary}
              </p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 grid overflow-hidden border border-white/10 bg-white/5 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
        <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-white/10 xl:p-10">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-dim">
            Kelvar Stratos advantage
          </p>
          <h4 className="mt-5 max-w-3xl font-heading text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9] text-primary">
            {story.costAnalysis.conclusion.title}
          </h4>
          <p className="mt-6 max-w-3xl font-mono text-xs-plus leading-[1.85] text-muted">
            {story.costAnalysis.conclusion.body}
          </p>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
          {story.costAnalysis.proofPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="bg-bg/72 p-6 md:p-7"
            >
              <p className="font-heading text-[clamp(1.65rem,3vw,2.6rem)] font-black leading-none text-primary">
                {point.value}
              </p>
              <p className="mt-3 font-mono text-xxs uppercase tracking-[0.18em] text-muted">
                {point.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </StoryFrame>
  );
}

function CostField({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-dim">
        {label}
      </p>
      <p className="mt-2 font-mono text-xs-plus leading-[1.7] text-muted">
        {value}
      </p>
    </div>
  );
}

function AdvantagesBlock({ story }: { story: PlatformStory }) {
  return (
    <StoryFrame>
      <SectionLabel>{story.advantages.label}</SectionLabel>
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.08fr)]">
        <h3 className="font-heading text-[clamp(2.4rem,5vw,5.25rem)] font-black leading-[0.9] text-primary">
          {story.advantages.title}
        </h3>

        <div className="grid gap-4">
          {story.advantages.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6 md:p-8"
            >
              <div className="flex items-start gap-5">
                <span className="mt-1 font-mono text-xxs font-bold text-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-heading text-[2rem] font-bold leading-none text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-4 font-mono text-xs-plus leading-[1.85] text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </StoryFrame>
  );
}

function MediaPanel({
  media,
  priority,
}: {
  media: PlatformStoryMedia;
  priority?: boolean;
}) {
  const aspectClass =
    media.orientation === "portrait" ? "aspect-3/4" : "aspect-video";

  return (
    <div
      className={`relative min-h-96 overflow-hidden bg-white/3 ${aspectClass}`}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes="(max-width: 1280px) 100vw, 34vw"
        className="object-cover saturate-[0.88]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,42,0.35),transparent_48%)]" />
    </div>
  );
}

function StoryFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-14 md:px-10 md:py-20 ${className}`}>
      {children}
    </div>
  );
}
