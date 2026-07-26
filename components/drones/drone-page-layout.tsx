import type { ProductDetail } from "@/types/product-types";
import { DroneVideoHero } from "./drone-video-hero";
import { DomeProductStory } from "./dome-product-story";

export default function DronePageLayout({ drone }: { drone: ProductDetail }) {
  return (
    <div className="min-h-screen bg-bg">
      <DroneVideoHero drone={drone} />
      <DomeProductStory drone={drone} />
    </div>
  );
}
