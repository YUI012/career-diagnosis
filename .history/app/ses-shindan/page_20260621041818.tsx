import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        SESはやめとけと言われる理由と向いている人
      </h1>

      <p className="text-gray-600 mb-6 leading-relaxed">
        SESはスキル成長が早い一方で、案件によって働き方の差が大きい働き方です。
      </p>

      <h2 className="text-xl font-semibold mb-3">向いている人</h2>
      <ul className="space-y-2 mb-6">
        <li className="bg-gray-50 p-3 rounded-lg border">短期間で経験を積みたい</li>
        <li className="bg-gray-50 p-3 rounded-lg border">環境変化に抵抗がない</li>
        <li className="bg-gray-50 p-3 rounded-lg border">現場経験を重視したい</li>
      </ul>

      <Link
        href="/quiz"
        className="block text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
      >
        適性診断を受ける
      </Link>
    </>
  );
}