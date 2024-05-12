import React from "react";
import styles from "./AnimatedMobileNavMenuButton.module.css";

export default function AnimatedMobileNavMenuButton({ children }) {
  return (
    <div className={styles[`mobile-menu-btn-container`]}>
      <button
        aria-label="open mobile menu"
        data-buttonclick=""
        className={styles[`hamburger-button`]}
      >
        <span className={styles[`top-line`]}></span>
        {/* <span></span> */}
        <span className={styles[`bottom-line`]}></span>
      </button>
    </div>
  );
}
