"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/**
 * スクロールで画面に入ったタイミングで0から目標値までカウントアップする数字。
 * framer-motionのuseInView(Intersection Observer)と連動する（企画書③の技術ポイント）。
 * prefers-reduced-motion環境ではアニメーションせず即座に最終値を表示する。
 */
export default function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE_DRIVE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value, shouldReduceMotion]);

  // reduced-motion環境ではアニメーション状態を経由せず、レンダー時に直接最終値を使う
  // （setStateをeffect本体で同期的に呼ばないようにするため）。
  const numeric = shouldReduceMotion ? value : display;
  const formatted = decimals > 0 ? numeric.toFixed(decimals) : Math.round(numeric).toLocaleString("ja-JP");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
