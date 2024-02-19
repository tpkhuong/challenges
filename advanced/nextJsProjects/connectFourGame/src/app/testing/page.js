import React from "react";
import styles from "./Testing.module.css";
import Title from "../testing/testingComponents/index.js";

export default function CssGrid({ children }) {
  return (
    <React.Fragment>
      <div className={styles[`grid`]}>
        <Title></Title>
      </div>
    </React.Fragment>
  );
}
