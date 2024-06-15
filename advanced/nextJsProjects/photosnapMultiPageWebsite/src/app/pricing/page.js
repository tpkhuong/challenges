import React from "react";
import styles from "./Pricing.module.css";
import LogoNavbar from "../components/server/LogoNavbar/index.js";
import FeatureCompare from "../components/server/FeatureCompare/index.js";
import FooterBanner from "../components/server/FooterBanner/index.js";
import Footer from "../components/server/Footer/index.js";
import MobileNavMenu from "../components/server/MobileNavMenu/index.js";

export default function PricingPage({ children }) {
  return (
    <React.Fragment>
      <header role="banner">
        {/* logonavbar */}
        <LogoNavbar />
        {/* MarketingPoint */}
        <MarketingPoint
          desktop="/pricing/desktop/hero.jpg"
          tablet="/pricing/tablet/hero.jpg"
          mobile="/pricing/mobile/hero.jpg"
          theme="dark"
          title="PRICING"
          linkText={null}
          textLeftBoolean="true"
          booleanGradient="true"
          pagePadding="not-home-page"
        >
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </MarketingPoint>
      </header>
      <main role="main">
        {/* toggle */}
        {/* cards container */}
        <article
          id="toggle-btn-cards-selector"
          data-monthoryear="month"
          className={styles[`toggle-cards-container`]}
        >
          {/* toggle button component */}
          <ToggleButton />
          {/* card container */}
          {/* month */}

          <div className={styles[`cards-container`]}>
            {/* basic */}
            {/* <FeatureCard
      planTitle="Basic"
      description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
      price="$19.00"
      monthOrYear="month"
    /> */}
            {/* pro */}
            {/* <FeatureCard
      planTitle="Pro"
      description="More advanced features available. Recommended for photography veterans and professionals."
      price="$39.00"
      monthOrYear="month"
    /> */}
            {/* business */}
            {/* <FeatureCard
      planTitle="Business"
      description="Additional features available such as more detailed metrics. Recommended for business owners."
      price="$99.00"
      monthOrYear="month"
    /> */}
          </div>

          {/* year */}
          <div className={styles[`cards-container`]}>
            {/* basic */}
            {/* <FeatureCard
      planTitle="Basic"
      description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
      price="$190.00"
      monthOrYear="year"
    /> */}
            {/* pro */}
            {/* <FeatureCard
      planTitle="Pro"
      description="More advanced features available. Recommended for photography veterans and professionals."
      price="$390.00"
      monthOrYear="year"
    /> */}
            {/* business */}
            {/* <FeatureCard
      planTitle="Business"
      description="Additional features available such as more detailed metrics. Recommended for business owners."
      price="$990.00"
      monthOrYear="year"
    /> */}
          </div>
        </article>
        {/* Feature Compare */}
        <FeatureCompare />
      </main>
      {/* Footer Banner */}
      <FooterBanner
        mobile="/shared/mobile/bg-beta.jpg"
        tablet="/shared/tablet/bg-beta.jpg"
        desktop="/shared/desktop/bg-beta.jpg"
      />
      {/* footer */}
      <Footer />
      {/* Mobile Menu */}
      <MobileNavMenu />
    </React.Fragment>
  );
}

function ToggleButton({ children }) {
  return (
    <div className={styles[`text-toggle-btn-container`]}>
      <span>Monthly</span>
      <button onClick={switchPricing}>
        {/* use pseudo element for toggle button */}
        <span className={styles[`toggle-btn-circle`]}></span>
      </button>
      <span>Yearly</span>
    </div>
  );
}

function switchPricing(event) {
  const clickedBtn = event.target.closest("BUTTON");
  console.log(clickedBtn, "clickedBtn");
  // select article element with id toggle-btn-cards-selector
  const articleElement = document.getElementById("toggle-btn-cards-selector");
  const articleElementAttrValue =
    articleElement.getAttribute("data-monthoryear");
  // if attr of data-monthoryear is "month" change to "year"
  if (articleElementAttrValue == "month") {
    articleElement.setAttribute("data-monthoryear", "year");
    return;
  }
  // if attr of data-monthoryear is "year" change to "month"
  if (articleElementAttrValue == "year") {
    articleElement.setAttribute("data-monthoryear", "month");
    return;
  }
}
