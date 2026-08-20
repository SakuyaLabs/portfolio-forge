import FinalCTAForm from "./FinalCTAForm";
import FinalCTAHeading from "./FinalCTAHeading";

/**
 * LP セクション9｜FinalCTA
 * 無料体験申込フォーム（企画書③の技術ポイント「入力項目を最小化」）。
 * 全セクションのTrialCtaが指す最終的な着地点（docs/planning.md IA 9.）。
 */
export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-label="無料体験申込"
      className="relative border-t border-iron-600 bg-iron py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <FinalCTAHeading />
        <FinalCTAForm />
      </div>
    </section>
  );
}
