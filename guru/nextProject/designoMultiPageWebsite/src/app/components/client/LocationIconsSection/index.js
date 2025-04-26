import React from "react";
import styles from "./LocationIconsSection.Module.css";

export default function LocationIconsSections({ children }) {
  return (
    <section className={styles[`location-links-container`]}>
      {/* canada */}
      {/* australia */}
      {/* united kingdom */}
    </section>
  );
}

function LocationIcons({ children, title, img }) {
  return (
    <div className={styles[`location-icon-container`]}>
      {/* img */}
      <div className={styles[`img-container`]}>{/* bg img */}</div>
      {/* title */}
      <h2 className={styles[`title`]}></h2>
      {/* link */}
      <a href=""></a>
    </div>
  );
}
