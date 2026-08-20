"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { TRAINERS } from "./trainersData";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/**
 * トレーナー紹介カード。写真は使わず、姓の一文字を円形モノグラムとして扱う
 * （①NAGIのStylistVisualと同じ方針）。
 */
export default function TrainersGrid() {
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
      className="mt-14 grid gap-6 sm:grid-cols-3"
    >
      {TRAINERS.map((trainer) => (
        <motion.li
          key={trainer.name}
          variants={card}
          className="flex flex-col items-center rounded border border-iron/10 bg-white-soft p-6 text-center sm:p-7"
        >
          <span
            aria-hidden="true"
            className="font-mplus flex h-20 w-20 items-center justify-center rounded-full bg-flame text-3xl text-iron"
          >
            {trainer.monogram}
          </span>

          <h3 className="font-mplus mt-5 text-lg text-iron">{trainer.name}</h3>
          <p className="font-sans-jp mt-1 text-xs tracking-wide text-flame-deep">{trainer.role}</p>
          <p className="font-sans-jp mt-3 text-xs text-iron-600">{trainer.credential}</p>

          <p className="font-sans-jp mt-4 border-t border-iron/10 pt-4 text-sm leading-relaxed text-iron-600">
            {trainer.quote}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
