import React from "react";

export default function FeaturesLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Features Page" />
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
        <title>Features Page</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
