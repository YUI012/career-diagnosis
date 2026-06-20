import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">

      {/* メインタイトル */}
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        エンジニア働き方<br />
        リスク＆適性診断
      </h1>

      {/* サブコピー */}
      <p className="text-gray-600 mb-6 max-w-md">
        SES・SIer・社内SEの中で「あなたが一番損しない働き方」を
        1分で診断します。
      </p>

      {/* メリット */}
      <div className="text-sm text-gray-500 mb-8 space-y-1">
        <p>✔ 現役エンジニア監修の簡易診断</p>
        <p>✔ キャリアの向き・不向きがわかる</p>
        <p>✔ 3択でサクッと診断（1分）</p>
      </div>

      {/* CTAボタン */}
      <Link
        href="/quiz"
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl font-medium transition"
      >
        診断を始める（無料）
      </Link>

      {/* 補足 */}
      <p className="text-xs text-gray-400 mt-6">
        ※診断結果はあくまで参考情報です
      </p>

    </main>
  );
}