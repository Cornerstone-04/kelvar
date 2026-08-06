"use client";

import { useEffect, useState, useRef } from "react";

interface GlitchTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  delay?: number;
  speed?: number;
  active?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function GlitchText({
  text,
  style,
  className,
  delay = 0,
  speed = 35,
  active,
  tag: Tag = "h1",
}: GlitchTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof active === "boolean") {
      if (active) {
        const timeout = setTimeout(() => {
          setDisplayed("");
          setStarted(true);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayed("");
          setStarted(false);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = setTimeout(() => setStarted(true), delay);
          observer.disconnect();
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, active]);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        frameRef.current = setTimeout(tick, speed);
      }
    };

    frameRef.current = setTimeout(tick, 0);

    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [started, text, speed]);

  return (
    <>
      <Tag
        ref={containerRef as React.Ref<never>}
        className={className}
        style={style}
      >
        {displayed}
        {displayed.length < text.length && started && (
          <span className="opacity-40 animate-[blink_0.7s_step-end_infinite]">
            ▋
          </span>
        )}
      </Tag>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
