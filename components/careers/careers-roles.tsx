"use client";

import { useState } from "react";
import { careers } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";
import {CareersRoleItem} from "@/components/careers/careers-role-item";
import {CareersGeneralApplication} from "@/components/careers/careers-general-application";

const ALL = "All";

export function CareersRoles() {
  const departments = [
    ALL,
    ...Array.from(new Set(careers.roles.map((r) => r.department))),
  ];
  const locations = [
    ALL,
    ...Array.from(new Set(careers.roles.map((r) => r.location))),
  ];

  const [activeDept, setActiveDept] = useState(ALL);
  const [activeLoc, setActiveLoc] = useState(ALL);

  const filtered = careers.roles.filter((r) => {
    const deptMatch = activeDept === ALL || r.department === activeDept;
    const locMatch = activeLoc === ALL || r.location === activeLoc;
    return deptMatch && locMatch;
  });

  // Group filtered roles by department
  const grouped = filtered.reduce<Record<string, typeof careers.roles>>(
    (acc, role) => {
      if (!acc[role.department]) acc[role.department] = [];
      acc[role.department].push(role);
      return acc;
    },
    {},
  );

  const filterBtnClass = (active: boolean) =>
    `border px-4 py-3 text-left font-mono text-xxs transition-colors duration-200 ${
      active
        ? "border-white/30 text-white/80"
        : "border-border-col text-white/35 hover:border-white/20 hover:text-white/60"
    }`;

  return (
    <div className="px-6 py-20 md:px-12">
      <SectionLabel>Open Positions</SectionLabel>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div className="hidden md:block">
          <div className="sticky top-28 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <p className="my-4 font-mono text-xxs uppercase tracking-[0.2em] text-white/20">
                Department
              </p>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={filterBtnClass(activeDept === dept)}
                >
                  {dept === ALL ? "All Departments" : dept}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <p className="mb-4 font-mono text-xxs uppercase tracking-[0.2em] text-white/20">
                Location
              </p>
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLoc(loc)}
                  className={filterBtnClass(activeLoc === loc)}
                >
                  {loc === ALL ? "All Locations" : loc}
                </button>
              ))}
            </div>

            {(activeDept !== ALL || activeLoc !== ALL) && (
              <button
                onClick={() => {
                  setActiveDept(ALL);
                  setActiveLoc(ALL);
                }}
                className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20 hover:text-white/50 text-left transition-colors duration-200"
              >
                ✕ Clear Filters
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
