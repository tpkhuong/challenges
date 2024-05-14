import React from "react";
import Link from "next/link";
import styles from "./MobileNavMenu.module.css";

export default function MobileNavMenu({ children }) {
  return (
    <div
      id="mobile-menu-selector"
      className={styles[`modal-container`]}
      data-showmodal=""
      role="dialog"
      aria-modal="true"
    >
      <div className={styles[`mobile-nav-menu-container`]}>
        <nav>
          <ul role="menubar" className={styles[`navlist`]}>
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
                  data-firstelement={`${index == 0 ? "true" : "false"}`}
                  key={Math.random() * index}
                >
                  <Link
                    role="menuitem"
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
        <a data-lastelement className={styles[`invite-btn`]}>
          GET AN INVITE
        </a>
      </div>
    </div>
  );
}
