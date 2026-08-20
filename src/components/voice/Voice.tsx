import TrialCta from "@/components/cta/TrialCta";
import VoiceCards from "./VoiceCards";
import VoiceHeading from "./VoiceHeading";

/**
 * LP セクション7｜Voice（お客様の声）
 * 同じ悩みを持っていた人の声で、自分ごと化を後押しする（docs/planning.md IA 7.）。
 */
export default function Voice() {
  return (
    <section
      id="voice"
      aria-label="お客様の声"
      className="relative border-t border-iron-600 bg-iron py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <VoiceHeading />
        <VoiceCards />

        <div className="mt-12 text-center">
          <TrialCta />
        </div>
      </div>
    </section>
  );
}
