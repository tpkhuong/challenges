import React from "react";
import styles from "./Testing.module.css";

export default function TestingPage({ children }) {
  return (
    <main>
      <button data-buttonclick="" className={styles[`hamburger-button`]}>
        <span className={styles[`top-line`]}></span>
        {/* <span></span> */}
        <span className={styles[`bottom-line`]}></span>
      </button>
    </main>
  );
}
