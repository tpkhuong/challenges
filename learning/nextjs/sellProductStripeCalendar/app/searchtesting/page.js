"use client";

import React from "react";
import { createClient, OAuthStrategy } from "@wix/api-client";
import { availabilityCalendar, services } from "@wix/bookings";

const myWixClient = createClient({
  modules: { availabilityCalendar, services },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: null,
  }),
});

export default function SearchTestingPage({ children }) {
  React.useEffect(
    function getServicesAndAvailability() {
      fetchServicesAndAvailability();
    },
    [null]
  );
  return (
    <React.Fragment>
      <h1>This is the Search Testing Page</h1>
    </React.Fragment>
  );
}

async function fetchServicesAndAvailability() {
  const listOfServices = await myWixClient.services.queryServices().find();

  console.log(listOfServices.items);
  console.log(listOfServices.items[0]._id, "_id");

  // availability
  // const today = new Date();
  // const nextDay = new Date(today);
  // nextDay.setDate(nextDay.getDate() + 1);
  const start = new Date("August 18, 2024 10:00:00");
  const end = new Date("August 18, 2024 15:00:00");

  const availability = await myWixClient.availabilityCalendar.queryAvailability(
    {
      filter: {
        serviceId: [listOfServices.items[0]._id],
        startDate: start.toISOString(),
        endDate: end.toISOString(),
      },
    },
    { timezone: "UTC" }
  );

  console.log(availability);
}

// async function fetchAvailability(serviceId) {
//   const today = new Date();
//   const nextDay = new Date(today);
//   nextDay.setDate(nextDay.getDate() + 1);

//   const availability = await myWixClient.availabilityCalendar.queryAvailability(
//     {
//       filter: {
//         serviceId: serviceId,
//         startDate: today.toISOString(),
//         endDate: nextDay.toISOString(),
//       },
//     },
//     { timezone: "UTC" }
//   );

//   console.log(availability);
// }

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
