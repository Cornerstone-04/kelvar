"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { drones, site } from "@/lib/data";

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const heading: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: "uppercase",
};

function Rule() {
  return (
    <div
      style={{
        height: "1px",
        background: "rgba(255,255,255,0.07)",
        width: "100%",
      }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        style={{
          ...mono,
          fontSize: "0.58rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        {children}
      </span>
      <div
        style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }}
      />
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Noise / grain texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.4,
            zIndex: 1,
          }}
        />

        {/* Radial glow from top-centre */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
            background:
              "radial-gradient(circle, rgba(40,40,80,0.5) 0%, transparent 65%)",
          }}
        />

        {/* Horizon line */}
        <div
          style={{
            position: "absolute",
            bottom: "38%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            position: "relative",
            zIndex: 2,
            width: "100%",
            paddingBottom: "6rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              ...mono,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              ...heading,
              fontWeight: 900,
              fontSize: "clamp(4.5rem, 14vw, 13rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "var(--primary)",
              marginBottom: "2.5rem",
              maxWidth: "14ch",
            }}
          >
            Engineering
            <br />
            Unmanned
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(245,245,249,0.25)",
                color: "transparent",
              }}
            >
              Flight
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link
              href="#platforms"
              style={{
                ...mono,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--primary)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "0.8rem 1.6rem",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")
              }
            >
              Explore Platforms <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom drone nav strip — like Mach's 01 VIPER 02 GLIDE... */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden md:flex"
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "2.5rem",
            zIndex: 2,
            gap: "1.5rem",
          }}
        >
          {drones.map((d) => (
            <a
              key={d.id}
              href={`#drone-${d.id}`}
              style={{
                ...mono,
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "rgba(255,255,255,0.25)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
              }
            >
              {d.name}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section
        style={{
          padding: "8rem 2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <div
            style={{
              ...mono,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "2rem",
            }}
          >
            Mission
          </div>
          <p
            style={{
              ...heading,
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
              lineHeight: 1.35,
              color: "var(--primary)",
              marginBottom: "2.5rem",
            }}
          >
            {site.mission}
          </p>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              ...mono,
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "0.6rem 1.2rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.4)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            Read More →
          </Link>
        </div>
      </section>

      {/* ── DRONE PLATFORMS ── */}
      <section
        id="platforms"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        {drones.map((drone, i) => (
          <div key={drone.id} id={`drone-${drone.id}`}>
            {/* Label row */}
            <div
              className="flex gap-6 items-end-safe"
              style={{
                padding: "5rem 2.5rem 0",
              }}
            >
              <div>
                <span
                  style={{ ...mono, fontSize: "0.65rem", color: "var(--dim)" }}
                >
                  {drone.id}
                </span>
                <h2
                  style={{
                    ...heading,
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 9vw, 7rem)",
                    lineHeight: 1,
                    color: "var(--primary)",
                  }}
                >
                  {drone.name}
                </h2>
              </div>
              <span
                style={{
                  ...mono,
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  marginLeft: "1rem",
                }}
              >
                {drone.desc.split(".")[0]}.
              </span>
            </div>

            {/* Image block 1 — JPG */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              style={{
                margin: "1.5rem 2.5rem 0",
                aspectRatio: "16/7",
                position: "relative",
                overflow: "hidden",
                background: "var(--surface)",
              }}
            >
              <img
                src={drone.assets.jpg}
                alt={drone.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.55) saturate(0.7)",
                }}
              />
            </motion.div>

            {/* Image block 2 — Video */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                margin: `0.5rem ${i % 2 === 0 ? "5rem" : "2.5rem"} 0 ${i % 2 === 0 ? "2.5rem" : "5rem"}`,
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
                background: "var(--card)",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.45) saturate(0.6)",
                  objectPosition: i % 2 === 0 ? "center 30%" : "center 70%",
                }}
              >
                <source src={drone.assets.video} type="video/mp4" />
              </video>
            </motion.div>

            <Rule />
          </div>
        ))}
      </section>

      {/* ── NEWSROOM PREVIEW ── */}
      <section
        style={{
          padding: "7rem 2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              ...heading,
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            Press{" "}
            <span style={{ fontSize: "1.2rem", fontWeight: 400 }}>↗</span>
          </h2>
          <Link
            href="/press"
            style={{
              ...mono,
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--muted)",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
          >
            See All Articles →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.07)",
          }}
        >
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ background: "var(--bg)", padding: "1.5rem" }}>
              <div
                style={{
                  aspectRatio: "16/9",
                  background: "var(--surface)",
                  marginBottom: "1rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at 50% 80%, rgba(40,40,70,0.6) 0%, transparent 60%)",
                  }}
                />
              </div>
              <p
                style={{
                  ...mono,
                  fontSize: "0.7rem",
                  color: "var(--primary)",
                  lineHeight: 1.5,
                  marginBottom: "0.5rem",
                }}
              >
                Placeholder press headline — awaiting client content
              </p>
              <p style={{ ...mono, fontSize: "0.6rem", color: "var(--muted)" }}>
                Placeholder Outlet
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
