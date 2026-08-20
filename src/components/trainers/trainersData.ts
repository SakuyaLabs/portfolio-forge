export type Trainer = {
  monogram: string;
  name: string;
  role: string;
  credential: string;
  quote: string;
};

/**
 * FORGEのトレーナー陣。写真の代わりに姓の一文字をモノグラムとして扱い、
 * 経歴と本人の言葉で信頼を構築する（①NAGIのStylistVisualと同じ方針。docs/planning.md IA 4.）。
 */
export const TRAINERS: Trainer[] = [
  {
    monogram: "高",
    name: "高橋 蓮",
    role: "未経験者専門コーチ",
    credential: "NSCA-CPT / 指導実績500名以上",
    quote: "「本気だけど、怖くない」を大切にしています。続けられなかった人ほど、歓迎です。",
  },
  {
    monogram: "佐",
    name: "佐々木 大輝",
    role: "減量特化トレーナー",
    credential: "ボディメイクコンテスト入賞歴あり",
    quote: "食事指導まで含めて伴走します。トレーニングだけでは、結果は半分しか出ません。",
  },
  {
    monogram: "中",
    name: "中村 遥",
    role: "怪我・ブランク復帰サポート",
    credential: "理学療法士資格保有",
    quote: "体の状態を見てからメニューを組みます。無理をさせない指導が得意です。",
  },
];
