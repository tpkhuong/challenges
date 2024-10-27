"use client";

import React from "react";
import { PrismaClient } from "@prisma/client";
import styles from "../styles/HomePage.module.css";

const prisma = new PrismaClient();

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className={styles[`title`]}>This is the Root Page.</h1>
      <button onClick={testPrisma}>click me</button>
    </React.Fragment>
  );
}

function testPrisma(event) {
  console.log(event, "event");
}
