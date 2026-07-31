"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-reveal wrapper powered by Motion (motion.dev).
 * Elegant, physics-based fade-up that plays once when the element scrolls
 * into view. Fully respects prefers-reduced-motion (renders content instantly)
 * and keeps the same props API as before so existing usages don't change.
 *
 * The `data-reveal` marker lets AnimateFX skip its own heading animation for
 * content that is already handled here, avoiding doubled entrance effects.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} data-reveal>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
