import Image from "next/image";
import { motion } from "motion/react";
import type { PlatformStory } from "@/types/research-types";
import { SectionLabel } from "@/components/ui/section-label";
import { StoryFrame } from "./story-frame";

export function StratosSystem({ story }: { story: PlatformStory }) {
  return (
    <>
      <StoryFrame className="border-b border-white/10">
        <SectionLabel>{story.architecture.label}</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-end">
          <h3 className="font-heading text-[clamp(2.4rem,5vw,5.5rem)] font-black leading-[0.9]">
            {story.architecture.title}
          </h3>
          <p className="font-mono text-xs-plus leading-[1.9] text-muted">
            {story.architecture.body}
          </p>
        </div>
        <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-168 overflow-hidden border border-white/10 bg-[#FEFDFB]">
            <Image
              src={story.architecture.diagram.src}
              alt={story.architecture.diagram.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 45vw"
              className="object-contain p-6"
            />
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-1">
            {story.architecture.parts.map((part, index) => (
              <motion.article
                key={part.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-bg/90 p-6"
              >
                <div className="flex justify-between gap-5">
                  <h4 className="font-heading text-[1.7rem] font-bold">
                    {part.name}
                  </h4>
                  <span className="font-mono text-xxs text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs-plus text-muted">
                  {part.role}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </StoryFrame>

      <StoryFrame className="border-b border-white/10">
        <SectionLabel>{story.platformTypes.label}</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.08fr]">
          <div>
            <h3 className="font-heading text-[clamp(2.3rem,5vw,5.25rem)] font-black leading-[0.9]">
              {story.platformTypes.title}
            </h3>
            <p className="mt-5 font-mono text-xs-plus leading-[1.9] text-muted">
              {story.platformTypes.intro}
            </p>
          </div>
          <div className="grid gap-5">
            {story.platformTypes.types.map((type, index) => (
              <motion.article
                key={type.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-white/10 bg-white/2.5 p-6"
              >
                <h4 className="font-heading text-[2rem] font-bold">
                  {type.name}
                </h4>
                <p className="mt-4 font-mono text-xs-plus leading-[1.85] text-muted">
                  {type.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </StoryFrame>
    </>
  );
}
