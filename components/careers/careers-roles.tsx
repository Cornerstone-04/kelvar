"use client";

import { careers } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import CareersRoleItem from "@/components/careers/careers-role-item";
import CareersGeneralApplication from "@/components/careers/careers-general-application";

export default function CareersRoles() {
  return (
    <div className="px-6 py-20 md:px-12">
      <SectionLabel>Open Positions</SectionLabel>

      <h2 className="mb-12 font-heading text-[clamp(1.8rem,5vw,3.5rem)] font-black text-white">
        Current Openings
      </h2>

      <div className="space-y-0"> 
        {careers.roles.map((role, i) => (
          <CareersRoleItem key={i} role={role} index={i} />
        ))}
      </div>

      <CareersGeneralApplication />
    </div>
  );
}
