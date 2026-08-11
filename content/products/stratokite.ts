export const stratokiteMedia = {
  hero: {
    video: "/assets/videos/platforms/stratokite/stratokite-flight-tilt.webm",
    poster:
      "/assets/images/platforms/stratokite/stratokite-blue-sky-flight.webp",
  },
  turntable: {
    video: "/assets/videos/platforms/stratokite/stratokite-turntable.webm",
    poster: "/assets/images/platforms/stratokite/stratokite-three-quarter.webp",
  },
  gallery: [
    {
      src: "/assets/images/platforms/stratokite/stratokite-three-quarter.webp",
      alt: "Three-quarter render of the StratoKite balloon-assisted aircraft",
      label: "Airframe study / three-quarter",
    },
    {
      src: "/assets/images/platforms/stratokite/stratokite-side-profile.webp",
      alt: "Side elevation render of the StratoKite aircraft and balloon",
      label: "Airframe study / side elevation",
    },
    {
      src: "/assets/images/platforms/stratokite/stratokite-plan-view.webp",
      alt: "Top elevation render of the StratoKite aircraft and balloon",
      label: "Airframe study / plan view",
    },
  ],
} as const;
