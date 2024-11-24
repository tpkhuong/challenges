import React from "react";
import styles from "../styles/IndexPage.module.css";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className={styles[`title`]}>This is Home Page</h1>
    </React.Fragment>
  );
}
