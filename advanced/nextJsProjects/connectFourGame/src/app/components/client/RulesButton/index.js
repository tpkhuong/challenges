"use client";
import React from "react";
import styles from "./RulesButton.module.css";
import { showRulesModal } from "./rulesButtonHelpers";

export default function RulesButton({ children }) {
  return (
    <React.Fragment>
      <button
        onClick={(event) => {
          showRulesModal({ event });
        }}
        type="button"
        id="rules-btn-selector"
        className={styles[`rules-btn`]}
      >
        Game Rules
      </button>
    </React.Fragment>
  );
}
