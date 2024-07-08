import React from "react";
import styles from "../../styles/IndexPage.module.css";
import Footer from "../app/components/server/Footer/index.js";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <Footer />
    </React.Fragment>
  );
}
