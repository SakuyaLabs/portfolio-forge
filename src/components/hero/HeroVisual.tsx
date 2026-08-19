/**
 * Heroセクションの背景ビジュアル。鉄の質感と鍛造の炎をCSS/SVGの抽象表現で見せる。
 * ①NAGI Phase 5の反省点を踏まえ、feTurbulence等の重いフィルターは使わずグラデーションと
 * 極小タイルの線パターンのみで構成し、ラスタライズコストを避ける。
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-iron">
      {/* 鍛造の炎を示す下部のグロー */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_50%_120%,var(--color-flame)_0%,var(--color-iron-700)_45%,var(--color-iron)_80%)] opacity-60" />

      {/* 鉄のブラッシュラインを示す斜線パターン。6x6pxの極小タイルで敷き詰めるため負荷は小さい */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none">
        <defs>
          <pattern id="forge-brush" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-white-clean)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#forge-brush)" />
      </svg>

      {/* 上部を本文に自然に馴染ませるグラデーション */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-iron to-transparent" />
    </div>
  );
}
