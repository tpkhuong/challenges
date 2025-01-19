import { loadStripe } from "@stripe/stripe-js";
// import Stripe from "stripe";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import React from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function EmbeddedStripePayment({ children }) {
  /**
   * uncomment later
   * **/

  // const fetchClientSecret = React.useCallback(function createCheckout() {
  //   // Create a Checkout Session
  //   return fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions`, {
  //     method: "POST",
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     // },
  //     // body: JSON.stringify({ priceId: "price_1234" }),
  //   })
  //     .then(function getResponse(response) {
  //       return response.json();
  //     })
  //     .then(function getData(data) {
  //       return data.clientSecret;
  //     });
  // }, []);

  // const options = { fetchClientSecret };

  /**
   * uncomment later
   * **/

  return (
    <div>
      <button onClick={getCheckout}>Testing Price Obj</button>
      {/* <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider> */}
    </div>
  );
}

async function getCheckout(event) {
  /**
   * get price obj
   * **/

  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // const priceObj = await stripe.prices.create({
  //   currency: "usd",
  //   unit_amount: 300,
  //   product_data: {
  //     name: "Premium Hair",
  //   },
  // });

  /**
   * get price obj
   * **/
  // const responseObj = {
  //   priceObj,
  // };
  const methodObj = {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(responseObj),
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions`,
    methodObj
  );

  if (response) {
    const data = await response.json();

    console.log(data, "checkout data");
  }
}

// function Cars() {
//   const name = this.name;
//   const make = this.make;
//   const price = this.price;

//   // console.log()
//   console.log(name);
//   console.log(make);
//   console.log(price);
// }

// console.log(
//   Cars.call({ name: "Accord", make: "Honda", price: "$35,000" }).name
// );
