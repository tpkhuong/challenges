import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const products = await stripe.products.list({
    limit: 2,
  });

  return NextResponse.json({
    message: "Hi from getProducts api folder",
    listOfProducts: products,
  });
}

// SQl query

// select
//   *
// from
//   customers
// INNER JOIN addresses
// ON customers.id = addresses.users_id

// supabase

// const { data, error } = await supabase.from("customers").select(
//   `
//     *,
//     ...addresses!inner()
//     `
// );
