import React from "react";

export default function WebDesignLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Designo Web Design Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
