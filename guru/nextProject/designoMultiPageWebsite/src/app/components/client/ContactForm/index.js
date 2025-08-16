"use client";

import React from "react";
import styles from "./ContactForm.module.css";
import { formInputAlgorithm, subminBtnMessage } from "./contactFormHelpers";

export default function ContactForm({ children }) {
  return (
    <React.Fragment>
      <form
        onKeyUp={formInputAlgorithm}
        className={styles[`contact-form`]}
        role="form"
      >
        {/* full name */}
        <div data-isempty="true" className={styles[`input-name-container`]}>
          <label className={styles[`visually-hidden`]} htmlFor="full-name">
            Name
          </label>
          <input
            data-objselector="fullName"
            className={styles[`input-name`]}
            type="text"
            id="full-name"
            placeholder="Name"
          />
          {/* can't be empty */}
          <div className={styles[`empty-text-container`]}>
            <span>Can't be empty</span>
            <img
              src="/contact/desktop/icon-error.svg"
              alt="exclamation mark inside a white circle"
            />
          </div>
        </div>
        {/* email */}
        <div data-isempty="true" className={styles[`input-email-container`]}>
          <label className={styles[`visually-hidden`]} htmlFor="email">
            Email Address
          </label>
          <input
            data-objselector="email"
            className={styles[`input-email`]}
            type="email"
            id="email"
            placeholder="Email Address"
          />
          {/* can't be empty */}
          <div className={styles[`empty-text-container`]}>
            <span>Can't be empty</span>
            <img
              src="/contact/desktop/icon-error.svg"
              alt="exclamation mark inside a white circle"
            />
          </div>
        </div>
        {/* phone */}
        <div data-isempty="true" className={styles[`input-phone-container`]}>
          <label className={styles[`visually-hidden`]} htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className={styles[`input-phone`]}
            type="tel"
            data-objselector="phoneNumber"
            id="phone-number"
            placeholder="Phone"
          />
          {/* can't be empty */}
          <div className={styles[`empty-text-container`]}>
            <span>Can't be empty</span>
            <img
              src="/contact/desktop/icon-error.svg"
              alt="exclamation mark inside a white circle"
            />
          </div>
        </div>
        {/* customer message */}
        <div data-isempty="true" className={styles[`input-message-container`]}>
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
            data-objselector="customerMessage"
            id="customer-message"
            placeholder="Your Message"
          ></textarea>
          {/* can't be empty */}
          <div className={styles[`empty-text-container`]}>
            <span>Can't be empty</span>
            <img
              src="/contact/desktop/icon-error.svg"
              alt="exclamation mark inside a white circle"
            />
          </div>
        </div>
        {/* submit button */}
        {/* reset input to empty chars when user click on submit. Don't have to reload form */}
        {/* make modal to let customer message was successful */}
        <button
          type="button"
          onClick={subminBtnMessage}
          className={styles[`submit-btn`]}
        >
          SUBMIT
        </button>
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
