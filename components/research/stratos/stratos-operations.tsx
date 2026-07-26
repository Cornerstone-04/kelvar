import Image from "next/image";
import { motion } from "motion/react";
import type { PlatformStory } from "@/types/research-types";
import { SectionLabel } from "@/components/ui/section-label";
import { StoryFrame } from "./story-frame";

export function StratosOperations({ story }: { story: PlatformStory }) {
  return (
    <>
      <StoryFrame className="border-b border-white/10">
        <SectionLabel>{story.operations.label}</SectionLabel>
        <div className="my-8 grid gap-8 lg:grid-cols-2">
          <h3 className="font-heading text-[clamp(3.2rem,5vw,5.5rem)] font-black leading-[0.86]">
            {story.operations.title}
          </h3>
          <p className="font-mono text-xs-plus leading-[1.95] text-muted">
            {story.operations.panels[0]?.body}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {story.operations.panels.map((panel, index) => (
            <motion.article
              key={panel.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative min-h-120 overflow-hidden"
            >
              {panel.media && (
                <Image
                  src={panel.media.src}
                  alt={panel.media.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,42,0.95),transparent_70%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-mono text-xxs uppercase tracking-[0.25em] text-muted">
                  0{index + 1} / {panel.label}
                </p>
                <h4 className="mt-4 font-heading text-[clamp(2rem,4vw,3.75rem)] font-black leading-[0.9]">
                  {panel.title}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>
      </StoryFrame>

      <StoryFrame className="border-b border-white/10">
        <SectionLabel>{story.applications.label}</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.08fr]">
          <h3 className="font-heading text-[clamp(2.4rem,5vw,5.25rem)] font-black leading-[0.9]">
            {story.applications.title}
          </h3>
          <div className="grid gap-px bg-white/10">
            {story.applications.items.map((item, index) => (
              <article key={item.name} className="bg-bg/90 p-6 md:p-8">
                <div className="flex justify-between gap-4">
                  <h4 className="font-heading text-[2rem] font-bold">
                    {item.name}
                  </h4>
                  <span className="font-mono text-xxs text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
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
