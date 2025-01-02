import React from "react";

export default function PaymentSuccess({ chilren, searchParams }) {
  const { amount } = searchParams;
  return (
    <article>
      <h2>Thank you!</h2>
      <p>You Successfully sent</p>
      <p>${amount}</p>
    </article>
  );
}
