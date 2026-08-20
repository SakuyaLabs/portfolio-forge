export type ResultCase = {
  profile: string;
  duration: string;
  change: number;
  context: string;
};

/**
 * 実績事例。実在の会員の写真は使わず、属性と数値・背景情報のみで構成する
 * （docs/planning.md ビジュアル素材の方針）。減量ペースはいずれも週0.5〜0.6kg程度に収め、
 * 誇張した数値にならないよう配慮している。
 */
export const RESULTS_CASES: ResultCase[] = [
  {
    profile: "30代・男性",
    duration: "16週間",
    change: -9.2,
    context: "残業続きで不規則な生活から、週2回のトレーニングで達成。",
  },
  {
    profile: "40代・女性",
    duration: "12週間",
    change: -5.4,
    context: "産後の体型戻しを目標に。無理のないペースで継続。",
  },
  {
    profile: "20代・男性",
    duration: "20週間",
    change: -12.1,
    context: "自己流のジム通いから乗り換え、食事指導も並行して実施。",
  },
];
