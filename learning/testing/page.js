import React from "react";
import styles from "./Testing.module.css";
import Title from "./testingComponents/index.js";

export default function CssGrid({ children }) {
  return (
    <React.Fragment>
      <div className={styles[`grid`]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
}
