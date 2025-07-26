"use client";

import React from "react";
import styles from "./ContactForm.module.css";
import { formInputAlgorithm, testFunc } from "./contactFormHelpers";

export default function ContactForm({ children }) {
  return (
    <React.Fragment>
      <form
        onKeyDown={testFunc}
        className={styles[`contact-form`]}
        action=""
        role="form"
        noValidate
      >
        {/* full name */}
        <div className={styles[`input-name-container`]}>
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
        <div className={styles[`input-email-container`]}>
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
        <div className={styles[`input-phone-container`]}>
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
        <div className={styles[`input-message-container`]}>
          <label
            className={styles[`visually-hidden`]}
            htmlFor="customer-message"
          >
            Your Message
          </label>
          <textarea
            rows="5"
            className={styles[`input-message`]}
            name=""
            id="customer-message"
            placeholder="Your Message"
          ></textarea>
        </div>
        {/* submit button */}
        <button className={styles[`submit-btn`]}>SUBMIT</button>
      </form>
    </React.Fragment>
  );
}

function testingArrowFunc() {
  console.log(this, "this");

  // this.firstName = "Cool";
  // this.lastName = "Dude";

  const sayHi = () => {
    const firstName = this.firstName;
    const lastName = this.lastName;

    return `Hi, my name is ${firstName} ${lastName}`;
  };

  console.log(this, "this");
  console.log(sayHi(), "sayHi");
}

testingArrowFunc.call({ firstName: "Awesome", lastName: "Guy" });
