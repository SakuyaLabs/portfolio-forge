# Project: パーソナルジム FORGE

> このファイルは `sakuyalabs_portfolio_plan.md`(SakuyaLabs Web Portfolio Project 企画書)のCLAUDE.md雛形をFORGE用に埋めたものです。
> 11案件中③で、証明する能力軸は「LPライティング×CVR設計」。①NAGI（予約UI実装力）・②MARUMI（情報設計・導線集客）とは異なり、
> 「HP」ではなく「売るためのLP」を作れることの証明が本案件の中心。複雑な機能実装よりも、セクション設計・コピー・
> 反復CTA配置の意思決定に実装の重心を置く。
> 詳細な要件定義・IA・意思決定ログは `docs/planning.md` を参照してください。

## クライアント概要
- 業種：パーソナルジム（無料体験からの入会LTV最大化モデル）
- 屋号：パーソナルジム FORGE
- ターゲットペルソナ：30代男性。過去にダイエット・ジム通いで挫折した経験がある。「今度こそ変われるのか」に懐疑的で、
  通いやすさより「本当に結果が出るか」の証拠を求めている。
- ゴール（CV地点）：無料体験申込フォームの送信

## デザインルール
- カラー（`src/app/globals.css` の `@theme` に定義）：
  - Primary（鉄黒）: `--color-iron: #141414`
  - Secondary（クリーンホワイト）: `--color-white-clean: #F5F4F1`
  - Accent（鍛造の炎）: `--color-flame: #FF4A26`
  - Neutralは`iron`から派生したグレースケール
  - コントラスト比はWCAG AA(4.5:1)を配色ペアごとに実装時点で検証する。暗背景用と明背景用でaccentのシェードを
    分ける（②MARUMI Phase 5の反省点：明るい背景に明るいaccentを使いコントラスト比未達になったため）
- フォント（`next/font/google`）：
  - 見出し欧文：Anton（`--font-anton`。極太コンデンスでインパクト重視）
  - 見出し和文：M PLUS 1p Black（`--font-mplus`。①NAGIの明朝・②MARUMIの角ゴシックよりさらに力強く）
  - 本文：Noto Sans JP（`--font-sans-jp`）
- 余白の基準：8pxグリッド／セクション間 64px（①②よりタイトに、LPらしいテンポの速さを出す）
- ボタン：角丸は最小限（4px程度）。大きく・太く・押しやすく。ホバーは彩度アップ／わずかな拡大

## 技術スタック
- Next.js 16 (App Router) / TypeScript / Tailwind CSS v4（CSS-first設定）
- アニメーション：Framer Motion（数字カウントアップはIntersection Observer連動。間を置かず素早く立ち上がるテンポ）
- フォーム：React Hook Form + Zod（無料体験申込フォーム。氏名・電話・希望日時の最小フィールド構成）
- ビジュアル素材：写真は使用せず、CSS/SVGによる抽象ビジュアル（鉄の質感・炎のグラデーション・筋繊維を思わせる線）
  で世界観を表現する（①②と共通方針）

## 実装時の絶対ルール
- コンポーネントは Atomic に分割し、1ファイル1責務
- 写真を使う場合は必ず `next/image`（今回は未使用の想定）
- アクセシビリティ：全インタラクティブ要素にフォーカスリング、`prefers-reduced-motion` 対応必須
- `<dl>` を使う場合は dt/dd を div でラップしない（Fragmentでグループ化。①NAGI Phase 5の反省点）
- SVGフィルター（feTurbulence等）は使う場合、小タイル化して `<pattern>` で敷き詰める（①NAGI Phase 5の反省点）
- 配色を決めた時点で、暗背景・明背景それぞれに使うaccent系テキストのコントラスト比を計算して確認する
  （②MARUMI Phase 5の反省点。実装後に一括修正するのではなく、最初から両対応のトークンを用意する）
- 各ページに `<h1>` を最初から正しく設定する
- レスポンシブは 375 / 768 / 1440 の3ブレークポイントで確認
- Lighthouse スコア：Performance 90+ / Accessibility 95+ を最低ライン
- 実装はセクション単位（Hero→Empathy→Difference→Trainers→Results→Pricing→Voice→FAQ→FinalCTA）で進め、
  1セクションごとにブラウザで確認してから次に進む
- 各セクション末尾に「無料体験に申し込む」CTAを反復配置する（企画書③の技術ポイント「LPの鉄則」）
- ページ内ナビゲーションメニューは実装しない（①②と異なり、縦一本道で読ませるLPの型）
- サイト内（FinalCTA直後等）に `Concept Project by SakuyaLabs` を必ず明示する
- 構造化データは `ExerciseGym`（schema.org）をJSON-LDで実装する

## 参照
- 企画書全体：`../sakuyalabs_portfolio_plan.md`
- ①NAGI・②MARUMIの実装（テンプレートの参照元）：`../01 美容院/`, `../02 飲食店/`
- Next.js 16 固有の破壊的変更に関する注意：`@AGENTS.md`

@AGENTS.md
