"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { featuredImages } from "@/config/gallery";

/**
 * Animated intro splash — the Home Hero mascot bursts to life, the logo
 * assembles and a curtain lifts to reveal the site. Plays once per browser
 * session, is skippable (click / tap / Esc) and fully respects
 * prefers-reduced-motion. Client-only so no-JS visitors never get stuck.
 */
export default function IntroSplash() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let seen = false;
    try {
      seen = sessionStorage.getItem("hh_intro_done") === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    setShow(true);
    // Lock scroll while the intro plays.
    document.documentElement.style.overflow = "hidden";

    const dur = reduce ? 700 : 2900;
    const timer = window.setTimeout(dismiss, dur);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    try {
      sessionStorage.setItem("hh_intro_done", "1");
    } catch {
      /* ignore */
    }
    document.documentElement.style.overflow = "";
    setShow(false);
  }

  if (!mounted) return null;

  const brand = "HOME".split("").concat(["★"], "HERO".split(""));
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-charcoal text-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease }}
          onClick={dismiss}
          role="dialog"
          aria-label="Intro"
        >
          {/* Ambient backdrop */}
          <div className="aurora" aria-hidden="true" />
          <div className="orb orb-gold -top-40 right-0 h-[34rem] w-[34rem]" aria-hidden="true" />
          <div className="orb orb-teal -bottom-40 left-0 h-[30rem] w-[30rem]" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Mascot with energy ring */}
            <div className="relative mb-8 h-52 w-52 sm:h-64 sm:w-64">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(220,167,51,0.0), rgba(239,201,104,0.75), rgba(47,183,196,0.5), rgba(220,167,51,0.0))",
                  filter: "blur(14px)",
                }}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={
                  reduce
                    ? { scale: 1, opacity: 0.6 }
                    : { scale: 1, opacity: 0.85, rotate: 360 }
                }
                transition={{
                  scale: { duration: 0.7, ease },
                  opacity: { duration: 0.7 },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
                aria-hidden="true"
              />
              <motion.div
                className="media-glow absolute inset-2 overflow-hidden rounded-full bg-charcoal-soft"
                initial={{ scale: 0.5, y: 24, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={reduce ? {} : { y: [0, -8, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <Image
                    src={featuredImages.hero.src}
                    alt="Home Hero mascot"
                    fill
                    priority
                    sizes="256px"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Sparkles */}
              {!reduce &&
                [
                  { t: "6%", l: "12%", d: 0.5 },
                  { t: "0%", l: "72%", d: 0.8 },
                  { t: "78%", l: "88%", d: 1.0 },
                  { t: "84%", l: "4%", d: 1.2 },
                ].map((s, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-amber-light"
                    style={{ top: s.t, left: s.l }}
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: [0, 1.2, 0.9, 1], opacity: [0, 1, 1], rotate: 90 }}
                    transition={{ duration: 1.4, delay: s.d, repeat: Infinity, repeatDelay: 1.2 }}
                    aria-hidden="true"
                  >
                   ✦
                  </motion.span>
                ))}
            </div>

            {/* Logo lockup */}
            <div className="flex items-center justify-center text-3xl font-bold tracking-tight sm:text-4xl">
              {brand.map((ch, i) => (
                <motion.span
                  key={i}
                  className={ch === "★" ? "px-1 text-amber" : ""}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.4, ease }}
                >
                  {ch}
                </motion.span>
              ))}
            </div>
            <motion.p
              className="mt-2 text-sm font-semibold uppercase tracking-[0.4em] text-cream/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.5 }}
            >
              Service
            </motion.p>

            {/* Loading bar */}
            {!reduce && (
              <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-cream/15">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber to-amber-light"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                  style={{ transformOrigin: "0% 50%" }}
                />
              </div>
            )}
          </div>

          <motion.button
            type="button"
            className="absolute bottom-7 text-xs font-medium uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            onClick={dismiss}
          >
            Tap to skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
