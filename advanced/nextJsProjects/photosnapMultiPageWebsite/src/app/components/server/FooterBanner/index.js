import React from "react";
import styles from "./FooterBanner.module.css";

export default function FooterBanner({
  children,
  mobile,
  tablet,
  desktop,
  altText,
}) {
  return (
    <article className={styles[`footer-banner-container`]}>
      {/* img */}
      {/* bg-beta.jpg */}
      <div className={styles[`img-container`]}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <img src={mobile} alt={altText} />
        </picture>
      </div>
      {/* text content */}
      <div className={styles[`text-content-container`]}>
        <h2 className={styles[`invite-title`]}>
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h2>
        {/* invite btn */}
        <a className={styles[`get-invite-container`]} href="/">
          <span className={styles[`link-text`]}>GET AN INVITE</span>
          <svg
            className={styles[`get-invite-arrow`]}
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
    </article>
  );
}
