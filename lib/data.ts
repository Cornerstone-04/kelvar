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
  image?: string;
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
    videoAlt: string;
  };
  specs: { label: string; value: string }[];
};

export const dronePages: DronePageData[] = [
  {
    id: "01",
    name: "DOME",
    slug: "dome",
    trademark: true,
    tagline:
      "AI-Powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    concept:
      "Imagine a living CCTV network where cameras don't stay fixed on walls. They fly, reposition, track, and respond. Dome replaces blind spots with 360° dynamic aerial visibility, powered by AI, machine learning, and predictive threat analytics. Each drone in the network communicates with the others, creating a protective dome of real-time, adaptive security over any environment.",
    features: [
      {
        title: "Autonomous Patrol Swarm",
        desc: "Multiple drones create overlapping surveillance paths for continuous, uninterrupted coverage across any environment.",
        tag: "Primary",
        image: "/assets/images/platforms/dome/swarm-render.jpg",
      },
      {
        title: "Dome Dock",
        desc: "Intelligent classification of humans, vehicles, unusual behaviour, fire, smoke, and perimeter breaches — in real time.",
        tag: "Primary",
        image: "/assets/images/platforms/dome/sky-dome-table-top.jpg",
      },
      {
        title: "Solar Powered Surveillance",
        desc: "Self-sustaining drone systems powered by solar energy, enabling continuous operation in remote or off-grid environments with minimal maintenance.",
        tag: "Primary",
        image: "/assets/images/platforms/dome/sky-dome-solar.jpg",
      },
      {
        title: "Night & Low-Light Vision",
        desc: "Thermal and infrared imaging ensures complete visibility regardless of time of day or weather conditions.",
        tag: "Secondary",
        image: "/assets/images/platforms/dome/sky-dome-ceiling-01.jpg",
      },
      {
        title: "Quiet & Residential-Safe",
        desc: "Designed for estates, farms, villages, and urban neighbourhoods. Lightweight, low-noise, and safe for everyday environments.",
        tag: "Secondary",
        image: "/assets/images/platforms/dome/sky-dome-drone-07.jpg",
      },
    ],
    useCases: [
      {
        icon: "house",
        label: "Homes & Estates",
        desc: "Perimeter patrol, intruder detection, and night surveillance for private residences and compounds.",
        image:
          "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&fm=jpg&q=75&fit=crop",
      },
      {
        icon: "building",
        label: "Shopping Malls",
        desc: "Shopping centres, banks, retail stores, and logistics depots secured with adaptive aerial coverage.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fm=jpg&q=75&fit=crop",
      },
      {
        icon: "factory",
        label: "Power Plants",
        desc: "Factories, power stations, refineries, and construction sites protected around the clock.",
        image:
          "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&fm=jpg&q=75&fit=crop",
      },
      {
        icon: "globe",
        label: "Farms",
        desc: "Agricultural land, rural properties, and open perimeters monitored with scalable swarm coverage.",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&fm=jpg&q=75&fit=crop",
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
      "Security is proactive, autonomous, and always learning.",
      "Technology should think and respond faster than the threat.",
      "Innovation must protect real homes, real businesses, and real communities.",
    ],
    industries: [
      "Residential estates & private compounds",
      "Retail, hospitality, logistics, and commercial spaces",
      "Oil & gas, energy, factories, and high-risk industrial zones",
    ],
    assets: {
      image: "/assets/images/platforms/dome/sky-dome-drone-01.jpg",
      video: "/assets/videos/platforms/dome/sky-dome-showcase.mp4",
      videoAlt: "/assets/videos/platforms/dome/sky-dome-swarm-showcase.mp4",
    },
    specs: [
      { label: "System Type", value: "Autonomous Aerial Swarm" },
      { label: "Drone Dock", value: "Sound · Sense · Smell" },
      { label: "Sensors", value: "Gunshot · Glass Breaking · Fire" },
      { label: "Detection", value: "AI · ML · Predictive Analytics" },
      { label: "Vision", value: "Thermal · Infrared · LiDAR" },
      { label: "Coverage", value: "360° Dynamic" },
      {
        label: "Integration",
        value: "Table · Ceiling · Outdoor",
      },
      { label: "Origin", value: "United Kingdom · Nigeria" },
    ],
  },
];

const drones = [
  {
    id: "01",
    name: "Dome",
    codename: "—",
    slug: "dome",
    tagline:
      "AI Powered CCTV cameras that fly; to prevent Fire, Fraud & Felony",
    desc: "AI-powered Autonomous Aerial CCTV Swarm for Residential, Commercial & Industrial Security",
    assets: {
      image1: "/assets/images/platforms/dome/sky-dome-drone-01.jpg",
      image2: "/assets/images/platforms/dome/sky-dome-drone-03.jpg",
      video: "/assets/videos/platforms/dome/sky-dome-showcase.mp4",
      videoPoster: "/assets/images/platforms/dome/sky-dome-thumbnail.png",
    },
    specs: [
      { label: "Capability Class", value: "Aerial Surveillance" },
      { label: "Deployment Mode", value: "Autonomous Swarm" },
      { label: "Sensor Stack", value: "AI · Thermal · Infrared" },
    ],
  },
  {
    id: "02",
    name: "Hydrax",
    codename: "—",
    slug: "hydrax",
    tagline:
      "AI-powered aerial surveillance for coastlines, ports, and open water — corrosion-proof, always watching.",
    desc: "Waterproof autonomous drone engineered for over-sea survey, maritime security, and offshore infrastructure monitoring.",
    assets: {
      image1: "/assets/images/platforms/hydrax/hydrax.jpg",
      video: "/assets/videos/platforms/hydrax/hydrax-showcase.mp4",
      videoPoster: "/assets/images/platforms/hydrax/hydrax-thumbnail.png",
    },
    specs: [
      { label: "Capability Class", value: "Maritime Surveillance" },
      { label: "Deployment Mode", value: "Waterproof Aerial" },
      { label: "Sensor Stack", value: "Optical · Thermal · Marine" },
    ],
  },
  {
    id: "03",
    name: "Robobot",
    codename: "—",
    slug: "robobot",
    tagline:
      "AI-powered ground patrol for the spaces drones can't reach — indoors, always on.",
    desc: "Autonomous indoor robot for continuous floor-level surveillance across offices, warehouses, factories, and commercial interiors.",
    assets: {
      image1: "/assets/images/platforms/robobot/robobot-single.jpg",
      video: "/assets/videos/platforms/robobot/robobot-showcase.mp4",
      videoPoster: "/assets/images/platforms/robobot/robobot-thumbnail.png",
    },
    specs: [
      { label: "Capability Class", value: "Ground Patrol" },
      { label: "Deployment Mode", value: "Indoor Autonomous" },
      { label: "Sensor Stack", value: "Vision · Audio · Proximity" },
    ],
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "RD&D" },
  { href: "/about", label: "About" },
  { href: "/focus", label: "Focus" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
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
    desc: "Everything we create is grounded in protection, safeguarding people, property, and the progress they depend on.",
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
  headline: "Build What Protects the World.",
  intro:
    "Kelvar Industries is looking for driven, unconventional people who want their work to mean something. We're a small team solving hard problems in autonomous surveillance and if you want to be part of what comes next, we want to hear from you.",
  perks: [
    "Competitive salary & growth opportunities",
    "Flexible & hybrid working",
    "Work on meaningful autonomous systems",
    "Help shape next-generation surveillance technology",
  ],
  roles: [
    {
      title: "Drone Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      summary:
        "Operate and manage autonomous and semi-autonomous drone platforms across live deployments, field testing, and demonstration events. You'll work directly with our engineering team to push the limits of what our systems can do in real-world conditions.",
    },
    {
      title: "Industrial Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      summary:
        "Design the physical form of Kelvar's next generation of autonomous platforms, from early-stage concept modelling to production-ready specifications. You'll shape how our systems look, feel, and perform in the field.",
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      summary:
        "Own Kelvar's presence across social platforms. Build the visual language, grow the audience, and communicate what we're building to the world. You'll be the voice of a company doing things that haven't been done before.",
    },
  ],
};

const ethos = [
  {
    id: "01",
    word: "SAFETY",
    sub: "We design systems that act before harm arrives, not after. Every Kelvar platform is engineered to detect early, respond fast, and protect the people and places that matter most. Safety is not a feature. It is the foundation.",
    image:
      "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=900&fm=jpg&q=80&fit=crop",
  },
  {
    id: "02",
    word: "SECURITY",
    sub: "True security doesn't sleep. Our autonomous systems maintain constant vigilance across perimeters, properties, and critical infrastructure, holding the line without fatigue, blind spots, or delay. Resilient by design. Relentless by default.",
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
    sub: "Our autonomous aerial platforms deliver wide-area surveillance that no fixed camera can match. From residential estates to industrial zones, Dome and its successors patrol, track, and respond, covering ground continuously and without boundaries.",
    image:
      "https://images.unsplash.com/photo-1646749701929-f271445c7990?w=1920&h=1080&fm=jpg&q=80&fit=crop",
  },
  {
    id: "02",
    word: "SEA",
    sub: "Coastal borders, offshore infrastructure, and maritime operations demand a different kind of protection. Kelvar's waterproof systems are engineered for harsh aquatic environments, delivering the same autonomous intelligence at sea as on land and in the air.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&h=1080&fm=jpg&q=80&fit=crop",
  },
  {
    id: "03",
    word: "LAND",
    sub: "Ground-based autonomous units built for the environments people live and work in. Whether it's brban streets, remote perimeters, or indoor spaces, Kelvar's land systems navigate complex terrain with precision, bringing intelligent surveillance to every corner.",
    image:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1920&h=1080&fm=jpg&q=80&fit=crop",
  },
  {
    id: "04",
    word: "SPACE",
    sub: "The next frontier of autonomous surveillance extends beyond the atmosphere. Kelvar's space division is developing low-orbit monitoring systems capable of delivering persistent, wide-area intelligence at a scale no ground or aerial platform can match.",
    image:
      "https://images.unsplash.com/photo-1534996858221-380b92700493?w=1920&h=1080&fm=jpg&q=80&fit=crop",
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
      title: "Kelvar AI",
      desc: "Pushing intelligence to the device level, enabling drones and ground units to process, decide, and act without relying on cloud connectivity or remote computation.",
    },
  ],
};

export {
  ethos,
  focus,
  careers,
  team,
  values,
  navLinks,
  drones,
  site,
  research,
};
