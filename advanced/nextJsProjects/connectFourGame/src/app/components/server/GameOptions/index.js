import React from "react";
import styles from "./GameOptions.module.css";
import RulesButton from "../../client/RulesButton";
import BackToGameMenu from "../../client/BackToGameMenu";

export default function GameOptions({ children }) {
  return (
    <main
      id="game-options-selector"
      data-showrules="false"
      className={styles[`game-options-bg`]}
    >
      <h1 className="visually-hidden">Connect Four</h1>
      <div className={styles[`options-container`]}>
        {/* img */}
        <SvgGameLogo />
        {/* button player vs player */}
        <a
          aria-label="launch player one vs player two game"
          href=""
          className={styles[`start-game`]}
        >
          <span>Play vs Player</span>

          <SvgPlayerVsPlayer />
        </a>
        {/* rules */}
        <RulesButton />
        {/* <button
          onClick={(event) => {
            showRulesModal({ event });
          }}
          type="button"
          className={styles[`rules-btn`]}
        >
          Game Rules
        </button> */}
      </div>
      {/* rules modal */}
      <div className={styles[`modal-container`]}>
        <div
          aria-labelledby="rules-title"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
          id="rules-modal-selector"
          className={styles[`rules-modal`]}
        >
          <h2 className={styles[`modal-title`]} id="rules-title">
            Rules
          </h2>
          <h3 className={`${styles[`text-color`]} ${styles[`font-size-20px`]}`}>
            OBJECTIVE
          </h3>
          <p className={styles[`objective`]}>
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
          <h3 className={`${styles[`text-color`]} ${styles[`font-size-20px`]}`}>
            HOW TO PLAY
          </h3>
          <ol className={styles[`list-of-rules`]}>
            <li>
              <span>1</span> <span>Red goes first in the first game.</span>
            </li>
            <li>
              <span>2</span>
              <span>
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </span>
            </li>
            <li>
              <span>3</span>
              <span>
                The game ends when there is a 4-in-a-row or a stalemate.
              </span>
            </li>
            <li>
              <span>4</span>
              <span>
                The starter of the previous game goes second on the next game.
              </span>
            </li>
          </ol>
          <BackToGameMenu />
          {/* <img
            className={styles[`checked-image`]}
            src="/images/icon-check.svg"
            alt=""
          /> */}
        </div>
      </div>
    </main>
  );
}

const SvgPlayerVsPlayer = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={82} height={46} {...props}>
    <title>{"player-vs-player"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={59} cy={23} r={23} fill="#000" />
      <circle cx={59} cy={23} r={20} fill="#FFCE67" />
      <g stroke="#000" strokeWidth={3}>
        <path d="M52.333 21.958c0 5.523 4.477 10 10 10s10-4.477 10-10M60.875 14.667v4.987M69.208 14.667v4.987" />
      </g>
      <circle cx={23} cy={23} r={23} fill="#000" />
      <g transform="translate(3 3)">
        <circle cx={20} cy={20} r={20} fill="#FFCE67" />
        <g stroke="#000" strokeWidth={3}>
          <path d="M13.333 18.958c0 5.523 4.477 10 10 10s10-4.477 10-10M21.875 11.667v4.987M30.208 11.667v4.987" />
        </g>
      </g>
    </g>
  </svg>
);

const SvgGameLogo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={58} height={61} {...props}>
    <title>{"logo"}</title>
    <g fill="none" fillRule="evenodd">
      <g fill="#000">
        <circle cx={13} cy={13} r={13} />
        <circle cx={45} cy={13} r={13} />
        <circle cx={13} cy={45} r={13} />
        <circle cx={45} cy={45} r={13} />
      </g>
      <g fill="#000" transform="translate(0 3)">
        <circle cx={13} cy={13} r={13} />
        <circle cx={45} cy={13} r={13} />
        <circle cx={13} cy={45} r={13} />
        <circle cx={45} cy={45} r={13} />
      </g>
      <circle cx={13} cy={13} r={10} fill="#FD6687" />
      <circle cx={45} cy={45} r={10} fill="#FD6687" />
      <circle cx={45} cy={13} r={10} fill="#FFCE67" />
      <circle cx={13} cy={45} r={10} fill="#FFCE67" />
    </g>
  </svg>
);
