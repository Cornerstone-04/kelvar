export const site = {
  name: "Kelvar Industries",
  tagline: "Eyes Everywhere. Safety Guaranteed.",
  mission:
    "Inspired by the idea of purposeful motion and instinctive vigilance, Kelvar Industries develops intelligent autonomous surveillance systems designed to protect people, property, and progress. We create resilient technologies that deliver clarity, coverage, and confidence where it matters most.",
  story:
    "In Tolkien’s mythology, Kelvar refers to the living creatures of Arda capable of autonomous movement — quick, self-directed beings that roam, fly, and guard the natural world. We adopted the name as a symbol of intelligent systems built for vigilance, protection, and clarity of action. Inspired by the elevated sight and guardianship associated with the Great Eagles, Kelvar Industries develops autonomous technologies designed to safeguard people, property, and progress through resilient, always-on surveillance.",
  location: "Lagos · London · Los Angeles",
  email: "hello@kelvarindustries.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "RD&D" },
  { href: "/about", label: "About" },
  { href: "/focus", label: "Focus" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/#platforms", label: "Platforms" },
] satisfies NavigationLink[];

export const platformNavLinks = [
  { href: "/kelvarx/stratokite", label: "Stratokite" },
  { href: "/#robobot", label: "Robobot" },
  { href: "/#hydrax", label: "Hydrax" },
  { href: "/#dome", label: "Dome" },
] satisfies NavigationLink[];

export const researchNavLinks = [
  { href: "/kelvarx", label: "KELVARX" },
] satisfies NavigationLink[];
import type { NavigationLink } from "@/types/content-types";
