import type { FocusDetails } from "@/types/focus-types";

export const focusDetails: FocusDetails = {
  AIR: {
    headline: "Eyes in the Sky. No Blind Spots.",
    body: [
      "Aerial surveillance transforms what's possible in security. Unlike fixed cameras, our autonomous aerial platforms reposition, track, and respond, covering ground continuously and without boundaries.",
      "Dome leads our air division: a coordinated swarm of AI-powered micro-drones that create an adaptive protective dome over any environment. Each unit communicates with the others, adjusting patrol paths in real time based on detected movement, threat classification, and environmental conditions.",
    ],
    capabilities: [
      "AI threat detection & behavioural classification",
      "Autonomous swarm coordination & patrol routing",
      "Thermal, infrared, and LiDAR optical imaging",
      "Night vision & low-light operation",
      "Real-time perimeter breach alerts",
      "Seamless integration with ground systems",
    ],
    systems: [
      {
        name: "DOME",
        desc: "Autonomous aerial CCTV swarm for residential, commercial, and industrial security.",
        slug: "dome",
      },
    ],
  },

  SEA: {
    headline: "Coastal. Offshore. Unreachable.",
    body: [
      "Coastal borders, offshore infrastructure, and maritime operations represent some of the most difficult environments to secure. Weather, water, and distance make traditional surveillance unreliable. Kelvar's waterproof platforms are built specifically for these conditions.",
      "Our sea-based systems deliver the same autonomous intelligence that protects homes and factories, now extended to ports, coastlines, fish farms, oil platforms, and marine research operations.",
    ],
    capabilities: [
      "Waterproof and saltwater-resistant design",
      "Over-sea survey and coastal patrol",
      "Offshore infrastructure monitoring",
      "GPS and inertial navigation in open water",
      "Long-endurance autonomous operation",
      "Emergency alert and incident response",
    ],
    systems: [
      {
        name: "HYDRAX",
        desc: "Waterproof drone for over-sea survey, coastal security, and offshore infrastructure monitoring.",
        slug: "hydrax",
      },
    ],
  },

  LAND: {
    headline: "Ground-Level Intelligence. Everywhere.",
    body: [
      "Land-based autonomous systems cover the environments people live and work in, urban streets, gated compounds, warehouses, indoor spaces, and remote perimeters. Where aerial coverage meets its limits, our ground units step in.",
      "Kelvar's land systems navigate complex terrain with precision, maintaining situational awareness at ground level. Designed for continuous operation, they integrate directly with aerial platforms to create a unified, layered security response.",
    ],
    capabilities: [
      "Autonomous indoor and outdoor navigation",
      "Obstacle detection and terrain adaptation",
      "Real-time anomaly and intrusion detection",
      "Integration with aerial surveillance layer",
      "Silent operation for sensitive environments",
      "Remote monitoring and manual override",
    ],
    systems: [
      {
        name: "ROBOBOT",
        desc: "Autonomous floor robot for interior surveillance and patrol in commercial and industrial spaces.",
        slug: "robobot",
      },
    ],
  },

  SPACE: {
    headline: "Beyond the Atmosphere. Always Watching.",
    body: [
      "The final frontier of autonomous surveillance is above the clouds. Kelvar's space division is building low-orbit monitoring systems capable of delivering persistent, wide-area intelligence at a global scale, where no ground or aerial platform can reach.",
      "From satellite-linked sensor networks to low-earth orbit autonomous platforms, Kelvar is engineering the next generation of space-based surveillance infrastructure for governments, defence agencies, and critical global operations.",
    ],
    capabilities: [
      "Low-earth orbit autonomous monitoring",
      "Satellite-linked real-time data transmission",
      "Global coverage with persistent surveillance",
      "Integration with ground and aerial systems",
      "High-resolution optical and radar imaging",
      "Secure encrypted data links",
    ],
    systems: [
      {
        name: "STRATOSTAT",
        desc: "Kelvar's space surveillance platforms are currently in the research and design phase. Details to follow.",
        slug: "stratos",
      },
    ],
  },
};
