"use client";

import React from "react";
import { createClient, OAuthStrategy } from "@wix/api-client";
import { services } from "@wix/bookings";

const myWixClient = createClient({
  modules: { services },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: null,
  }),
});

export default function SearchTestingPage({ children }) {
  React.useEffect(function getServices() {
    fetchServices();
  }, []);
  return (
    <React.Fragment>
      <h1>This is the Search Testing Page</h1>
    </React.Fragment>
  );
}

async function fetchServices() {
  const listOfServices = await myWixClient.services.queryServices().find();

  console.log(listOfServices.items);
}

// export async function getServerSideProps() {
//   const listOfServices = await myWixClient.services.queryServices().find();
// myWixClient.members.getMyMember(); start here
//   return {
//     props: { listOfServices },
//   };
// }

// const obj = {
//   innerObj: {
//     name: "Hi",
//     first: "check",
//     last: "bye",
//   },
//   date: "8/16/2024",
//   time: "8:00am",
// };

// function testingObj({ date, time, innerObj: { name, first, last } }) {
//   console.log(name, "name");
//   console.log(date, "date");
//   console.log(last, "last");
// }
