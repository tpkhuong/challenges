"use client";

import React from "react";
import styles from "./Result.module.css";
import { gameFunctions } from "./resultHelpers.js";

export default function ResultsDisplay({ children, checkingFunc }) {
  return (
    // when data-result is not "null" assign "null" to data-playerturn
    <div className={styles[`results-container`]}>
      <h2 id="winner-text-selector" className={styles[`winner`]}>
        PLAYER 1
      </h2>
      <span>WINS</span>
      <button
        onClick={(event) => {
          gameFunctions(event, checkingFunc);
        }}
        className={styles[`play-again-btn`]}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
