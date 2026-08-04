"use client";

import { useMemo, useState } from "react";
import {
  ALL,
  filterRoles,
  getDepartments,
  getLocations,
  groupRolesByDepartment,
} from "@/lib/careers-filter-utils";

export function useCareerFilters() {
  const [department, setDepartment] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const departments = useMemo(() => getDepartments(), []);
  const locations = useMemo(() => getLocations(), []);
  const roles = useMemo(
    () => filterRoles({ activeDept: department, activeLoc: location }),
    [department, location],
  );
  const groupedRoles = useMemo(() => groupRolesByDepartment(roles), [roles]);

  return {
    department,
    departments,
    setDepartment,
    location,
    locations,
    setLocation,
    roles,
    groupedRoles,
    hasFilters: department !== ALL || location !== ALL,
    clearFilters: () => {
      setDepartment(ALL);
      setLocation(ALL);
    },
  };
}
