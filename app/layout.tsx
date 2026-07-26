import type { Metadata } from "next";
import SiteNavbar from "@/components/layout/site-navbar";
import SiteFooter from "@/components/layout/site-footer";
import { Barlow_Condensed, Inter, DM_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
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
