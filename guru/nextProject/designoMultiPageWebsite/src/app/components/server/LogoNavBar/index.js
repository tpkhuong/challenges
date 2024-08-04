import React from "react";
import styles from "./LogoNarBar.module.css";
// import animated mobile menu btn
import AnimatedMobileMenuButton from "../../client/AnimatedMobileMenuButton/index.js";

export default function LogoNarBar({ children, prop }) {
  return (
    <React.Fragment>
      <div className={styles[`logonavbar-container`]}>
        {/* logo img */}
        <a className={styles[`logo-img-container`]} href="/">
          <img src="/shared/desktop/logo-dark.png" alt="Designo Logo" />
        </a>
        {/* tablet and desktop nav */}
        <nav role="navigation" className={styles[`main-nav`]}>
          <ul className={styles[`navlist`]} role="menubar">
            {["our company", "locations", "contact"].map(
              function makeLinkElement(linkText, index, list) {
                const capitalizedLinkText = linkText.toUpperCase();
                return (
                  <li
                    key={Math.random() * index}
                    className={styles[`navitem`]}
                    role="none"
                  >
                    <a
                      role="menuitem"
                      className={styles[`navlink`]}
                      href={`/${index == 0 ? "company" : linkText}`}
                    >
                      {capitalizedLinkText}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
        {/* mobile menu btn */}
        <AnimatedMobileMenuButton />
      </div>
    </React.Fragment>
  );
}
