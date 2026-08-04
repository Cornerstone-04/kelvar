"use client";

import { useEffect, useState } from "react";

export function useNavbarVisibility(menuOpen: boolean) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame: number | null = null;

    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        const latest = window.scrollY;
        setHidden(latest > previousY && latest > 80);
        previousY = latest;
        frame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--site-navbar-offset",
      hidden && !menuOpen ? "0px" : "4.0625rem",
    );

    return () => {
      document.documentElement.style.removeProperty("--site-navbar-offset");
    };
  }, [hidden, menuOpen]);

  return hidden && !menuOpen;
}
