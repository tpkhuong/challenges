import React from "react";
import styles from "./Testing.module.css";

export default function TestingPage({ children }) {
  return (
    <React.Fragment>
      <h1 className={styles[`title`]}>This is Next js.</h1>
      <button data-mobilebtnclick="" className={styles[`menu-btn`]}>
        <span className={`${styles[`top`]} ${styles[`line`]}`}></span>
        <span className={`${styles[`middle`]} ${styles[`line`]}`}></span>
        <span className={`${styles[`bottom`]} ${styles[`line`]}`}></span>
      </button>
    </React.Fragment>
  );
}
