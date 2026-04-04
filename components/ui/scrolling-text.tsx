import { motion } from "motion/react";

export function ScrollingText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];

  return (
    <p className={className}>
      {sentences.map((sentence, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.12 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          style={{ display: "inline" }}
        >
          {sentence.trim()}{" "}
        </motion.span>
      ))}
    </p>
  );
}
