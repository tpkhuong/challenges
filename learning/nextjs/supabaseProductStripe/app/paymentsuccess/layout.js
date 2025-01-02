import React from "react";

export default function PaymentSuccessLayout({ children }) {
  return (
    <html lang="us">
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Building Stripe Payment" />
        <meta
          name="viewpoint"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
