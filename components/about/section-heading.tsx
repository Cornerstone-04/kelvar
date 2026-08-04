import { SectionLabel } from "@/components/ui/section-label";

export function AboutSectionHeading({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/20">
        {number}
      </span>
      <SectionLabel>{label}</SectionLabel>
    </div>
  );
}
