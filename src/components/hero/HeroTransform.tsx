"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/**
 * Before/After訴求を、実写真の代わりにシルエットの線画＋数字で表現する。
 * 実在の会員の変化を装った合成写真は使わず、抽象的なピクトグラムと平均値の提示に留める
 * （docs/planning.md ビジュアル素材の方針）。
 */
export default function HeroTransform() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : 0.5, ease: EASE_DRIVE }}
      className="mt-10 flex items-center gap-5"
      aria-label="12週間で平均6.2kgの変化"
    >
      <svg aria-hidden="true" width="48" height="64" viewBox="0 0 56 72" fill="none">
        <circle cx="28" cy="14" r="10" stroke="var(--color-white-dim)" strokeWidth="2" />
        <path
          d="M14 70 Q14 40 28 38 Q42 40 42 70"
          stroke="var(--color-white-dim)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span aria-hidden="true" className="font-anton text-2xl text-flame">
        →
      </span>

      <svg aria-hidden="true" width="48" height="64" viewBox="0 0 56 72" fill="none">
        <circle cx="28" cy="14" r="10" stroke="var(--color-flame)" strokeWidth="2.5" />
        <path
          d="M10 70 Q10 36 28 34 Q46 36 46 70 M18 50 L38 50"
          stroke="var(--color-flame)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div>
        <p className="font-anton text-3xl text-white-clean sm:text-4xl">-6.2kg</p>
        <p className="font-sans-jp text-xs tracking-wide text-white-dim">平均変化量 / 12週間</p>
      </div>
    </motion.div>
  );
}
