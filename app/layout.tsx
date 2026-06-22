import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

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
      <body className="h-dvh overflow-hidden bg-white text-zinc-900">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5HZBSHHCVT"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5HZBSHHCVT', {
              page_path: window.location.pathname
            });
          `}
        </Script>

        {/* ヘッダー */}
        <header className="fixed top-0 left-0 z-50 w-full bg-black px-6 py-4 flex justify-between items-center">
          
          <div className="font-bold text-white text-lg">
            <Link href="/">エンジニア働き方診断</Link>
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
        <main className="h-dvh overflow-y-auto pt-[72px] pb-[96px] px-6">
          <div className="w-full max-w-3xl mx-auto min-h-full flex items-center justify-center">
            {children}
          </div>
        </main>

        {/* フッター（改善版） */}
        <footer className="fixed bottom-0 left-0 z-50 w-full bg-black text-white text-center text-xs py-4">

          <div>© {new Date().getFullYear()} エンジニア働き方診断</div>

          <div className="mt-1 text-gray-400 space-x-3">
            <Link href="/privacy" className="hover:text-white transition">
              プライバシーポリシー
            </Link>
          </div>

          <div className="mt-1 text-gray-500">
            ※本サービスは情報提供を目的とした診断ツールです
          </div>

        </footer>

      </body>
    </html>
  );
}