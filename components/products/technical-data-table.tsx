type TechnicalDatum = {
  label: string;
  value: string;
};

export function TechnicalDataTable({
  title,
  data,
}: {
  title: string;
  data: TechnicalDatum[];
}) {
  return (
    <section aria-labelledby={`${slugify(title)}-title`}>
      <h3
        id={`${slugify(title)}-title`}
        className="mb-6 font-mono text-xxs uppercase tracking-[0.22em] text-dim"
      >
        {title}
      </h3>
      <dl className="border-t border-white/15">
        {data.map((item) => (
          <div
            key={item.label}
            className="grid gap-3 border-b border-white/15 py-5 sm:grid-cols-[minmax(8rem,0.46fr)_1fr] sm:items-baseline"
          >
            <dt className="font-mono text-xxs uppercase tracking-[0.16em] text-dim">
              {item.label}
            </dt>
            <dd className="font-mono text-xs-plus leading-relaxed text-primary sm:text-right">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
