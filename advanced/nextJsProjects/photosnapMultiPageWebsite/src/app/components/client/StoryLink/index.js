import React from "react";
import styles from "./StoryLink.module.css";

export default function StoryLink({
  children,
  title,
  author,
  mobile,
  tablet,
  altText,
}) {
  return (
    <React.Fragment>
      <a className={styles[`story-link-container`]} href="">
        <picture>
          <source media="(min-width: 768px)" srcSet={tablet} />
          <img src={mobile} alt={altText} />
        </picture>
        <div className={styles[`text-content-container`]}>
          <div>
            {/* story title */}
            <h2>{title}</h2>
            {/* author */}
            <span>by {`${author}`}</span>
          </div>
          <span className={styles[`bar-separator`]}></span>
          <div className={styles[`read-arrow-container`]}>
            <span>READ STORY</span>
            <svg
              className={styles[`read-story-arrow`]}
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
            >
              <g fill="none" fillRule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
}
