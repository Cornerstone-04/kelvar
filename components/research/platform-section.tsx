import { Rule } from "@/components/ui/rule";
import type { ResearchPlatform } from "@/types/research-types";
import { PlatformDomains } from "./platform/platform-domains";
import { PlatformHero } from "./platform/platform-hero";
import { PlatformIntro } from "./platform/platform-intro";
import { TechnologyGrid } from "./platform/technology-grid";
import { UseCaseGrid } from "./platform/use-case-grid";
import { StratosStorySection } from "./stratos/stratos-story-section";

export function PlatformSection({ platform }: { platform: ResearchPlatform }) {
  if (platform.kind === "stratos")
    return <StratosStorySection platform={platform} story={platform.story} />;

  return (
    <>
      <section id={platform.id} className="scroll-mt-24 pb-12 md:pb-24">
        <PlatformHero platform={platform} />
        <PlatformIntro platform={platform} />
        <PlatformDomains platform={platform} />
        {platform.domainsLayout === "cards" && <Rule />}
        <TechnologyGrid technologies={platform.coreTech} />
        <Rule />
        <UseCaseGrid useCases={platform.useCases} />
      </section>
      <Rule />
    </>
  );
}
