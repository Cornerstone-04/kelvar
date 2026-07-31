"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { LuChevronDown, LuX } from "react-icons/lu";
import { SectionLabel } from "@/components/ui/section-label";
import { Rule } from "../ui/rule";
import { site } from "@/content/site";
import {
  ALL,
  filterRoles,
  getDepartments,
  getLocations,
  groupRolesByDepartment,
} from "@/lib/careers-filter-utils";

interface CareerRole {
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

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
    <div className="px-6 py-12 md:px-12 md:py-20">
      <SectionLabel>Open Positions</SectionLabel>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <div>
          <div className="sticky top-28 mt-6 flex flex-col gap-6">
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
              <div key={dept} className="mt-6 flex flex-col gap-2">
                <p className="font-mono text-xxs uppercase tracking-[0.25em] text-muted">
                  {dept}
                </p>

                <div className="flex flex-col gap-3">
                  {roles.map((role, index) => (
                    <CareersRoleItem key={role.title} role={role} index={index} />
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

function CareersFilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const displayValue = value === ALL ? `All ${label}s` : value;

  return (
    <div ref={containerRef} className="flex flex-col gap-2">
      <label className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20">
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between border border-border-col bg-transparent px-4 py-3 font-mono text-xs-plus text-white/70 transition-all duration-200 hover:border-white/20 focus:border-white/30"
        >
          <span className={value === ALL ? "text-white/40" : "text-white"}>
            {displayValue}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <LuChevronDown className="text-white/20" size={14} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 mt-1 w-full border border-border-col bg-card py-1 shadow-2xl"
            >
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left font-mono text-xs-plus transition-colors hover:bg-white/5 ${
                    value === option ? "text-white" : "text-white/40"
                  }`}
                >
                  {option === ALL ? `All ${label}s` : option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CareersRoleItem({
  role,
  index,
}: {
  role: CareerRole;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        href={`mailto:${site.email}?subject=Application — ${role.title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-border-col no-underline transition-colors duration-200 hover:border-white/20"
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5">
          <div>
            <h3 className="mb-1.5 font-heading text-[1.3rem] font-bold text-white transition-colors group-hover:text-white/80">
              {role.title}
            </h3>
            <p className="font-mono text-xs-plus text-muted">
              {role.location} · {role.type}
            </p>
          </div>
          <BsArrowUpRight
            className="mt-1 shrink-0 text-white/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60"
            size={16}
          />
        </div>

        <Rule />

        <div className="px-6 py-4">
          <p className="font-mono text-xs-plus leading-relaxed text-muted transition-colors duration-200 group-hover:text-white/45">
            {role.summary}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function CareersGeneralApplication() {
  return (
    <div className="mt-8 border-t border-border-col pt-12 font-medium md:mt-16">
      <p className="mb-4 font-mono text-xs-plus text-white/50">
        Don&apos;t see a role that fits? We&apos;re always open to exceptional
        people.
      </p>

      <Link
        href={`mailto:${site.email}?subject=General Application — Kelvar Industries`}
        target="_blank"
        rel="noopener noreferrer"
        className="kelvar-button-frame group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 border px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:bg-white/8 hover:text-primary"
      >
        Send a General Application <BsArrowRight />
      </Link>
    </div>
  );
}
