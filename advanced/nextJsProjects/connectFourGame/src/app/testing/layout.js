export default function TestingLayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Testing Stuff" />
      <title>Testing Page</title>
      <link
        rel="shortcut icon"
        href="/images/favicon-32x32.png"
        type="image/x-icon"
      />
      <body>{children}</body>
    </html>
  );
}
