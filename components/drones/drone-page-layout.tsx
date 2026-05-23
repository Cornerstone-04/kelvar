import type { DronePageData } from "@/lib/data";
import { DroneVideoHero } from "./drone-video-hero";
import { DomeProductStory } from "./dome-product-story";

export default function DronePageLayout({ drone }: { drone: DronePageData }) {
  return (
    <div className="min-h-screen bg-bg">
      <DroneVideoHero drone={drone} />
      <DomeProductStory drone={drone} />
    </div>
  );
}
