"use client";
import React from "react";
import styles from "./MobileNavMenu.module.css";

export default function MobileNavMenu({ children, props }) {
  return (
    <React.Fragment>
      <div
        id="mobile-menu-modal-selector"
        data-showmobilemenu=""
        className={styles[`modal-container`]}
        aria-modal="true"
        role="dialog"
      >
        <div className={styles[`mobile-menu-container`]}>
          <nav role="navigation">
            <ul
              onKeyDown={TabbingToCorrectElement}
              role="menubar"
              className={styles[`navlist`]}
            >
              {["our company", "locations", "contact"].map(
                function makeMenuItem(linkText, index, list) {
                  const companyTextForLink =
                    index == 0 ? linkText.split(" ")[1] : "company";

                  const capitalizedLinkText = linkText.toUpperCase();
                  return (
                    <li
                      key={Math.random() * index}
                      role="none"
                      className={styles[`navitem`]}
                    >
                      <a
                        role="menuitem"
                        id={`${
                          index == 0 ? companyTextForLink : linkText
                        }-selector`}
                        href={`/${index == 0 ? companyTextForLink : linkText}`}
                        className={styles[`navlink`]}
                      >
                        {capitalizedLinkText}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

function TabbingToCorrectElement(event) {
  // get link element
  const linkButton = event.target;
  // if linkButton is truthy run algorithm
  // get element id attribute
  const elementAttribute = linkButton.getAttribute("id");
  if (typeof elementAttribute == "string" && elementAttribute) {
    // destructure event obj
    const { shiftKey, code } = event;
    // if shift is not pressed && focus is on contact link mobile menu button
    if (elementAttribute == "contact-selector" && !shiftKey && code == "Tab") {
      event.preventDefault();
      // focus on animated mobile nav menu button
      document.getElementById("mobile-btn-selector").focus();
      return;
    }
    // if shift is pressed && focus is on our company link mobile menu button
    if (elementAttribute == "company-selector" && shiftKey && code == "Tab") {
      event.preventDefault();
      // focus on animated mobile nav menu button
      document.getElementById("mobile-btn-selector").focus();
    }
  }
}

function testingUnderstanding(firstName, lastName) {
  console.log(this, "what is 'this'");
  console.log(firstName, "firstName");
  console.log(lastName, "lastName");

  const makeSentence = `what is your name? My first name is ${firstName} and my last name is ${lastName}. My full name is ${firstName} ${lastName}.`;

  return makeSentence;
}

// .call
testingUnderstanding.call(
  { firstName: "Marvel", lastName: "Lotto", date: "7-12-2025" },
  "kickAssDude",
  "coolDude"
);

// .apply
// testingUnderstanding.apply(
//   { firstName: "Marvel", lastName: "Lotto", date: "7-12-2025" },
//   [
//     "cool",
//     "awesome",
//     {
//       done: true,
//       lastName: "Lakers",
//       sayHi: (greet) => {
//         console.log(`I want to say ${greet}`);
//       },
//     },
//     "street name",
//   ]
// );
// .apply
testingUnderstanding.apply(
  { firstName: "Marvel", lastName: "Lotto", date: "7-12-2025" },
  ["cool guy", "cool dude"]
);

// .bind
const finalBindFunc = testingUnderstanding.bind(
  { firstName: "Marvel", lastName: "Lotto", date: "7-12-2025" },
  "Cool person"
);

("use strict");

function testForBind(...args) {
  console.log(this, "this");
  console.log(...args, "args");
}
// .bind
const firstBindFunc = testForBind.bind(
  { firstName: "Marvel", lastName: "Lotto", date: "7-12-2025" },
  "Cool person"
);

const secondBindFunc = firstBindFunc.bind(
  { firstName: "Marvel", lastName: "Lotto", date: "7-12-2025" },
  "cooler person"
);

secondBindFunc("most cool person"); //Cool person cooler person most cool person
