const site = {
  name: "Kelvar Industries",
  tagline: "Eyes Everywhere. Safety Guaranteed.",
  mission:
    "Inspired by the idea of purposeful motion and instinctive vigilance, Kelvar Industries develops intelligent autonomous surveillance systems designed to protect people, property, and progress. We create resilient technologies that deliver clarity, coverage, and confidence where it matters most.",
  story:
    "In Tolkien’s mythology, Kelvar refers to the living creatures of Arda capable of autonomous movement — quick, self-directed beings that roam, fly, and guard the natural world. We adopted the name as a symbol of intelligent systems built for vigilance, protection, and clarity of action. Inspired by the elevated sight and guardianship associated with the Great Eagles, Kelvar Industries develops autonomous technologies designed to safeguard people, property, and progress through resilient, always-on surveillance.",
  location: "Lagos · London · Los Angeles",
  email: "hello@kelvarindustries.com",
};

export type DroneFeature = {
  title: string;
  desc: string;
  tag: "Primary" | "Secondary";
  image?: string;
};

export type DroneUseCase = {
  icon: string;
  label: string;
  desc: string;
};

export type DroneStat = {
  value: string;
  label: string;
};

export type DronePageData = {
  id: string;
  name: string;
  slug: string;
  trademark?: boolean;
  tagline: string;
  concept: string;
  features: DroneFeature[];
  useCases: DroneUseCase[];
  vision: string;
  stats: DroneStat[];
  philosophy: string[];
  industries: string[];
  assets: {
    image: string;
    video: string;
  };
  specs: { label: string; value: string }[];
};

export const dronePages: DronePageData[] = [
  {
    id: "01",
    name: "SKY DOME",
    slug: "sky-dome",
    trademark: true,
    tagline:
      "AI-Powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    concept:
      "Imagine a living CCTV network where cameras don't stay fixed on walls — they fly, reposition, track, and respond. SKY DOME™ replaces blind spots with 360° dynamic aerial visibility, powered by AI, machine learning, and predictive threat analytics. Each drone in the network communicates with the others, creating a protective dome of real-time, adaptive security over any environment.",
    features: [
      {
        title: "Autonomous Patrol Swarm",
        desc: "Multiple micro-drones create overlapping surveillance paths for continuous, uninterrupted coverage across any environment.",
        tag: "Primary",
        image: "/images/sky-dome/SKY_DOME_DRONE_08.jpg",
      },
      {
        title: "AI Motion & Threat Detection",
        desc: "Intelligent classification of humans, vehicles, unusual behaviour, fire, smoke, and perimeter breaches — in real time.",
        tag: "Primary",
        image: "/images/sky-dome/SKY_DOME_DRONE_07.jpg",
      },
      {
        title: "Responsive Swarm Behaviour",
        desc: "When a threat is detected, the swarm converges, tracks, records, and alerts instantly — without human intervention.",
        tag: "Primary",
        image: "/images/sky-dome/SKY_DOME_DRONE_02.jpg",
      },
      {
        title: "Night & Low-Light Vision",
        desc: "Thermal and infrared imaging ensures complete visibility regardless of time of day or weather conditions.",
        tag: "Secondary",
        image: "/images/sky-dome/SKY_DOME_DRONE_-_CEILING_01.jpg",
      },
      {
        title: "Seamless Ground Integration",
        desc: "Integrates with Wall Cameras, Ceiling Cameras, Floor Bots, Spider Bots, and Drone Bot systems for a unified security layer.",
        tag: "Secondary",
        image: "/images/sky-dome/SKY_DOME_POLES.jpg",
      },
      {
        title: "Quiet & Residential-Safe",
        desc: "Designed for estates, farms, villages, and urban neighbourhoods. Lightweight, low-noise, and safe for everyday environments.",
        tag: "Secondary",
        image: "/images/sky-dome/SKY_DOME_DRONE-_TABLE_TOP.jpg",
      },
    ],
    useCases: [
      {
        icon: "house",
        label: "Homes & Estates",
        desc: "Perimeter patrol, intruder detection, and night surveillance for private residences and compounds.",
      },
      {
        icon: "building",
        label: "Commercial Spaces",
        desc: "Shopping centres, banks, retail stores, and logistics depots secured with adaptive aerial coverage.",
      },
      {
        icon: "factory",
        label: "Industrial Facilities",
        desc: "Factories, power stations, refineries, and construction sites protected around the clock.",
      },
      {
        icon: "globe",
        label: "Large-Scale Operations",
        desc: "Campuses, ports, airports, and government facilities covered with scalable swarm deployment.",
      },
    ],
    vision:
      "To replace outdated static CCTV with a mobile, intelligent, self-coordinated aerial security network — creating a safer world by preventing fire, fraud, and felony before they happen.",
    stats: [
      { value: "642,170", label: "Emergency fire incidents in the UK" },
      { value: "3.9M", label: "Fraud cases recorded annually" },
      { value: "9.4M", label: "Recorded crime incidents" },
      { value: "+33%", label: "Rise in fire outbreaks" },
      { value: "72%", label: "Of fraud cases are identity-driven" },
      { value: "58,000+", label: "Knife & firearm offences combined" },
    ],
    philosophy: [
      "True security is proactive, autonomous, and always learning.",
      "Technology should think and respond faster than the threat.",
      "Innovation must protect real homes, real businesses, and real communities.",
    ],
    industries: [
      "Residential estates & private compounds",
      "Retail, hospitality, logistics, and commercial spaces",
      "Oil & gas, energy, factories, and high-risk industrial zones",
    ],
    assets: {
      image: "/images/sky-dome/SKY_DOME_DRONE_01.jpg",
      video: "/videos/sky_dome_showcase.mp4",
    },
    specs: [
      { label: "System Type", value: "Autonomous Aerial Swarm" },
      { label: "Detection", value: "AI · ML · Predictive Analytics" },
      { label: "Vision", value: "Thermal · Infrared · HD" },
      { label: "Coverage", value: "360° Dynamic" },
      { label: "Range", value: "TBC" },
      { label: "Endurance", value: "TBC" },
      {
        label: "Integration",
        value: "Ground Cameras · Floor Bots · Spider Bots",
      },
      { label: "Origin", value: "United Kingdom" },
    ],
  },
];

