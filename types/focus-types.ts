export type FocusSystem = {
  name: string;
  desc: string;
  slug?: string;
};

export type FocusDetail = {
  headline: string;
  body: string[];
  capabilities: string[];
  systems: FocusSystem[];
};

export type FocusDetails = Record<string, FocusDetail>;
