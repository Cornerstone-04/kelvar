import type { PlatformSummary } from "@/types/product-types";

export const platformSummaries: PlatformSummary[] = [
  {
    id: "01",
    name: "Stratokite",
    codename: "—",
    slug: "stratokite",
    status: "in-development",
    href: "/kelvarx/stratokite",
    tagline:
      "Balloon-assisted aerial intelligence for atmospheric monitoring, observation, and connectivity.",
    desc: "The flagship entry into KELVARX: a developing high-altitude platform connecting aerial sensing with atmospheric intelligence.",
    assets: {
      image1: "/assets/images/platforms/stratokite/stratokite-hero.webp",
      image2: "/assets/images/platforms/stratokite/stratokite-model.webp",
    },
    specs: [
      { label: "Capability Class", value: "Atmospheric Intelligence" },
      { label: "Deployment Mode", value: "Balloon-Assisted Aerial" },
      { label: "Programme", value: "KELVARX · Space" },
    ],
  },
  {
    id: "02",
    name: "Robobot",
    codename: "—",
    slug: "robobot",
    status: "in-development",
    tagline:
      "AI-powered ground patrol for the spaces drones can't reach — indoors, always on.",
    desc: "Autonomous indoor robot for continuous floor-level surveillance across offices, warehouses, factories, and commercial interiors.",
    assets: {
      image1: "/assets/images/platforms/robobot/robobot-single.jpg",
      video: "/assets/videos/platforms/robobot/robobot-showcase.webm",
      videoPoster: "/assets/images/platforms/robobot/robobot-poster.jpg",
    },
    specs: [
      { label: "Capability Class", value: "Ground Patrol" },
      { label: "Deployment Mode", value: "Indoor Autonomous" },
      { label: "Sensor Stack", value: "Vision · Audio · Proximity" },
    ],
  },
  {
    id: "03",
    name: "Hydrax",
    codename: "—",
    slug: "hydrax",
    status: "in-development",
    tagline:
      "AI-powered aerial surveillance for coastlines, ports, and open water — corrosion-proof, always watching.",
    desc: "Waterproof autonomous drone engineered for over-sea survey, maritime security, and offshore infrastructure monitoring.",
    assets: {
      image1: "/assets/images/platforms/hydrax/hydrax.jpg",
      video: "/assets/videos/platforms/hydrax/hydrax-showcase.webm",
      videoPoster: "/assets/images/platforms/hydrax/hydrax-poster.jpg",
    },
    specs: [
      { label: "Capability Class", value: "Maritime Surveillance" },
      { label: "Deployment Mode", value: "Waterproof Aerial" },
      { label: "Sensor Stack", value: "Optical · Thermal · Marine" },
    ],
  },
  {
    id: "04",
    name: "Dome",
    codename: "—",
    slug: "dome",
    status: "flagship",
    tagline:
      "AI Powered CCTV cameras that fly; to prevent Fire, Fraud & Felony",
    desc: "AI-powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    assets: {
      image1: "/assets/images/platforms/dome/sky-dome-drone-01.jpg",
      image2: "/assets/images/platforms/dome/sky-dome-drone-03.jpg",
      video: "/assets/videos/platforms/dome/sky-dome-showcase.webm",
      videoPoster: "/assets/images/platforms/dome/sky-dome-poster.jpg",
    },
    specs: [
      { label: "Capability Class", value: "Aerial Surveillance" },
      { label: "Deployment Mode", value: "Autonomous Swarm" },
      { label: "Sensor Stack", value: "AI · Thermal · Infrared" },
    ],
  },
];
