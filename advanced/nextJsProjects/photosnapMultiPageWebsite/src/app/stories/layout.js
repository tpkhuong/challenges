import React from "react";

export default function StoriesLayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="KhuongCorp" />
      <meta name="description" content="Stories Section" />
      <title>Hazy Full Moon of Appalachia</title>
      <body>{children}</body>
    </html>
  );
}
