import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "エンジニア働き方適性診断",
  description: "SES / SIer / 社内SEの適性を診断できます",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden flex flex-col bg-white text-zinc-900">

        {/* ヘッダー（修正版） */}
        <header className="w-full bg-black px-6 py-4 flex justify-between items-center">
          
          <div className="font-bold text-white text-lg">
            <Link href="/">
              エンジニア診断
            </Link>
          </div>

          <nav className="text-sm text-gray-300 flex gap-5">
            <Link href="/" className="hover:text-white transition">
              ホーム
            </Link>
            <Link href="/quiz" className="hover:text-white transition">
              診断
            </Link>
          </nav>

        </header>

        {/* メイン */}
        <main className="flex-1 flex items-center justify-center p-6 overflow-hidden">
          <div className="w-full max-w-3xl">
            {children}
          </div>
        </main>

        {/* フッター（黒） */}
        <footer className="w-full bg-black text-white text-center text-xs py-4">
          <div>© {new Date().getFullYear()} エンジニア働き方診断</div>
          <div className="mt-1 text-gray-400">
            ※本サービスは情報提供を目的とした診断ツールです
          </div>
        </footer>

      </body>
    </html>
  );
}