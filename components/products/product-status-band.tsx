type StatusItem = {
  label: string;
  value: string;
};

export function ProductStatusBand({
  status,
  items,
}: {
  status: "In development" | "Flagship platform" | "Concept programme";
  items: StatusItem[];
}) {
  return (
    <section aria-label="Product status" className="border-b border-white/10">
      <dl className="grid bg-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-px">
        <div className="flex min-h-28 flex-col justify-between bg-surface p-5 md:p-6">
          <dt className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
            Development status
          </dt>
          <dd className="mt-6 flex items-center gap-3 font-heading text-xl font-bold uppercase text-primary">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-primary"
            />
            {status}
          </dd>
        </div>
        {items.map((item) => (
          <div
            key={item.label}
            className="flex min-h-28 flex-col justify-between bg-bg p-5 md:p-6"
          >
            <dt className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
              {item.label}
            </dt>
            <dd className="mt-6 font-mono text-xs-plus leading-relaxed text-primary">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
