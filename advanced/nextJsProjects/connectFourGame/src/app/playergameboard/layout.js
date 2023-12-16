export default function GameLayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta
        name="description"
        content="Game of connect four between two players"
      />
      <title>Player versus Player</title>
      <link
        rel="shortcut icon"
        href="/images/favicon-32x32.png"
        type="image/x-icon"
      />
      <body>{children}</body>
    </html>
  );
}
