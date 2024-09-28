import React from "react";
import { Calendar } from "@nextui-org/calendar";
import styles from "../styles/Home.module.css";
import LoginBar from "./components/client/LoginBar/index.js";

export default function Home({ children }) {
  return (
    <React.Fragment>
      <section>
        {/* <Calendar /> */}
        <LoginBar />
      </section>
    </React.Fragment>
  );
}
