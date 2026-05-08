import { PlatformDomain } from "@/lib/platform-types";
import { NumberedList } from "./numbered-list";

export function CapabilitySplit({ domain }: { domain: PlatformDomain }) {
  return (
    <div className="px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <p className="font-mono text-xxs font-medium uppercase leading-relaxed tracking-[0.25em] text-muted">
          {domain.headline}
        </p>

        <NumberedList items={domain.capabilities} animated />
      </div>
    </div>
  );
}
