import { createPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Research, Design & Development",
  description:
    "Explore Kelvar RD&D across swarm intelligence, computer vision, autonomous navigation, edge AI, robotics, and deployable security systems.",
  path: "/research",
  keywords: [
    "autonomous systems research",
    "swarm intelligence",
    "computer vision",
    "autonomous navigation",
    "edge artificial intelligence",
    "robotics research and development",
  ],
  image: "/assets/images/platforms/dome/swarm-render.jpg",
  imageAlt: "Kelvar research in swarm intelligence and autonomous systems",
});

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
