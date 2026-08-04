import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { platformSummaries } from "@/content/products/summaries";
import { navLinks, site } from "@/content/site";

const companyLinks = navLinks.filter(
  ({ label }) => !["Home", "Platforms", "Contact"].includes(label),
);

const platformLinks = platformSummaries.map((platform) => ({
  href: platform.href ?? `/#${platform.slug}`,
  label: platform.name,
}));

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-bg text-primary"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/3 blur-3xl" />

      <div className="relative mx-auto max-w-448 px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-24">
        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] xl:gap-20">
          <FooterBrand />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Platforms" links={platformLinks} />
          <FooterContact />
        </div>

        <div className="mt-20 border-t border-white/10 pt-7 md:mt-28">
          <div className="grid gap-4 font-mono text-[0.68rem] leading-relaxed text-white/38 md:grid-cols-2 md:items-center">
            <p>
              © {new Date().getFullYear()} Kelvar Industries. All rights
              reserved.
            </p>
            <p className="md:text-right">{site.tagline}</p>
          </div>

          <p className="mt-7 border-t border-white/8 pt-7 font-mono text-[0.62rem] leading-[1.8] text-white/24">
            Kelvar Industries develops autonomous surveillance and atmospheric
            intelligence systems across air, land, sea, and space. Platform
            capabilities described on this website may include systems in active
            development.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div>
      <Link href="/" className="inline-flex items-center gap-4">
        <Image
          src="/assets/images/brand/kelvar-bird.png"
          alt=""
          width={58}
          height={58}
          className="opacity-90"
        />
        <span className="font-heading text-2xl font-bold uppercase leading-[0.88] tracking-[0.09em]">
          Kelvar
          <br />
          Industries
        </span>
      </Link>

      <p className="mt-7 max-w-[42ch] font-mono text-xs-plus leading-[1.9] text-white/48">
        Engineering intelligent autonomous systems for persistent awareness,
        resilient protection, and atmospheric intelligence.
      </p>

      <Link
        href="/contact"
        className="kelvar-button-frame group mt-8 inline-flex min-h-12 items-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-white/8 hover:text-primary"
      >
        Partner with us
        <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
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
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-7 space-y-4">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 font-mono text-xs-plus text-white/48 transition-colors hover:text-primary"
            >
              <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div>
      <FooterHeading>Get in touch</FooterHeading>
      <div className="mt-7 space-y-5">
        <ContactItem icon={<BsEnvelope />}>
          <a
            href={`mailto:${site.email}`}
            className="break-all transition-colors hover:text-primary"
          >
            {site.email}
          </a>
        </ContactItem>
        <ContactItem icon={<BsGeoAlt />}>
          <span>{site.location}</span>
        </ContactItem>
      </div>

      <div className="mt-9 border-t border-white/10 pt-5">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/28">
          Programme
        </p>
        <Link
          href="/kelvarx"
          className="group mt-3 inline-flex items-center gap-3 font-heading text-2xl font-bold uppercase text-white/65 transition-colors hover:text-primary"
        >
          KELVARX
          <BsArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 font-mono text-xs-plus leading-[1.75] text-white/48">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface text-primary">
        {icon}
      </span>
      <div className="pt-1.5">{children}</div>
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xxs font-medium uppercase tracking-[0.26em] text-white/38">
      {children}
    </h2>
  );
}
