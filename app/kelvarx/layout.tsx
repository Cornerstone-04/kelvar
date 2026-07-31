import { createPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "KELVARX Atmospheric Intelligence",
  description:
    "Discover KELVARX, Kelvar Industries' aerospace and near-space programme connecting atmospheric platforms, autonomous intelligence, sensing, and communications.",
  path: "/kelvarx",
  keywords: [
    "KELVARX",
    "atmospheric intelligence",
    "near-space systems",
    "high-altitude platforms",
    "aerospace autonomy",
    "Earth observation",
    "resilient communications",
  ],
  image: "/assets/images/platforms/stratos/stratos-space-2.jpg",
  imageAlt: "KELVARX atmospheric intelligence and near-space systems programme",
});

export default function KelvarxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
