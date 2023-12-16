"use client";

import React from "react";
import styles from "./PlayerTurnTimer.module.css";

export default function PlayerTurnTimer({ children }) {
  return (
    <React.Fragment>
      <div
        onClick={(event) => {
          // countdownTimer(document.getElementById("turn-countdown-selector"));
        }}
        className={styles[`player-turns-bg-container`]}
      >
        <span
          className={styles[`font-size-16px`]}
          id="player-turn-text-selector"
        >
          PLAYER 1'S TURN
        </span>
        <div className={styles[`text-container`]}>
          <span
            className={styles[`font-size-56px`]}
            id="turn-countdown-selector"
          >
            30
          </span>
          <span className={styles[`font-size-56px`]}>s</span>
        </div>
      </div>
    </React.Fragment>
  );
}

// move coundownTimer function to connectFourBoardHelpers
// function countdownTimer(element) {
//   let startingNumber = 30;

//   const stopInterval = setInterval(() => {
//     startingNumber = startingNumber - 1;
//     console.log(startingNumber);
//     element.textContent = `${startingNumber}`;

//     if (startingNumber === 0) {
//       const stopIntervalDigit = JSON.parse(
//         localStorage.getItem("stopCountdown")
//       );
//       element.textContent = `00`;
//       clearInterval(stopIntervalDigit);
//     }
//   }, 1000);
//   localStorage.setItem("stopCountdown", JSON.stringify(stopInterval));
// }
