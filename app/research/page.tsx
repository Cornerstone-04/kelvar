import { Rule } from "@/components/ui/rule";
import { PageHero } from "@/components/research/page-hero";
import { IntroSection } from "@/components/research/intro-section";
import { ResearchAreas } from "@/components/research/research-areas";
import { ResearchCTA } from "@/components/research/research-cta";
import { AarSection } from "@/components/research/aar-section";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-bg">
      <PageHero />
      <IntroSection />
      <Rule />
      <ResearchAreas />
      <AarSection />
      <ResearchCTA />
    </div>
  );
}
