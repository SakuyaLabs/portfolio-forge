"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import CountUpStat from "./CountUpStat";
import { RESULTS_CASES } from "./resultsCasesData";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/** 実績事例カード。属性・期間・変化量を淡々と提示し、数字で信頼を積み上げる。 */
export default function ResultsCases() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.3 : 0.5, ease: EASE_DRIVE } },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 grid gap-6 sm:grid-cols-3"
    >
      {RESULTS_CASES.map((c) => (
        <motion.li key={c.profile} variants={card} className="rounded border border-iron-600 bg-iron-800 p-6">
          <p className="font-sans-jp text-xs tracking-wide text-white-dim">
            {c.profile} / {c.duration}
          </p>
          <p className="font-anton mt-3 text-4xl text-flame">
            <CountUpStat value={c.change} decimals={1} suffix="kg" />
          </p>
          <p className="font-sans-jp mt-4 border-t border-iron-600 pt-4 text-sm leading-relaxed text-white-dim">
            {c.context}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
