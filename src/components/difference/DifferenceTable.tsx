"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

const ROWS = [
  {
    label: "指導形態",
    forge: "専属トレーナーが毎回マンツーマン",
    other: "器具の説明のみ、あとは自己流",
  },
  {
    label: "プログラム設計",
    forge: "体組成データに基づくオーダーメイド",
    other: "画一的な共通メニュー",
  },
  {
    label: "継続サポート",
    forge: "食事アドバイス＋週次フィードバック",
    other: "入会後のフォローなし",
  },
  {
    label: "契約の縛り",
    forge: "最低契約期間なし、いつでも解約可",
    other: "長期契約が前提",
  },
  {
    label: "効果測定",
    forge: "4週間ごとに体組成・写真を記録",
    other: "測定の機会なし",
  },
] as const;

/**
 * FORGEと一般的なジムの比較表。懐疑的なペルソナに対し、通う場所の雰囲気ではなく
 * 「仕組みの差」を明示して崩す（docs/planning.md IA 3.）。
 */
export default function DifferenceTable() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };

  const row: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.3 : 0.4, ease: EASE_DRIVE } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mt-14 max-w-3xl overflow-x-auto"
    >
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">FORGEと一般的なジムの比較</caption>
        <thead>
          <tr className="border-b border-iron-600">
            <th scope="col" className="font-sans-jp w-1/3 py-4 pr-4 text-xs font-normal text-white-dim">
              比較項目
            </th>
            <th scope="col" className="font-anton w-1/3 rounded-t bg-flame px-4 py-4 text-sm tracking-wide text-iron uppercase">
              FORGE
            </th>
            <th scope="col" className="font-sans-jp w-1/3 py-4 pl-4 text-xs font-normal text-white-dim">
              一般的なジム
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <motion.tr key={r.label} variants={row} className="border-b border-iron-600">
              <th scope="row" className="font-sans-jp py-4 pr-4 text-sm font-medium text-white-clean">
                {r.label}
              </th>
              <td className="bg-flame/10 px-4 py-4">
                <span className="flex items-start gap-2 text-sm text-white-clean">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-flame" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10.5 8 14.5 16 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {r.forge}
                </span>
              </td>
              <td className="py-4 pl-4 text-sm text-white-dim">{r.other}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
