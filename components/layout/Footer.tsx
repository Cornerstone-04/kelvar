import Link from "next/link";
import Image from "next/image";
import { drones, navLinks, site } from "@/lib/data";
import { Libre_Barcode_39_Text } from "next/font/google";

export default function Footer() {
  return (
    <footer className="border-t border-border-col bg-surface">
      <div className="px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/kelvar-bird.png"
              alt="Kelvar Industries"
              width={60}
              height={60}
              className="rounded-sm"
            />
            <span className="text-base tracking-[0.25em] uppercase font-heading font-bold">
              Kelvar
              <br />
              Industries
            </span>
          </div>
          <p className="text-[0.75rem] leading-relaxed text-white/40 font-mono max-w-[28ch]">
            Engineering next-generation unmanned CCTV systems.
            <br />
            {site.location}
          </p>
        </div>

        {/* Platforms */}
        <div>
          <div className="text-[0.6rem] tracking-[0.25em] uppercase text-white/30 font-mono mb-4">
            Platforms
          </div>
          <ul className="space-y-2 list-none">
            {drones.map((drone) => (
              <li key={drone.id}>
                <a
                  href={`/#${drone.slug}`}
                  className="text-[0.72rem] tracking-widest uppercase text-white/50 hover:text-white no-underline transition-colors duration-200 font-mono"
                >
                  {drone.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <div className="text-[0.6rem] tracking-[0.25em] uppercase text-white/30 font-mono mb-4">
            Navigation
          </div>
          <ul className="space-y-2 list-none">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.72rem] tracking-widest uppercase text-white/50 hover:text-white no-underline transition-colors duration-200 font-mono"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[0.6rem] tracking-[0.25em] uppercase text-white/30 font-mono mb-4">
            Contact
          </div>
          <a
            href={`mailto:${site.email}`}
            className="text-[0.72rem] text-white/50 hover:text-white no-underline transition-colors duration-200 font-mono"
          >
            {site.email}
          </a>
          <p className="text-[0.72rem] text-white/30 font-mono mt-2">
            {site.location}
          </p>
        </div>
      </div>

      <div
        className="px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-2"
        style={{ borderTop: "1px solid var(--border-col)" }}
      >
        <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white/20 font-mono">
          © {new Date().getFullYear()} Kelvar Industries. All rights reserved.
        </p>
        <Link
          href="/privacy"
          className="text-[0.6rem] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 no-underline font-mono transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
