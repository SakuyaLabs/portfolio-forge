import HeroStatement from "./HeroStatement";
import HeroVisual from "./HeroVisual";

/**
 * LP セクション1｜Hero
 * ビフォーアフター訴求＋無料体験CTAをファーストビューで完結させる（docs/planning.md IA 1.）。
 */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="パーソナルジム FORGE ブランドステートメント"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-iron"
    >
      <HeroVisual />
      <HeroStatement />
    </section>
  );
}
