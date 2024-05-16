"use client";

import React from "react";
import Link from "next/link";
import styles from "./MobileNavMenu.module.css";

export default function MobileNavMenu({ children }) {
  return (
    <div
      onKeyDown={mobileModalTabThroughMenu}
      id="mobile-menu-selector"
      className={styles[`modal-container`]}
      data-showmodal=""
      role="dialog"
      aria-modal="true"
    >
      <div className={styles[`mobile-nav-menu-container`]}>
        <nav>
          <ul
            id="navlist-selector"
            role="menubar"
            className={styles[`navlist`]}
          >
            {["stories", "features", "pricing"].map(function makeNavLink(
              linkText,
              index,
              list
            ) {
              const capitalizedLinkText = linkText.toUpperCase();
              return (
                <li
                  className={styles[`navitem`]}
                  role="none"
                  key={Math.random() * index}
                >
                  <Link
                    role="menuitem"
                    data-firstelement={`${index == 0 ? "true" : "false"}`}
                    className={styles[`navlink`]}
                    href={`/${linkText}`}
                  >
                    {capitalizedLinkText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <span className={styles[`menu-separator`]}></span>
        <a href="/" id="last-element-selector" className={styles[`invite-btn`]}>
          GET AN INVITE
        </a>
      </div>
    </div>
  );
}

function mobileModalTabThroughMenu(event) {
  const { shiftKey, code, target } = event;
  // focus mobile-btn
  if (
    !shiftKey &&
    code == "Tab" &&
    target.tagName == "A" &&
    target.getAttribute("id") == "last-element-selector"
  ) {
    event.preventDefault();
    document.getElementById("mobile-btn-selector").focus();
  }
  // focus mobile-btn
  if (
    shiftKey &&
    code == "Tab" &&
    target.tagName == "A" &&
    target.getAttribute("data-firstelement") == "true"
  ) {
    event.preventDefault();
    document.getElementById("mobile-btn-selector").focus();
  }
}
