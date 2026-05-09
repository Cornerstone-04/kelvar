"use client";

import { DomainHero } from "./domain-hero";
import { DomainContent } from "./domain-content";
import type { FocusDetail } from "@/types/focus-types";

type FocusDomain = {
  id: string;
  word: string;
  image: string;
};

type DomainSectionProps = {
  domain: FocusDomain;
  detail: FocusDetail;
};

export function DomainSection({ domain, detail }: DomainSectionProps) {
  return (
    <>
      <DomainHero domain={domain} />

      <section className="border-t border-[#ffffff12] px-6 py-12 md:px-10 md:py-24">
        <DomainContent domain={domain} detail={detail} />
      </section>
    </>
  );
}
