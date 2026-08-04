import { KelvarxFeature } from "./kelvarx-feature";
import { NarrativeSection } from "./narrative-section";
import { TeamSection } from "./team-section";
import { ValuesSection } from "./values-section";

export function AboutSections() {
  return (
    <>
      <NarrativeSection />
      <KelvarxFeature />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
