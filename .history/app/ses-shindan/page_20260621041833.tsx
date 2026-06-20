export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        SESはやめとけと言われる理由と向いている人の特徴
      </h1>

      <p className="text-gray-700 mb-4">
        SESはスキルが伸びやすい一方で、現場によって働き方の差が大きい働き方です。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        SESに向いている人
      </h2>

      <ul className="list-disc pl-6 text-gray-700">
        <li>短期間で経験を積みたい</li>
        <li>環境変化に抵抗がない</li>
        <li>現場経験を重視したい</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        注意点
      </h2>

      <p className="text-gray-700">
        案件によって環境差が大きいため、キャリア設計が重要です。
      </p>

      <a
        href="/quiz"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        適性診断でキャリアを見る
      </a>
    </main>
  );
}