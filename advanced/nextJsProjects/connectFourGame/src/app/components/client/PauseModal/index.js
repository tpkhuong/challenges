"use client";

import React from "react";
import styles from "./PauseModal.module.css";

export default function PauseGame({ children }) {
  return (
    <div
      id="pause-modal-selector"
      data-showpausemenu="false"
      className={styles[`pause-modal-container`]}
    >
      <div
        aria-labelledby="pause-modal-title"
        aria-modal="true"
        role="dialog"
        className={styles[`pause-modal`]}
      >
        <h2
          className={`${styles[`pause-title`]} ${styles[`text-white`]}`}
          id="pause-modal-title"
        >
          PAUSE
        </h2>
        <button type="button">CONTINUE GAME</button>
        <button type="button">RESTART</button>
        <button
          type="button"
          className={`${styles[`quit-btn`]} ${styles[`text-white`]} ${
            styles[`red-bg`]
          }`}
        >
          QUIT GAME
        </button>
      </div>
    </div>
  );
}
