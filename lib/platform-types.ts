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
};
