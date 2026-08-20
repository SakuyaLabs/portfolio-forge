/**
 * サイトフッター。①②と異なりページ内ナビゲーションは持たない（LPの型、docs/planning.md
 * 意思決定ログ）。実在店舗との誤認を避けるための「Concept Project by SakuyaLabs」表記のみを
 * 常時表示する（企画書4-2）。
 */
export default function Footer() {
  return (
    <footer className="border-t border-iron-600 bg-iron py-10">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-12 lg:px-20">
        <p className="font-anton text-lg tracking-wide text-white-clean">FORGE</p>
        <p className="font-sans-jp mt-3 text-xs leading-relaxed text-white-dim">
          本サイトは
          <a
            href="https://sakuyalabs.com"
            className="mx-1 text-flame-soft underline decoration-white-dim/30 underline-offset-4 transition-colors hover:text-white-clean"
          >
            SakuyaLabs
          </a>
          によるポートフォリオ用のConcept Project（架空案件）です。実在のジムではありません。
        </p>
        <p className="font-sans-jp mt-4 text-xs text-white-dim">
          © {new Date().getFullYear()} FORGE — Concept Project
        </p>
      </div>
    </footer>
  );
}
