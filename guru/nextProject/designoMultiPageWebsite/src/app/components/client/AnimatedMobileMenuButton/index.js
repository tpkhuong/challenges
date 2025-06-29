"use client";
import React from "react";
import styles from "./AnimatedMobileMenuButton.module.css";

export default function AnimatedMobileMenuButton({ children, prop }) {
  return (
    <React.Fragment>
      <button
        id="mobile-btn-selector"
        onClick={showMobileMenu}
        onKeyDown={tabToCorrectButtonForMobileMenu}
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

function tabToCorrectButtonForMobileMenu(event) {
  console.log(event, "event");
  const clickedButton = event.target;

  // only run algorithm when mobile nav menu is currently opened
  if (clickedButton.getAttribute("aria-label") == "close mobile menu") {
    const { shiftKey, code, key } = event;
    // if shift key is not pressed
    if (!shiftKey && code == "Tab") {
      event.preventDefault();
      document.getElementById("company-selector").focus();
    }
    // if shift key is pressed
    if (shiftKey && code == "Tab") {
      event.preventDefault();
      // shift and tab was pressed
      console.log("shift and tab were pressed");
      console.log(document.getElementById("company-selector"));
      // select and focus "contact" mobile menu button
      document.getElementById("contact-selector").focus();
      return;
    }
  }
}
