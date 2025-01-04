import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function POST(request, response) {
  const body = await request.json();

  const { amount } = body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
