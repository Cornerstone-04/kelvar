"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  poster?: string;
};

export function LazyVideo({
  src,
  className,
  poster = "/assets/images/brand/kelvar-thumbnail.png",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadAndPlay = () => {
      if (!video.src) {
        video.src = src;
        video.load();
      }

      void video.play().catch(() => {
        // Playback can still be blocked by browser or device preferences.
      });
    };

    if (!("IntersectionObserver" in window)) {
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
      { rootMargin: "300px 0px", threshold: 0.01 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      poster={poster}
      preload="none"
      className={className}
    />
  );
}
