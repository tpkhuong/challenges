import React from "react";
import styles from "./MenuPlayerDisplayBoard.module.css";
import MenuControls from "../../client/MenuControls";
import PlayerDisplay from "../PlayerDisplay";
import ConnectFourBoard from "../../client/ConnectFourBoard";

export default function MenuPlayerDisplayBoard({ children }) {
  return (
    <div className={styles[`menu-player-display-board-container`]}>
      {/* menu */}
      <MenuControls />
      {/* player display */}
      {/* hide at desktop */}
      <div className={styles[`player-display-container`]}>
        <PlayerDisplay isCpu={false} firstOrSecond="first" />
        <PlayerDisplay isCpu={false} firstOrSecond="second" />
      </div>
      <ConnectFourBoard />
      <PlayerDisplay isDesktop="true" isCpu={false} firstOrSecond="first" />
      <PlayerDisplay isDesktop="true" isCpu={false} firstOrSecond="second" />
      {/* game board */}
    </div>
  );
}
