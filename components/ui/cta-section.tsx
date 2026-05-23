import { motion } from "motion/react";
import { KelvarButton } from "./kelvar-button";

interface CtaSectionProps {
  title: string;
  breakTitle?: string;
  description: string;
  linkHref: string;
  linkText: string;
}

export const CtaSection = ({
  title,
  breakTitle,
  description,
  linkHref,
  linkText,
}: CtaSectionProps) => {
  return (
    <section className="border-t border-[#ffffff12] px-6 py-12 text-center md:px-10 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="mb-6 font-heading text-[clamp(2.5rem,8vw,6rem)] font-black leading-none text-primary">
          {title}
          <br />
          {breakTitle && (
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(245,245,249,0.2)" }}
            >
              {breakTitle}
            </span>
          )}
        </h2>

        <p className="mx-auto mb-10 max-w-xl font-mono text-xs-plus leading-[1.8] text-muted">
          {description}
        </p>

        <KelvarButton href={linkHref}>{linkText}</KelvarButton>
      </motion.div>
    </section>
  );
};
