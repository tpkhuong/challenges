import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  //   console.log(req.body);
  //   console.log(NextRequest);
  // const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

  // const products = await stripe.products.list({
  //   limit: 2,
  // });

  return NextResponse.json({
    message: "Hi from API hello folder",
  });
}
