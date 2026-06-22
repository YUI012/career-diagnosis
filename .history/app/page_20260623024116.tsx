import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        エンジニア働き方
        <br />
        リスク＆適性診断
      </h1>

      <p className="text-lg text-gray-400 mb-8 max-w-md">
        あなたに向いているのは
        <br />
        <span className="font-bold text-white">
          SES？ SIer？ 社内SE？
        </span>
        <br />
        8問・1分で診断できます。
      </p>

      <Link
        href="/quiz"
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition mb-8"
      >
        診断を始める（無料）
      </Link>

      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl p-4 mb-8">
        <h2 className="font-bold mb-4 text-left">診断結果サンプル</h2>

        <div className="mb-3 text-left">
          <div className="flex justify-between text-sm mb-1">
            <span>SES適性</span>
            <span>72%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full rounded-full w-[72%]" />
          </div>
        </div>

        <div className="mb-3 text-left">
          <div className="flex justify-between text-sm mb-1">
            <span>SIer適性</span>
            <span>48%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full w-[48%]" />
          </div>
        </div>

        <div className="text-left">
          <div className="flex justify-between text-sm mb-1">
            <span>社内SE適性</span>
            <span>33%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full rounded-full w-[33%]" />
          </div>
        </div>
      </div>

      <div className="text-gray-400 space-y-3 mb-8">
        <p>⚡ 1分で診断</p>
        <p>📈 キャリアの向き・不向きがわかる</p>
        <p>💰 転職時の参考になる</p>
      </div>

      <p className="text-xs text-gray-500">
        ※診断結果は参考情報です
      </p>
    </div>
  );
}