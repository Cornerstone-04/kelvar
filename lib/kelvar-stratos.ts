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
    "Kelvar Stratos is a solar-powered stratospheric platform delivering satellite-like persistence with UAV-level control for surveillance, connectivity, and economic security. A stratospheric balloon (also known as a high-altitude balloon) is an uncrewed or crewed balloon that travels into the Earth's stratosphere, typically reaching altitudes between 18 km and 37 km (11 to 23 miles). These platforms are used for weather monitoring, scientific research, and increasingly, as a low-carbon alternative for space tourism.",
  hero: {
    kind: "image",
    src: "/assets/images/platforms/stratos/stratos-hero.jpg",
    alt: "Kelvar Stratos UAV Balloon Satellite modelling and design",
  },
  domainsLayout: "cards",
  domainsLabel: "Platform Types",
  domains: [],
  coreTech: [],
  useCases: [],
  story: {
    eyebrow: "Kelvar Stratos / Near-Space Infrastructure",
    title: "Solar-powered persistence with UAV-level control.",
    summary:
      "Kelvar Stratos is a solar-powered stratospheric platform delivering satellite-like persistence with UAV-level control for surveillance, connectivity, and economic security. A stratospheric balloon (also known as a high-altitude balloon) is an uncrewed or crewed balloon that travels into the Earth's stratosphere, typically reaching altitudes between 18 km and 37 km (11 to 23 miles). These platforms are used for weather monitoring, scientific research, and increasingly, as a low-carbon alternative for space tourism.",
    hero: {
      src: "/assets/images/platforms/stratos/stratos-hero.jpg",
      alt: "Kelvar Stratos UAV Balloon Satellite modelling and design",
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
        value: "UAV Balloon",
        label: "Hybrid aerial architecture",
      },
    ],
    overview: {
      label: "Overview",
      title: "What Kelvar Stratos is",
      body: "Kelvar Stratos is a solar-powered stratospheric platform delivering satellite-like persistence with UAV-level control for surveillance, connectivity, and economic security. A stratospheric balloon (also known as a high-altitude balloon) is an uncrewed or crewed balloon that travels into the Earth's stratosphere, typically reaching altitudes between 18 km and 37 km (11 to 23 miles). These platforms are used for weather monitoring, scientific research, and increasingly, as a low-carbon alternative for space tourism.",
      media: {
        src: "/assets/images/platforms/stratos/stratos-hero.jpg",
        alt: "Kelvar Stratos concept rendering",
        orientation: "landscape",
      },
    },
    architecture: {
      label: "System Architecture",
      title:
        "Balloon lift. Solar UAV intelligence. Persistent near-space operations.",
      body: "The Kelvar Kite StratoSolar System (SSV) is a hybrid stratospheric platform that combines a large high-altitude balloon with a solar-powered fixed-wing UAV to deliver persistent, near-space capabilities at a fraction of satellite cost; the balloon provides the primary lift and maintains altitude in the stratosphere for long durations, while the UAV acts as an intelligent control unit, using solar energy to power sensors, communications, and AI-driven stabilisation, enabling the system to remain over a target area for weeks or months while performing surveillance, telecom relay, environmental monitoring, and security operations, making it an adaptable, low-cost aerial infrastructure solution for applications across smart cities, remote connectivity, and national-scale monitoring in regions like Nigeria and across Africa.",
      diagram: {
        src: "/assets/images/platforms/stratos/stratos-structure.jpg",
        alt: "Diagram of the Stratos UAV Balloon Satellite design structure and components",
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
          name: "Stratollite Balloons",
          body: "These are high-altitude balloons designed to maintain position over a specific area for extended periods. By adjusting altitude to harness different wind currents, they enable persistent sensing, communications, observation, and monitoring missions.",
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
            alt: "Kelvar Stratos UAV Balloon Satellite on land in its docking station",
            orientation: "portrait",
          },
        },
        {
          label: "Fleet Surveillance",
          title: "Operational deployment",
          body: "The Kelvar Kite StratoSolar System combines balloon lift with a solar fixed-wing UAV to deliver persistent near-space coverage. The balloon sustains altitude while the UAV powers control, sensing, communications, and stabilisation for surveillance, relay, monitoring, and security missions.",
          media: {
            src: "/assets/images/platforms/stratos/stratos-in-air.jpg",
            alt: "Several Kelvar Stratos UAV Balloon Satellites in the air",
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
          name: "Weather Monitoring",
          body: "Stratospheric platforms provide continuous atmospheric data collection, supporting weather forecasting, climate research, environmental monitoring, and early warning systems for extreme weather events.",
        },
        {
          name: "Intelligence, Surveillance & Reconnaissance (ISR)",
          body: "Persistent high-altitude coverage enables long-duration observation of borders, critical infrastructure, maritime zones, and strategic assets, delivering real-time intelligence and situational awareness.",
        },
        {
          name: "Communications & Connectivity",
          body: "Acting as an aerial communications relay, stratospheric platforms can extend broadband, emergency communications, and network coverage to remote, underserved, or disaster-affected regions.",
        },
      ],
    },
    costAnalysis: {
      label: "Cost Analysis",
      title: "Satellite capability without satellite costs.",
      intro:
        "The cost difference between orbital and near-space platforms can be measured in millions of dollars. While satellites provide exceptional coverage, they require significant investment to build, launch, and operate. High-altitude UAV balloons offer a more accessible path to persistent monitoring and communications.",

      options: [
        {
          name: "Orbital Satellite",
          position: "$7.5M - $60M+",
          upfront:
            "Spacecraft manufacturing, payload development, launch services, insurance, licensing, and approvals.",
          recurring:
            "Ground station operations, mission control, maintenance, tracking, and future replacement missions.",
          timeline:
            "Months to years from design and testing to launch and operational deployment.",
          constraint:
            "Difficult to recover, repair, upgrade, or rapidly redeploy once in orbit.",
          summary:
            "Provides global coverage, but requires substantial capital investment and long deployment cycles.",
        },
        {
          name: "High-Altitude UAV Balloon",
          position: "$10k - $150K+",
          upfront:
            "Balloon envelope, lifting gas, payload systems, navigation equipment, and launch operations.",
          recurring:
            "Recovery, relaunch, replacement components, tracking support, and mission logistics.",
          timeline:
            "Can be deployed within days or weeks depending on payload and mission requirements.",
          constraint:
            "Mission duration, drift, recovery requirements, and continuity can limit long-term operations.",
          summary:
            "Far more affordable than satellites, making near-space missions accessible for research, monitoring, and communications.",
        },
      ],

      proofPoints: [
        {
          value: "No Rocket",
          label: "Avoids orbital launch costs",
        },
        {
          value: "Recoverable",
          label: "Hardware can be serviced and reused",
        },
        {
          value: "Persistent",
          label: "Regional coverage for extended missions",
        },
      ],

      conclusion: {
        title: "Where Kelvar Stratos Changes the Economics",
        body: "Kelvar Stratos combines the affordability of high-altitude UAV balloons with the persistence traditionally associated with satellite systems. By leveraging solar-powered endurance, controlled station-keeping, and reusable infrastructure, Stratos delivers continuous regional coverage without the financial burden of orbital deployment.",
      },
    },

    advantages: {
      label: "Technological Advantages",
      title: "Why the hybrid StratoSolar model matters",
      items: [
        {
          title: "Satellite-like persistence",
          body: "Operating in the stratosphere for weeks or months at a time, Kelvar Stratos provides continuous regional coverage without the launch cost, latency, or replacement cycle o f satellites.",
        },
        {
          title: "UAV-level control",
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
