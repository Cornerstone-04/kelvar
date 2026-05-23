import { motion } from "motion/react";

type Metric = {
  value: string;
  label: string;
};

export function MetricGrid({
  metrics,
  columns = "md:grid-cols-3",
}: {
  metrics: Metric[];
  columns?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-px bg-white/10 ${columns}`}>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="bg-bg/90 p-5 md:p-6"
        >
          <p className="font-heading text-[clamp(1.5rem,3vw,2.6rem)] font-black leading-none text-primary">
            {metric.value}
          </p>
          <p className="mt-3 font-mono text-xxs uppercase tracking-[0.18em] text-muted">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
