"use client";

// import React from "react";
// import styles from "./StripePayment.module.css";
// import convertToSubcurrency from "../../../utils/convertToSubcurrency.js";
// import CheckoutPage from "../checkoutPage/index.js";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY == undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// export default function StripePayment({ children, userName }) {
//   const amount = 79.99;

//   return (
//     <article>
//       <h1>Hi {userName}!</h1>
//       <p>has requested</p> <span>${amount}</span>
//       <div className={styles[`element-container`]}>
//         <Elements
//           stripe={stripePromise}
//           options={{
//             mode: "payment",
//             amount: convertToSubcurrency(amount),
//             currency: "usd",
//           }}
//         >
//           {/* <CheckoutPage amount={amount} /> */}
//         </Elements>
//       </div>
//     </article>
//   );
// }

/**
 * another approach
 * **/

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "../../../utils/convertToSubcurrency.js";

import CheckoutForm from "../CheckoutForm";
// import checkout Page

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function StripePayment() {
  const amount = 79.99;
  const [clientSecret, setClientSerect] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);

  React.useEffect(function settingConfirmation() {
    setConfirmed(
      new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      )
    );
  });

  React.useEffect(function fetchingData() {
    fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then(function getResponse(response) {
        return response.json();
      })
      .then(function getData(data) {
        setClientSerect(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {confirmed ? <CompletePage /> : <CheckoutForm />}
        </Elements>
      )}
    </div>
  );
}
