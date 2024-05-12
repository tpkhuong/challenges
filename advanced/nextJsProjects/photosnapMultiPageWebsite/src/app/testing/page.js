import React from "react";
import styles from "./Testing.module.css";

export default function TestingPage({ children }) {
  return <h1 className={styles[`title`]}>This is Next js.</h1>;
}
