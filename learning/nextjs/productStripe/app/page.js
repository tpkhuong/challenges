import React from "react";
import { PrismaClient } from "@prisma/client";
import styles from "../styles/HomePage.module.css";

const prisma = new PrismaClient();

export default function RootPage({ children }) {
  const testing = testPrisma();
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className={styles[`title`]}>This is the Root Page.</h1>
    </React.Fragment>
  );
}

async function testPrisma(event) {
  console.log(event, "event");
  const newUser = await prisma.user.create({
    data: {
      name: "Deadpool",
      email: "deadpool@marvel.net",
    },
  });

  console.log(newUser, "newUser");
}
