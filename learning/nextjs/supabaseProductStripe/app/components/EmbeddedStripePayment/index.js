import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import React from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function EmbeddedStripePayment({ children }) {
  const fetchClientSecret = React.useCallback(function createCheckout() {
    // Create a Checkout Session
    return fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: "price_10thHjwerkwhEhtuh" }),
    })
      .then(function getResponse(response) {
        return response.json();
      })
      .then(function getData(data) {
        data.clientSecret;
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <div>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
