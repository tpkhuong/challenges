import React from "react";
import styles from "./ContactPage.module.css";

export default function ContactPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <main>
        {/* contact content */}
        <article className={styles[`contact-content-container`]}>
          {/* circle image */}
          <picture>
            <source
              srcSet="/contact/desktop/bg-pattern-hero-desktop.svg"
              media="(min-width: 768px)"
            />
            <img
              src="/contact/mobile/bg-pattern-hero-contact-mobile.svg"
              alt=""
            />
          </picture>
          <div>
            {/* Text Content */}

            {/* form component */}
          </div>
        </article>
        {/* component of location icons */}
      </main>
    </React.Fragment>
  );
}
