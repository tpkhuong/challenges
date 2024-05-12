import React from "react";

export default function TestLayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Learning" />
      <title>Testing Page</title>
      <body>{children}</body>
    </html>
  );
}
