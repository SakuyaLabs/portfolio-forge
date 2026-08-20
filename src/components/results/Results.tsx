import TrialCta from "@/components/cta/TrialCta";
import ResultsCases from "./ResultsCases";
import ResultsHeading from "./ResultsHeading";
import ResultsStats from "./ResultsStats";

/**
 * LP セクション5｜Results（実績）
 * ビフォーアフター実例＋数字（継続率・平均減量値）のカウントアップで証拠を示す
 * （docs/planning.md IA 5.）。
 */
export default function Results() {
  return (
    <section
      id="results"
      aria-label="実績"
      className="relative border-t border-iron-600 bg-iron py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <ResultsHeading />
        <ResultsStats />
        <ResultsCases />

        <div className="mt-12 text-center">
          <TrialCta />
        </div>
      </div>
    </section>
  );
}
