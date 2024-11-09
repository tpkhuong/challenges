import React from "react";
import styles from "./HomePageFeatures.module.css";

export default function HomePageFeatures({ children, title, description }) {
  return (
    <React.Fragment>
      <div className={styles[`image-content-container`]}>
        {/* svg */}
        {children}
        {/* title */}
        <h2 className={styles[`title`]}>{title}</h2>
        {/* description */}
        <p className={styles[`description`]}>{description}</p>
      </div>
    </React.Fragment>
  );
}
