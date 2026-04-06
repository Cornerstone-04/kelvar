"use client";

import { useMemo, useState } from "react";
import { SectionLabel } from "@/components/ui/section-label";
import { CareersRoleItem } from "@/components/careers/careers-role-item";
import { CareersGeneralApplication } from "@/components/careers/careers-general-application";
import { CareersFilterDropdown } from "@/components/careers/careers-filter-dropdown";
import { LuX } from "react-icons/lu";
import {
  ALL,
  filterRoles,
  getDepartments,
  getLocations,
  groupRolesByDepartment,
} from "@/lib/careers-filter-utils";

export function CareersRoles() {
  const departments = useMemo(() => getDepartments(), []);
  const locations = useMemo(() => getLocations(), []);

  const [activeDept, setActiveDept] = useState(ALL);
  const [activeLoc, setActiveLoc] = useState(ALL);

  const filtered = useMemo(
    () =>
      filterRoles({
        activeDept,
        activeLoc,
      }),
    [activeDept, activeLoc],
  );

  const grouped = useMemo(() => groupRolesByDepartment(filtered), [filtered]);

  const clearFilters = () => {
    setActiveDept(ALL);
    setActiveLoc(ALL);
  };

  return (
    <div className="px-6 py-12 md:py-20 md:px-12">
      <SectionLabel>Open Positions</SectionLabel>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <div>
          <div className="sticky top-28 flex flex-col gap-6 mt-6">
            <CareersFilterDropdown
              label="Department"
              options={departments}
              value={activeDept}
              onChange={setActiveDept}
            />

            <CareersFilterDropdown
              label="Location"
              options={locations}
              value={activeLoc}
              onChange={setActiveLoc}
            />

            {(activeDept !== ALL || activeLoc !== ALL) && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex w-fit items-center justify-center gap-3 border border-white/15 px-6 py-3 font-mono text-xxs uppercase tracking-[0.2em] text-white/60 transition-all duration-200 hover:border-red-500/40 hover:text-red-500"
              >
                <LuX />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {filtered.length === 0 ? (
            <p className="font-mono text-xxs text-white/25">
              No roles match the selected filters.
            </p>
          ) : (
            Object.entries(grouped).map(([dept, roles]) => (
              <div key={dept} className="flex flex-col gap-2 mt-6">
                <p className="font-mono text-xxs uppercase tracking-[0.25em] text-muted">
                  {dept}
                </p>

                <div className="flex flex-col gap-3">
                  {roles.map((role, index) => (
                    <CareersRoleItem key={index} role={role} index={index} />
                  ))}
                </div>
              </div>
            ))
          )}

          <CareersGeneralApplication />
        </div>
      </div>
    </div>
  );
}
