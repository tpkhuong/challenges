"use client";

import React from "react";
import styles from "../styles/IndexPage.module.css";
import StripePayment from "./components/stripePayment";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className={styles[`title`]}>This is Home Page</h1>
      {/* uncomment later */}
      {/* <StripePayment userName="Captain America" /> */}
      <StripePayment />
      {/* <button onClick={getProducts}>GET product Request</button>
      <button onClick={getTestUsers}>GET users Request</button>
      <button onClick={getSupabaseProductData}>
        GET supabase products Request
      </button> */}
    </React.Fragment>
  );
}

async function getProducts(event) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/getproducts`,
    { method: "GET" }
  );

  if (response) {
    const data = await response.json();

    console.log(data, "product data");
    return data;
  }
}

async function getTestUsers(event) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/users`,
    { method: "GET" }
  );

  if (response) {
    const data = await response.json();

    console.log(data, "user data");

    return data;
  }
}

async function getSupabaseProductData(event) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/products`,
    { method: "GET" }
  );

  if (response) {
    const data = await response.json();

    console.log(data, "product data");

    return data;
  }
}
