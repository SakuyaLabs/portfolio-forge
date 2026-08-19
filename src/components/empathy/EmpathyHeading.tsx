"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/** Empathyセクションの見出し・リード文。中央寄せで、下に続くチェックリストへ視線を落とす。 */
export default function EmpathyHeading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: EASE_DRIVE }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="font-anton mb-4 text-sm tracking-[0.3em] text-flame-deep uppercase">Empathy</p>
      <h2 className="font-mplus text-3xl leading-[1.3] text-iron sm:text-4xl lg:text-5xl">
        こんな経験、
        <br />
        ありませんか？
      </h2>
      <p className="font-sans-jp mx-auto mt-6 max-w-md text-sm leading-relaxed text-iron-600 sm:text-base">
        あなたが変われなかったのは、意志が弱いからではありません。合う方法に、まだ出会っていないだけです。
      </p>
    </motion.div>
  );
}
