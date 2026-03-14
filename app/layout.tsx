import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Barlow_Condensed, Inter, DM_Mono } from "next/font/google";

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
  metadataBase: new URL("https://kelvarindustries.vercel.app"),
  openGraph: {
    type: "website",
    title: "Kelvar Industries",
    description:
      "Engineering next-generation drone systems. Based in London, UK.",
    siteName: "Kelvar Industries",
    images: [
      {
        url: "https://kelvarindustries.vercel.app/kelvar.jpg",
        alt: "Kelvar Industries — Engineering next-generation drone systems for defence, surveillance, and precision logistics. Based in London, UK.",
      },
    ],
  },
  robots: { index: true, follow: true },
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
