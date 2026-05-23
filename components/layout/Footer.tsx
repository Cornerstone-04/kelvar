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
        <div className="grid gap-12  lg:grid-cols-[minmax(18rem,1.25fr)_repeat(3,minmax(10rem,0.8fr))]">
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
              and stratospheric security.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={navLinks} />
          <FooterColumn title="Platforms" links={platformLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-7 font-mono text-[0.68rem] text-white/36 md:grid-cols-3 md:items-center">
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

// function FooterSignalBand() {
//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none grid h-38 grid-cols-4 items-end gap-5 overflow-hidden px-4 pb-6 pt-2 sm:grid-cols-5 md:h-44 md:grid-cols-9 md:px-8"
//     >
//       <SignalIcon kind="quad" color="#5f8cff" />
//       <SignalIcon kind="radar" color="#7be0c3" />
//       <SignalIcon kind="wing" color="#f5f5f9" />
//       <SignalIcon kind="sensor" color="#ff6f1f" />
//       <SignalIcon kind="stratos" color="#8f6ce6" />
//       <SignalIcon kind="crosshair" color="#62cf62" />
//       <SignalIcon kind="ground" color="#d72e35" />
//       <SignalIcon kind="mesh" color="#f85b94" />
//       <SignalIcon kind="quad" color="#3d87f0" />
//     </div>
//   );
// }

// function SignalIcon({
//   kind,
//   color,
// }: {
//   kind:
//     | "quad"
//     | "radar"
//     | "wing"
//     | "sensor"
//     | "stratos"
//     | "crosshair"
//     | "ground"
//     | "mesh";
//   color: string;
// }) {
//   const stroke = color;

//   return (
//     <svg
//       viewBox="0 0 160 160"
//       className="h-full min-h-24 w-full opacity-90"
//       role="img"
//     >
//       {kind === "quad" && (
//         <>
//           <circle
//             cx="32"
//             cy="32"
//             r="22"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="12"
//           />
//           <circle
//             cx="128"
//             cy="32"
//             r="22"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="12"
//           />
//           <circle
//             cx="32"
//             cy="128"
//             r="22"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="12"
//           />
//           <circle
//             cx="128"
//             cy="128"
//             r="22"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="12"
//           />
//           <path
//             d="M48 48L80 80L112 48M48 112L80 80L112 112"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="13"
//             strokeLinecap="round"
//           />
//           <circle cx="80" cy="80" r="14" fill={stroke} />
//         </>
//       )}

//       {kind === "radar" && (
//         <>
//           <path
//             d="M25 120A65 65 0 0 1 135 120"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="11"
//             strokeLinecap="round"
//           />
//           <path
//             d="M47 120A41 41 0 0 1 113 120"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="10"
//             strokeLinecap="round"
//             opacity="0.72"
//           />
//           <path
//             d="M69 120A18 18 0 0 1 91 120"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="9"
//             strokeLinecap="round"
//             opacity="0.48"
//           />
//           <path
//             d="M80 120L126 54"
//             stroke={stroke}
//             strokeWidth="9"
//             strokeLinecap="round"
//           />
//           <circle cx="80" cy="120" r="10" fill={stroke} />
//         </>
//       )}

//       {kind === "wing" && (
//         <>
//           <path
//             d="M8 92L80 48L152 92L96 104L80 134L64 104L8 92Z"
//             fill={stroke}
//           />
//           <path
//             d="M80 48V132"
//             stroke="#07072a"
//             strokeWidth="8"
//             opacity="0.65"
//           />
//           <path d="M28 88H132" stroke="#07072a" strokeWidth="7" opacity="0.5" />
//         </>
//       )}

//       {kind === "sensor" && (
//         <>
//           <rect x="48" y="28" width="64" height="104" rx="30" fill={stroke} />
//           <circle cx="80" cy="61" r="16" fill="#07072a" />
//           <circle cx="80" cy="61" r="8" fill={stroke} opacity="0.85" />
//           <path
//             d="M62 99H98"
//             stroke="#07072a"
//             strokeWidth="8"
//             strokeLinecap="round"
//             opacity="0.55"
//           />
//         </>
//       )}

//       {kind === "stratos" && (
//         <>
//           <path
//             d="M80 8C116 8 130 42 106 70L80 100L54 70C30 42 44 8 80 8Z"
//             fill={stroke}
//           />
//           <path
//             d="M80 98V130"
//             stroke={stroke}
//             strokeWidth="7"
//             strokeLinecap="round"
//           />
//           <path
//             d="M48 138H112"
//             stroke={stroke}
//             strokeWidth="9"
//             strokeLinecap="round"
//           />
//           <rect x="68" y="118" width="24" height="32" rx="10" fill={stroke} />
//         </>
//       )}

//       {kind === "crosshair" && (
//         <>
//           <circle
//             cx="80"
//             cy="80"
//             r="52"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="10"
//           />
//           <circle cx="80" cy="80" r="16" fill={stroke} />
//           <path
//             d="M80 14V44M80 116V146M14 80H44M116 80H146"
//             stroke={stroke}
//             strokeWidth="10"
//             strokeLinecap="round"
//           />
//         </>
//       )}

//       {kind === "ground" && (
//         <>
//           <rect x="34" y="76" width="92" height="48" rx="20" fill={stroke} />
//           <circle cx="57" cy="128" r="14" fill={stroke} />
//           <circle cx="103" cy="128" r="14" fill={stroke} />
//           <path
//             d="M58 76L80 36L102 76"
//             fill="none"
//             stroke={stroke}
//             strokeWidth="14"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <circle cx="80" cy="92" r="12" fill="#07072a" opacity="0.65" />
//         </>
//       )}

//       {kind === "mesh" && (
//         <>
//           <circle cx="42" cy="50" r="13" fill={stroke} />
//           <circle cx="118" cy="42" r="13" fill={stroke} />
//           <circle cx="80" cy="82" r="15" fill={stroke} />
//           <circle cx="36" cy="122" r="13" fill={stroke} />
//           <circle cx="126" cy="118" r="13" fill={stroke} />
//           <path
//             d="M42 50L80 82L118 42M80 82L36 122M80 82L126 118"
//             stroke={stroke}
//             strokeWidth="8"
//             strokeLinecap="round"
//             opacity="0.75"
//           />
//         </>
//       )}
//     </svg>
//   );
// }
