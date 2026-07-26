import { careers } from "@/content/careers";

export const ALL = "All";

export const splitLocations = (location: string) =>
  location.split("·").map((part) => part.trim());

export const getDepartments = () => [
  ALL,
  ...Array.from(new Set(careers.roles.map((r) => r.department))),
];

export const getLocations = () => [
  ALL,
  ...Array.from(
    new Set(careers.roles.flatMap((r) => splitLocations(r.location))),
  ),
];

export const filterRoles = ({
  activeDept,
  activeLoc,
}: {
  activeDept: string;
  activeLoc: string;
}) => {
  return careers.roles.filter((role) => {
    const deptMatch = activeDept === ALL || role.department === activeDept;
    const locMatch =
      activeLoc === ALL || splitLocations(role.location).includes(activeLoc);

    return deptMatch && locMatch;
  });
};

export const groupRolesByDepartment = (roles: typeof careers.roles) => {
  return roles.reduce<Record<string, typeof careers.roles>>((acc, role) => {
    if (!acc[role.department]) acc[role.department] = [];
    acc[role.department].push(role);
    return acc;
  }, {});
};
