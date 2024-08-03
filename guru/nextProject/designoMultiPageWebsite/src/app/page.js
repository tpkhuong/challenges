import React from "react";
import styles from "../../styles/IndexPage.module.css";
import Footer from "../app/components/server/Footer/index.js";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      {/* main,footer and mobilemenu container */}
      <Footer
        desktop="/shared/desktop/bg-pattern-design-pages-intro-mobile.svg"
        tablet="/shared/tablet/bg-pattern-design-pages-intro-mobile.svg"
        mobile="/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
      />
      {/* /shared/mobile/bg-pattern-design-pages-intro-mobile.svg */}
    </React.Fragment>
  );
}
