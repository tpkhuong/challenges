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
      <button onClick={checkingEvent}>Sending Data</button>
    </React.Fragment>
  );
}

function checkingEvent(event) {
  sendingDataToBackend();
}

async function sendingDataToBackend(event) {
  const dataObj = {
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
      body: JSON.stringify(dataObj),
    }
  );

  if (response) {
    const data = await response.json();
    console.log(data, "data");

    return data;
  }

  if (!response) {
    throw new Error(data.message || "Oops! The fun just getting started!");
  }
}

async function testPrisma(event) {
  console.log(event, "event");
  const newUser = await prisma.user.create({
    data: {
      name: "Deadpool",
      email: "deadpool@marvel.net",
      password: "marvelTheBest",
    },
  });

  console.log(newUser, "newUser");
}
