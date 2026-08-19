"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import TrialCta from "@/components/cta/TrialCta";
import HeroTransform from "./HeroTransform";

const STATEMENT_LINES = ["続かなかった過去を、", "終わらせる。"];
const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/**
 * ブランドステートメント＋CTA。①NAGIの「間」、②MARUMIの「活気」よりさらに前のめりな
 * テンポで一気に立ち上げる（docs/planning.md Phase 2）。
 */
export default function HeroStatement() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08, delayChildren: shouldReduceMotion ? 0 : 0.05 },
    },
  };

  const line: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.3 : 0.5, ease: EASE_DRIVE } },
  };

  return (
    <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 sm:pb-20 lg:px-20 lg:pb-24">
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.4, ease: EASE_DRIVE }}
        className="font-anton mb-4 text-sm tracking-[0.3em] text-flame uppercase"
      >
        Personal Gym Forge
      </motion.p>

      <motion.h1 variants={container} initial="hidden" animate="show" className="max-w-2xl">
        {STATEMENT_LINES.map((text) => (
          <motion.span
            key={text}
            variants={line}
            className="font-mplus block text-4xl leading-[1.3] text-white-clean sm:text-5xl lg:text-6xl"
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.4, delay: shouldReduceMotion ? 0 : 0.35, ease: EASE_DRIVE }}
        className="font-sans-jp mt-6 max-w-md text-sm leading-relaxed text-white-dim sm:text-base"
      >
        無料体験でわかるのは、雰囲気だけじゃない。専属トレーナーが、あなたが本当に変われるかを一緒に確かめます。
      </motion.p>

      <HeroTransform />

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.4, delay: shouldReduceMotion ? 0 : 0.6, ease: EASE_DRIVE }}
        className="mt-8"
      >
        <TrialCta label="無料体験に申し込む（60分）" />
        <p className="font-sans-jp mt-3 text-xs text-white-dim">体験後の強引な勧誘は一切ありません</p>
      </motion.div>
    </div>
  );
}
