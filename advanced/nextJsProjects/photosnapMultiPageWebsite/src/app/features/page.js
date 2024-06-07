import React from "react";
import styles from "./Features.module.css";
import LogoNavBar from "../components/server/LogoNavbar/index.js";
import MobileNavMenu from "../components/server/MobileNavMenu/index.js";
import FooterBanner from "../components/server/FooterBanner/index.js";
import Footer from "../components/server/Footer/index.js";

export default function FeaturesPage({ children }) {
  return (
    <header role="banner">
      <h1>Hello This is the Features Page!!!</h1>
    </header>
  );
}
