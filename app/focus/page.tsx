import { focus } from "@/content/home";
import { focusDetails } from "@/content/focus-details";
import { Rule } from "@/components/ui/rule";
import { CtaSection } from "@/components/ui/cta-section";
import { FocusHero } from "@/components/focus/focus-hero";
import { DomainSection } from "@/components/focus/domain-section";

export default function FocusPage() {
  return (
    <div className="min-h-screen bg-bg">
      <FocusHero />

      {focus.map((domain, index) => {
        const detail = focusDetails[domain.word];

        if (!detail) return null;

        return (
          <div key={domain.id}>
            <DomainSection domain={domain} detail={detail} />
            {index < focus.length - 1 && <Rule />}
          </div>
        );
      })}

      <CtaSection
        title="Protect Entry"
        breakTitle="Environment"
        description="Whether the threat is on land, sea, or in the air — Kelvar has a system built for it."
        linkHref="/contact"
        linkText="Get in Touch"
      />
    </div>
  );
}