const drones = [
  {
    id: "01",
    name: "SKY DOME",
    codename: "—",
    slug: "sky-dome",
    tagline:
      "AI Powered CCTV cameras that fly; to prevent Fire, Fraud & Felony",
    desc: "AI-powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    assets: {
      image1: "/images/sky-dome/SKY_DOME_DRONE_01.jpg",
      image2: "/images/sky-dome/SKY_DOME_DRONE_03.jpg",
      video: "/videos/sky_dome_showcase.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "02",
    name: "ROBOBOT",
    codename: "—",
    slug: "robobot",
    tagline: "Floor robot for interior spaces",
    desc: "Floor robot for interior spaces.",
    assets: {
      image1: "/images/robobot/NU_FLOOR_CLEANER 01.jpg",
      video: "/videos/robobot_showcase.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "03",
    name: "HYDRAX",
    codename: "—",
    slug: "hydrax",
    tagline: "Waterproof drone for over-sea survey.",
    desc: "Waterproof drone for over-sea survey.",
    assets: {
      image1: "/images/hydrax.jpg",
      video: "/videos/hydrax_showcase.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/research", label: "Kelvar R&D" },
  { href: "/contact", label: "Contact" },
];

const values = [
  { 
    title: "Vigilance",
    desc: "We build systems designed to see, detect, and respond with constant awareness, day and night.",
  },
  {
    title: "Autonomy",
    desc: "Our technologies are shaped for intelligent, self-directed operation that reduces delay and improves coverage.",
  },
  {
    title: "Resilience",
    desc: "Kelvar solutions are designed to remain dependable in demanding, high-stakes, and always-on environments.",
  },
  {
    title: "Guardianship",
    desc: "Everything we create is grounded in protection — safeguarding people, property, and the progress they depend on.",
  },
];

const team = [
  {
    name: "Keniye B. Koroye",
    role: "Co-Founder",
    bio: "An industrial designer, product analyst, and entrepreneur celebrated for merging African cultural narratives with global innovation. A SCAD alum and Tech Nation Global Talent ambassador, Keniye has designed for brands like Tecno Mobile and AFA Sports, and holds a patent for the TekGlove. Based in London, he specializes in bridging the gap between high-impact hardware and fintech strategy.",
  },
  {
    name: "Chidi E. Iheukwumere",
    role: "Co-Founder & CTO",
    bio: "Software engineer with experience across full-stack development, AI integration, and real-time systems. Previously at Eli Lilly, where he built AI-enhanced chatbot infrastructure, and founded Kevvlar — an all-in-one project management platform.",
  },
];

const careers = {
  headline: "Build the Future of Intelligent Protection",
  intro:
    "We are building autonomous surveillance technologies that combine vigilance, resilience, and intelligent action. If you care about purposeful systems and want to help protect what matters most, we'd love to hear from you.",
  perks: [
    "Competitive salary & growth opportunities",
    "Flexible & hybrid working",
    "Work on meaningful autonomous systems",
    "Help shape next-generation surveillance technology",
  ],
  roles: [
    {
      title: "Autonomous Systems Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      summary:
        "Design and develop intelligent system behaviours for autonomous surveillance and monitoring platforms.",
    },
    {
      title: "Embedded Systems Engineer",
      department: "Engineering",
      location: "London, UK · Hybrid",
      type: "Full-time",
      summary:
        "Build firmware and real-time control systems that power reliable, always-on autonomous devices.",
    },
    {
      title: "Computer Vision Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      summary:
        "Develop perception and visual intelligence capabilities that improve awareness, tracking, and response accuracy.",
    },
  ],
};

const press = [
  {
    outlet: "Placeholder Outlet",
    headline:
      "Kelvar Industries unveils autonomous surveillance vision inspired by vigilance and intelligent motion",
    date: "2025",
    url: "#",
  },
  {
    outlet: "Placeholder Outlet",
    headline:
      "How Kelvar Industries is rethinking 24/7 intelligent surveillance for modern protection needs",
    date: "2025",
    url: "#",
  },
  {
    outlet: "Placeholder Outlet",
    headline:
      "Kelvar Industries positions autonomous monitoring as the next frontier in safety technology",
    date: "2025",
    url: "#",
  },
];

const ethos = [
  {
    id: "01",
    word: "SAFETY",
    sub: "We design systems that act before harm arrives — not after. Every Kelvar platform is engineered to detect early, respond fast, and protect the people and places that matter most. Safety is not a feature. It is the foundation.",
    image:
      "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "02",
    word: "SECURITY",
    sub: "True security doesn't sleep. Our autonomous systems maintain constant vigilance across perimeters, properties, and critical infrastructure — holding the line without fatigue, blind spots, or delay. Resilient by design. Relentless by default.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "03",
    word: "SURVEILLANCE",
    sub: "Static cameras see what's in front of them. Kelvar sees everything. Our aerial and ground-based platforms deliver total situational awareness — dynamic, adaptive, and always on. Zero blind spots. Zero compromise.",
    image:
      "https://images.unsplash.com/photo-1771325974799-38c4630d15db?w=900&fm=jpg&q=80&fit=crop",
  },
];

const focus = [
  {
    id: "01",
    word: "AIR",
    sub: "Our autonomous aerial platforms deliver wide-area surveillance that no fixed camera can match. From residential estates to industrial zones, Sky Dome and its successors patrol, track, and respond — covering ground continuously and without boundaries.",
    image:
      "https://images.unsplash.com/photo-1646749701929-f271445c7990?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "02",
    word: "LAND",
    sub: "Ground-based autonomous units built for the environments people live and work in. Urban streets, remote perimeters, indoor spaces — Kelvar's land systems navigate complex terrain with precision, bringing intelligent surveillance to every corner.",
    image:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "03",
    word: "SEA",
    sub: "Coastal borders, offshore infrastructure, and maritime operations demand a different kind of protection. Kelvar's waterproof systems are engineered for harsh aquatic environments — delivering the same autonomous intelligence at sea as on land and in the air.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&fm=jpg&q=80&fit=crop",
  },
];

const research = {
  headline: "The Lab",
  subheadline: "We don't wait for the future. We engineer it.",
  desc: "Kelvar R&D is the engine behind our autonomous systems. Our research teams work at the intersection of machine intelligence, robotics, and real-world security — building the technologies that will define the next generation of autonomous surveillance.",
  areas: [
    {
      id: "01",
      title: "Swarm Intelligence",
      desc: "Designing distributed coordination algorithms that allow multiple autonomous units to communicate, adapt, and act as a unified system without central control.",
    },
    {
      id: "02",
      title: "Computer Vision",
      desc: "Developing AI models that can classify threats, recognise behaviour patterns, and identify objects across infrared, thermal, and optical spectra in real time.",
    },
    {
      id: "03",
      title: "Autonomous Navigation",
      desc: "Building path-planning and obstacle-avoidance systems that operate reliably in GPS-denied, low-visibility, and high-interference environments.",
    },
    {
      id: "04",
      title: "Edge AI",
      desc: "Pushing intelligence to the device level — enabling drones and ground units to process, decide, and act without relying on cloud connectivity or remote computation.",
    },
  ],
};

export {
  ethos,
  focus,
  press,
  careers,
  team,
  values,
  navLinks,
  drones,
  site,
  research,
};
