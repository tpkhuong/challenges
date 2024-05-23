import React from "react";
import styles from "./Stories_Header.module.css";

export default function StoriesHeader({
  children,
  mobile,
  tablet,
  desktop,
  lastMonth,
  title,
  date,
  author,
  description,
  linkText,
}) {
  return (
    <section className={styles[`img-text-content-container`]}>
      <div className={styles[`img-container`]}>
        {/* img */}
        <picture>
          <source media="(min-width: 1440px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <img src={mobile} alt="" />
        </picture>
      </div>
      {/* text content */}
      <div className={styles[`text-content-container`]}>
        {/* recent story */}
        <span className={styles[`recent-story`]}>{lastMonth}</span>
        {/* title */}
        <h1 className={styles[`title`]}>{title}</h1>
        {/* date and author */}
        <span className={styles[`date-author-container`]}>
          <span className={styles[`date`]}>{date}</span>
          <span className={styles[`author`]}>{` by ${author}`}</span>
        </span>
        {/* paragraph */}
        <p className={styles[`content`]}>{description}</p>
        {/* link */}
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
      </div>
    </section>
  );
}
