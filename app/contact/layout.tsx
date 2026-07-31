import { createPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Kelvar Industries about partnerships, investment, autonomous-system demonstrations, research collaboration, or general enquiries.",
  path: "/contact",
  keywords: [
    "contact Kelvar Industries",
    "autonomous systems partnership",
    "drone technology investment",
    "robotics collaboration",
    "surveillance technology demonstration",
  ],
  imageAlt: "Contact Kelvar Industries",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
