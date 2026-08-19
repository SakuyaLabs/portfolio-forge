import TrialCta from "@/components/cta/TrialCta";
import EmpathyChecklist from "./EmpathyChecklist";
import EmpathyHeading from "./EmpathyHeading";

/**
 * LP セクション2｜Empathy（悩み共感）
 * 「こんな経験ありませんか」をチェックリスト形式で自分ごと化させる（docs/planning.md IA 2.）。
 * LPの鉄則として、セクション末尾に無料体験CTAを反復配置する。
 */
export default function Empathy() {
  return (
    <section
      id="empathy"
      aria-label="こんな経験ありませんか"
      className="relative border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <EmpathyHeading />
        <EmpathyChecklist />

        <div className="mx-auto mt-12 max-w-xl text-center">
          <p className="font-sans-jp mb-6 text-sm leading-relaxed text-iron-600 sm:text-base">
            一つでも当てはまるなら、原因はあなたの意志ではなく「やり方」です。
          </p>
          <TrialCta />
        </div>
      </div>
    </section>
  );
}
