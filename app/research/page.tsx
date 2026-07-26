"use client";

import { Rule } from "@/components/ui/rule";
import { kelvarStratos } from "@/content/research/stratos";

import { PageHero } from "@/components/research/page-hero";
import { IntroSection } from "@/components/research/intro-section";
import { PlatformSection } from "@/components/research/platform-section";
import { ResearchAreas } from "@/components/research/research-areas";
import { ResearchCTA } from "@/components/research/research-cta";
import { AarSection } from "@/components/research/aar-section";

const platforms = [kelvarStratos];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg">
      <PageHero />
      <IntroSection />
      <Rule />
      <ResearchAreas />
      <Rule />
      {platforms.map((platform) => (
        <PlatformSection key={platform.id} platform={platform} />
      ))}
      <AarSection />
      <ResearchCTA />
    </div>
  );
}
