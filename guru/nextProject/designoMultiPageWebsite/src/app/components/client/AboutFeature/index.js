import React from "react";
import styles from "./AboutFeature.module.css";

export default function AboutFeature({
  children,
  title,
  mobile,
  tablet,
  desktop,
}) {
  // check children
  console.log(`children`, children);
  console.log(`typeof children`, typeof children);
  console.log(`is it an array children`, Array.isArray(children));
  return (
    <React.Fragment>
      <article className={styles[`about-featire-container`]}>
        <div className={styles[`img-container`]}>
          <picture>
            {/* desktop */}
            <source srcSet={desktop} media="(min-width: 1440px)" />
            {/* tablet */}
            <source srcSet={tablet} media="(min-width: 768px)" />
            {/* mobile */}
            <img src={mobile} alt="" />
          </picture>
        </div>
        <div className={styles[`text-container`]}>
          <h2 className={styles[`title`]}></h2>
          <div className={styles[`description-container`]}>
            {Array.isArray(children) ? (
              children.map(function makeParagraphElement(
                textContent,
                index,
                list
              ) {
                return (
                  <p
                    key={Math.random() * index}
                    className={styles[`description`]}
                  >
                    {textContent}
                  </p>
                );
              })
            ) : (
              <p className={styles[`description`]}>{children}</p>
            )}
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}
