import type { KelvarxApplication } from "@/types/kelvarx-types";
import { SectionLabel } from "@/components/ui/section-label";
import { KelvarButton } from "@/components/ui/kelvar-button";

export function KelvarxApplications({
  applications,
  slogan,
}: {
  applications: KelvarxApplication[];
  slogan: string;
}) {
  return (
    <>
      <section
        id="kelvarx-applications"
        className="scroll-mt-20 px-6 py-14 md:px-10 md:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>Applications</SectionLabel>
            <h3 className="mt-8 font-heading text-[clamp(3rem,6vw,6rem)] font-black leading-[0.88]">
              From atmospheric data to operational outcomes.
            </h3>
          </div>
          <div className="grid gap-px bg-white/10">
            {applications.map((application, index) => (
              <article key={application.name} className="bg-bg p-6">
                <div className="flex justify-between gap-5">
                  <h4 className="font-heading text-2xl font-bold">
                    {application.name}
                  </h4>
                  <span className="font-mono text-xxs text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs-plus leading-[1.75] text-muted">
                  {application.outcome}
                </p>
                <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.13em] text-white/35">
                  {application.platforms.join(" · ")} /{" "}
                  {application.intelligenceLayer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 px-6 py-12 text-center md:px-10 md:py-24">
        <p className="font-mono text-xxs uppercase tracking-[0.26em] text-muted">
          KELVARX
        </p>
        <h3 className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(2rem,8vw,5rem)] font-black leading-none">
          {slogan}
        </h3>
        <div className="mt-10">
          <KelvarButton href="/contact">Discuss a Partnership</KelvarButton>
        </div>
      </section>
    </>
  );
}
