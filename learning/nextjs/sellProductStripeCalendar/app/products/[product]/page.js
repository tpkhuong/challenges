"use client";

import React from "react";
import { useParams } from "next/navigation";
import { createClient, OAuthStrategy } from "@wix/api-client";
import { redirects } from "@wix/redirects";
import { products } from "@wix/stores";
import Cookies from "js-cookie";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

// const myWixClient = createClient({
//   modules: { products, redirects },
//   auth: OAuthStrategy({
//     clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
//     tokens: JSON.parse(Cookies.get("session") || null),
//   }),
// });
const myWixClient = createClient({
  modules: { products, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

// go to 3:54 in video

async function fetchProducts() {
  const fetchedProductsObj = await myWixClient.products.queryProducts().find();

  const { items } = fetchedProductsObj;
  console.log(items, "items");
}

export default function ProductPage({ children }) {
  const params = useParams();
  console.log(params, "params");
  // console.log(searchParams.get(), "searchParams..get()");
  // to get to page use <a> with href of /products/name of product
  //   at 1 hr 18 mins of video will see Search file with <Card/> and Link with href of slug
  // async function createRedirect(slug) {
  //   const redirect = await myWixClient.redirects.createRedirectSession({
  //     storesProduct: { productSlug: `${params}` },
  //     callbacks: { postFlowUrl: window.location.href },
  //   });

  //     console.log(redirect, "redirect");
  //   window.location = redirect.redirectSession.fullUrl;
  // }
  // React.useEffect(
  //   function getProducts() {
  //     fetchProducts();
  //   },
  //   [null]
  // );
  return (
    <React.Fragment>
      <h1>Hi from Product Page.</h1>
      <button
        onClick={function redirecToLoginPage() {
          createRedirect();
        }}
      >
        Product button
      </button>
    </React.Fragment>
  );
}

// async function createRedirect(router) {
//   const redirect = await myWixClient.redirects.createRedirectSession({
//     storesProduct: `${router.query.slug}`,
//     callbacks: { postFlowUrl: window.location.href },
//   });

//   console.log(redirect, "redirect");
//   window.location = redirect.redirectSession.fullUrl;
// }

// onClick={function redirectToPage() {
//   createRedirect(router.query.slug);
// }}

// function ProductButton({ children, router }) {
//   return (
//     <React.Fragment>
//       <button
//         onClick={function showProduct(event) {
//           createRedirect(router);
//         }}
//       >
//         Product Button
//       </button>
//     </React.Fragment>
//   );
// }
