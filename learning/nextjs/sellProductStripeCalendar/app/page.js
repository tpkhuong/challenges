import React from "react";
import { Calendar } from "@nextui-org/calendar";
import styles from "../styles/Home.module.css";

export default function Home({ children }) {
  return (
    <React.Fragment>
      <section>
        <Calendar />
      </section>
    </React.Fragment>
  );
}
