const assets = (unsplashId: string, mixkitId: number) => ({
  image: `https://images.unsplash.com/photo-${unsplashId}?w=1600&fm=jpg&q=80&fit=crop`,
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
    name: "FUSION VTOL",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A next-generation unmanned aerial vehicle designed for extended endurance operations in contested environments.",
    assets: {
      image: "/images/fusion_vtol.png",
      video: "videos/fusion_vtol.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "02",
    name: "HYDRA",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "An advanced low cost, petrol-powered AAV that merges the high-speed endurance of a small plane with the versatile VTOL capabilities of a drone for long-range reconnaissance.",
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
  {
    id: "03",
    name: "Kelvar One",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "With its roll cage design, on board parachute and ability to fold into the back of a standard pickup, the Kelvar One isn’t just a vehicle; it’s drone as a service.",
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
    id: "04",
    name: "Mosquito",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "For inspecting pipelines, monitoring in a covert environment and going through tight spots.",
    assets: {
      image: "/images/hydra_2.png",
      video: "https://assets.mixkit.co/videos/581/581-720.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "05",
    name: "Spectre",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A high-altitude long-endurance platform capable of operating above controlled airspace, designed for wide-area persistent surveillance.",
    assets: {
      image: "/images/kelvar_one_2.png",
      video: "https://assets.mixkit.co/videos/581/581-720.mp4",
    },
    specs: [
      { label: "Range", value: "TBC" },
      { label: "Payload", value: "TBC" },
      { label: "Endurance", value: "TBC" },
    ],
  },
  {
    id: "06",
    name: "Jackal",
    codename: "—",
    tagline: "Placeholder — awaiting client brief",
    desc: "A vertical take-off and landing strike platform optimised for precision engagement in urban and complex operating environments.",
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
