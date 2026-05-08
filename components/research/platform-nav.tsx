import { Platform } from "@/lib/platform-types";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";

export function PlatformNav({ platforms }: { platforms: Platform[] }) {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <div className="flex gap-4 md:gap-6">
        {platforms.map((platform, index) => (
          <motion.a
            key={platform.id}
            href={`#${platform.id}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex-1 rounded-sm border border-[#ffffff12] p-3 transition-all duration-300 ease-linear hover:border-primary hover:bg-surface md:px-6 md:py-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-base font-bold text-primary">
                {platform.name}
              </span>
              <BsArrowRight className="h-4 w-4 text-muted transition-colors group-hover:text-primary" />
            </div>

            <p className="mt-2 font-mono text-xxs text-muted">
              {platform.navDescription}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
