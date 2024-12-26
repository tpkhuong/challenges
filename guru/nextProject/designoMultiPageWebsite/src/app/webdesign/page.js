import React from "react";
import styles from "./WebDesign.module.css";

export default function WebDesignPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <DesignPagesHeroContent
        pageTitle="Web Design"
        mobileImg="/shared/desktop/bg-pattern-two-circles.svg"
      >
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </DesignPagesHeroContent>
    </React.Fragment>
  );
}

function DesignPagesHeroContent({ children, mobileImg, pageTitle, pageImg }) {
  return (
    <React.Fragment>
      <header role="banner" className={styles[`web-design-header`]}>
        {/* logonavbar */}
        <div className={styles[`inline-spacing`]}>
          <article className={styles[`web-design-hero-content`]}>
            {/* background color */}
            {/* mobile img is different from tablet and desktop */}
            <picture className={styles[`img-container`]}>
              <source srcSet={pageImg} media="(min-width: 768px)" />
              <img src={mobileImg} alt="" />
            </picture>
            <h2 className={styles[`title`]}>{pageTitle}</h2>
            <p className={styles[`description`]}>{children}</p>
          </article>
        </div>
      </header>
    </React.Fragment>
  );
}
