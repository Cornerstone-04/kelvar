import type { Metadata } from "next";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

const barlow = localFont({
  src: [
    { path: "../public/assets/fonts/barlow/BarlowCondensed-SemiBold.ttf", weight: "600" },
    { path: "../public/assets/fonts/barlow/BarlowCondensed-Bold.ttf", weight: "700" },
    { path: "../public/assets/fonts/barlow/BarlowCondensed-Black.ttf", weight: "900" },
  ],
  variable: "--font-barlow",
});

const inter = localFont({
  src: [
    { path: "../public/assets/fonts/inter/Inter_18pt-Regular.ttf", weight: "400" },
    { path: "../public/assets/fonts/inter/Inter_18pt-Medium.ttf", weight: "500" },
    { path: "../public/assets/fonts/inter/Inter_18pt-SemiBold.ttf", weight: "600" },
  ],
  variable: "--font-inter",
});

const dmMono = localFont({
  src: [
    { path: "../public/assets/fonts/dm-mono/DMMono-Regular.ttf", weight: "400" },
    { path: "../public/assets/fonts/dm-mono/DMMono-Medium.ttf", weight: "500" },
  ],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: { default: "Kelvar Industries", template: "%s | Kelvar Industries" },
  description:
    "Kelvar Industries — Engineering next-generation drone systems for defence, surveillance, and precision logistics. Based in London, UK.",
  keywords: [
    "Kelvar Industries",
    "drone R&D",
    "unmanned systems",
    "defence technology",
    "London",
  ],
  authors: [{ name: "Kelvar Industries" }],
  metadataBase: new URL("https://www.kelvarindustries.com"),
  openGraph: {
    type: "website",
    title: "Kelvar Industries",
    description:
      "Engineering next-generation drone systems. Based in London, UK.",
    siteName: "Kelvar Industries",
    images: [
      {
        url: "https://www.kelvarindustries.com/assets/images/brand/kelvar-primary.png",
        alt: "Kelvar Industries — Engineering next-generation drone systems for defence, surveillance, and precision logistics. Based in London, UK.",
      },
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/images/brand/kelvar-bird-2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body>
        <SiteNavbar />
        <main>{children}</main>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
