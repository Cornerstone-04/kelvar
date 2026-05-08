import { motion } from "motion/react";
import { SectionLabel } from "../ui/section-label";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const stats = [
  { value: "3", label: "Active Platforms" },
  { value: "3", label: "Global Offices" },
  { value: "Air · Land · Sea", label: "Operational Domains" },
  { value: "Always On", label: "System Availability" },
];

export function AarSection() {
  return (
    <section className="border-t border-[#ffffff12] bg-surface px-6 py-12 md:px-10 md:py-24">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <div className="mb-8">
            <SectionLabel>Powered by AAR</SectionLabel>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 font-heading text-[clamp(2rem,5vw,4rem)] font-black leading-none text-primary"
          >
            Intelligence
            <br />
            Built In.
          </motion.h2>

          <p className="mb-8 font-mono text-xs-plus leading-[1.85] text-muted">
            Every system that emerges from our RD&amp;D division is powered by
            our Autonomous A.I. Robotics layer, ensuring that research
            translates directly into deployable, intelligent platforms.
          </p>

          <Link
            href="/#platforms"
            className="inline-flex items-center gap-3 border border-[#ffffff26] px-[1.6rem] py-[0.8rem] font-mono text-xxs uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:border-[#ffffff80]"
          >
            View Platforms <BsArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px bg-[#ffffff12]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-surface px-6 py-8"
            >
              <div className="mb-2 font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-none text-primary">
                {stat.value}
              </div>

              <div className="font-mono text-xxs uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
