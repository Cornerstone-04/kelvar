"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  eager?: boolean;
};

export function LazyVideo({
  src,
  className,
  poster = "/assets/images/brand/kelvar-thumbnail.png",
  eager = false,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    if (reducedMotion.matches || connection?.saveData) return;

    const loadAndPlay = () => {
      if (!video.src) {
        video.src = src;
        video.load();
      }

      void video.play().catch(() => {
        // Playback can still be blocked by browser or device preferences.
      });
    };

    if (eager || !("IntersectionObserver" in window)) {
      loadAndPlay();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadAndPlay();
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [eager, src]);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      tabIndex={-1}
      muted
      loop
      playsInline
      poster={poster}
      preload="none"
      className={className}
    />
  );
}
