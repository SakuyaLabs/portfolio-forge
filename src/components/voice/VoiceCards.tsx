"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { VOICES } from "./voiceData";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/** お客様の声カード。①NAGI・②MARUMIと同じ、motion.ul直下にmotion.liを置くスタガー表示。 */
export default function VoiceCards() {
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
      {VOICES.map((voice) => (
        <motion.li key={voice.attribute} variants={card} className="rounded border border-iron-600 bg-iron-800 p-6">
          <span aria-hidden="true" className="font-anton text-4xl text-flame">
            &ldquo;
          </span>
          <p className="font-sans-jp mt-2 text-sm leading-relaxed text-white-clean">{voice.quote}</p>
          <p className="font-sans-jp mt-5 border-t border-iron-600 pt-4 text-xs tracking-wide text-white-dim">
            {voice.attribute}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
