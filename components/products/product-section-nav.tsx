import Link from "next/link";

type ProductSectionLink = {
  href: `#${string}`;
  label: string;
};

export function ProductSectionNav({
  productName,
  links,
}: {
  productName: string;
  links: ProductSectionLink[];
}) {
  return (
    <nav
      aria-label={`${productName} page sections`}
      style={{ top: "var(--site-navbar-offset, 4.0625rem)" }}
      className="sticky z-20 border-y border-white/10 bg-bg/94 px-6 backdrop-blur-md md:px-10"
    >
      <div className="mx-auto flex max-w-400 overflow-x-auto">
        <p className="hidden min-h-14 shrink-0 items-center border-r border-white/10 pr-8 font-mono text-xxs uppercase tracking-[0.18em] text-primary lg:flex">
          {productName}
        </p>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex min-h-14 min-w-max items-center border-r border-white/10 px-5 font-mono text-xxs uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:bg-white/5 hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
