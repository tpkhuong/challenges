"use client";

import React from "react";
import styles from "./AnimatedMobileNavMenuButton.module.css";

export default function AnimatedMobileNavMenuButton({ children }) {
  return (
    <div className={styles[`mobile-menu-btn-container`]}>
      <button
        id="mobile-btn-selector"
        onKeyDown={mobileBtnTabThroughMobileMenu}
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
    "open mobile menu": function (clickedBtn, mobileMenuModal) {
      // change aria label to "close mobile menu"
      clickedBtn.setAttribute("aria-label", "close mobile menu");
      // change data-buttonclick to "true"
      clickedBtn.setAttribute("data-buttonclick", "true");
      // change data-showmodal="true" on mobileMenuModal
      mobileMenuModal.setAttribute("data-showmodal", "true");
    },
    "close mobile menu": function (clickedBtn, mobileMenuModal) {
      // change aria label to "open mobile menu"
      clickedBtn.setAttribute("aria-label", "open mobile menu");
      // change data-buttonclick to "false"
      clickedBtn.setAttribute("data-buttonclick", "false");
      // change data-showmodal="" on mobileMenuModal
      mobileMenuModal.setAttribute("data-showmodal", "false");
    },
  };

  objOfMethodForBtn[ariaLabel](clickedBtn, mobileMenuModal);
}

function mobileBtnTabThroughMobileMenu(event) {
  console.log(event);
  // const { code, key, shiftKey } = event;
  if (!event.shiftKey && event.code == "Tab") {
    // focus stories <a>
    event.preventDefault();
    document
      .getElementById("navlist-selector")
      .childNodes[0].firstElementChild.focus();
    console.log("tab is pressed");
    return;
  }
  if (event.shiftKey && event.code == "Tab") {
    console.log("hello shift pressed");
    // focus get an invite <a>
    event.preventDefault();
    // console.log(
    //   document.getElementById("navlist-selector").parentElement
    //     .nextElementSibling.nextElementSibling
    // );
    console.log(document.getElementById("last-element-selector"));
    document.getElementById("last-element-selector").focus();
    return;
  }
  console.log(event.target);
}
