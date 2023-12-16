import "../styles/global.css";

// export
export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Building Next Js App" />
      <title>Connect Four</title>
      <link
        rel="shortcut icon"
        href="/images/favicon-32x32.png"
        type="image/x-icon"
      />
      <body>{children}</body>
    </html>
  );
}
