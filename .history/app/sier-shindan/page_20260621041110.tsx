import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        SIerに向いている人の特徴とキャリア適性
      </h1>

      <p className="text-gray-700 mb-4">
        SIerは大規模システム開発や上流工程に関わる安定したキャリアが特徴です。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">向いている人</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>チーム開発が好き</li>
        <li>安定志向</li>
        <li>上流工程に興味がある</li>
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