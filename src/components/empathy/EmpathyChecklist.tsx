"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

const PAIN_POINTS = [
  "何度もダイエットに挑戦しては、リバウンドを繰り返してきた",
  "ジムに入会したものの、気づけば幽霊会員になっていた",
  "自己流のトレーニングで、効果を実感できなかった",
  "一人だと、どうしてもサボってしまう",
  "「本当に自分に合うプログラムがあるのか」半信半疑",
  "仕事が忙しく、続けられる自信がない",
] as const;

/**
 * 「こんな経験ありませんか」チェックリスト。ペルソナの過去の挫折経験を言語化し、
 * 自分ごと化させる（docs/planning.md IA 2.）。テンポよく一つずつ現れる。
 */
export default function EmpathyChecklist() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -16 },
    show: { opacity: 1, x: 0, transition: { duration: shouldReduceMotion ? 0.3 : 0.4, ease: EASE_DRIVE } },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mt-14 max-w-xl space-y-4"
    >
      {PAIN_POINTS.map((point) => (
        <motion.li key={point} variants={item} className="flex items-start gap-3 rounded border border-iron/10 bg-white-soft px-5 py-4">
          <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-flame-deep" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10.5 8 14.5 16 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-sans-jp text-sm leading-relaxed text-iron sm:text-base">{point}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
