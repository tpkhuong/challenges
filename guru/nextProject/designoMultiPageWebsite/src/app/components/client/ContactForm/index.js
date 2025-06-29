import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ children }) {
  return (
    <React.Fragment>
      <form action="" role="form" noValidate>
        {/* full name */}
        <div>
          <label htmlFor="full-name"></label>
          <input type="text" id="full-name" placeholder="Name" />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Email Address" />
        </div>
        {/* phone */}
        <div>
          <label htmlFor="phone-number"></label>
          <input type="text" id="phone-number" placeholder="Phone" />
        </div>
        {/* customer message */}
        <div>
          <label htmlFor="customer-message"></label>
          <textarea
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
