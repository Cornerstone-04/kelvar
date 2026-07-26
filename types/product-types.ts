export type ProductFeature = {
  title: string;
  desc: string;
  tag: "Primary" | "Secondary";
  image?: string;
};

export type ProductUseCase = {
  icon: string;
  label: string;
  desc: string;
  image?: string;
};

export type ProductStat = {
  value: string;
  label: string;
};

export type ProductDetail = {
  id: string;
  name: string;
  slug: string;
  trademark?: boolean;
  tagline: string;
  concept: string;
  features: ProductFeature[];
  useCases: ProductUseCase[];
  vision: string;
  stats: ProductStat[];
  philosophy: string[];
  industries: string[];
  assets: {
    image: string;
    video: string;
    videoAlt: string;
  };
  specs: { label: string; value: string }[];
};

export type PlatformSummary = {
  id: string;
  name: string;
  codename: string;
  slug: string;
  status: "flagship" | "in-development";
  tagline: string;
  desc: string;
  assets: {
    image1: string;
    image2?: string;
    video: string;
    videoPoster: string;
  };
  specs: { label: string; value: string }[];
};
