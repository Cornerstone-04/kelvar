"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

interface GlitchTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function GlitchText({
  text,
  style,
  className,
  delay = 0,
  tag: Tag = "h1",
}: GlitchTextProps) {
  const [displayed, setDisplayed] = useState<string[]>(() =>
    Array(text.length).fill(""),
  );
  const [started, setStarted] = useState(false);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const chars = text.split("");
    const resolvedAt: number[] = chars.map(
      (_, i) => i * 38 + Math.random() * 40,
    );
    const totalDuration = Math.max(...resolvedAt) + 80;
    const startTime = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const next = chars.map((char, i) => {
        if (char === " " || char === "\n") return char;
        if (elapsed >= resolvedAt[i]) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });
      setDisplayed(next);
      if (elapsed < totalDuration) {
        frameRef.current = setTimeout(tick, 40);
      } else {
        setDisplayed(chars);
      }
    };

    frameRef.current = setTimeout(tick, 0);
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [started, text]);

  return (
    <Tag className={className} style={style}>
      {displayed.map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : char === "\n" ? (
          <br key={i} />
        ) : (
          <span
            key={i}
            style={{
              display: "inline-block",
              color: char !== text[i] ? "rgba(255,255,255,0.3)" : "inherit",
              transition: "color 0.05s",
            }}
          >
            {char || "\u00A0"}
          </span>
        ),
      )}
    </Tag>
  );
}
