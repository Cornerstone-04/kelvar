import { careers } from "@/lib/data";
import { InternalPageHero } from "../ui/internal-page-hero";

export function CareersHeader() {
  return (
    <InternalPageHero
      label="Join Kelvar Industries"
      title="Build What"
      outline="Protects The World"
      description={careers.intro}
    />
  );
}
