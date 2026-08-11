import { SectionLabel } from "@/components/ui/section-label";

export function AboutSectionHeading({ label }: { label: string }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
    </div>
  );
}
