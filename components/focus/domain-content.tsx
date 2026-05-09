"use client";

import { FocusDetail } from "@/types/focus-types";
import { motion } from "motion/react";
import { SectionLabel } from "../ui/section-label";
import { ScrollingText } from "../ui/scrolling-text";
import { DomainCapabilities } from "./domain-capabilities";
import { DomainSystems } from "./domain-systems";

type FocusDomain = {
  id: string;
  word: string;
  image: string;
};

type DomainContentProps = {
  domain: FocusDomain;
  detail: FocusDetail;
};

export function DomainContent({ domain, detail }: DomainContentProps) {
  return (
    <>
      <div className="mb-20 grid grid-cols-1 items-start gap-16 md:grid-cols-2">
        <div>
          <div className="mb-8">
            <SectionLabel>{detail.headline}</SectionLabel>
          </div>

          {detail.body.map((paragraph, index) => (
            <motion.div
              key={paragraph}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4 font-mono text-xs-plus leading-[1.85] text-muted"
            >
              <ScrollingText text={paragraph} />
            </motion.div>
          ))}
        </div>

        <DomainCapabilities capabilities={detail.capabilities} />
      </div>

      <DomainSystems domainName={domain.word} systems={detail.systems} />
    </>
  );
}