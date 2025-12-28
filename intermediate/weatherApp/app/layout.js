import React from "react";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Building Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <title>Weather App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
