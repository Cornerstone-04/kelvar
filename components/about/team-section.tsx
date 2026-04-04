import { team } from "@/lib/data";
import { motion } from "motion/react";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";

export const TeamSection = () => {
  return (
    <div className="px-6 py-20 md:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-white/20 uppercase">
            04
          </span>
          <SectionLabel>Team</SectionLabel>
        </div>

        <div>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 border-t border-border-col py-10"
            >
              {/* Avatar */}
              <div className="flex h-30 w-30 items-center justify-center border border-border-col bg-surface shrink-0">
                <span className="font-heading text-3xl font-black text-white/15">
                  {member.name[0]}
                </span>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-heading text-[1.4rem] font-bold text-white mb-1">
                  {member.name}
                </h3>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30 mb-5">
                  {member.role}
                </div>
                <ScrollingText
                  text={member.bio}
                  className="font-mono text-xs-plus leading-[1.85] text-white max-w-[75ch]"
                />
                
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border-col" />
        </div>
      </div>
    </div>
  );
};
