export default function TestingLayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Getting better with css grid" />
      <title>CSS Grid</title>
      <link
        rel="shortcut icon"
        href="/images/favicon-32x32.png"
        type="image/x-icon"
      />
      <body>{children}</body>
    </html>
  );
}
