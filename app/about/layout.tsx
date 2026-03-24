import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kelvar Industries",
  description:
    "Kelvar Industries develops intelligent autonomous surveillance systems designed to protect people, property, and progress. Inspired by the vigilance of Tolkien's Kelvar — resilient, always-on, and self-directed.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
