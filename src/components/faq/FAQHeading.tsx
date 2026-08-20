"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/** FAQセクションの見出し・リード文。 */
export default function FAQHeading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: EASE_DRIVE }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="font-anton mb-4 text-sm tracking-[0.3em] text-flame-deep uppercase">FAQ</p>
      <h2 className="font-mplus text-3xl leading-[1.3] text-iron sm:text-4xl lg:text-5xl">
        よくある質問。
      </h2>
    </motion.div>
  );
}
