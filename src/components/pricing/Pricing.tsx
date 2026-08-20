import PricingHeading from "./PricingHeading";
import PricingPlan from "./PricingPlan";

/**
 * LP セクション6｜Pricing（料金）
 * あえてシンプルな1プランのみを提示し、比較検討による離脱を防ぐ（docs/planning.md IA 6.）。
 */
export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="料金"
      className="relative border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <PricingHeading />
        <PricingPlan />
      </div>
    </section>
  );
}
