import { motion } from "motion/react";

export function NumberedList({
  items,
  animated = false,
}: {
  items: string[];
  animated?: boolean;
}) {
  return (
    <div className="border-t border-[#ffffff12]">
      {items.map((item, index) => {
        const content = (
          <>
            <span className="shrink-0 font-mono text-xxs tracking-[0.15em] text-dim">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-mono text-xs-plus leading-relaxed text-muted">
              {item}
            </span>
          </>
        );

        if (animated) {
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-6 border-b border-[#ffffff12] py-4"
            >
              {content}
            </motion.div>
          );
        }

        return (
          <div
            key={item}
            className="flex items-center gap-4 border-b border-[#ffffff12] py-4"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
