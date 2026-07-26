import type { ResearchPlatform } from "@/types/research-types";

export const airConvoy: ResearchPlatform = {
  kind: "standard",
  id: "airconvoy",
  name: "AirConvoy",
  trademark: true,
  tagline: "Always Above",
  navDescription: "Tethered drone platform",
  label: "Featured Platform",
  type: "Tri-Domain Tethered Aerial Platform",
  introTitle:
    "AirConvoy is a core component of Kelvar Industries’ Solar Sentry System.",
  description:
    "AirConvoy is Kelvar Industries’ next-generation tethered drone system engineered for continuous, high-endurance surveillance, communication, and environmental monitoring across air, land, and maritime environments. Built for governments, security agencies, emergency services, oil & gas operations, and critical infrastructure protection, AirConvoy delivers real-time intelligence with zero downtime, thanks to its power-over-tether architecture and ultra-secure data link.",
  hero: {
    kind: "video",
    src: "/assets/videos/platforms/airconvoy/airconvoy-showcase.mp4",
  },
  domainsLayout: "immersive",
  domainsLabel: "Operational Domains",
  domains: [
    {
      id: "01",
      name: "Untethered",
      headline: "Persistent Elevated Surveillance",
      image: "/assets/images/platforms/airconvoy/airconvoy-air.jpg",
      capabilities: [
        "24/7 operation with uninterrupted power",
        "High-altitude untethered flight up to 150–300m",
        "AI-powered optical, thermal, and night-vision sensors",
        "Ideal for border monitoring, event security, and disaster assessment",
      ],
    },
    {
      id: "02",
      name: "Tethered",
      headline: "Mobile or Fixed Deployment",
      image: "/assets/images/platforms/airconvoy/airconvoy-land.jpg",
      capabilities: [
        "Rapid deployment under 3 minutes",
        "Auto-stabilising flight in harsh wind conditions",
        "Vehicle-mounted, rooftop-mounted, and ground-station options",
        "Perfect for military convoys, police operations, and infrastructure sites",
      ],
    },
    {
      id: "03",
      name: "Hybrid",
      headline: "Maritime & Offshore Operations",
      image: "/assets/images/platforms/airconvoy/airconvoy-sea.jpg",
      capabilities: [
        "Corrosion-proof frame",
        "Saltwater-resistant tethering",
        "Stabilised maritime flight with ship roll compensation",
        "Useful for offshore oil platforms, coast guard patrols, and port control",
      ],
    },
  ],
  coreTech: [
    {
      id: "01",
      title: "AI Sensor Fusion",
      desc: "Integrates visual, thermal, acoustic, and radar feeds for real-time anomaly detection.",
    },
    {
      id: "02",
      title: "Encrypted Power-Data Tether",
      desc: "Provides continuous power supply, zero RF signature, stealth mode capability, and high-bandwidth, interference-proof communication.",
    },
    {
      id: "03",
      title: "Modular Payload System",
      desc: "Swap modules for lighting, surveillance, search and rescue, disaster response, communication relay, and environmental sensing.",
    },
  ],
  useCases: [
    {
      category: "Security & Defence",
      items: ["Fleet protection", "Tactical oversight", "Perimeter security"],
    },
    {
      category: "Public Safety",
      items: ["Fire detection", "Flood monitoring", "Crowd management"],
    },
    {
      category: "Commercial & Industrial",
      items: [
        "Port surveillance",
        "Pipeline inspection",
        "Offshore platform monitoring",
      ],
    },
  ],
};
