import type { Platform } from "./platform-types";

export const kelvarStratos: Platform = {
  id: "stratos",
  name: "Stratos",
  trademark: true,
  tagline: "Stratospheric Supremacy",
  navDescription: "Stratospheric platform",
  label: "Featured Platform",
  type: "Hybrid Stratospheric Platform",
  introTitle:
    "Stratos is Kelvar Industries’ next-generation stratospheric platform.",
  description:
    "Kelvar Stratos is a solar-powered stratospheric platform delivering satellite-like persistence with drone-level control for surveillance, connectivity, and economic security. A stratospheric balloon (also known as a high-altitude balloon) is an uncrewed or crewed balloon that travels into the Earth's stratosphere, typically reaching altitudes between 18 km and 37 km (11 to 23 miles). These platforms are used for weather monitoring, scientific research, and increasingly, as a low-carbon alternative for space tourism.",
  hero: {
    kind: "image",
    src: "/assets/images/platforms/stratos/stratos-hero.jpg",
    alt: "Kelvar Stratos drone modelling and design",
  },
  domainsLayout: "cards",
  domainsLabel: "Platform Types",
  domains: [],
  coreTech: [],
  useCases: [],
  story: {
    eyebrow: "Kelvar Stratos / Near-Space Infrastructure",
    title: "Solar-powered persistence with drone-level control.",
    summary:
      "Kelvar Stratos is a solar-powered stratospheric platform delivering satellite-like persistence with drone-level control for surveillance, connectivity, and economic security. A stratospheric balloon (also known as a high-altitude balloon) is an uncrewed or crewed balloon that travels into the Earth's stratosphere, typically reaching altitudes between 18 km and 37 km (11 to 23 miles). These platforms are used for weather monitoring, scientific research, and increasingly, as a low-carbon alternative for space tourism.",
    hero: {
      src: "/assets/images/platforms/stratos/stratos-hero.jpg",
      alt: "Kelvar Stratos drone modelling and design",
      orientation: "landscape",
    },
    metrics: [
      {
        value: "18-37 km",
        label: "Stratospheric operating band",
      },
      {
        value: "Weeks-months",
        label: "Persistent mission endurance",
      },
      {
        value: "Balloon + UAV",
        label: "Hybrid aerial architecture",
      },
    ],
    overview: {
      label: "Overview",
      title: "What Kelvar Stratos is",
      body: "Kelvar Stratos is a solar-powered stratospheric platform delivering satellite-like persistence with drone-level control for surveillance, connectivity, and economic security. A stratospheric balloon (also known as a high-altitude balloon) is an uncrewed or crewed balloon that travels into the Earth's stratosphere, typically reaching altitudes between 18 km and 37 km (11 to 23 miles). These platforms are used for weather monitoring, scientific research, and increasingly, as a low-carbon alternative for space tourism.",
      media: {
        src: "/assets/images/platforms/stratos/stratos-hero.jpg",
        alt: "Kelvar Stratos concept rendering",
        orientation: "landscape",
      },
    },
    architecture: {
      label: "System Architecture",
      title: "Balloon lift. Solar UAV intelligence. Persistent near-space operations.",
      body: "The Kelvar Kite StratoSolar System (SSV) is a hybrid stratospheric platform that combines a large high-altitude balloon with a solar-powered fixed-wing UAV to deliver persistent, near-space capabilities at a fraction of satellite cost; the balloon provides the primary lift and maintains altitude in the stratosphere for long durations, while the UAV acts as an intelligent control unit, using solar energy to power sensors, communications, and AI-driven stabilisation, enabling the system to remain over a target area for weeks or months while performing surveillance, telecom relay, environmental monitoring, and security operations, making it an adaptable, low-cost aerial infrastructure solution for applications across smart cities, remote connectivity, and national-scale monitoring in regions like Nigeria and across Africa.",
      diagram: {
        src: "/assets/images/platforms/stratos/stratos-structure.jpg",
        alt: "Diagram of the Stratos drone design structure and components",
        orientation: "diagram",
      },
      parts: [
        {
          name: "Stratospheric balloon",
          role: "Primary lift and high-altitude persistence layer",
        },
        {
          name: "Tether",
          role: "Mechanical connection between lift system and aircraft body",
        },
        {
          name: "Solar wings",
          role: "Energy harvesting surface for sustained missions",
        },
        {
          name: "Solar-powered UAV",
          role: "Intelligent control, payload, sensing, and stabilisation unit",
        },
      ],
    },
    platformTypes: {
      label: "Types and Capabilities",
      title: "Different stratospheric platform architectures",
      intro:
        "There are several specialized designs depending on the mission duration and payload:",
      types: [
        {
          name: "Zero-Pressure Balloons",
          body: "Use an open vent to maintain internal pressure equal to the outside atmosphere. They are common for short-duration scientific missions (hours to days) and can carry several tons of equipment.",
        },
        {
          name: "Superpressure Balloons",
          body: "These are sealed and can maintain constant volume and pressure, allowing for much longer flights lasting weeks or even months.",
        },
        {
          name: "Stratollites",
          body: 'A term used by companies like World View for balloons capable of "station-keeping"—navigating wind currents to stay over a specific area for long-duration sensing and observation.',
        },
      ],
    },
    operations: {
      label: "System Operations",
      title: "From ground deployment to fleet-level persistence",
      panels: [
        {
          label: "Ground Systems",
          title: "Deployment infrastructure",
          body: "The Kelvar Kite StratoSolar System combines balloon lift with a solar fixed-wing UAV to deliver persistent near-space coverage. The balloon sustains altitude while the UAV powers control, sensing, communications, and stabilisation for surveillance, relay, monitoring, and security missions.",
          media: {
            src: "/assets/images/platforms/stratos/stratos-on-land.jpg",
            alt: "Kelvar Stratos drone on land in its docking station",
            orientation: "portrait",
          },
        },
        {
          label: "Fleet Surveillance",
          title: "Operational deployment",
          body: "The Kelvar Kite StratoSolar System combines balloon lift with a solar fixed-wing UAV to deliver persistent near-space coverage. The balloon sustains altitude while the UAV powers control, sensing, communications, and stabilisation for surveillance, relay, monitoring, and security missions.",
          media: {
            src: "/assets/images/platforms/stratos/stratos-in-air.jpg",
            alt: "Several Kelvar Stratos drones in the air",
            orientation: "portrait",
          },
        },
      ],
    },
    applications: {
      label: "Modern Applications",
      title: "Real-world missions for stratospheric platforms",
      items: [
        {
          name: "Scientific Research",
          body: "Organizations like NASA and the Canadian Space Agency use them to test space technologies at a fraction of the cost of satellite launches.",
        },
        {
          name: "Space Tourism",
          body: "Several startups are developing pressurized capsules for passengers to view the curvature of the Earth and the blackness of space without the high G-forces of a rocket.",
          // subApplications: [
          //   {
          //     name: "Space Perspective",
          //     body: 'Offers rides in their "Spaceship Neptune" capsule.',
          //   },
          //   {
          //     name: "Zephalto",
          //     body: 'Focuses on a luxury "low-carbon" experience from France.',
          //   },
          //   {
          //     name: "World View",
          //     body: 'Plans to launch from "Wonders of the World" sites like the Grand Canyon.',
          //   },
          // ],
        },
        {
          name: "Communication & Intelligence",
          body: "Used for providing internet to remote areas (like the former Google Loon project) and for military surveillance or reconnaissance.",
        },
      ],
    },
    advantages: {
      label: "Technological Advantages",
      title: "Why the hybrid StratoSolar model matters",
      items: [
        {
          title: "Satellite-like persistence",
          body: "Operating in the stratosphere for weeks or months at a time, Kelvar Stratos provides continuous regional coverage without the launch cost, latency, or replacement cycle of satellites.",
        },
        {
          title: "Drone-level control",
          body: "A solar-powered fixed-wing UAV acts as the system's intelligent control layer, steering stabilisation, payload operations, sensing, and communications while the balloon provides long-duration stratospheric lift.",
        },
        {
          title: "Economic security infrastructure",
          body: "Persistent stratospheric coverage helps monitor critical assets, extend connectivity, and give operators the real-time awareness needed to protect trade, borders, resources, and public infrastructure.",
        },
      ],
    },
  },
};
