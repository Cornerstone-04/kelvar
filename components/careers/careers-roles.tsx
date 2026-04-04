"use client";

import { useMemo, useState } from "react";
import { careers } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import { CareersRoleItem } from "@/components/careers/careers-role-item";
import { CareersGeneralApplication } from "@/components/careers/careers-general-application";
import { LuX } from "react-icons/lu";

const ALL = "All";

const splitLocations = (location: string) =>
  location.split("·").map((part) => part.trim());

export function CareersRoles() {
  const departments = [
    ALL,
    ...Array.from(new Set(careers.roles.map((r) => r.department))),
  ];

  const locations = useMemo(
    () => [
      ALL,
      ...Array.from(
        new Set(careers.roles.flatMap((r) => splitLocations(r.location))),
      ),
    ],
    [],
  );

  const [activeDept, setActiveDept] = useState(ALL);
  const [activeLoc, setActiveLoc] = useState(ALL);

  const filtered = careers.roles.filter((r) => {
    const deptMatch = activeDept === ALL || r.department === activeDept;
    const roleLocations = splitLocations(r.location);
    const locMatch = activeLoc === ALL || roleLocations.includes(activeLoc);

    return deptMatch && locMatch;
  });

  const grouped = filtered.reduce<Record<string, typeof careers.roles>>(
    (acc, role) => {
      if (!acc[role.department]) acc[role.department] = [];
      acc[role.department].push(role);
      return acc;
    },
    {},
  );

  const selectClass =
    "w-full border border-border-col bg-transparent px-4 py-3 font-mono text-xxs text-white/70 outline-none transition-colors duration-200 hover:border-white/20 focus:border-white/30";

  return (
    <div className="px-6 py-20 md:px-12">
      <SectionLabel>Open Positions</SectionLabel>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        {/* Filters */}
        <div>
          <div className="sticky top-28 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="department-filter"
                className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20"
              >
                Department
              </label>
              <select
                id="department-filter"
                value={activeDept}
                onChange={(e) => setActiveDept(e.target.value)}
                className={selectClass}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === ALL ? "All Departments" : dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="location-filter"
                className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20"
              >
                Location
              </label>
              <select
                id="location-filter"
                value={activeLoc}
                onChange={(e) => setActiveLoc(e.target.value)}
                className={selectClass}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === ALL ? "All Locations" : loc}
                  </option>
                ))}
              </select>
            </div>

            {(activeDept !== ALL || activeLoc !== ALL) && (
              <button
                onClick={() => {
                  setActiveDept(ALL);
                  setActiveLoc(ALL);
                }}
                className="w-fit border border-white/15 px-6 py-3 font-mono text-xxs uppercase tracking-[0.2em] text-white/60 no-underline transition-all duration-200 hover:border-red-500/40 hover:text-red-500 inline-flex items-center gap-3 justify-center"
              >
                <LuX /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Roles */}
        <div className="flex flex-col gap-8">
          {filtered.length === 0 ? (
            <p className="font-mono text-xxs text-white/25">
              No roles match the selected filters.
            </p>
          ) : (
            Object.entries(grouped).map(([dept, roles]) => (
              <div key={dept} className="flex flex-col gap-1">
                <p className="my-4 font-mono text-xxs uppercase tracking-[0.25em] text-white/25">
                  {dept}
                </p>
                <div className="flex flex-col gap-3">
                  {roles.map((role, i) => (
                    <CareersRoleItem key={i} role={role} index={i} />
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
