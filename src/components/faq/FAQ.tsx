import TrialCta from "@/components/cta/TrialCta";
import FAQAccordion from "./FAQAccordion";
import FAQHeading from "./FAQHeading";

/**
 * LP セクション8｜FAQ
 * 申込前の不安を先回りで解消する（docs/planning.md IA 8.）。
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="よくある質問"
      className="relative border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <FAQHeading />
        <FAQAccordion />

        <div className="mt-12 text-center">
          <TrialCta />
        </div>
      </div>
    </section>
  );
}
