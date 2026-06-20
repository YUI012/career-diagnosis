import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        SESエンジニアに向いている人の特徴と適性診断
      </h1>

      <p className="text-gray-700 mb-4">
        SESはスキルアップが早い一方で、現場によって環境差が大きい働き方です。
        向いている人・向いていない人の特徴を解説します。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">SESに向いている人</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>短期間でスキルを伸ばしたい</li>
        <li>現場経験を積みたい</li>
        <li>環境変化に抵抗がない</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">注意点</h2>
      <p className="text-gray-700">
        案件によって働き方が変わるため、キャリア設計が重要です。
      </p>

      <div className="mt-6">
        <Link
          href="/quiz"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          適性診断を受ける
        </Link>
      </div>
    </main>
  );
}