import React from "react";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  children,
  planTitle,
  description,
  price,
  monthOrYear,
}) {
  return (
    <div className={styles[`card`]}>
      <h2 className={styles[`plan-title`]}>{planTitle}</h2>
      <p className={styles[`description`]}>{description}</p>
      <span className={styles[`price-container`]}>
        <span className={styles[`plan-price`]}>{price}</span>
        <span className={styles[`month-or-year`]}>{`per ${monthOrYear}`}</span>
      </span>
      <a className={styles[`plan-button`]} href="/">
        <span>PICK PLAN</span>
      </a>
    </div>
  );
}
