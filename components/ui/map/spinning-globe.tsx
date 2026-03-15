"use client";

import { useEffect, useRef } from "react";

const NODES = [
  { city: "Lagos", lat: 6.5, lng: 3.4 },
  { city: "London", lat: 51.5, lng: -0.1 },
  { city: "Los Angeles", lat: 34.0, lng: -118.2 },
];

// Convert lat/lng to 3-D unit vector
function latLngToVec(lat: number, lng: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -Math.sin(phi) * Math.cos(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta),
  };
}

// Rotate a point around the Y axis by `angle` radians
function rotateY(v: { x: number; y: number; z: number }, angle: number) {
  return {
    x: v.x * Math.cos(angle) + v.z * Math.sin(angle),
    y: v.y,
    z: -v.x * Math.sin(angle) + v.z * Math.cos(angle),
  };
}

// Project 3-D point to 2-D canvas coords
function project(
  v: { x: number; y: number; z: number },
  cx: number,
  cy: number,
  r: number,
) {
  return { x: cx + v.x * r, y: cy - v.y * r, z: v.z };
}

// Latitude lines
const LAT_LINES = [-60, -30, 0, 30, 60];
// Longitude lines
const LNG_LINES = Array.from({ length: 12 }, (_, i) => i * 30);
// Dot grid density
const DOT_ROWS = 28;
const DOT_COLS = 56;

export function SpinningGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const angleRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // HiDPI
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const cx = W / 2;
      const cy = H / 2;
      const r = Math.min(W, H) * 0.38;

      ctx.clearRect(0, 0, W, H);

      const a = angleRef.current;

      // ── Dot grid (land texture approximation) ──────────────────────
      for (let row = 0; row < DOT_ROWS; row++) {
        const lat = -90 + (180 / DOT_ROWS) * (row + 0.5);
        for (let col = 0; col < DOT_COLS; col++) {
          const lng = -180 + (360 / DOT_COLS) * (col + 0.5);
          const v = rotateY(latLngToVec(lat, lng), a);
          if (v.z < 0) continue; // back-face cull
          const p = project(v, cx, cy, r);
          const fade = 0.15 + v.z * 0.35;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,245,249,${fade.toFixed(2)})`;
          ctx.fill();
        }
      }

      // ── Latitude lines ──────────────────────────────────────────────
      for (const lat of LAT_LINES) {
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 120; i++) {
          const lng = -180 + (360 / 120) * i;
          const v = rotateY(latLngToVec(lat, lng), a);
          if (v.z < 0) {
            started = false;
            continue;
          }
          const p = project(v, cx, cy, r);
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = "rgba(255,255,255,0.055)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // ── Longitude lines ─────────────────────────────────────────────
      for (const lng of LNG_LINES) {
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 60; i++) {
          const lat = -90 + (180 / 60) * i;
          const v = rotateY(latLngToVec(lat, lng), a);
          if (v.z < 0) {
            started = false;
            continue;
          }
          const p = project(v, cx, cy, r);
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // ── Equator highlight ───────────────────────────────────────────
      ctx.beginPath();
      let eqStarted = false;
      for (let i = 0; i <= 120; i++) {
        const lng = -180 + (360 / 120) * i;
        const v = rotateY(latLngToVec(0, lng), a);
        if (v.z < 0) {
          eqStarted = false;
          continue;
        }
        const p = project(v, cx, cy, r);
        if (!eqStarted) {
          ctx.moveTo(p.x, p.y);
          eqStarted = true;
        } else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // ── Outer glow ring ─────────────────────────────────────────────
      const grd = ctx.createRadialGradient(cx, cy, r * 0.85, cx, cy, r * 1.12);
      grd.addColorStop(0, "rgba(40,40,80,0)");
      grd.addColorStop(1, "rgba(40,40,80,0.55)");
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.12, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // ── Arc connections between nodes ───────────────────────────────
      const rotatedNodes = NODES.map((n) => ({
        ...n,
        v: rotateY(latLngToVec(n.lat, n.lng), a),
      }));

      const pairs = [
        [0, 1], // Lagos → London
        [1, 2], // London → LA
        [0, 2], // Lagos → LA
      ] as const;

      for (const [ai, bi] of pairs) {
        const na = rotatedNodes[ai];
        const nb = rotatedNodes[bi];
        // Only draw arc if both ends are (at least partially) visible
        if (na.v.z < -0.2 && nb.v.z < -0.2) continue;

        const pa = project(na.v, cx, cy, r);
        const pb = project(nb.v, cx, cy, r);

        // Arc midpoint lifted towards viewer
        const mx = (pa.x + pb.x) / 2;
        const my = (pa.y + pb.y) / 2 - r * 0.22;

        const alpha = Math.max(0, Math.min(na.v.z, nb.v.z)) * 0.6 + 0.1;

        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(mx, my, pb.x, pb.y);
        ctx.strokeStyle = `rgba(245,245,249,${(alpha * 0.5).toFixed(2)})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([5, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // ── Node dots ───────────────────────────────────────────────────
      for (const n of rotatedNodes) {
        if (n.v.z < 0) continue;
        const p = project(n.v, cx, cy, r);
        const alpha = 0.4 + n.v.z * 0.6;

        // pulse ring
        const pulse = (Date.now() % 2400) / 2400;
        const pr = r * 0.04 * pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(245,245,249,${((1 - pulse) * alpha * 0.5).toFixed(2)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // solid dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,245,249,${alpha.toFixed(2)})`;
        ctx.fill();

        // crosshair ticks
        const tk = 7;
        ctx.strokeStyle = `rgba(245,245,249,${(alpha * 0.5).toFixed(2)})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(p.x - tk, p.y);
        ctx.lineTo(p.x - 4, p.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p.x + 4, p.y);
        ctx.lineTo(p.x + tk, p.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - tk);
        ctx.lineTo(p.x, p.y - 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p.x, p.y + 4);
        ctx.lineTo(p.x, p.y + tk);
        ctx.stroke();

        // city label
        ctx.font = `500 ${Math.round(r * 0.065)}px 'DM Mono', monospace`;
        ctx.fillStyle = `rgba(245,245,249,${(alpha * 0.75).toFixed(2)})`;
        ctx.letterSpacing = "0.15em";
        ctx.fillText(n.city.toUpperCase(), p.x + 8, p.y - 6);
      }

      // ── Subtle rim light ────────────────────────────────────────────
      const rim = ctx.createRadialGradient(
        cx - r * 0.3,
        cy - r * 0.3,
        r * 0.1,
        cx,
        cy,
        r,
      );
      rim.addColorStop(0, "rgba(255,255,255,0.06)");
      rim.addColorStop(0.6, "rgba(255,255,255,0)");
      rim.addColorStop(1, "rgba(40,40,80,0.3)");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = rim;
      ctx.fill();

      angleRef.current += 0.002;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-label="Kelvar global network globe"
    />
  );
}
