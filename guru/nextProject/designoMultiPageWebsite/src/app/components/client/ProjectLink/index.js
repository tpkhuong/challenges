import React from "react";
import styles from "./ProjectLink.module.css";

export default function ProjectLink({ children, img, title, text }) {
  return (
    <React.Fragment>
      <a className={styles[`project-link-card`]}>
        {/* img */}
        <div className={styles[`img-container`]}>
          <img src={img} alt="" />
        </div>
        {/* text content */}
        <div className={styles[`text-content`]}>
          <h2 className={styles[`title`]}>{title}</h2>
          <p className={styles[`description`]}>{text}</p>
        </div>
      </a>
    </React.Fragment>
  );
}
