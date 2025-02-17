import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(request, response) {
  const session = await stripe.checkout.sessions.retrieve(
    request.query.session_id
  );

  NextResponse.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
}

export async function POST(request, response) {
  // const body = await request.json();
  // const dataObj = body;

  /**
   * create price object
   * **/

  // const price = await stripe.prices.create({
  //   currency: "usd",
  //   unit_amount: 300,
  //   // recurring: {
  //   //   interval: 'month',
  //   // },
  //   product_data: {
  //     name: "Premium Hair",
  //   },
  // });

  const priceObj = await stripe.prices.create({
    currency: "usd",
    unit_amount: 300,
    product_data: {
      name: "Premium Hair",
    },
  });

  // console.log(price, "price");

  // return NextResponse.json({
  //   message: "This is checkout-sessions api",
  //   priceData: priceObj,
  // });

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceObj.id,
        quantity: 1,
      },
    ],
    mode: "payment",
    // return_url: `${request.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    return_url: `${request.headers.get(
      "origin"
    )}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  // console.log(session, "session");
  // return NextResponse.send({ clientSecret: session.client_secret });

  return NextResponse.json({
    // id: session.id,
    clientSecret: session.client_secret,
    success: true,
    name: "This is a test.",
  });

  // return NextResponse.json({
  //   message: "This is checkout-sessions api",
  //   sessionObj: session,
  // });

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
}
