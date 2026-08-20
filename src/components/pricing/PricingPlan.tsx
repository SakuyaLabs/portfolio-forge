"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import TrialCta from "@/components/cta/TrialCta";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

const FEATURES = [
  "全16回（週2回 × 8週間）のマンツーマン指導",
  "食事指導＋LINEでの日々のサポート",
  "4週間ごとの体組成計測",
  "契約期間の縛りなし、途中解約時は未消化分を返金",
  "入会金は今なら無料",
] as const;

/**
 * 単一プランの料金カード。比較検討による離脱を防ぐため、あえてプランを一つに絞る
 * （docs/planning.md IA 6.）。
 */
export default function PricingPlan() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.3 : 0.4, ease: EASE_DRIVE } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mt-14 max-w-lg rounded border border-iron/10 bg-white-clean p-8 text-center sm:p-10"
    >
      <motion.p variants={item} className="font-sans-jp text-xs tracking-[0.2em] text-flame-deep uppercase">
        2ヶ月集中コース
      </motion.p>

      <motion.p variants={item} className="font-anton mt-4 text-6xl text-iron sm:text-7xl">
        ¥198,000
      </motion.p>
      <motion.p variants={item} className="font-sans-jp mt-2 text-xs text-iron-600">
        税込・分割払い可
      </motion.p>

      <motion.ul variants={container} className="mt-8 space-y-3 text-left">
        {FEATURES.map((feature) => (
          <motion.li key={feature} variants={item} className="flex items-start gap-3">
            <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-flame-deep" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10.5 8 14.5 16 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-sans-jp text-sm leading-relaxed text-iron">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p variants={item} className="font-sans-jp mt-8 text-xs leading-relaxed text-iron-600">
        表示価格がすべてです。追加費用は一切ありません。
      </motion.p>

      <motion.div variants={item} className="mt-6">
        <TrialCta label="無料体験でプランの詳細を聞く" />
      </motion.div>
    </motion.div>
  );
}
