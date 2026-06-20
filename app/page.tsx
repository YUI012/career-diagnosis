import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        エンジニア働き方リスク診断
      </h1>

      <p className="text-gray-600 mb-6">
        SES / SIer / 社内SE あなたの働き方リスクと適性を診断します（3分）
      </p>

      <Link
        href="/quiz"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        診断を始める
      </Link>
    </main>
  );
}