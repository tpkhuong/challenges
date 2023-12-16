"use client";

import React from "react";
import styles from "./BackToGameMenu.module.css";
import { backToGameOptions } from "./backToGameMenuHelpers";

export default function BackToGameMenu({ children }) {
  return (
    <React.Fragment>
      <button
        className={styles[`checked-btn`]}
        type="button"
        aria-label="go back to game options"
        onClick={(event) => {
          backToGameOptions({ event });
        }}
      >
        {/* <img
          className={styles[`checked-image`]}
          src="/images/icon-check.svg"
          alt=""
        /> */}
        <SvgCheckedIcon />
      </button>
    </React.Fragment>
  );
}

const SvgCheckedIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={75} {...props}>
    <title>{"icon-check"}</title>
    <g fill="none" fillRule="evenodd">
      <circle
        className={styles[`checked-circle-border`]}
        cx={35}
        cy={35}
        r={35}
        fill="#000"
      />
      <circle
        className={styles[`checked-circle-border`]}
        cx={35}
        cy={40}
        r={35}
        fill="#000"
      />
      <circle cx={35} cy={35} r={32} fill="#FD6687" />
      <path
        stroke="#FFF"
        strokeWidth={3}
        d="m20 34.582 10.264 10.264L50.11 25"
      />
    </g>
  </svg>
);
