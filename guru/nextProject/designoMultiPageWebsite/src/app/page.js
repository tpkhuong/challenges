import React from "react";
import styles from "../../styles/IndexPage.module.css";
import LogoNavBar from "../app/components/server/LogoNavBar/index.js";
import Footer from "../app/components/server/Footer/index.js";
import MobileNavMenu from "../app/components/server/MobileNavMenu/index.js";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <header role="banner" className={styles[`root-header`]}>
        <LogoNavBar />
      </header>
      <div className={styles[`main-footer-mobilemenu-container`]}>
        {/* main,footer and mobilemenu container */}
        <Footer
          desktop="/shared/desktop/bg-pattern-design-pages-intro-mobile.svg"
          tablet="/shared/tablet/bg-pattern-design-pages-intro-mobile.svg"
          mobile="/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
        />
        <MobileNavMenu />
        {/* /shared/mobile/bg-pattern-design-pages-intro-mobile.svg */}
      </div>
    </React.Fragment>
  );
}
