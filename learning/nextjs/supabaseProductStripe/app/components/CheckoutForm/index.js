import React from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.precentDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmAffirmPayment({
      elements,
      confirmParams: {
        return_url: "https://localhost:3000/paymentsuccess",
      },
    });

    if (error.type == "card_error" || error.type == "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  }

  const PaymentElementOptions = {
    layout: "accordion",
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={PaymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements}>
        <span>{isLoading ? <p>Loading...</p> : "Pay now"}</span>
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}
