import Difference from "@/components/difference/Difference";
import Empathy from "@/components/empathy/Empathy";
import FAQ from "@/components/faq/FAQ";
import FinalCTA from "@/components/final-cta/FinalCTA";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Results from "@/components/results/Results";
import Trainers from "@/components/trainers/Trainers";
import Voice from "@/components/voice/Voice";

// 構造化データ(schema.org ExerciseGym)。noindex設定のため検索結果には出ないが、
// 実装として正しい構造化データを備えていることをポートフォリオ上でも示す（CLAUDE.md技術要件）。
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "パーソナルジム FORGE",
  description:
    "専属トレーナーによるマンツーマン指導のパーソナルジム。無料体験実施中。Concept Project by SakuyaLabs。",
  priceRange: "¥¥",
  url: "https://forge.sakuyalabs.com",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Empathy />
        <Difference />
        <Trainers />
        <Results />
        <Pricing />
        <Voice />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
