import React from "react";
import styles from "./MobileNavMenu.module.css";

export default function MobileNavMenu({ children, props }) {
  return (
    <React.Fragment>
      <div
        id="mobile-menu-modal-selector"
        data-showmobilemenu=""
        className={styles[`modal-container`]}
        aria-modal="true"
        role="dialog"
      >
        <div className={styles[`mobile-menu-container`]}>
          <nav role="navigation">
            <ul role="menu-bar" className={styles[`navlist`]}>
              {["our company", "locations", "contact"].map(
                function makeMenuItem(linkText, index, list) {
                  const companyTextForLink =
                    index == 0 ? linkText.split(" ")[1] : "company";

                  const capitalizedLinkText = linkText.toUpperCase();
                  return (
                    <li
                      key={Math.random() * index}
                      role="none"
                      className={styles[`navitem`]}
                    >
                      <a
                        href={`/${index == 0 ? companyTextForLink : linkText}`}
                        className={styles[`navlink`]}
                      >
                        {capitalizedLinkText}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}
