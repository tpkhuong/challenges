import React from "react";
import styles from "./Feature.module.css";

export default function Feature({ children, title, text }) {
  return (
    <div className={styles[`feature-container`]}>
      {/* icon */}
      {children}
      {/* title */}
      <h2 className={styles[`title`]}>{title}</h2>
      {/* text */}
      <p className={styles[`text-content`]}>{text}</p>
    </div>
  );
}