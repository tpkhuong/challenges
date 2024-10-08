"use client";

import React from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
// import { redirects } from "@wix/redirects";
// import { products } from "@wix/stores";
import Cookies from "js-cookie";

// need to install wix/members

const myWixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get("session") || null),
  }),
});

// export default function LoginAuth({ children }) {
//   const [nextPage, setNextPage] = React.useState(null);
//   const [errorMessage, setErrorMessage] = React.useState(null);

//   async function verifyLogin() {
//     // const data = JSON.parse(localStorage.getItem("oauthRedirectData"));
//     // localStorage.removeItem("oauthRedirectData");

//     try {
//       const { code, state } = myWixClient.auth.parseFromUrl();
//       let tokens = await myWixClient.auth.getMemberTokens(code, state, data);
//       while (!tokens?.refreshToken?.value) {
//         tokens = await myWixClient.auth.getMemberTokens(code, state, data);
//       }

//       Cookies.set("session", JSON.stringify(tokens));
//       window.location = data?.originalUri || "/";
//     } catch (error) {
//       setNextPage(data?.originalUri || "/");
//       setErrorMessage(error.toString());
//     }
//   }

//   React.useEffect(
//     function login() {
//       verifyLogin();
//     },
//     [null]
//   );

//   return (
//     <article>
//       {errorMessage && <p>{errorMessage}</p>}
//       {nextPage ? <a href={nextPage}>Continue</a> : <>Loading...</>}
//     </article>
//   );
// }

export default function LoginCallback() {
  const [nextPage, setNextPage] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  async function verifyLogin() {
    const data = JSON.parse(localStorage.getItem("oauthRerdirectData"));
    console.log(data, "data in verify login");
    localStorage.removeItem("oauthRerdirectData");

    try {
      const { code, state } = myWixClient.auth.parseFromUrl();

      let tokens = await myWixClient.auth.getMemberTokens(code, state, data);

      while (!tokens?.refreshToken?.value) {
        tokens = await myWixClient.auth.getMemberTokens(code, state, data);
      }
      Cookies.set("session", JSON.stringify(tokens));

      window.location.href = data?.originalUri || "/";
    } catch (error) {
      setNextPage(data?.originalUri || "/");
      setErrorMessage(error.toString());
    }
  }

  React.useEffect(function runVerifyLogin() {
    verifyLogin();
  }, []);

  return (
    <article>
      {errorMessage && (
        <>
          <span>{errorMessage}</span>
          <br />
          <br />
        </>
      )}
      {nextPage ? <a href={nextPage}>Continue</a> : <>Loading...</>}
    </article>
  );

  // return (
  //   <article>
  //     {errorMessage && (
  //       <React.Fragment>
  //         <span>{errorMessage}</span>
  //       </React.Fragment>
  //     )}
  //     {nextPage ? (
  //       <a href={nextPage}>Continue</a>
  //     ) : (
  //       <React.Fragment>Loading...</React.Fragment>
  //     )}
  //   </article>
  // );
}
