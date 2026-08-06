import { describe, expect, test } from "bun:test";
import { productDetails } from "@/content/products/dome";
import { platformSummaries } from "@/content/products/summaries";
import {
  ALL,
  filterRoles,
  getDepartments,
  groupRolesByDepartment,
  splitLocations,
} from "@/lib/careers-filter-utils";

describe("product content integrity", () => {
  test("uses the confirmed platform order", () => {
    expect(platformSummaries.map(({ name }) => name)).toEqual([
      "StratoKite",
      "Robobot",
      "Hydrax",
      "Dome",
    ]);
  });

  test("nests StratoKite under the KELVARX programme", () => {
    const stratokite = platformSummaries.find(
      ({ slug }) => slug === "stratokite",
    );

    expect(stratokite?.href).toBe("/kelvarx/stratokite");
  });

  test("uses unique summary and detail slugs", () => {
    const summarySlugs = platformSummaries.map(({ slug }) => slug);
    const detailSlugs = productDetails.map(({ slug }) => slug);

    expect(new Set(summarySlugs).size).toBe(summarySlugs.length);
    expect(new Set(detailSlugs).size).toBe(detailSlugs.length);
  });

  test("every detailed product has a matching summary", () => {
    const summarySlugs = new Set(platformSummaries.map(({ slug }) => slug));

    for (const product of productDetails) {
      expect(summarySlugs.has(product.slug)).toBe(true);
    }
  });
});

describe("career filters", () => {
  test("splits compound locations", () => {
    expect(splitLocations("Lagos · London")).toEqual(["Lagos", "London"]);
  });

  test("returns all roles for the all filter", () => {
    expect(
      filterRoles({ activeDept: ALL, activeLoc: ALL }).length,
    ).toBeGreaterThan(0);
  });

  test("groups roles by department", () => {
    const roles = filterRoles({ activeDept: ALL, activeLoc: ALL });
    const grouped = groupRolesByDepartment(roles);

    expect(Object.keys(grouped).sort()).toEqual(
      getDepartments()
        .filter((department) => department !== ALL)
        .sort(),
    );
  });
});
