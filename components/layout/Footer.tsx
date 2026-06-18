import Image from "next/image";
import Link from "next/link";
import { drones, navLinks, site } from "@/lib/data";

const platformLinks = [
  ...drones.map((drone) => ({
    href: `/#${drone.slug}`,
    label: drone.name,
  })),
  { href: "/research#stratos", label: "Stratos" },
];

const communityLinks = [
  { href: "/research", label: "RD&D" },
  { href: "/focus", label: "Focus Areas" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
];

const resourceLinks = [
  { href: "/drones/dome", label: "Dome" },
  { href: "/research#stratos", label: "Stratos" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bg text-white">
      <div className="relative z-1 px-6 py-8 md:px-10 md:py-16">
        {/* CHANGED: Removed 'justify-items-center'. Added 'text-left' by default. */}
        <div className="grid gap-12 text-left sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/assets/images/brand/kelvar-bird.png"
                alt="Kelvar Industries"
                width={42}
                height={42}
                className="opacity-90"
              />
              <span className="font-heading text-xl font-bold uppercase leading-none tracking-[0.08em] text-primary">
                Kelvar
                <br />
                Industries
              </span>
            </Link>

            <p className="mt-6 max-w-[45ch] font-mono text-xs-plus leading-[1.85] text-white/45">
              Engineering autonomous surveillance systems for air, land, sea,
              and space security.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={navLinks} />
          <FooterColumn title="Platforms" links={platformLinks} />
          {/* <FooterColumn title="Resources" links={resourceLinks} /> */}
        </div>

        {/* CHANGED: Replaced flex-col defaults with flat text alignment tweaks for better mobile reading */}
        <div className="mt-14 grid gap-4 border-t border-white/10 pt-7 font-mono text-[0.68rem] text-white/36 text-left md:grid-cols-3 md:items-center">
          <p>
            Partner with us:{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/70"
            >
              {site.email}
            </a>
          </p>
          <p className="md:text-center">
            © {new Date().getFullYear()} Kelvar Industries. All rights reserved.
          </p>
          <p className="md:text-right">
            Contact us:{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/70"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      {/* <FooterSignalBand /> */}
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    // REMOVED: Any global centering styles. Defaults to natural left alignment.
    <div>
      <h2 className="mb-7 font-heading text-[1.25rem] font-bold normal-case tracking-normal text-primary">
        {title}
      </h2>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="font-mono text-xs-plus text-white/48 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
