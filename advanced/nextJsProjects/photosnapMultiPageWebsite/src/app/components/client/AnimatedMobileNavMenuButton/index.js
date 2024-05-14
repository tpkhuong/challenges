"use client";

import React from "react";
import styles from "./AnimatedMobileNavMenuButton.module.css";

export default function AnimatedMobileNavMenuButton({ children }) {
  return (
    <div className={styles[`mobile-menu-btn-container`]}>
      <button
        aria-label="open mobile menu"
        data-buttonclick=""
        className={styles[`hamburger-button`]}
        onClick={showMobileMenu}
      >
        <span className={styles[`top-line`]}></span>
        {/* <span></span> */}
        <span className={styles[`bottom-line`]}></span>
      </button>
    </div>
  );
}

function showMobileMenu(event) {
  const clickedBtn = event.target.closest("BUTTON");

  const ariaLabel = clickedBtn.getAttribute("aria-label");
  // select mobile menu modal
  const mobileMenuModal = document.getElementById("mobile-menu-selector");

  const objOfMethodForBtn = {
    "open mobile menu": function (clickedBtn, mobileMenuModal, ariaLabel) {
      // change aria label to "close mobile menu"
      // change data-buttonclick to "true"
      // change data-showmodal="true" on mobileMenuModal
    },
    "close mobile menu": function (clickedBtn, mobileMenuModal, ariaLabel) {
      // change aria label to "open mobile menu"
      // change data-buttonclick to "false"
      // change data-showmodal="" on mobileMenuModal
    },
  };

  objOfMethodForBtn[ariaLabel](clickedBtn, mobileMenuModal, ariaLabel);
}
