import Image from "next/image";
import { LazyVideo } from "@/components/ui/lazy-video";
import { SectionLabel } from "@/components/ui/section-label";
import { stratokiteMedia } from "@/content/products/stratokite";

export function StratokiteMediaSection() {
  return (
    <section
      id="airframe"
      className="scroll-mt-28 border-t border-white/10 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
        <div
          className="xl:sticky xl:self-start"
          style={{ top: "calc(var(--site-navbar-offset, 4.0625rem) + 4.5rem)" }}
        >
          <SectionLabel>Airframe / System Study</SectionLabel>
          <h2 className="type-editorial mt-7 max-w-xl text-primary">
            Engineered for the space between.
          </h2>
          <p className="mt-7 max-w-lg font-mono text-xs-plus leading-[1.85] text-muted">
            StratoKite combines a balloon-assisted ascent architecture with a
            fixed-wing VTOL airframe, creating a recoverable platform for
            atmospheric sensing, observation, and persistent missions.
          </p>
        </div>

        <div className="space-y-4">
          <figure className="overflow-hidden border border-white/10 bg-black">
            <LazyVideo
              src={stratokiteMedia.turntable.video}
              poster={stratokiteMedia.turntable.poster}
              className="aspect-video w-full object-cover"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-dim">
              Configuration study / VTOL airframe
            </figcaption>
          </figure>

          <div className="grid gap-4 md:grid-cols-2">
            {stratokiteMedia.gallery.map((image, index) => (
              <figure
                key={image.src}
                className={`overflow-hidden border border-white/10 bg-black ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`relative ${index === 0 ? "aspect-video" : "aspect-square"}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1280px) 64vw, 100vw"
                        : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="object-contain"
                  />
                </div>
                <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-dim">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
