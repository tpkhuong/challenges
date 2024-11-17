"use client";

import React from "react";
import { PrismaClient } from "@prisma/client";
import styles from "../styles/HomePage.module.css";

// const prisma = new PrismaClient();

export default function RootPage({ children }) {
  // const testing = testPrisma();
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className={styles[`title`]}>This is the Root Page.</h1>
      {/* User */}
      <h2>Users Database</h2>
      {/* POST */}
      <button onClick={sendingPostRequestToDatabase}>
        Sending POST Request
      </button>
      {/* GET */}
      <button onClick={sendingGetRequestToDatabase}>Sending GET Request</button>
      {/* UPDATE */}
      <button onClick={updatingDatabaseInformation}>Updating Data</button>
      {/* checking knowledge */}
      <button onClick={paidCustomersData}>PaidCustomers Data</button>
      <h2>Product</h2>
      <button onClick={getProductFromDatabase}>Get Product</button>
    </React.Fragment>
  );
}

// function checkingEvent(event) {
//   sendingDataToBackend();
// }

async function sendingPostRequestToDatabase(event) {
  // with password
  const dataObjWithPassword = {
    name: "Deadpool",
    email: "deadpool@marvel.com",
    password: "marvelTheBest",
  };
  // make fetch call
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObjWithPassword),
    }
  );

  // // without password
  // const dataObjWithoutPassword = {
  //   name: "Marvel",
  //   email: "marvel@coolcompany.com",
  // };
  // // make fetch call
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_AUTH_URL}/api/users`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataObjWithoutPassword),
  //   }
  // );

  // for both algorithms

  if (response) {
    const data = await response.json();
    console.log(data, "data");

    return data;
  }

  if (!response) {
    throw new Error(data.message || "Oops! The fun just getting started!");
  }
}

async function sendingGetRequestToDatabase(event) {
  // make fetch call
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/users`,
    {
      method: "GET",
    }
  );

  if (response) {
    const dataFromBackend = await response.json();
    console.log(dataFromBackend, "dataFromBackend");

    return dataFromBackend;
  }
}

async function updatingDatabaseInformation(event) {
  const dataObj = {
    email: "marvel@coolcompany.com",
    password: "lordOfTheRings",
  };
  const requestObj = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  };
  // make fetch call
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/users`,
    requestObj
  );

  if (response) {
    const data = await response.json();
    console.log(data, "data");

    return data;
  }

  if (!response) {
    throw new Error(data.message || "Oops! The fun is about to begin!");
  }
}

async function paidCustomersData(event) {
  // const paidCustomersData = {
  //   firstName: "Cool",
  //   lastName: "Dude",
  //   billingAddress: "808 Awesome St",
  //   shippingAddress: "808 Cool Rd",
  // };
  const paidCustomersData = {
    firstName: "Hulk",
    lastName: "Marvel",
    billingAddress: "808 Dodgers St",
    shippingAddress: "808 Rams Rd",
  };

  const requestObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paidCustomersData),
  };

  // make fetch call
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/users`,
    requestObj
  );

  if (response) {
    const data = await response.json();

    console.log(data, "paid customers data");
    return data;
  }

  if (!response) {
    throw new Error(data.message || "Oops! The fun is about to begin!");
  }
}

// Product

async function getProductFromDatabase(event) {
  // const dataObj = {};

  const requestObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

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

// async function testPrisma(event) {
//   console.log(event, "event");
//   const newUser = await prisma.user.create({
//     data: {
//       name: "Deadpool",
//       email: "deadpool@marvel.net",
//       password: "marvelTheBest",
//     },
//   });

//   console.log(newUser, "newUser");
// }
