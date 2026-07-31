import { KainNetwork } from "@/components/focus/kelvarx/kain-network";
import { KelvarAiCommand } from "@/components/focus/kelvarx/kelvar-ai-command";
import { KelvarxApplications } from "@/components/focus/kelvarx/kelvarx-applications";
import { KelvarxHero } from "@/components/focus/kelvarx/kelvarx-hero";
import { StratosSeries } from "@/components/focus/kelvarx/stratos-series";
import { kelvarx } from "@/content/kelvarx";

export default function KelvarxPage() {
  return (
    <main className="min-h-screen bg-bg">
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
    </main>
  );
}
