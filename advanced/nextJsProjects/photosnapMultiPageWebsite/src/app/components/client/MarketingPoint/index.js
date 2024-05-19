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
  linkText,
  booleanGradient,
  textLeftBoolean,
}) {
  return (
    <React.Fragment>
      <article
        className={styles[`marketing-point-container`]}
        data-theme={`${theme}`}
        data-textleftside={`${textLeftBoolean}`}
      >
        {/* img */}
        <div className={styles[`img-container`]}>
          <picture>
            <source media="(min-width: 1440px)" srcSet={`${desktop}`} />
            <source media="(min-width: 768px)" srcSet={`${tablet}`} />
            <img src={`${mobile}`} alt={altText} />
          </picture>
        </div>
        {/* text */}
        <div
          data-gradient={`${booleanGradient}`}
          className={styles[`text-content-container`]}
        >
          <h2>{title}</h2>
          <p>{children}</p>
          <a className={styles[`link-text-arrow-container`]} href="">
            <span className={styles[`link-text`]}>{linkText}</span>
            <svg
              className={styles[`link-arrow`]}
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
            >
              <g fill="none" fillRule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </a>
          <span className={styles[`gradient-bar`]}></span>
        </div>
      </article>
    </React.Fragment>
  );
}
