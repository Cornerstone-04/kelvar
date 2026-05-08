import { Platform } from "@/lib/platform-types";
import { Rule } from "../ui/rule";
import { PlatformHero } from "./platform-hero";
import { PlatformIntro } from "./platform-intro";
import { PlatformDomains } from "./platform-domains";
import { TechnologyGrid } from "./technology-grid";
import { UseCaseGrid } from "./use-case-grid";

export function PlatformSection({ platform }: { platform: Platform }) {
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
