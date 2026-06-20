export default function Footer() {
  return (
    <footer className="w-full border-t bg-white text-center text-xs text-gray-500 py-4">
      <div>© {new Date().getFullYear()} エンジニア働き方診断</div>
      <div className="mt-1">
        ※本サービスは情報提供を目的とした診断ツールです
      </div>
    </footer>
  );
}