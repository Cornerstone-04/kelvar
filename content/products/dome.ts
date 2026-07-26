import type { ProductDetail } from "@/types/product-types";

export const productDetails: ProductDetail[] = [
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
      { label: "Integration", value: "Table · Ceiling · Outdoor" },
      { label: "Origin", value: "United Kingdom · Nigeria" },
    ],
  },
];
