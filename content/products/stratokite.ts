export const stratokiteMedia = {
  hero: {
    video: "/assets/videos/platforms/stratokite/stratokite-flight-tilt.webm",
    poster: "/assets/images/platforms/stratokite/stratokite-air.webp",
  },
  turntable: {
    video: "/assets/videos/platforms/stratokite/stratokite-turntable.webm",
    poster: "/assets/images/platforms/stratokite/stratokite-hero.webp",
  },
  gallery: [
    {
      src: "/assets/images/platforms/stratokite/stratokite-model.webp",
      alt: "Three-quarter render of the StratoKite balloon-assisted aircraft",
      label: "Airframe study / three-quarter",
    },
    {
      src: "/assets/images/platforms/stratokite/stratokite-side.webp",
      alt: "Side elevation render of the StratoKite aircraft and balloon",
      label: "Airframe study / side elevation",
    },
    {
      src: "/assets/images/platforms/stratokite/stratokite-top.webp",
      alt: "Top elevation render of the StratoKite aircraft and balloon",
      label: "Airframe study / plan view",
    },
  ],
} as const;
