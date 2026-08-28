import Link from "next/link";
import { focus } from "@/content/home";

export function FocusDomainNav() {
  return (
    <nav
      aria-label="Focus domains"
      style={{ top: "var(--site-navbar-offset, 4.0625rem)" }}
      className="sticky z-20 border-b border-white/10 bg-bg/92 px-6 backdrop-blur-md md:px-10"
    >
      <div className="flex overflow-x-auto">
        {focus.map((domain) => (
          <Link
            key={domain.id}
            href={`#focus-${domain.word.toLowerCase()}`}
            className="group flex min-h-14 min-w-fit sm:min-w-32 flex-1 items-center justify-between gap-5 border-x border-white/8 px-4 font-mono text-xxs uppercase tracking-[0.18em] text-muted transition-[color,background-color] duration-200 ease-out hover:bg-white/5 hover:text-primary"
          >
            <span>{domain.word}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function FocusNetworkStatement() {
  return (
    <section className="grid gap-8 border-b border-white/10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
      <p className="font-mono text-xxs uppercase tracking-[0.24em] text-dim">
        Multi-domain awareness
      </p>
      <h2 className="type-editorial max-w-5xl text-primary">
        Different environments.
        <br />
        One intelligence layer.
      </h2>
    </section>
  );
}
