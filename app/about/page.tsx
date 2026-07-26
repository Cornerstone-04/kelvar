import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutSections } from "@/components/about/about-sections";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <AboutHeroSection />
      <AboutSections />
    </div>
  );
}
