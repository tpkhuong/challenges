import React from "react";

export default function PricingLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Pricing for Plans" />
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
        <title>Pricing</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
