import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur border-b shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="font-bold text-blue-600">
        エンジニア働き方診断
      </div>

      <nav className="text-sm text-gray-600 flex gap-4">
        <Link href="/">ホーム</Link>
        <Link href="/quiz">診断</Link>
      </nav>
    </header>
  );
}