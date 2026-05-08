import type { Platform } from "./platform-types";

export const kelvarStratos: Platform = {
  id: "stratos",
  name: "Stratos",
  trademark: true,
  tagline: "Stratospheric Supremacy",
  navDescription: "Stratospheric platform",
  label: "Featured Platform",
  type: "Tri-Domain Stratospheric Platform",
  introTitle:
    "Stratos is Kelvar Industries’ next-generation stratospheric platform.",
  description:
    "Kelvar Stratos represents the pinnacle of stratospheric innovation, a tri-domain platform leveraging advanced balloon technology to deliver persistent surveillance, global communications, and environmental monitoring from 15–50 km altitude. Engineered for governments, defence agencies, emergency services, and scientific research institutions, Stratos provides extended operational endurance, wide-area coverage, and minimal ground infrastructure requirements. With AI-driven autonomous control and modular payload integration, Stratos bridges the gap between conventional aircraft and space-based systems.",
  hero: {
    kind: "image",
    src: "/images/stratos/kelvar-stratos.jpg",
    alt: "Kelvar Stratos - Stratospheric Platform",
  },
  domainsLayout: "cards",
  domainsLabel: "Platform Types",
  domains: [
    {
      id: "01",
      name: "Stratollites",
      headline: "Solar-Powered Persistent Surveillance",
      image: "/images/kelvar-stratos/stratollites.jpg",
      capabilities: [
        "Continuous operation from 20–30 km altitude",
        "Solar-powered with day-night cycle capability",
        "Ultra-wide coverage area with minimal infrastructure",
        "Ideal for border surveillance, disaster relief, and global communication",
      ],
    },
    {
      id: "02",
      name: "Zero-Pressure Balloons",
      headline: "Flexible Altitude Operations",
      image: "/images/kelvar-stratos/zero-pressure.jpg",
      capabilities: [
        "Expandable envelope adapts to atmospheric pressure changes",
        "Operational altitude range of 15–40 km",
        "Extended mission duration with minimal ballast requirements",
        "Perfect for scientific research, environmental monitoring, and remote sensing",
      ],
    },
    {
      id: "03",
      name: "Superpressure Balloons",
      headline: "Stable High-Altitude Cruising",
      image: "/images/kelvar-stratos/superpressure.jpg",
      capabilities: [
        "Rigid envelope maintains constant altitude and performance",
        "Operational ceiling of 30–50 km with extended endurance",
        "Superior wind resistance and structural stability",
        "Optimal for long-duration missions, polar operations, and tactical reconnaissance",
      ],
    },
  ],
  coreTech: [
    {
      id: "01",
      title: "Advanced Envelope Materials",
      desc: "Lightweight composites with enhanced UV resistance and thermal stability, enabling extended operational life at extreme altitudes.",
    },
    {
      id: "02",
      title: "Precision Payload Integration",
      desc: "Modular sensor mounting system accommodates surveillance, environmental sensing, communication relay, and scientific instrumentation.",
    },
    {
      id: "03",
      title: "Autonomous Navigation & Control",
      desc: "AI-driven altitude and directional control systems that optimize power consumption and extend mission duration beyond conventional limits.",
    },
  ],
  useCases: [
    {
      category: "Government & Defence",
      items: [
        "Border monitoring",
        "Tactical intelligence",
        "Emergency response",
      ],
    },
    {
      category: "Communications",
      items: [
        "Global coverage",
        "Disaster connectivity",
        "Remote area networks",
      ],
    },
    {
      category: "Science & Environment",
      items: [
        "Atmospheric research",
        "Climate monitoring",
        "Environmental sensing",
      ],
    },
  ],
};
