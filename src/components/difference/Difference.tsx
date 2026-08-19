import TrialCta from "@/components/cta/TrialCta";
import DifferenceHeading from "./DifferenceHeading";
import DifferenceTable from "./DifferenceTable";

/**
 * LP セクション3｜Difference（差別化）
 * 他ジムとの違いを比較表で明示し、懐疑的なペルソナの「本当に変われるのか」を崩す
 * （docs/planning.md IA 3.）。
 */
export default function Difference() {
  return (
    <section
      id="difference"
      aria-label="他ジムとの違い"
      className="relative border-t border-iron-600 bg-iron py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <DifferenceHeading />
        <DifferenceTable />

        <div className="mt-12 text-center">
          <TrialCta />
        </div>
      </div>
    </section>
  );
}
