import { redirect } from "next/navigation";
import { productDetails } from "@/content/products/dome";
import { ProductPageLayout } from "@/components/drones/product-page-layout";
import { Metadata } from "next";

export function generateStaticParams() {
  return productDetails.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name}${product.trademark ? "™" : ""} — Kelvar Industries`,
    description: product.tagline,
  };
}

export default async function DronePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);
  if (!product) redirect(`/#${slug}`);
  return <ProductPageLayout product={product} />;
}
