import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R&D — Kelvar Industries",
  description:
    "Kelvar R&D works at the intersection of machine intelligence, robotics, and real-world security. Exploring swarm intelligence, computer vision, autonomous navigation, and edge AI.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
