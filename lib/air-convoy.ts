const airConvoyDomains = [
  {
    id: "01",
    domain: "Air",
    headline: "Persistent Elevated Surveillance",
    image:
      "https://images.unsplash.com/photo-1446776811765-4b79af1adbc1?w=900&fm=jpg&q=75&fit=crop",
    capabilities: [
      "24/7 operation with uninterrupted power",
      "High-altitude tethered flight up to 150–300m",
      "AI-powered optical, thermal, and night-vision sensors",
      "Ideal for border monitoring, event security, and disaster assessment",
    ],
  },
  {
    id: "02",
    domain: "Land",
    headline: "Mobile or Fixed Deployment",
    image:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=900&fm=jpg&q=75&fit=crop",
    capabilities: [
      "Rapid deployment under 3 minutes",
      "Auto-stabilising flight in harsh wind conditions",
      "Vehicle-mounted, rooftop-mounted, and ground-station options",
      "Perfect for military convoys, police operations, and infrastructure sites",
    ],
  },
  {
    id: "03",
    domain: "Sea",
    headline: "Maritime & Offshore Operations",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&fm=jpg&q=75&fit=crop",
    capabilities: [
      "Corrosion-proof frame",
      "Saltwater-resistant tethering",
      "Stabilised maritime flight with ship roll compensation",
      "Useful for offshore oil platforms, coast guard patrols, and port control",
    ],
  },
];

const coreTech = [
  {
    id: "01",
    title: "AI Sensor Fusion",
    desc: "Integrates visual, thermal, acoustic, and radar feeds for real-time anomaly detection.",
  },
  {
    id: "02",
    title: "Encrypted Power-Data Tether",
    desc: "Provides continuous power supply, zero RF signature (stealth mode capable), and high-bandwidth, interference-proof communication.",
  },
  {
    id: "03",
    title: "Modular Payload System",
    desc: "Swap modules for lighting, surveillance, search & rescue, disaster response, communication relay, and environmental sensing.",
  },
];

const useCases = [
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
];

export { airConvoyDomains, coreTech, useCases };
