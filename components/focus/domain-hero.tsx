import Image from "next/image";

type FocusDomain = {
  id: string;
  word: string;
  image: string;
};

type DomainHeroProps = {
  domain: FocusDomain;
};

export function DomainHero({ domain }: DomainHeroProps) {
  return (
    <div className="relative aspect-video overflow-hidden md:aspect-21/9">
      <Image
        src={domain.image}
        alt={domain.word}
        fill
        sizes="100vw"
        className="object-cover brightness-[0.45] saturate-[0.5]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_60%)]" />

      <div className="absolute bottom-8 left-6 flex items-end gap-6 md:left-10">
        <span className="font-mono text-xxs font-bold tracking-[0.2em] text-muted">
          {domain.id}
        </span>

        <h2 className="font-heading text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-[-0.02em] text-primary">
          {domain.word}
        </h2>
      </div>
    </div>
  );
}
