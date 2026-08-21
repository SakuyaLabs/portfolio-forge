import type { Metadata } from "next";
import { Anton, M_PLUS_1p, Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton-google",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const mplus1p = M_PLUS_1p({
  variable: "--font-mplus-1p",
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forge.sakuyalabs.com"),
  alternates: { canonical: "/" },
  title: "パーソナルジム FORGE | 無料体験実施中",
  description:
    "本気で変わりたい人の伴走者、パーソナルジムFORGE。専属トレーナーによるマンツーマン指導で、確かな結果を。まずは無料体験から。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "パーソナルジム FORGE",
    description: "本気で変わりたい人の伴走者。まずは無料体験から。",
    siteName: "パーソナルジム FORGE",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "パーソナルジム FORGE",
    description: "本気で変わりたい人の伴走者。まずは無料体験から。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${anton.variable} ${mplus1p.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white-clean text-iron">
        {children}
        <Footer />
      </body>
    </html>
  );
}
