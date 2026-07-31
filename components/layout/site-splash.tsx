"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const sessionKey = "kelvar-splash-seen";

const telemetry = [
  ["OPTICAL SYSTEMS", "ONLINE"],
  ["AUTONOMOUS NETWORK", "CONNECTED"],
  ["SIGNAL INTEGRITY", "100%"],
] as const;

export function SiteSplash() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.sessionStorage.getItem(sessionKey)) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem(sessionKey, "true");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(
      () => setVisible(false),
      reduceMotion ? 450 : 1850,
    );

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Kelvar systems initializing"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-100 grid place-items-center overflow-hidden bg-bg"
        >
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: "100vh", opacity: [0, 0.55, 0] }}
              transition={{ duration: 1.25, ease: "linear" }}
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_5%,rgba(245,245,249,0.7)_50%,transparent_95%)] shadow-[0_0_24px_rgba(245,245,249,0.22)]"
            />
          )}

          <div className="absolute left-6 top-6 font-mono text-[0.55rem] uppercase tracking-[0.24em] text-dim md:left-10 md:top-9">
            KLV / SYSTEM BOOT
          </div>
          <div className="absolute right-6 top-6 font-mono text-[0.55rem] uppercase tracking-[0.24em] text-dim md:right-10 md:top-9">
            00.01
          </div>

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { width: 104, height: 104, opacity: 0 }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : {
                      width: [104, 104, "140vw"],
                      height: [104, 104, "140vh"],
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                duration: 1.75,
                times: [0, 0.68, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 border border-white/45"
            >
              <CornerMarks />
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.86, filter: "blur(7px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: reduceMotion ? 0.15 : 0.55, delay: reduceMotion ? 0 : 0.25 }}
              className="relative z-1 h-28 w-28"
            >
              <Image
                src="/assets/images/brand/kelvar-bird.png"
                alt=""
                fill
                priority
                sizes="112px"
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.55 }}
              className="relative z-1 mt-7"
            >
              <p className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-primary">
                Kelvar Industries
              </p>
              <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted">
                Eyes Everywhere. Safety Guaranteed.
              </p>
            </motion.div>

            {!reduceMotion && (
              <div className="relative z-1 mt-10 w-[min(82vw,23rem)] space-y-2 border-t border-white/10 pt-4">
                {telemetry.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.7 + index * 0.16 }}
                    className="flex items-center justify-between gap-6 font-mono text-[0.55rem] uppercase tracking-[0.18em]"
                  >
                    <span className="text-dim">{label}</span>
                    <span className="text-primary/70">{value}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
            className="absolute inset-x-6 bottom-7 h-px origin-left bg-white/20 md:inset-x-10 md:bottom-9"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CornerMarks() {
  return (
    <>
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary" />
      <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary" />
      <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary" />
    </>
  );
}
