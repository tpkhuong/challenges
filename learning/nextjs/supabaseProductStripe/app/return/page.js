"use client";

import React from "react";
import { redirect } from "next/navigation";

export default function Return() {
  const [status, setStatus] = React.useState(null);

  const [customerEmail, setCustomerEmail] = React.useState("");

  React.useEffect(function returnAlgorithm() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(
      `${process.env.NEXT_PUBLIC_AUTH_URL}/api/checkout-sessions?session_id=${sessionId}`,
      { method: "GET" }
    )
      .then(function getResponse(response) {
        return response.json();
      })
      .then(function getData(data) {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status == "open") {
    return redirect(`/`);
  }

  if (status == "complete") {
    return (
      <section>
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
}
