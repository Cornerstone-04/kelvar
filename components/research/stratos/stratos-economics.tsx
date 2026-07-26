import { motion } from "motion/react";
import type { PlatformStory } from "@/types/research-types";
import { SectionLabel } from "@/components/ui/section-label";
import { StoryFrame } from "./story-frame";
import { riseIn, viewportOnce } from "@/lib/motion-variants";

export function StratosEconomics({ story }: { story: PlatformStory }) {
  return (
    <>
      <StoryFrame className="border-b border-white/10">
        <SectionLabel>{story.costAnalysis.label}</SectionLabel>
        <div className="mb-12 mt-8 grid gap-8 lg:grid-cols-2 lg:items-end">
          <h3 className="font-heading text-[clamp(2.4rem,5vw,5.25rem)] font-black leading-[0.9]">
            {story.costAnalysis.title}
          </h3>
          <p className="font-mono text-xs-plus leading-[1.9] text-muted">
            {story.costAnalysis.intro}
          </p>
        </div>
        <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
          {story.costAnalysis.options.map((option, index) => (
            <motion.article
              key={option.name}
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: index * 0.08 }}
              className="bg-bg/90 p-6 md:p-8"
            >
              <h4 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold">
                {option.name}
              </h4>
              <p className="mt-5 w-fit border border-white/15 px-3 py-2 font-heading text-[clamp(1.5rem,3vw,3.5rem)] font-black">
                {option.position}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <CostField label="Upfront" value={option.upfront} />
                <CostField label="Recurring" value={option.recurring} />
                <CostField label="Timeline" value={option.timeline} />
                <CostField label="Constraint" value={option.constraint} />
              </div>
              <p className="mt-5 border-t border-white/10 pt-5 font-mono text-xs-plus leading-[1.75]">
                {option.summary}
              </p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 grid overflow-hidden border border-white/10 bg-white/5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-dim">
              Kelvar Stratos advantage
            </p>
            <h4 className="mt-5 font-heading text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9]">
              {story.costAnalysis.conclusion.title}
            </h4>
            <p className="mt-6 font-mono text-xs-plus leading-[1.85] text-muted">
              {story.costAnalysis.conclusion.body}
            </p>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {story.costAnalysis.proofPoints.map((point) => (
              <div key={point.label} className="bg-bg/75 p-6">
                <p className="font-heading text-[clamp(1.65rem,3vw,2.6rem)] font-black">
                  {point.value}
                </p>
                <p className="mt-3 font-mono text-xxs uppercase tracking-[0.18em] text-muted">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </StoryFrame>

      <StoryFrame>
        <SectionLabel>{story.advantages.label}</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.08fr]">
          <h3 className="font-heading text-[clamp(2.4rem,5vw,5.25rem)] font-black leading-[0.9]">
            {story.advantages.title}
          </h3>
          <div className="grid gap-4">
            {story.advantages.items.map((item, index) => (
              <article
                key={item.title}
                className="border border-white/10 bg-white/3 p-6 md:p-8"
              >
                <p className="font-mono text-xxs text-dim">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-3 font-heading text-[2rem] font-bold">
                  {item.title}
                </h4>
                <p className="mt-4 font-mono text-xs-plus leading-[1.85] text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </StoryFrame>
    </>
  );
}

function CostField({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-dim">
        {label}
      </p>
      <p className="mt-2 font-mono text-xs-plus leading-[1.7] text-muted">
        {value}
      </p>
    </div>
  );
}
