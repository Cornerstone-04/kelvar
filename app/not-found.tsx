"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowLeft } from "react-icons/bs";

function StaticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() > 0.85 ? Math.floor(Math.random() * 80) : 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val + 20;
        data[i + 3] = val > 0 ? 180 : 0;
      }

      ctx.putImageData(imageData, 0, 0);

      // Horizontal scan lines glitch
      if (Math.random() > 0.92) {
        const y = Math.floor(Math.random() * height);
        const h = Math.floor(Math.random() * 6) + 1;
        const shift = (Math.random() - 0.5) * 30;
        ctx.drawImage(canvas, 0, y, width, h, shift, y, width, h);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
    />
  );
}

function BlinkingStatus() {
  const [frame, setFrame] = useState(0);
  const states = [
    "SIGNAL LOST",
    "SIGNAL LO\u2588T",
    "SIGN\u2588L LOST",
    "SIGNAL LOST",
    "\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588",
    "SIGNAL LOST",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % states.length);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-[0.65rem] tracking-[0.3em] text-white/35">
      {states[frame]}
    </span>
  );
}

export default function NotFound() {
  const [opacity, setOpacity] = useState(1);

  // Simulate comms dropout — random flickers
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const flicker = () => {
      setOpacity(Math.random() > 0.15 ? 1 : 0.4);
      timeoutId = setTimeout(flicker, 80 + Math.random() * 400);
    };

    timeoutId = setTimeout(flicker, 1200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-bg">
      <StaticCanvas />

      {/* Scan line overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-2 p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Status label */}
        <div className="mb-6">
          <BlinkingStatus />
        </div>

        {/* 404 */}
        <div
          className="mb-8 select-none font-heading text-[clamp(8rem,28vw,22rem)] leading-[0.85] font-black tracking-[-0.04em] text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.15)",
          }}
        >
          404
        </div>

        {/* Message */}
        <p className="mb-3 font-mono text-[0.78rem] tracking-widest text-white/30">
          DRONE COMMS LINK TERMINATED
        </p>
        <p className="mb-12 font-mono text-[0.7rem] tracking-[0.08em] text-white/15">
          ERROR_CODE :: PAGE_NOT_FOUND / UPLINK_FAILURE
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-white/12 px-[1.8rem] py-[0.8rem] font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/60 no-underline transition-all duration-200 ease-in-out hover:border-white/40 hover:text-white"
        >
          <BsArrowLeft /> Re-establish Link
        </Link>
      </motion.div>

      {/* Corner coords */}
      <div className="absolute bottom-6 left-8 z-2">
        <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/12">
          LAT 51.5074° N · LON 0.1278° W
        </p>
      </div>
      <div className="absolute right-8 bottom-6 z-2">
        <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/12">
          KELVAR IND. · SYS_FAULT
        </p>
      </div>
    </div>
  );
}
