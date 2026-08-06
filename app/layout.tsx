import type { Metadata } from "next";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { SiteSplash } from "@/components/layout/site-splash";
import "./globals.css";

const barlow = localFont({
  src: [
    {
      path: "../public/assets/fonts/barlow/BarlowCondensed-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/barlow/BarlowCondensed-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/assets/fonts/barlow/BarlowCondensed-Black.ttf",
      weight: "900",
    },
  ],
  display: "swap",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
  variable: "--font-barlow",
});

const inter = localFont({
  src: [
    {
      path: "../public/assets/fonts/inter/Inter_18pt-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/inter/Inter_18pt-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/inter/Inter_18pt-SemiBold.ttf",
      weight: "600",
    },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-inter",
});

const dmMono = localFont({
  src: [
    {
      path: "../public/assets/fonts/dm-mono/DMMono-Regular.ttf",
      weight: "400",
    },
    { path: "../public/assets/fonts/dm-mono/DMMono-Medium.ttf", weight: "500" },
  ],
  display: "swap",
  fallback: ["Courier New", "monospace"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kelvarindustries.com"),
  title: {
    default: "Kelvar Industries | Intelligent Autonomous Systems",
    template: "%s | Kelvar Industries",
  },
  description:
    "Kelvar Industries engineers intelligent autonomous drones, robotics, surveillance, and atmospheric systems for persistent awareness and resilient protection.",
  keywords: [
    "Kelvar Industries",
    "autonomous systems",
    "intelligent surveillance",
    "drone technology",
    "robotics",
    "atmospheric intelligence",
    "unmanned aerial systems",
    "computer vision",
    "defence and security technology",
  ],
  authors: [{ name: "Kelvar Industries" }],
  creator: "Kelvar Industries",
  publisher: "Kelvar Industries",
  applicationName: "Kelvar Industries",
  category: "Technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    title: "Kelvar Industries | Intelligent Autonomous Systems",
    description:
      "Engineering intelligent autonomous drones, robotics, surveillance, and atmospheric systems for persistent awareness and resilient protection.",
    siteName: "Kelvar Industries",
    images: [
      {
        url: "/assets/images/brand/kelvar-thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Kelvar Industries — intelligent autonomous systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvar Industries | Intelligent Autonomous Systems",
    description:
      "Engineering autonomous drones, robotics, surveillance, and atmospheric intelligence systems.",
    images: ["/assets/images/brand/kelvar-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/images/brand/kelvar-bird-2.png",
    shortcut: "/assets/images/brand/kelvar-bird-2.png",
    apple: "/assets/images/brand/kelvar-bird-2.png",
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
        <SiteSplash />
        <SiteNavbar />
        <main>{children}</main>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
