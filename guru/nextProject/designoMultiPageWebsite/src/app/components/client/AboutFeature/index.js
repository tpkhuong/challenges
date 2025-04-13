import React from "react";
import styles from "./AboutFeature.module.css";

export default function AboutFeature({
  children,
  title,
  mobile,
  tablet,
  desktop,
  numberOfCircle,
  imgRightSide,
}) {
  // check children

  return (
    <React.Fragment>
      <article
        data-imgrightside={`${imgRightSide}`}
        className={styles[`about-feature-container`]}
      >
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
        <div
          className={`${styles[`${numberOfCircle}-circle-bg-img`]} ${
            styles[`text-container`]
          }`}
        >
          {/* bg img */}
          {
            // "one" circle render picture element

            numberOfCircle == "one" ? (
              <picture>
                <source
                  srcSet="/about/desktop/bg-pattern-hero-about-desktop.svg"
                  media="(min-width: 768px)"
                />
                <img
                  src="/about/mobile/bg-pattern-hero-about-mobile.svg"
                  alt=""
                />
              </picture>
            ) : (
              <img
                // src="/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
                src="/shared/desktop/bg-pattern-three-circles.svg"
                alt=""
              />
            )
            // "three" circle render img element
          }
          <h2 className={styles[`title`]}>{title}</h2>
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

// function objFunc(name){
//   console.log("this",this);
//   console.log("name",name)
// }

// const anotherFunc = objFunc.bind({name:"Hi",birthday:"08-08-2008"},"what is this");
