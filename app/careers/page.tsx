"use client";

import CareersHeader from "@/components/careers/careers-header";
import CareersPerks from "@/components/careers/careers-perks";
import CareersRoles from "@/components/careers/careers-roles";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-bg pt-16.25">
      <CareersHeader />
      <CareersPerks />
      <CareersRoles />
    </div>
  );
}
