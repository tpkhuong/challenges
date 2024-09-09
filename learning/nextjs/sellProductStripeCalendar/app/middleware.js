import { createClient, OAuthStrategy } from "@wix/api-client";
import { NextResponse } from "next/server";

export async function middleware(request, response) {
  if (!request.cookies.get("session")) {
    const response = response.next();
    const myWixClient = createClient({
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      }),
    });
    response.cookies.set(
      "session",
      JSON.stringify(await myWixClient.auth.generateVisitorTokens())
    );

    return response;
  }
}
