"use client";

import type { ResearchPlatform, PlatformStory } from "@/types/research-types";
import { Rule } from "@/components/ui/rule";
import { StratosIntroduction } from "./stratos-introduction";
import { StratosSystem } from "./stratos-system";
import { StratosOperations } from "./stratos-operations";
import { StratosEconomics } from "./stratos-economics";

export function StratosStorySection({
  platform,
  story,
}: {
  platform: ResearchPlatform;
  story: PlatformStory;
}) {
  return (
    <>
      <section
        id={platform.id}
        className="relative isolate scroll-mt-24 overflow-hidden pb-16 md:pb-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-224 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_55%)]" />
        <StratosIntroduction platform={platform} story={story} />
        <StratosSystem story={story} />
        <StratosOperations story={story} />
        <StratosEconomics story={story} />
      </section>
      <Rule />
    </>
  );
}
