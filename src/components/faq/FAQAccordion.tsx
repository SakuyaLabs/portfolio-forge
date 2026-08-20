"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { FAQS } from "./faqData";

const EASE_DRIVE = [0.12, 0.7, 0.25, 1] as const;

/**
 * よくある質問のアコーディオン。見出し(h3)+ボタンで開閉し、回答は
 * role="region"のパネルとして関連付ける（<dl>のdt/dd構造は開閉ウィジェットに
 * 適さないため使わない）。
 */
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="mx-auto mt-14 max-w-2xl divide-y divide-iron/10 border-y border-iron/10">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-question-${index}`;
        const panelId = `${baseId}-answer-${index}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="font-sans-jp flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium text-iron sm:text-base"
              >
                {faq.question}
                <span
                  aria-hidden="true"
                  className={`font-anton shrink-0 text-xl text-flame-deep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.3, ease: EASE_DRIVE }}
                  className="overflow-hidden"
                >
                  <p className="font-sans-jp pb-5 text-sm leading-relaxed text-iron-600">{faq.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
