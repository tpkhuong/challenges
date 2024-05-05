import React from "react";
import styles from "./MarketingPoint.module.css";

export default function MarketingPoint({
  children,
  theme,
  title,
  desktop,
  tablet,
  mobile,
}) {
  return (
    <React.Fragment>
      <article
        className={styles[`marketing-point-container`]}
        data-theme={`${theme}`}
      >
        <div className={styles[`text-content-container`]}>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
        <div className={styles[`img-container`]}>
          <picture>
            <source media="(min-width: 1440px)" srcSet={`${desktop}`} />
            <source media="(min-width: 768px)" srcSet={`${tablet}`} />
            <img src={`${mobile}`} alt="Hello" />
          </picture>
        </div>
      </article>
    </React.Fragment>
  );
}
