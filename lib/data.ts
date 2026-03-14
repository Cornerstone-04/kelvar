const assets = (unsplashId: string, mixkitId: number) => ({
  image: `https://images.unsplash.com/photo-${unsplashId}?w=1600&fm=jpg&q=80&fit=crop`,
  video: `https://assets.mixkit.co/videos/${mixkitId}/${mixkitId}-720.mp4`,
});

export const site = {
  name: "Kelvar Industries",
  tagline: "Eyes Everywhere. Safety Guaranteed.",
  mission:
    "Inspired by the idea of purposeful motion and instinctive vigilance, Kelvar Industries develops intelligent autonomous surveillance systems designed to protect people, property, and progress. We create resilient technologies that deliver clarity, coverage, and confidence where it matters most.",
  story:
    "In Tolkien’s mythology, Kelvar refers to the living creatures of Arda capable of autonomous movement — quick, self-directed beings that roam, fly, and guard the natural world. We adopted the name as a symbol of intelligent systems built for vigilance, protection, and clarity of action. Inspired by the elevated sight and guardianship associated with the Great Eagles, Kelvar Industries develops autonomous technologies designed to safeguard people, property, and progress through resilient, always-on surveillance.",
  location: "Lagos · London · Los Angeles",
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
  // {
  //   id: "04",
  //   name: "Mosquito",
  //   codename: "—",
  //   tagline: "Placeholder — awaiting client brief",
  //   desc: "For inspecting pipelines, monitoring in a covert environment and going through tight spots.",
  //   assets: {
  //     image: "/images/hydra_2.png",
  //     video: "https://assets.mixkit.co/videos/581/581-720.mp4",
  //   },
  //   specs: [
  //     { label: "Range", value: "TBC" },
  //     { label: "Payload", value: "TBC" },
  //     { label: "Endurance", value: "TBC" },
  //   ],
  // },
  // {
  //   id: "05",
  //   name: "Spectre",
  //   codename: "—",
  //   tagline: "Placeholder — awaiting client brief",
  //   desc: "A high-altitude long-endurance platform capable of operating above controlled airspace, designed for wide-area persistent surveillance.",
  //   assets: {
  //     image: "/images/kelvar_one_2.png",
  //     video: "https://assets.mixkit.co/videos/581/581-720.mp4",
  //   },
  //   specs: [
  //     { label: "Range", value: "TBC" },
  //     { label: "Payload", value: "TBC" },
  //     { label: "Endurance", value: "TBC" },
  //   ],
  // },
  // {
  //   id: "06",
  //   name: "Jackal",
  //   codename: "—",
  //   tagline: "Placeholder — awaiting client brief",
  //   desc: "A vertical take-off and landing strike platform optimised for precision engagement in urban and complex operating environments.",
  //   assets: {
  //     image: "/images/hydra.png",
  //     video: "https://assets.mixkit.co/videos/581/581-720.mp4",
  //   },
  //   specs: [
  //     { label: "Range", value: "TBC" },
  //     { label: "Payload", value: "TBC" },
  //     { label: "Endurance", value: "TBC" },
  //   ],
  // },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  // { href: "/careers", label: "Careers" },
  // { href: "/press", label: "Press" },
];

export const values = [
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

export const team = [
  {
    name: "Funfere B. Koroye",
    role: "Co-Founder",
    bio: "Placeholder bio — awaiting client content.",
  },
  {
    name: "Placeholder Name",
    role: "Co-Founder",
    bio: "Placeholder bio — awaiting client content.",
  },
  {
    name: "Placeholder Name",
    role: "Head of Engineering",
    bio: "Placeholder bio — awaiting client content.",
  },
];

export const careers = {
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

export const press = [
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
