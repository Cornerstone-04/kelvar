import { site } from "@/lib/data";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";

export const MissionSection = () => {
  return (
    <div className="border-b border-border-col px-6 py-20 md:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-white/20 uppercase">
            01
          </span>
          <SectionLabel>Mission</SectionLabel>
        </div>
        <div>
          <ScrollingText
            text={site.mission}
            className="font-mono text-xs-plus leading-[1.95] max-w-[75ch]"
          />
        </div>
      </div>
    </div>
  );
};
