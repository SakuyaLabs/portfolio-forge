import CountUpStat from "./CountUpStat";

const STATS = [
  { value: 94, suffix: "%", label: "会員継続率" },
  { value: -6.2, decimals: 1, suffix: "kg", label: "平均減量値 / 12週間" },
  { value: 1200, suffix: "名+", label: "指導実績" },
] as const;

/**
 * 会員継続率・平均減量値・指導実績をカウントアップ演出で見せる（docs/planning.md IA 5.）。
 */
export default function ResultsStats() {
  return (
    <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-anton text-5xl text-flame sm:text-6xl">
            <CountUpStat value={stat.value} suffix={stat.suffix} decimals={"decimals" in stat ? stat.decimals : 0} />
          </p>
          <p className="font-sans-jp mt-3 text-sm tracking-wide text-white-dim">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
