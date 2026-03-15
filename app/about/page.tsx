"use client";

import { motion } from "motion/react";
import { site, values, team } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import GlitchText from "@/components/ui/glitch-text";
import { TeamSection } from "@/components/about/team-section";
import { ScrollingText } from "@/components/about/scrolling-text";
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
