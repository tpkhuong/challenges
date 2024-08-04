"use client";

import React from "react";
import styles from "./Testing.module.css";

export default function TestingPage({ children }) {
  return (
    <React.Fragment>
      <h1 className={styles[`title`]}>This is Next js.</h1>
      <button
        id="mobile-btn-selector"
        onClick={showMobileMenu}
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
  const ariaLabel = clickedBtn.getAttribute("aria-label");
  // select mobileMenuModal
  const modalContainerElement = document.getElementById(
    "mobile-menu-modal-selector"
  );

  const actionMethodsObj = {
    "open mobile menu": function (menuBtn) {
      // change value of data-mobilebtnclick to "true"
      menuBtn.setAttribute("data-mobilebtnclick", "true");
      // change value of aria label to "close mobile menu"
      menuBtn.setAttribute("aria-label", "close mobile menu");
      // change data-showmobilemenu to "true" on modalContainerElement
      modalContainerElement.setAttribute("data-showmobilemenu", "true");
    },
    "close mobile menu": function (menuBtn) {
      // change value of data-mobilebtnclick to "false"
      menuBtn.setAttribute("data-mobilebtnclick", "false");
      // change value of aria label to "open mobile menu"
      menuBtn.setAttribute("aria-label", "open mobile menu");
      // change data-showmobilemenu to "" on modalContainerElement
      modalContainerElement.setAttribute("data-showmobilemenu", "");
    },
  };

  if (clickedBtn && ariaLabel) {
    actionMethodsObj[ariaLabel](clickedBtn);
  }
}
