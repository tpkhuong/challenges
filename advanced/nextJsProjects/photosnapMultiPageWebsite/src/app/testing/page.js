"use client";

import React from "react";
import styles from "./Testing.module.css";

export default function TestingPage({ children }) {
  return (
    <React.Fragment>
      <h1 className={styles[`title`]}>This is Next js.</h1>
      <button
        aria-label="open mobile menu"
        data-mobilebtnclick=""
        className={styles[`menu-btn`]}
      >
        <span className={`${styles[`top`]} ${styles[`line`]}`}></span>
        <span className={`${styles[`middle`]} ${styles[`line`]}`}></span>
        <span className={`${styles[`bottom`]} ${styles[`line`]}`}></span>
      </button>
    </React.Fragment>
  );
}

function showMobileMenu(event) {
  const clickedBtn = event.target.closest("BUTTON");
  const clickedBtnAriaLabel = clickedBtn.getAttribute("aria-label");

  // select mobileMenuModal
  const actionMethodsObj = {
    "open mobile menu": function () {
      // change value of data-mobilebtnclick to "true"
      // change value of aria label to "close mobile menu"
      // change data-showmodal="true" on mobileMenuModal
    },
    "close mobile menu": function () {
      // change value of data-mobilebtnclick to "false"
      // change value of aria label to "open mobile menu"
      // change data-showmodal="false" on mobileMenuModal
    },
  };
}
