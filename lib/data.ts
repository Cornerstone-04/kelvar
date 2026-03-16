const assets = (unsplashId: string, mixkitId: number) => ({
  image: `https://images.unsplash.com/photo-${unsplashId}?w=1600&fm=jpg&q=80&fit=crop`,
  video: `https://assets.mixkit.co/videos/${mixkitId}/${mixkitId}-720.mp4`,
});

const site = {
  name: "Kelvar Industries",
  tagline: "Eyes Everywhere. Safety Guaranteed.",
  mission:
    "Inspired by the idea of purposeful motion and instinctive vigilance, Kelvar Industries develops intelligent autonomous surveillance systems designed to protect people, property, and progress. We create resilient technologies that deliver clarity, coverage, and confidence where it matters most.",
  story:
    "In Tolkien’s mythology, Kelvar refers to the living creatures of Arda capable of autonomous movement — quick, self-directed beings that roam, fly, and guard the natural world. We adopted the name as a symbol of intelligent systems built for vigilance, protection, and clarity of action. Inspired by the elevated sight and guardianship associated with the Great Eagles, Kelvar Industries develops autonomous technologies designed to safeguard people, property, and progress through resilient, always-on surveillance.",
  location: "Lagos · London · Los Angeles",
  email: "contact@kelvarindustries.com",
};

export type DroneFeature = {
  title: string;
  desc: string;
  tag: "Primary" | "Secondary";
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
      },
      {
        title: "AI Motion & Threat Detection",
        desc: "Intelligent classification of humans, vehicles, unusual behaviour, fire, smoke, and perimeter breaches — in real time.",
        tag: "Primary",
      },
      {
        title: "Responsive Swarm Behaviour",
        desc: "When a threat is detected, the swarm converges, tracks, records, and alerts instantly — without human intervention.",
        tag: "Primary",
      },
      {
        title: "Night & Low-Light Vision",
        desc: "Thermal and infrared imaging ensures complete visibility regardless of time of day or weather conditions.",
        tag: "Secondary",
      },
      {
        title: "Seamless Ground Integration",
        desc: "Integrates with Wall Cameras, Ceiling Cameras, Floor Bots, Spider Bots, and Drone Bot systems for a unified security layer.",
        tag: "Secondary",
      },
      {
        title: "Quiet & Residential-Safe",
        desc: "Designed for estates, farms, villages, and urban neighbourhoods. Lightweight, low-noise, and safe for everyday environments.",
        tag: "Secondary",
      },
    ],
    useCases: [
      {
        icon: "",
        label: "Homes & Estates",
        desc: "Perimeter patrol, intruder detection, and night surveillance for private residences and compounds.",
      },
      {
        icon: "",
        label: "Commercial Spaces",
        desc: "Shopping centres, banks, retail stores, and logistics depots secured with adaptive aerial coverage.",
      },
      {
        icon: "",
        label: "Industrial Facilities",
        desc: "Factories, power stations, refineries, and construction sites protected around the clock.",
      },
      {
        icon: "🌐",
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
      image: "/images/fusion_vtol.png",
      video: "/videos/fusion_vtol.mp4",
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
    tagline:
      "AI-powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    desc: "AI-powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    assets: {
      image: "/images/fusion_vtol.png",
      video: "/videos/fusion_vtol.mp4",
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
    tagline: "Floor robot for interior spaces",
    desc: "Floor robot for interior spaces.",
    // assets: assets("1532996122724-e3c354a0b15b", 44642),
    assets: {
      image: "/images/kelvar_one.png",
      video: "https://assets.mixkit.co/videos/44642/44642-720.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "03",
    name: "HYDRA",
    codename: "—",
    tagline: "Waterproof drone for over-sea survey.",
    desc: "Waterproof drone for over-sea survey.",
    // assets: assets("1473968512647-3e447244af8f", 581),
    assets: {
      image: "/images/hydra.png",
      video: "https://assets.mixkit.co/videos/581/581-720.mp4",
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
    sub: "Protecting people before harm reaches them.",
    image:
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "02",
    word: "SECURITY",
    sub: "Resilient systems that hold the line.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "03",
    word: "SURVEILLANCE",
    sub: "Total awareness. Zero blind spots.",
    image:
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=900&fm=jpg&q=80&fit=crop",
  },
];

const focus = [
  {
    id: "01",
    word: "AIR",
    sub: "Autonomous aerial platforms for wide-area coverage.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "02",
    word: "LAND",
    sub: "Ground-based units built for urban and remote terrain.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "03",
    word: "SEA",
    sub: "Waterproof systems for coastal and maritime operations.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&fm=jpg&q=80&fit=crop",
  },
];

export { ethos, focus, press, careers, team, values, navLinks, drones, site };
