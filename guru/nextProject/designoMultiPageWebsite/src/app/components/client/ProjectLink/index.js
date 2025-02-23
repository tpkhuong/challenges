import React from "react";
import styles from "./ProjectLink.module.css";

export default function ProjectLink({ children, img, title, text }) {
  return (
    <React.Fragment>
      <a href="">
        {/* img */}
        <div className={`img-container`}></div>
        {/* text content */}
        <div className={`text-content`}>
          <h2></h2>
          <p></p>
        </div>
      </a>
    </React.Fragment>
  );
}
