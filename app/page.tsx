"use client";

import HeroSection from "@/components/home/hero-section";
import MissionSection from "@/components/home/mission-section";
import DronePlatformsSection from "@/components/home/drone-platforms-section";
import { EthosSection } from "@/components/home/ethos-section";
import { GlobalNetworkMap } from "@/components/ui/map/global-network-map";
import { AreasOfFocusSection } from "@/components/home/focus-area-section";
import { ArrSection } from "@/components/home/arr-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <HeroSection />
      <MissionSection />
      <DronePlatformsSection />
      <ArrSection />
      <EthosSection />
      <AreasOfFocusSection />
      <GlobalNetworkMap />
    </div>
  );
}
