import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RD&D — Kelvar Industries",
  description:
    "Kelvar R&D works at the intersection of machine intelligence, robotics, and real-world security. Exploring swarm intelligence, computer vision, autonomous navigation, and artificial intelligence.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
