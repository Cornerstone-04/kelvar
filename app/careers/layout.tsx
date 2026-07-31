import { createPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join Kelvar Industries and help build autonomous drones, robotics, AI, and surveillance technologies designed to protect people, property, and progress.",
  path: "/careers",
  keywords: [
    "Kelvar Industries careers",
    "drone engineering jobs",
    "robotics careers",
    "autonomous systems jobs",
    "industrial design jobs",
    "remote technology jobs",
  ],
  imageAlt: "Careers building autonomous systems at Kelvar Industries",
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
