import { CareersHeader } from "@/components/careers/careers-header";
import { CareersPerks } from "@/components/careers/careers-perks";
import { CareersRoles } from "@/components/careers/careers-roles";
import {
  CareersCulture,
  CareersDisciplineStrip,
} from "@/components/careers/careers-culture";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-bg pt-16.25">
      <CareersHeader />
      <CareersDisciplineStrip />
      <CareersPerks />
      <CareersCulture />
      <CareersRoles />
    </div>
  );
}
