import React from "react";
import styles from "./MarketingPoint.module.css";

export default function MarketingPoint({
  children,
  theme,
  title,
  desktop,
  tablet,
  mobile,
  altText,
  booleanGradient,
  textLeftBoolean,
}) {
  return (
    <React.Fragment>
      <article
        className={styles[`marketing-point-container`]}
        data-theme={`${theme}`}
        data-sideoftextcontent={`${textLeftBoolean}`}
      >
        <div
          data-gradient={`${booleanGradient}`}
          className={styles[`text-content-container`]}
        >
          <h2>{title}</h2>
          <p>{children}</p>
          <a href="">
            <span className={styles[`link-text`]}></span>
          </a>
          <span className={styles[`gradient-bar`]}></span>
        </div>
        <div className={styles[`img-container`]}>
          <picture>
            <source media="(min-width: 1440px)" srcSet={`${desktop}`} />
            <source media="(min-width: 768px)" srcSet={`${tablet}`} />
            <img src={`${mobile}`} alt={altText} />
          </picture>
        </div>
      </article>
    </React.Fragment>
  );
}
