export type KelvarxMedia = {
  src?: string;
  alt: string;
  placeholder?: string;
};

export type KelvarxSystem = {
  id: string;
  name: string;
  href?: string;
  type: string;
  description: string;
  media: KelvarxMedia;
  payload: string[];
  dataCollected: string[];
  missions: string[];
};

export type KelvarxIntelligenceGroup = {
  label: string;
  items: string[];
};

export type KelvarxApplication = {
  name: string;
  outcome: string;
  platforms: string[];
  intelligenceLayer: "KAIN" | "KELVAR AI Command" | "Both";
};

export type KelvarxProgramme = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  vision: string;
  slogan: string;
  hero: KelvarxMedia;
  systems: KelvarxSystem[];
  kain: {
    name: string;
    description: string;
    groups: KelvarxIntelligenceGroup[];
  };
  aiCommand: {
    name: string;
    description: string;
    capabilities: string[];
  };
  applications: KelvarxApplication[];
};
