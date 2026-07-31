import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Kelvar",
  description:
    "Meet Kelvar Industries, the team engineering intelligent autonomous surveillance systems for persistent awareness, resilient protection, and atmospheric intelligence.",
  path: "/about",
  keywords: [
    "autonomous surveillance company",
    "Kelvar mission",
    "defence technology team",
    "robotics company",
    "aerospace innovation",
  ],
  image: "/assets/images/brand/kelvar-secondary.jpg",
  imageAlt: "About Kelvar Industries and its autonomous systems mission",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
