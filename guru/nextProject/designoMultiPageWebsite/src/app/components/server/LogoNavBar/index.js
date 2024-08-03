import React from "react";
import styles from "./LogoNarBar.module.css";
// import animated mobile menu btn

export default function LogoNarBar({ children, prop }) {
  return (
    <React.Fragment>
      <div className={styles[`logonavbar-container`]}>
        {/* logo img */}
        <a href="/">
          <img src="/shared/desktop/logo-dark.png" alt="Designo Logo" />
        </a>
        {/* tablet and desktop nav */}
        {/* mobile menu btn */}
      </div>
    </React.Fragment>
  );
}
