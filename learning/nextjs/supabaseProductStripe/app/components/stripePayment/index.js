"use client";

import React from "react";
import styles from "./StripePayment.module.css";
import convertToSubcurrency from "../../../utils/convertToSubcurrency.js";
import CheckoutPage from "../checkoutPage/index.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY == undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function StripePayment({ children, userName }) {
  const amount = 79.99;

  return (
    <article>
      <h1>Hi {userName}!</h1>
      <p>has requested</p> <span>${amount}</span>
      <div className={styles[`element-container`]}>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
          }}
        >
          {/* <CheckoutPage amount={amount} /> */}
        </Elements>
      </div>
    </article>
  );
}
