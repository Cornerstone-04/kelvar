"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GlobalNetworkMap = dynamic(
  () =>
    import("./global-network-map").then((module) => module.GlobalNetworkMap),
  { ssr: false },
);

export function DeferredGlobalNetworkMap() {
  const [visible, setVisible] = useState(false);
  const boundaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boundary = boundaryRef.current;
    if (!boundary || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(boundary);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boundaryRef} className="min-h-160">
      {visible && <GlobalNetworkMap />}
    </div>
  );
}
