"use client";
import React from "react";
import styles from "./ConnectFourBoard.module.css";
import PlayerTurnTimer from "../PlayerTurnTimer";
import ResultsDisplay from "../Result/index";
import { checking } from "./connectFourBoardHelpers";

export default function ConnectFourBoard({ children }) {
  return (
    <React.Fragment>
      {/* <div className={styles[`circle-container`]}>
        <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
        <div className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}></div>
        <div className={`${styles[`circle`]} ${styles[`chip-top`]}`}></div>
        <div className={`${styles[`circle`]} ${styles[`chip-border`]}`}></div>
      </div> */}
      {/* <div className={styles[`dropped-circle-container`]}>
        <div
          className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
        ></div>
        <div
          className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
        ></div>
        <div
          className={`${styles[`circle`]} ${styles[`dropped-chip-border`]}`}
        ></div>
        <span className={styles[`winning-white-circle`]}>
          <span className={styles[`winning-center-circle`]}></span>
        </span>
      </div> */}

      <div className={styles[`connect-four-board-container`]}>
        <PlayerTurnTimer />
        <ResultsDisplay />
        {/* import result and player turn timer to this component */}
        {/* back img */}
        <div className={styles[`back-game-board`]}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/board-layer-black-large.svg"
            />
            <img
              src="/images/board-layer-black-small.svg"
              alt="connect four game board with forty two circles."
            />
          </picture>
        </div>
        {/* rows/columns of chips */}
        <div className={styles[`chips-container`]}>
          {/* <div className={`${styles[`row`]} ${styles[`click-row`]}`}>
          <span
            onClick={(event) => {
              console.log(event);
              document
                .getElementById("first-row")
                .firstElementChild.setAttribute("data-droppedposition", "last");
            }}
          ></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
          <div
            id="row-6"
            className={styles[`row`]}
            onClick={(event) => {
              console.log(event);
            }}
          >
            {/* column 1 */}
            <div
              data-playerchip=""
              data-chipselector="6-1"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-playerchip=""
              data-chipselector="6-1"
              className={styles[`col-1`]}
              onClick={(event) => {
                console.log(event);
                document
                  .getElementById("row-1")
                  .firstElementChild.setAttribute(
                    "data-droppedposition",
                    "MobileDroppedPositionFirstRow"
                  );
              }}
            ></span> */}
            {/* column 2 */}
            {/* <span
              data-chipselector="6-2"
              data-playerchip=""
              className={styles[`col-2`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="6-2"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>

            {/* column 3 */}
            {/* <span
              data-chipselector="6-3"
              data-playerchip=""
              className={styles[`col-3`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="6-3"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* column 4 */}
            {/* <span
              data-chipselector="6-4"
              data-playerchip=""
              className={styles[`col-4`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="6-4"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* column 5 */}
            {/* <span
              data-chipselector="6-5"
              data-playerchip=""
              className={styles[`col-5`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="6-5"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* column 6 */}
            {/* <span
              data-chipselector="6-6"
              data-playerchip=""
              className={styles[`col-6`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="6-6"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* column 7 */}
            {/* <span
              data-chipselector="6-7"
              data-playerchip=""
              className={styles[`col-7`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="6-7"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
          </div>
          <div id="row-5" className={styles[`row`]}>
            {/* <span
              data-chipselector="5-1"
              data-playerchip=""
              className={styles[`col-1`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-1"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="5-2"
              data-playerchip=""
              className={styles[`col-2`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-2"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="5-3"
              data-playerchip=""
              className={styles[`col-3`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-3"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="5-4"
              data-playerchip=""
              className={styles[`col-4`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-4"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="5-5"
              data-playerchip=""
              className={styles[`col-5`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-5"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="5-6"
              data-playerchip=""
              className={styles[`col-6`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-6"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="5-7"
              data-playerchip=""
              className={styles[`col-7`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="5-7"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
          </div>
          <div id="row-4" className={styles[`row`]}>
            {/* <span
              data-chipselector="4-1"
              data-playerchip=""
              className={styles[`col-1`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-1"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="4-2"
              data-playerchip=""
              className={styles[`col-2`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-2"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="4-3"
              data-playerchip=""
              className={styles[`col-3`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-3"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="4-4"
              data-playerchip=""
              className={styles[`col-4`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-4"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="4-5"
              data-playerchip=""
              className={styles[`col-5`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-5"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="4-6"
              data-playerchip=""
              className={styles[`col-6`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-6"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="4-7"
              data-playerchip=""
              className={styles[`col-7`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="4-7"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
          </div>
          <div id="row-3" className={styles[`row`]}>
            {/* <span
              data-chipselector="3-1"
              data-playerchip=""
              className={styles[`col-1`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-1"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="3-2"
              data-playerchip=""
              className={styles[`col-2`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-2"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="3-3"
              data-playerchip=""
              className={styles[`col-3`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-3"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="3-4"
              data-playerchip=""
              className={styles[`col-4`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-4"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="3-5"
              data-playerchip=""
              className={styles[`col-5`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-5"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="3-6"
              data-playerchip=""
              className={styles[`col-6`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-6"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="3-7"
              data-playerchip=""
              className={styles[`col-7`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="3-7"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
          </div>
          <div id="row-2" className={styles[`row`]}>
            {/* <span
              data-chipselector="2-1"
              data-playerchip=""
              className={styles[`col-1`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-1"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="2-2"
              data-playerchip=""
              className={styles[`col-2`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-2"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="2-3"
              data-playerchip=""
              className={styles[`col-3`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-3"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="2-4"
              data-playerchip=""
              className={styles[`col-4`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-4"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="2-5"
              data-playerchip=""
              className={styles[`col-5`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-5"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="2-6"
              data-playerchip=""
              className={styles[`col-6`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-6"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="2-7"
              data-playerchip=""
              className={styles[`col-7`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="2-7"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
          </div>
          <div id="row-1" className={styles[`row`]}>
            {/* <span
              data-chipselector="1-1"
              data-playerchip=""
              className={styles[`col-1`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-1"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="1-2"
              data-playerchip=""
              className={styles[`col-2`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-2"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="1-3"
              data-playerchip=""
              className={styles[`col-3`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-3"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="1-4"
              data-playerchip=""
              className={styles[`col-4`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-4"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="1-5"
              data-playerchip=""
              className={styles[`col-5`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-5"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="1-6"
              data-playerchip=""
              className={styles[`col-6`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-6"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
            {/* <span
              data-chipselector="1-7"
              data-playerchip=""
              className={styles[`col-7`]}
            ></span> */}
            <div
              data-playerchip=""
              data-chipselector="1-7"
              className={styles[`dropped-circle-container`]}
            >
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${
                  styles[`dropped-chip-border`]
                }`}
              ></div>
              <span
                data-connectfour="false"
                className={styles[`winning-white-circle`]}
              >
                <span className={styles[`winning-center-circle`]}></span>
              </span>
            </div>
          </div>
          {/* animation row */}
          <div
            // id={styles[`animation-row`]}
            id="animation-row"
            className={styles[`row`]}
            onClick={(event) => {
              console.log(event);
            }}
          >
            {/* column 1 */}
            <div
              id="animation-column-first"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* column 2 */}
            <div
              id="animation-column-second"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* column 3 */}
            <div
              id="animation-column-third"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* column 4 */}
            <div
              id="animation-column-fourth"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* column 5 */}
            <div
              id="animation-column-fifth"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* column 6 */}
            <div
              id="animation-column-sixth"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* column 7 */}
            <div
              id="animation-column-seventh"
              data-droppedposition=""
              className={styles[`circle-container`]}
            >
              <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-top`]}`}
              ></div>
              <div
                className={`${styles[`circle`]} ${styles[`chip-border`]}`}
              ></div>
            </div>
            {/* <span
              id="animation-column-first"
              data-droppedposition=""
              // onClick={(event) => {
              //   console.log(event);
              //   document
              //     .getElementById("first-row")
              //     .firstElementChild.setAttribute(
              //       "data-droppedposition",
              //       "MobileDroppedPositionFirstRow"
              //     );
              // }}
            ></span> */}
            {/* <span id="animation-column-second" data-droppedposition=""></span>
            <span id="animation-column-third" data-droppedposition=""></span>
            <span id="animation-column-fourth" data-droppedposition=""></span>
            <span id="animation-column-fifth" data-droppedposition=""></span>
            <span id="animation-column-sixth" data-droppedposition=""></span>
            <span id="animation-column-seventh" data-droppedposition=""></span> */}
          </div>
          {/* drop pointer container */}
          <div
            data-chipdroplocation="first"
            id="chip-drop-pointer-selector"
            className={styles[`drop-selection-pointer-container`]}
          >
            <div className={styles[`pointer-container`]}>
              {/* <img src="/images/marker-red.svg" alt="" /> */}
            </div>
          </div>
        </div>
        {/* <div className={styles[`chips-container`]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
        {/* front img */}
        {/* declare pointer-events: none for div with class front-game-board */}
        {/* we can click on connect for chips */}
        <div className={styles[`front-game-board`]}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/board-layer-white-large.svg"
            />
            <img
              src="/images/board-layer-white-small.svg"
              alt=""
              aria-hidden="true"
            />
          </picture>
        </div>
        <div
          className={styles[`clicking-container`]}
          onClick={(event) => {
            checking(event);
          }}
        >
          <span data-column="first"></span>
          <span data-column="second"></span>
          <span data-column="third"></span>
          <span data-column="fourth"></span>
          <span data-column="fifth"></span>
          <span data-column="sixth"></span>
          <span data-column="seventh"></span>
        </div>
      </div>
    </React.Fragment>
  );
}
