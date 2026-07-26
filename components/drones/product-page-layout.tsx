import type { ProductDetail } from "@/types/product-types";
import { ProductVideoHero } from "./product-video-hero";
import { DomeProductStory } from "./dome-product-story";

export function ProductPageLayout({ product }: { product: ProductDetail }) {
  return (
    <div className="min-h-screen bg-bg">
      <ProductVideoHero product={product} />
      <DomeProductStory product={product} />
    </div>
  );
}
