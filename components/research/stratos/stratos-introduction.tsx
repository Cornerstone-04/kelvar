import Image from "next/image";
import { motion } from "motion/react";
import type { PlatformStory, ResearchPlatform } from "@/types/research-types";
import { MetricGrid } from "@/components/ui/metric-grid";
import { SectionLabel } from "@/components/ui/section-label";
import { StoryFrame } from "./story-frame";

export function StratosIntroduction({
  platform,
  story,
}: {
  platform: ResearchPlatform;
  story: PlatformStory;
}) {
  return (
    <>
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
        <div className="relative flex min-h-[88vh] flex-col justify-end px-6 pb-8 pt-32 md:px-10 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xxs uppercase tracking-[0.28em] text-white/65">
              {story.eyebrow}
            </p>
            <h2 className="mt-5 font-heading text-[clamp(4.75rem,13vw,12rem)] font-black normal-case leading-[0.82] text-primary">
              {platform.name}
              {platform.trademark && (
                <sup className="ml-1 align-super text-[0.22em]">™</sup>
              )}
            </h2>
            <p className="mt-5 max-w-232 font-heading text-[clamp(2rem,4.6vw,5rem)] font-bold uppercase leading-[0.9] text-primary/90">
              {story.title}
            </p>
          </motion.div>
          <div className="mt-10">
            <MetricGrid metrics={story.metrics} columns="sm:grid-cols-3" />
          </div>
        </div>
      </div>

      <StoryFrame className="border-b border-white/10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>{story.overview.label}</SectionLabel>
            <h3 className="mt-6 font-heading text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[0.9] text-primary">
              {story.overview.title}
            </h3>
          </div>
          <p className="font-mono text-xs-plus leading-[1.95] text-muted md:text-sm">
            {story.overview.body}
          </p>
        </div>
      </StoryFrame>
    </>
  );
}
