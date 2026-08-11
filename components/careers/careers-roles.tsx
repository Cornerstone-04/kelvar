"use client";

import { LuX } from "react-icons/lu";
import { SectionLabel } from "@/components/ui/section-label";
import { CareerFilterDropdown } from "./career-filter-dropdown";
import { CareerRoleItem } from "./career-role-item";
import { GeneralApplication } from "./general-application";
import { useCareerFilters } from "./use-career-filters";

export function CareersRoles() {
  const filters = useCareerFilters();
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <SectionLabel>Open Positions</SectionLabel>
          <h2 className="mt-6 font-heading text-[clamp(3rem,6vw,6rem)] font-black leading-none text-primary">
            Find your place.
          </h2>
        </div>
        <p className="font-mono text-xxs uppercase tracking-[0.2em] text-muted">
          {filters.roles.length} {filters.roles.length === 1 ? "Role" : "Roles"}{" "}
          Available
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <aside>
          <div className="sticky top-28 mt-6 flex flex-col gap-6">
            <CareerFilterDropdown
              label="Department"
              options={filters.departments}
              value={filters.department}
              onChange={filters.setDepartment}
            />
            <CareerFilterDropdown
              label="Location"
              options={filters.locations}
              value={filters.location}
              onChange={filters.setLocation}
            />
            {filters.hasFilters && (
              <button
                type="button"
                onClick={filters.clearFilters}
                className="inline-flex w-fit items-center justify-center gap-3 border border-white/15 px-6 py-3 font-mono text-xxs uppercase tracking-[0.2em] text-white/60 transition-[color,border-color] duration-200 hover:border-red-500/40 hover:text-red-500"
              >
                <LuX />
                Clear Filters
              </button>
            )}
          </div>
        </aside>
        <div className="flex flex-col gap-8">
          {filters.roles.length === 0 ? (
            <p className="font-mono text-xxs text-dim">
              No roles match the selected filters.
            </p>
          ) : (
            Object.entries(filters.groupedRoles).map(([department, roles]) => (
              <div key={department} className="mt-6 flex flex-col gap-2">
                <p className="font-mono text-xxs uppercase tracking-[0.25em] text-muted">
                  {department}
                </p>
                <div className="flex flex-col gap-3">
                  {roles.map((role, index) => (
                    <CareerRoleItem
                      key={role.title}
                      role={role}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
          <GeneralApplication />
        </div>
      </div>
    </section>
  );
}
