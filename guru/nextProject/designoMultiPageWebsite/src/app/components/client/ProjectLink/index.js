import React from "react";
import styles from "./ProjectLink.module.css";

export default function ProjectLink({
  children,
  title,
  mobile,
  tablet,
  desktop,
}) {
  return (
    <div className={styles[`img-text-container`]}>
      <picture>
        <source srcSet={desktop} media="(min-width: 1440px)" />
        <source srcSet={tablet} media="(min-width: 768px)" />
        <img src={mobile} alt="" />
      </picture>
      <div className={styles[`title-link-container`]}>
        <h2 className={styles[`title`]}>{title}</h2>
        <a className={styles[`project-link-container`]} href="">
          <span>VIEW PROJECTS</span>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4-4 4"
              stroke="#E7816B"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
