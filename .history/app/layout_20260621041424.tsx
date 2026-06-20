export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}