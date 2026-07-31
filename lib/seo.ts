import type { Metadata } from "next";

const siteName = "Kelvar Industries";
const defaultImage = "/assets/images/brand/kelvar-thumbnail.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}`;
  keywords: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image = defaultImage,
  imageAlt = `${title} — ${siteName}`,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    keywords: [siteName, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: path,
      siteName,
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
