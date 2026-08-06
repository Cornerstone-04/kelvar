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
      const frame = window.requestAnimationFrame(() => setVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    window.sessionStorage.setItem(sessionKey, "true");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const timeout = window.setTimeout(
      () => setVisible(false),
      reduceMotion ? 250 : mobile ? 1400 : 2000,
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
          transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-100 grid place-items-center overflow-hidden bg-bg"
        >
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: "100vh", opacity: [0, 0.55, 0] }}
              transition={{ duration: 2.2, ease: "linear" }}
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_5%,rgba(245,245,249,0.7)_50%,transparent_95%)] shadow-[0_0_24px_rgba(245,245,249,0.22)]"
            />
          )}

          <div className="absolute left-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted md:left-10 md:top-9">
            KLV / SYSTEM BOOT
          </div>
          <div className="absolute right-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted md:right-10 md:top-9">
            00.01
          </div>

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.div
              aria-hidden="true"
              initial={
                reduceMotion ? false : { width: 104, height: 104, opacity: 0 }
              }
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
                duration: 1.85,
                times: [0, 0.68, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 border border-white/45"
            >
              <CornerMarks />
            </motion.div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.86, filter: "blur(7px)" }
              }
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: reduceMotion ? 0.1 : 0.4,
                delay: reduceMotion ? 0 : 0.12,
              }}
              className="relative z-1 h-32 w-32"
            >
              <Image
                src="/assets/images/brand/kelvar-bird.png"
                alt=""
                fill
                priority
                sizes="128px"
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.3 }}
              className="relative z-1 mt-7"
            >
              <p className="font-heading text-3xl font-bold uppercase tracking-[0.16em] text-primary md:text-4xl">
                Kelvar Industries
              </p>
              <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/65 md:text-xs">
                Eyes Everywhere. Safety Guaranteed.
              </p>
            </motion.div>

            {!reduceMotion && (
              <div className="relative z-1 mt-10 w-[min(86vw,27rem)] space-y-3 border-t border-white/15 pt-5">
                {telemetry.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.18 }}
                    className="flex items-center justify-between gap-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] md:text-[0.7rem]"
                  >
                    <span className="text-muted">{label}</span>
                    <span className="text-primary/85">{value}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.65, ease: "easeInOut" }}
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
