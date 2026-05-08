import { motion } from "motion/react";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";

const introParagraphs = [
  "Our RD&D division drives the continuous evolution of autonomous surveillance through rigorous research, precision design, and real-world testing.",
  "We operate at the intersection of hardware, software, and intelligence, building systems that are not only functional, but adaptive, resilient, and future-ready. From early-stage concept modeling to full-scale deployment, every Kelvar platform is developed with a singular objective: operational superiority in dynamic environments.",
  "Our process is iterative and uncompromising. We test in complexity, refine through data, and deploy with confidence, ensuring that every system performs when it matters most.",
];

export function IntroSection() {
  return (
    <section className="border-t border-[#ffffff12] px-6 py-12 md:px-10 md:py-24">
      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
        <div>
          <div className="mb-8">
            <SectionLabel>RD&amp;D</SectionLabel>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-[clamp(1.4rem,3vw,2rem)] font-bold leading-tight text-primary"
          >
            At Kelvar Industries, innovation is not outsourced, it is engineered
            at the core.
          </motion.p>
        </div>

        <div className="flex flex-col gap-5">
          {introParagraphs.map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="font-mono text-xs-plus leading-[1.85] text-muted"
            >
              <ScrollingText text={text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
