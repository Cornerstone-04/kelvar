import { createPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Strategic Focus Areas",
  description:
    "Explore Kelvar Industries' autonomous technology focus across air, land, sea, and space, with systems engineered for persistent intelligence and protection.",
  path: "/focus",
  keywords: [
    "air land sea space systems",
    "autonomous surveillance",
    "multi-domain intelligence",
    "unmanned systems",
    "aerospace and robotics",
  ],
  image: "/assets/images/platforms/airconvoy/airconvoy-air.jpg",
  imageAlt:
    "Kelvar Industries strategic focus across air, land, sea, and space",
});

export default function FocusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
