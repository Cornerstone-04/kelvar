import { KainNetwork } from "@/features/kelvarx/components/kain-network";
import { KelvarAiCommand } from "@/features/kelvarx/components/kelvar-ai-command";
import { KelvarxApplications } from "@/features/kelvarx/components/kelvarx-applications";
import { KelvarxHero } from "@/features/kelvarx/components/kelvarx-hero";
import { StratosSeries } from "@/features/kelvarx/components/stratos-series";
import { kelvarx } from "@/content/kelvarx";

export default function KelvarxPage() {
  return (
    <div className="min-h-screen bg-bg">
      <section id="kelvarx" className="scroll-mt-20">
        <KelvarxHero programme={kelvarx} />
        <StratosSeries systems={kelvarx.systems} />
        <KainNetwork kain={kelvarx.kain} systems={kelvarx.systems} />
        <KelvarAiCommand command={kelvarx.aiCommand} />
        <KelvarxApplications
          applications={kelvarx.applications}
          slogan={kelvarx.slogan}
        />
      </section>
    </div>
  );
}
