import { StratokitePage } from "@/features/kelvarx/components/stratokite-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Stratokite | KELVARX Platform",
  description:
    "Explore Stratokite, KELVARX's balloon-assisted high-altitude platform for atmospheric monitoring, Earth observation, sensing, and resilient connectivity.",
  path: "/kelvarx/stratokite",
  keywords: [
    "Stratokite",
    "KELVARX platform",
    "balloon-assisted aircraft",
    "high-altitude platform",
    "atmospheric monitoring",
    "Earth observation",
    "aerial connectivity",
  ],
  image: "/assets/images/platforms/stratokite/stratokite-air.webp",
  imageAlt: "Stratokite balloon-assisted atmospheric intelligence platform",
});

export default StratokitePage;
