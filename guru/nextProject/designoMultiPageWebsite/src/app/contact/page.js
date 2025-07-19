import React from "react";
import styles from "./ContactPage.module.css";
import ContactForm from "../components/client/ContactForm/index.js";

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
            <div className={styles[`content-text-container`]}>
              <h2 className={styles[`title`]}>Contact Us</h2>
              <p className={styles[`description`]}>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            {/* form component */}
            <ContactForm />
          </div>
        </article>
        {/* component of location icons */}
      </main>
    </React.Fragment>
  );
}
