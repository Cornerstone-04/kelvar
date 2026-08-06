import type { KelvarxProgramme } from "@/types/kelvarx-types";

export const kelvarx = {
  id: "kelvarx",
  name: "KELVARX",
  eyebrow: "Advanced Aerospace, Autonomous Systems & Space Technologies",
  description:
    "Kelvar Industries' space programme for intelligent aerial, atmospheric, and near-space systems designed to strengthen connectivity, surveillance, environmental intelligence, and sustainable infrastructure.",
  vision:
    "To develop intelligent aerial, atmospheric, and space-based platforms that enhance connectivity, surveillance, environmental intelligence, and sustainable infrastructure across Africa and global markets.",
  slogan:
    "Measuring the Atmosphere. Monitoring the Earth. Connecting the Future.",
  hero: {
    src: "/assets/images/platforms/stratos/stratos-hero.jpg",
    alt: "Kelvar stratospheric platform concept above the atmosphere",
  },
  systems: [
    {
      id: "stratos-kite",
      name: "Stratokite",
      href: "/kelvarx/stratokite",
      type: "Balloon-assisted tail-sitter glider drone",
      description:
        "A developing hybrid platform combining helium-assisted lift, a tail-sitter fixed-wing aircraft, radiosonde instrumentation, and intelligent imaging systems.",
      media: {
        src: "/assets/images/platforms/stratokite/stratokite-air-3.webp",
        alt: "Stratokite balloon-assisted fixed-wing aircraft in flight",
      },
      payload: [
        "High-resolution EO camera",
        "Thermal camera",
        "Radiosonde weather package",
        "GPS tracking",
        "Environmental sensors",
        "AI edge processor",
      ],
      dataCollected: [
        "Atmospheric pressure",
        "Temperature",
        "Humidity",
        "Wind speed and direction",
        "Live aerial imagery",
        "Thermal signatures",
      ],
      missions: [
        "Agricultural intelligence",
        "Border surveillance",
        "Environmental monitoring",
        "Pipeline inspection",
        "Disaster assessment",
      ],
    },
    {
      id: "stratos-copter",
      name: "Stratocopter",
      type: "Balloon-assisted quadcopter drone",
      description:
        "A developing surveillance and monitoring platform where helium-assisted lift supports endurance while a quadcopter provides positioning and maneuverability.",
      media: {
        src: "/assets/images/platforms/stratos/stratoscopter-2.webp",
        alt: "Stratocopter balloon-assisted quadcopter platform concept",
      },
      payload: [
        "Daylight zoom camera",
        "Thermal camera",
        "Radiosonde weather sensors",
        "Loudspeaker option",
        "Searchlight option",
        "AI video analytics",
      ],
      dataCollected: [
        "Local weather conditions",
        "Air-quality indicators",
        "Live video feeds",
        "Thermal imaging data",
        "Wind and atmospheric information",
      ],
      missions: [
        "Public safety",
        "Event security",
        "Infrastructure inspection",
        "Emergency response",
        "Telecommunications support",
      ],
    },
    {
      id: "stratos-solar-sat",
      name: "Stratos Solar Sat",
      type: "Balloon-assisted near-space satellite drone",
      description:
        "A developing solar-powered stratospheric concept intended for Earth observation, atmospheric monitoring, and communications relay missions.",
      media: {
        src: "/assets/images/platforms/stratos/stratos-space-2.jpg",
        alt: "Stratos Solar Sat near-space platform concept",
      },
      payload: [
        "Ultra-high-resolution camera",
        "Infrared imaging system",
        "Radiosonde package",
        "Atmospheric sensors",
        "Communication relay equipment",
        "Solar power management system",
      ],
      dataCollected: [
        "Stratospheric weather data",
        "Atmospheric composition",
        "Earth observation imagery",
        "Climate data",
        "Telecommunications coverage analytics",
        "Environmental intelligence",
      ],
      missions: [
        "Near-space research",
        "Weather forecasting",
        "Climate monitoring",
        "Rural internet delivery",
        "Maritime awareness",
        "National security",
      ],
    },
  ],
  kain: {
    name: "KELVARX Atmospheric Intelligence Network",
    description:
      "KAIN is the proposed intelligence layer connecting atmospheric measurements and imaging from the Stratos systems into a shared operational picture.",
    groups: [
      {
        label: "Atmospheric Data",
        items: [
          "Temperature",
          "Humidity",
          "Air pressure",
          "Altitude",
          "Wind profiles",
          "Air density",
        ],
      },
      {
        label: "Visual Intelligence",
        items: [
          "Real-time video",
          "Aerial photography",
          "Thermal imaging",
          "Environmental change detection",
          "AI object recognition",
        ],
      },
      {
        label: "Applications",
        items: [
          "Weather forecasting",
          "Climate research",
          "Flood prediction",
          "Agricultural planning",
          "Wildfire detection",
          "Disaster management",
        ],
      },
    ],
  },
  aiCommand: {
    name: "KELVAR AI Command",
    description:
      "A developing command environment intended to manage KELVARX assets, telemetry, missions, and intelligence workflows from one operational layer.",
    capabilities: [
      "Real-time weather mapping",
      "Radiosonde telemetry monitoring",
      "AI video analytics",
      "Fleet control",
      "Mission planning",
      "Predictive maintenance",
      "Digital twin simulation",
      "Data archive and analytics",
    ],
  },
  applications: [
    {
      name: "Environmental and climate intelligence",
      outcome:
        "Build richer atmospheric datasets for forecasting and research.",
      platforms: ["Stratokite", "Stratos Solar Sat"],
      intelligenceLayer: "KAIN",
    },
    {
      name: "Agriculture and land planning",
      outcome:
        "Support planning with aerial imagery and local weather intelligence.",
      platforms: ["Stratokite"],
      intelligenceLayer: "Both",
    },
    {
      name: "Public safety and disaster response",
      outcome:
        "Provide timely visual and environmental awareness during incidents.",
      platforms: ["Stratocopter", "Stratokite"],
      intelligenceLayer: "KELVAR AI Command",
    },
    {
      name: "Border, maritime, and infrastructure awareness",
      outcome:
        "Extend observation across remote assets and strategic corridors.",
      platforms: ["Stratokite", "Stratos Solar Sat"],
      intelligenceLayer: "Both",
    },
    {
      name: "Telecommunications and rural connectivity",
      outcome: "Explore high-altitude relay coverage for underserved regions.",
      platforms: ["Stratos Solar Sat", "Stratocopter"],
      intelligenceLayer: "KELVAR AI Command",
    },
    {
      name: "Near-space research",
      outcome: "Enable recoverable atmospheric and Earth-observation missions.",
      platforms: ["Stratos Solar Sat"],
      intelligenceLayer: "KAIN",
    },
  ],
} satisfies KelvarxProgramme;
