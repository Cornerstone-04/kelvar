import Image from "next/image";
import { Rule } from "../ui/rule";
import { PlatformDomain } from "@/lib/platform-types";
import { motion } from "motion/react";
import { CapabilitySplit } from "./capability-split";

export function ImmersiveDomains({
  domains,
  platformName,
}: {
  domains: PlatformDomain[];
  platformName: string;
}) {
  return (
    <>
      {domains.map((domain, index) => (
        <div key={domain.id}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full overflow-hidden md:aspect-21/9"
          >
            <Image
              src={domain.image}
              alt={`${platformName} — ${domain.name}`}
              fill
              sizes="100vw"
              className="object-cover brightness-50 saturate-[0.5]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_55%)]" />

            <div className="absolute bottom-0 left-6 right-6 flex items-end justify-between pb-6 md:left-10 md:right-10 md:pb-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-heading text-[clamp(4rem,10vw,8rem)] font-black normal-case leading-none tracking-[-0.02em] text-primary"
              >
                {domain.name}
              </motion.h3>

              <span className="mb-2 shrink-0 font-mono text-xxs font-medium tracking-[0.2em] text-muted md:mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          <CapabilitySplit domain={domain} />
          <Rule />
        </div>
      ))}
    </>
  );
}
