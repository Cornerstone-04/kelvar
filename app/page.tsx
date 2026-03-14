"use client";

import HeroSection from "@/components/home/hero-section";
import MissionSection from "@/components/home/mission-section";
import DronePlatformsSection from "@/components/home/drone-platforms-section";
import PressPreviewSection from "@/components/home/press-preview-section";
import GlobalNetworkMap from "@/components/ui/map/global-network-map";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <HeroSection />
      <MissionSection />
      <DronePlatformsSection />
      <PressPreviewSection />
      <GlobalNetworkMap />
    </div>
  );
}
