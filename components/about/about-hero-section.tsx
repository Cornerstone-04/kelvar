import { site } from "@/lib/data";
import { InternalPageHero } from "../ui/internal-page-hero";

export const AboutHeroSection = () => {
  return (
    <InternalPageHero
      label="About Kelvar Industries"
      title="Inspired by"
      outline="Vigilance in Motion"
      description={site.tagline}
    />
  );
};
