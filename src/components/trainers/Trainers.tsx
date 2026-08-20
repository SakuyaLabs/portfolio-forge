import TrialCta from "@/components/cta/TrialCta";
import TrainersGrid from "./TrainersGrid";
import TrainersHeading from "./TrainersHeading";

/**
 * LP セクション4｜Trainers（トレーナー紹介）
 * 顔と実績で信頼を担保する（docs/planning.md IA 4.）。写真は使わず、モノグラムと経歴・
 * 本人の言葉で人柄を伝える。
 */
export default function Trainers() {
  return (
    <section
      id="trainers"
      aria-label="トレーナー紹介"
      className="relative border-t border-iron/10 bg-white-soft py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <TrainersHeading />
        <TrainersGrid />

        <div className="mt-12 text-center">
          <TrialCta />
        </div>
      </div>
    </section>
  );
}
