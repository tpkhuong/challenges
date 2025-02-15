import React from "react";
import styles from "./WebDesign.module.css";

export default function WebDesignPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      {/* web design */}
      <DesignPagesHeroContent
        pageTitle="Web Design"
        mobileImg="/shared/desktop/bg-pattern-two-circles.svg"
        tabletImg="/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
        pageImg="/web-design/desktop/bg-pattern-intro-web.svg"
        pageName="web"
      >
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </DesignPagesHeroContent>
      {/* app design */}
      {/* <DesignPagesHeroContent
        pageTitle="App Design"
        mobileImg="/shared/desktop/bg-pattern-two-circles.svg"
        tabletImg="/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
      >
        Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips.
      </DesignPagesHeroContent> */}
      {/* graphic design */}
    </React.Fragment>
  );
}

function DesignPagesHeroContent({
  children,
  mobileImg,
  tabletImg,
  pageTitle,
  pageImg,
  pageName,
}) {
  return (
    <React.Fragment>
      <header role="banner" className={styles[`web-design-header`]}>
        {/* logonavbar */}
        <div className={styles[`inline-spacing`]}>
          <article
            className={`${styles[`${pageName}-design`]} ${
              styles[`web-design-hero-content`]
            }`}
          >
            {/* background color */}
            {/* mobile img is different from tablet and desktop */}
            <picture className={styles[`img-container`]}>
              {/* desktop */}
              <source srcSet={pageImg} media="(min-width: 1440px)" />
              {/* tablet */}
              <source srcSet={tabletImg} media="(min-width: 768px)" />
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
