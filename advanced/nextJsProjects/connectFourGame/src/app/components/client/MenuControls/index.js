"use client";

import React from "react";
import styles from "./MenuControls.module.css";
import { showPauseMenu } from "./menuControlsHelpers";

export default function MenuControls({ children }) {
  return (
    <div className={styles[`menu-controls-container`]}>
      <button
        onClick={(event) => {
          showPauseMenu({ event });
        }}
        className={styles[`menu-btn`]}
      >
        MENU
      </button>
      <img
        src="/images/logo.svg"
        alt="four circles. top row red circle and yellow circle. bottom row yellow circle and red circle"
      />
      <button className={styles[`restart-btn`]}>RESTART</button>
    </div>
  );
}
