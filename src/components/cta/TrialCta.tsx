/**
 * 「無料体験に申し込む」共通CTA。LPの鉄則として、Hero以降の全セクション末尾に反復配置する
 * （docs/planning.md 導線設計）。#final-cta（FinalCTAセクションの申込フォーム）へのアンカーリンク。
 *
 * 配色は白文字ではなく`text-iron`（暗色）を使う：`bg-flame`(#ff4a26)に白文字を重ねると
 * コントラスト比が実測3.05でWCAG AAの4.5:1を満たさないため、実装当初から暗色文字で設計している
 * （②MARUMI Phase 5で発生した「実装後に一括修正」を避けるための対応）。
 */
export default function TrialCta({
  className = "",
  label = "無料体験に申し込む",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="#final-cta"
      className={`font-sans-jp group inline-flex w-fit items-center gap-2 rounded bg-flame px-8 py-4 text-base font-bold text-iron transition-all duration-200 hover:bg-flame-soft hover:scale-[1.02] ${className}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
