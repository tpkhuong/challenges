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

  /**
   * Testing
   * **/

  // const [showTesting, setShowTesting] = React.useState(null);
  // console.log(showTesting);
  // const testingFunc = getCheckout.bind({ setShowTesting });

  /**
   * Testing
   * **/

  return (
    <div>
      {/* <button onClick={testingFunc}>Testing Price Obj</button> */}
      {/* <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider> */}
      <TestingButton></TestingButton>
      {/* {showTesting && showTesting.success && (
        <ShowObjElement testObj={showTesting.options}>
          {showTesting.name}
        </ShowObjElement>

        // <EmbeddedCheckoutProvider
        //   stripe={stripePromise}
        //   options={showTesting.options}
        // >
        //   <EmbeddedCheckout />
        // </EmbeddedCheckoutProvider>
      )} */}
    </div>
  );
}

function TestingButton({ children }) {
  const methodObj = {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(responseObj),
  };
  // useState
  const [showTesting, setShowTesting] = React.useState(null);
  // useCallback
  const fetchClientSecret = React.useCallback(function createCheckoutSession() {
    return fetch(
      `${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions`,
      methodObj
    )
      .then(function getResponse(response) {
        return response.json();
      })
      .then(function getData(data) {
        // console.log(data, "data using then()");
        return data.clientSecret;
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <React.Fragment>
      <div>
        <button
          onClick={function (event) {
            console.log(event, "event");
            console.log(options, "options");
            setShowTesting({ options });
          }}
        >
          Testing Idea
        </button>
        {showTesting && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={showTesting.options}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </React.Fragment>
  );
}

async function getCheckout(event) {
  const { setShowTesting } = this;
  // console.log(setShowTesting, "setShowTesting");
  // setShowTesting(true);
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
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions`,
  //   methodObj
  // );

  // if (response) {
  //   // console.log(response, "response");
  //   const data = await response.json();

  //   const { success, clientSecret, name } = data;
  //   if (success) {
  //     console.log(data, "checkout data");
  //     console.log(clientSecret, "clientSecret");
  //     const fetchClientSecret = clientSecret;
  //     const options = { fetchClientSecret };
  //     setShowTesting({ options, name, success });
  //   }
  // }

  // options has to be a function

  const fetchClientSecret = React.useCallback(function createCheckoutSession() {
    return fetch(
      `${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions`,
      methodObj
    )
      .then(function getResponse(response) {
        return response.json();
      })
      .then(function getData(data) {
        // console.log(data, "data using then()");
        return data.clientSecret;
      });
  }, []);

  const options = { fetchClientSecret };

  setShowTesting({ options, success: true, name: "This is a test" });
}

function ShowObjElement({ children, testObj }) {
  console.log(testObj, "testObj");
  return (
    <React.Fragment>
      <h3>{children}</h3>
    </React.Fragment>
  );
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
