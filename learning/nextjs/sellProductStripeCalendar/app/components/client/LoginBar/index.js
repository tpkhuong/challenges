import React from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { members } from "@wix/members";
import Cookies from "js-cookie";
import styles from "./LoginBar.module.css";

const myWixClient = createClient({
  modules: { members },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get("session") || null),
  }),
});

export default function LoginBar({ children }) {
  const [member, setMember] = React.useState([]);

  async function fetchMember() {
    const { member } = myWixClient.auth.loggedIn()
      ? await myWixClient.members.getCurrentMember()
      : {};

    setMember(member || undefined);
  }

  async function login() {
    const data = myWixClient.auth.generateOAuthData(
      `${window.location.origin}/login-auth`,
      window.location.href
    );

    localStorage.setItem("oauthRedirectData", JSON.stringify(data));

    const { authUrl } = await myWixClient.auth.getAuthUrl(data);

    window.location = authUrl;
  }

  async function logout() {
    const { logoutUrl } = await myWixClient.auth.logout(window.location.href);

    Cookies.remove("session");

    window.location = logoutUrl;
  }

  React.useEffect(function getMember() {
    fetchMember();
  }, []);

  return (
    <React.Fragment>
      <div className={styles[`loginbar-container`]}>
        {member != null && (
          <section>
            <h3>
              Hello{""}
              {myWixClient.auth.loggedIn()
                ? member.profile?.nickname || member.profile?.slug || ""
                : "visitor"}
            </h3>
            <button>{myWixClient.auth.loggedIn() ? "Logout" : "Login"}</button>
          </section>
        )}
      </div>
    </React.Fragment>
  );
}
