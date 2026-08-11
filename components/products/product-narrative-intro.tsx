import { SectionLabel } from "@/components/ui/section-label";

export function ProductNarrativeIntro({
  eyebrow,
  title,
  description,
  statement,
}: {
  eyebrow: string;
  title: string;
  description: string;
  statement?: string;
}) {
  return (
    <section className="border-b border-white/10 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-400 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionLabel>{eyebrow}</SectionLabel>
          {statement && (
            <p className="mt-8 max-w-sm font-mono text-xxs uppercase leading-[1.8] tracking-[0.18em] text-dim">
              {statement}
            </p>
          )}
        </div>
        <div>
          <h2 className="type-editorial max-w-4xl text-primary">{title}</h2>
          <p className="mt-8 max-w-3xl font-sans text-base leading-[1.8] text-muted md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
