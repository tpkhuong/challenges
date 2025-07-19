import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ children }) {
  return (
    <React.Fragment>
      <form action="" role="form" noValidate>
        {/* full name */}
        <div>
          <label className={styles[`visually-hidden`]} htmlFor="full-name">
            Name
          </label>
          <input
            className={styles[`input-name`]}
            type="text"
            id="full-name"
            placeholder="Name"
          />
        </div>
        {/* email */}
        <div>
          <label className={styles[`visually-hidden`]} htmlFor="email">
            Email Address
          </label>
          <input
            className={styles[`input-email`]}
            type="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        {/* phone */}
        <div>
          <label className={styles[`visually-hidden`]} htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className={styles[`input-phone`]}
            type="text"
            id="phone-number"
            placeholder="Phone"
          />
        </div>
        {/* customer message */}
        <div>
          <label
            className={styles[`visually-hidden`]}
            htmlFor="customer-message"
          >
            Your Message
          </label>
          <textarea
            className={styles[`input-message`]}
            name=""
            id="customer-message"
            placeholder="Your Message"
          ></textarea>
        </div>
        {/* submit button */}
        <button>SUBMIT</button>
      </form>
    </React.Fragment>
  );
}
