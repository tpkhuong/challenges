import React from "react";
import styles from "../styles/HomePage.module.css";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className={styles[`title`]}>This is the Root Page.</h1>
      <button>click me</button>
    </React.Fragment>
  );
}
