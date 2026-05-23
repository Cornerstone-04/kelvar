export type PlatformHero =
  | {
      kind: "video";
      src: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
    };

export type PlatformDomain = {
  id: string;
  name: string;
  headline: string;
  image: string;
  capabilities: string[];
};

export type PlatformTechnology = {
  id: string;
  title: string;
  desc: string;
};

export type PlatformUseCase = {
  category: string;
  items: string[];
};

export type PlatformStoryMedia = {
  src: string;
  alt: string;
  orientation?: "landscape" | "portrait" | "diagram";
};

export type PlatformStoryMetric = {
  value: string;
  label: string;
};

export type PlatformStoryNarrative = {
  label: string;
  title: string;
  body: string;
  media?: PlatformStoryMedia;
  metrics?: PlatformStoryMetric[];
};

export type PlatformStoryArchitecturePart = {
  name: string;
  role: string;
};

export type PlatformStoryArchitecture = {
  label: string;
  title: string;
  body: string;
  diagram: PlatformStoryMedia;
  parts: PlatformStoryArchitecturePart[];
};

export type PlatformStoryType = {
  name: string;
  body: string;
};

export type PlatformStoryApplication = {
  name: string;
  body: string;
  subApplications?: PlatformStoryType[];
};

export type PlatformStoryAdvantage = {
  title: string;
  body: string;
};

export type PlatformStory = {
  eyebrow: string;
  title: string;
  summary: string;
  hero: PlatformStoryMedia;
  metrics: PlatformStoryMetric[];
  overview: PlatformStoryNarrative;
  architecture: PlatformStoryArchitecture;
  platformTypes: {
    label: string;
    title: string;
    intro: string;
    types: PlatformStoryType[];
  };
  operations: {
    label: string;
    title: string;
    panels: PlatformStoryNarrative[];
  };
  applications: {
    label: string;
    title: string;
    items: PlatformStoryApplication[];
  };
  advantages: {
    label: string;
    title: string;
    items: PlatformStoryAdvantage[];
  };
};

export type Platform = {
  id: string;
  name: string;
  trademark?: boolean;
  tagline: string;
  navDescription: string;
  label: string;
  type: string;
  introTitle: string;
  description: string;
  hero: PlatformHero;
  domainsLayout: "immersive" | "cards";
  domainsLabel: string;
  domains: PlatformDomain[];
  coreTech: PlatformTechnology[];
  useCases: PlatformUseCase[];
  story?: PlatformStory;
};
