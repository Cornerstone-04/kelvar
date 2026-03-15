"use client";

import { TeamSection } from "@/components/about/team-section";
import { MissionSection } from "@/components/about/mission-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { StorySection } from "@/components/about/story-section";
import { ValuesSection } from "@/components/about/values-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <AboutHeroSection />
      <MissionSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}
