import React from "react";
import { createClient, OAuthStrategy } from "@wix/api-client";
import { redirects } from "@wix/redirects";
import { products } from "@wix/stores";
import Cookies from "js-cookie";

// need to install wix/members

const myWixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get("session") || null),
  }),
});

export default function LoginAuth({ children }) {
  const [nextPage, setNextPage] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  async function verifyLogin() {
    // const data = JSON.parse(localStorage.getItem("oauthRedirectData"));
    // localStorage.removeItem("oauthRedirectData");

    try {
      const { code, state } = myWixClient.auth.parseFromUrl();
      let tokens = await myWixClient.auth.getMemberTokens(code, state, data);
      while (!tokens?.refreshToken?.value) {
        tokens = await myWixClient.auth.getMemberTokens(code, state, data);
      }

      Cookies.set("session", JSON.stringify(tokens));
      window.location = data?.originalUri || "/";
    } catch (error) {
      setNextPage(data?.originalUri || "/");
      setErrorMessage(error.toString());
    }
  }

  React.useEffect(
    function login() {
      verifyLogin();
    },
    [null]
  );

  return (
    <article>
      {errorMessage && <p>{errorMessage}</p>}
      {nextPage ? <a href={nextPage}>Continue</a> : <>Loading...</>}
    </article>
  );
}
