const assets = (unsplashId: string, mixkitId: number) => ({
  jpg: `https://images.unsplash.com/photo-${unsplashId}?w=1600&fm=jpg&q=80&fit=crop`,
  video: `https://assets.mixkit.co/videos/${mixkitId}/${mixkitId}-720.mp4`,
});

export const site = {
  name: "Kelvar Industries",
  tagline: "Engineering the Future of Unmanned Flight",
  mission:
    "Kelvar Industries exists to design and develop next-generation drone systems that redefine what is possible in defence, surveillance, and precision logistics. We build for the missions that matter.",
  location: "London, United Kingdom",
  email: "contact@kelvarindustries.com",
};

export const drones = [
  {
    id: "01",
    name: "Drone 01",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A next-generation unmanned aerial vehicle designed for extended endurance operations in contested environments. Built for precision, range, and resilience.",
    assets: assets("1508444845599-5c89863b1c44", 579),
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "02",
    name: "Drone 02",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A compact, high-speed reconnaissance platform engineered for rapid deployment and real-time intelligence gathering across complex terrain.",
    assets: assets("1473968512647-3e447244af8f", 581),
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "03",
    name: "Drone 03",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A heavy-lift autonomous drone developed for logistics and supply chain operations in austere and denied-access environments.",
    assets: assets("1532996122724-e3c354a0b15b", 44642),
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "04",
    name: "Drone 04",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A swarm-capable micro drone designed to operate in coordinated formations, providing persistent area coverage and distributed sensing.",
    assets: assets("1451187580459-43490279c0fa", 32171),
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "05",
    name: "Drone 05",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A high-altitude long-endurance platform capable of operating above controlled airspace, designed for wide-area persistent surveillance.",
    assets: assets("1446776811765-4b79af1adbc1", 611),
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "06",
    name: "Drone 06",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A vertical take-off and landing strike platform optimised for precision engagement in urban and complex operating environments.",
    assets: assets("1492892132812-a00a8b245c45", 56),
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export const values = [
  {
    title: "Precision",
    desc: "Every system we build is engineered to exacting standards. There is no room for error.",
  },
  {
    title: "Innovation",
    desc: "We pursue unconventional solutions to the hardest problems in unmanned systems.",
  },
  {
    title: "Resilience",
    desc: "Our platforms are built to operate in the most demanding and contested environments on earth.",
  },
  {
    title: "Integrity",
    desc: "We are transparent with our partners, rigorous in our research, and accountable for our outcomes.",
  },
];

export const team = [
  {
    name: "Placeholder Name",
    role: "Chief Executive Officer",
    bio: "Placeholder bio — awaiting client content.",
  },
  {
    name: "Placeholder Name",
    role: "Chief Technology Officer",
    bio: "Placeholder bio — awaiting client content.",
  },
  {
    name: "Placeholder Name",
    role: "Head of Engineering",
    bio: "Placeholder bio — awaiting client content.",
  },
];

export const careers = {
  headline: "Build What Others Can't",
  intro:
    "We're a small, focused team solving hard problems in unmanned systems. If you're driven by technical excellence and want your work to matter, we want to hear from you.",
  perks: [
    "Competitive salary & equity",
    "Flexible & hybrid working",
    "R&D budget for personal projects",
    "Work on real-world defence systems",
  ],
  roles: [
    {
      title: "Mechanical Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      summary:
        "Design and develop airframe structures and mechanical systems for our drone platforms.",
    },
    {
      title: "Embedded Systems Engineer",
      department: "Engineering",
      location: "London, UK · Hybrid",
      type: "Full-time",
      summary:
        "Develop firmware and real-time control systems for autonomous flight platforms.",
    },
    {
      title: "Flight Systems Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      summary:
        "Lead the development of navigation, guidance, and control algorithms for multi-rotor and fixed-wing UAS.",
    },
  ],
};

export const press = [
  {
    outlet: "Placeholder Outlet",
    headline:
      "Kelvar Industries announces next-generation drone research programme",
    date: "2025",
    url: "#",
  },
  {
    outlet: "Placeholder Outlet",
    headline: "Inside the London R&D lab pushing the limits of unmanned flight",
    date: "2025",
    url: "#",
  },
  {
    outlet: "Placeholder Outlet",
    headline:
      "Kelvar secures strategic partnership for advanced drone development",
    date: "2025",
    url: "#",
  },
];
