"use client";

import React from "react";
import convertToSubcurrency from "../../../utils/convertToSubcurrency";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

export default function CheckoutPage({ children, amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = React.useState();
  const [clientSerect, setClientSerect] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(
    // async function checkForPayment() {
    //   const requestObj = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    //   };
    //   const response = await fetch(`/api/createPaymentIntent`, requestObj);

    //   const data = await response.json();

    //   if (data) {
    //     setClientSerect(data.clientSerect);
    //   }
    // },
    function checkForPayments() {
      const requestObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      };

      fetch(`/api/createPaymentIntent`, requestObj)
        .then(function getResponse(response) {
          return response.json();
        })
        .then(function getData(data) {
          setClientSerect(data.clientSerect);
        });
    },
    [amount]
  );

  // handle submits
  //   async function handleSubmit(event) {
  //     event.preventDefault();
  //     setLoading(true);

  //     if (!stripe || !elements) {
  //       return;
  //     }

  //     const { error: submitError } = await elements.submit();

  //     if (submitError) {
  //       setErrorMessage(submitError.message);
  //       setLoading(false);
  //       return;
  //     }

  //     // handle confirm payments
  //     const { error } = await stripe.confirmPayment({
  //       elements,
  //       clientSerect,
  //       confirmParams: {
  //         return_url: `http://www.localhost:3000/paymentsuccess?amount=${amount}`,
  //       },
  //     });

  //     // handle error
  //     if (error) {
  //       // This point is only reached if there's an immediate error when
  //       // confirming the payment. Show the error to your customer (for example, payment details incomplete)
  //       setErrorMessage(error.message);
  //     } else {
  //       // The payment UI automatically closes with a success animation.
  //       // Your customer is redirected to your `return_url`.
  //     }
  //   }

  // onSubmit={handleSubmit}

  return (
    <form>
      {clientSerect && <PaymentElement />}

      {errorMessage && <p>{errorMessage}</p>}

      <button disabled={!stripe || loading}>
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
}
