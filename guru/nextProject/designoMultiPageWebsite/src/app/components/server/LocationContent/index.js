import React from "react";
import styles from "./locationContent.module.css";

export default function LocationContent({
  children,
  title,
  mapImg: { tabletImg, mobileDesktopImg },
  addressObj: {
    buildingName,
    streetObj: { number, name, suffixAbbr },
    addressBottomLineArr,
  },
  contactObj: { phoneNumberArr, email },
}) {
  return (
    <article className={styles[`map-text-content-container`]}>
      {/* map img */}
      <div className={styles[`img-container`]}>
        <picture>
          <source
            media="(min-width: 768px) and (max-width: 1339px)"
            srcSet={tabletImg}
          />
          <img src={mobileDesktopImg} alt="" />
        </picture>
      </div>
      <div className={styles[`text-content-container`]}>
        <img src="/shared/desktop/bg-pattern-three-circles.svg" alt="" />
        <h2 className={styles[`title`]}>{title}</h2>
        <div className={styles[`address-contact-container`]}>
          {/* mailing address */}
          <div className={styles[`address-container`]}>
            <h3 className={styles[`building`]}>{buildingName}</h3>
            <div className={styles[`street-address`]}>
              <span className={styles[`st-number`]}>{number}</span>
              <span className={styles[`st-name`]}>{name}</span>
              <span className={styles[`st-suffix-abbr`]}>{suffixAbbr}</span>
            </div>
            {/* city,country, zipcode */}
            <div className={styles[`city-country-zipcode-container`]}>
              {Array.isArray(addressBottomLineArr)
                ? addressBottomLineArr.map(function makeBottomAddress(
                    textElement,
                    index,
                    list
                  ) {
                    return (
                      <span key={Math.random() * index}>{textElement}</span>
                    );
                  })
                : null}
            </div>
          </div>
          {/* contact info */}
          <div>
            <h3 className={styles[`contact-title`]}>Contact</h3>
            {/* phone number */}
            <div className={styles[`phone-number-container`]}>
              <span>P</span>
              <span>:</span>
              {Array.isArray(phoneNumberArr)
                ? phoneNumberArr.map(function makePhoneNumberContent(
                    textElement,
                    index,
                    list
                  ) {
                    return (
                      <span key={Math.random() * index}>{textElement}</span>
                    );
                  })
                : null}
            </div>
            {/* email */}
            <div className={styles[`email-container`]}>
              <span>M</span>
              <span>:</span>
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function testObj(
  firstName,
  { lastName, addressObj: { street, city, country, zipCode } }
) {
  console.log("firstName", firstName);
  console.log("street", street);
  console.log("city", city);
  console.log("country", country);
  console.log("zipCode", zipCode);
}

testObj("Knell", {
  lastName: "Cool dude",
  addressObj: {
    street: "123 Awesome Rd",
    city: "Los Angeles",
    country: "US",
    zipCode: "30132",
  },
});
