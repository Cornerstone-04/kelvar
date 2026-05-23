import { research } from "@/lib/data";
import { SectionFrame } from "../ui/section-frame";
import { motion } from "motion/react";

export function ResearchAreas() {
  return (
    <SectionFrame label="Areas of Research">
      <div className="grid gap-10 lg:grid-cols-[minmax(20rem,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className="font-heading text-[clamp(2.6rem,6vw,6rem)] font-black leading-[0.9] text-primary">
            The intelligence layer behind every Kelvar platform.
          </h2>
          <p className="mt-6 max-w-xl font-mono text-xs-plus leading-[1.9] text-muted">
            {research.desc}
          </p>
        </div>

        <div className="grid gap-px bg-white/10">
          {research.areas.map((area, index) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid gap-5 bg-bg/90 p-6 md:grid-cols-[4rem_1fr] md:p-8"
            >
              <div className="font-mono text-xxs uppercase tracking-[0.2em] text-dim">
                {area.id}
              </div>

              <div>
                <h3 className="font-heading text-[1.9rem] font-bold leading-none text-primary">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-3xl font-mono text-xs-plus leading-[1.75] text-muted">
                  {area.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
