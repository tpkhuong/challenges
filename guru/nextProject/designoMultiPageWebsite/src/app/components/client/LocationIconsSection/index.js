import React from "react";
import styles from "./LocationIconsSection.module.css";

export default function LocationIconsSections({ children }) {
  return (
    <section className={styles[`location-links-container`]}>
      {/* canada */}
      <LocationTextContent
        title="CANADA"
        img="/shared/desktop/illustration-canada.svg"
        circleImg="/shared/desktop/bg-pattern-small-circle.svg"
      />
      {/* australia */}
      <LocationTextContent
        title="AUSTRALIA"
        img="/shared/desktop/illustration-australia.svg"
        circleImg="/shared/desktop/bg-pattern-small-circle.svg"
      />
      {/* united kingdom */}
      <LocationTextContent
        title="UNITED KINGDOM"
        img="/shared/desktop/illustration-united-kingdom.svg"
        circleImg="/shared/desktop/bg-pattern-small-circle.svg"
      />
    </section>
  );
}

function LocationTextContent({ children, title, img, circleImg }) {
  return (
    <div className={styles[`location-icon-container`]}>
      {/* img */}
      <div className={styles[`img-container`]}>
        <img className={styles[`bg-circle`]} src={circleImg} alt="" />
        <img className={styles[`icon-img`]} src={img} alt="" />
        {/* bg img */}
      </div>
      {/* title */}
      <h2 className={styles[`title`]}>{title}</h2>
      {/* link */}
      <a className={styles[`link-btn`]} href="">
        SEE LOCATION
      </a>
    </div>
  );
}
