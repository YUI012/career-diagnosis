import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        社内SEに向いている人の特徴と働き方
      </h1>

      <p className="text-gray-700 mb-4">
        社内SEは自社システムの運用・改善を行うため、働きやすさ重視の人に人気です。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">向いている人</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>安定した環境で働きたい</li>
        <li>社内調整が得意</li>
        <li>ワークライフバランス重視</li>
      </ul>

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