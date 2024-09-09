import React from "react";
import styles from "../../styles/IndexPage.module.css";
import LogoNavBar from "../app/components/server/LogoNavBar/index.js";
import Footer from "../app/components/server/Footer/index.js";
import MobileNavMenu from "../app/components/server/MobileNavMenu/index.js";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <header role="banner" className={styles[`root-header`]}>
        <LogoNavBar />
        <h1 className="visually-hidden">Branding Company</h1>
        {/* hero */}
        <div className={styles[`inline-spacing`]}>
          <article className={styles[`hero-container`]}>
            <img
              className={styles[`hero-bg-img`]}
              src="/home/desktop/bg-pattern-hero-home.svg"
              alt=""
            />
            <div className={styles[`text-hero-img-container`]}>
              {/* display flex */}
              {/* text content */}
              <div className={styles[`text-content`]}>
                {/* heading */}
                <h2
                  className={`${styles[`text-color-white`]} ${
                    styles[`hero-title`]
                  }`}
                >
                  Award-winning custom designs and digital branding solutions.
                </h2>
                {/* paragraph */}
                <p className={styles[`description`]}>
                  With over 10 years in the industry, we are experienced in
                  creating fully responsive websites, app design, and engaging
                  brand experiences. Find out more about our services.
                </p>
                {/* action button */}
                <a className={styles[`learn-more-btn`]} href="/">
                  LEARN MORE
                </a>
              </div>
              {/* hero img */}
              <div className={styles[`hero-img`]}>
                <img
                  src="/home/desktop/image-hero-phone.png"
                  alt="Smart phone with an image that says Frame. Background image is a door and clay pot."
                />
              </div>
            </div>
          </article>
        </div>
      </header>
      <div className={styles[`main-footer-mobilemenu-container`]}>
        {/* main,footer and mobilemenu container */}
        <Footer
        // desktop="/shared/desktop/bg-pattern-call-to-action.svg"
        // tablet="/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
        // mobile="/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
        />
        <MobileNavMenu />
        {/* /shared/mobile/bg-pattern-design-pages-intro-mobile.svg */}
      </div>
    </React.Fragment>
  );
}
