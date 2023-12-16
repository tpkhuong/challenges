import PageStyles from "../styles/Page.module.css";
import GameOptions from "./components/server/GameOptions";
// import PlayerDisplay from "./components/server/PlayerDisplay";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      {/* game options */}
      {/* game rules */}
      {/* <h1 className={PageStyles[`title`]}>Hello, next.js</h1> */}
      <GameOptions />
      {/* <PlayerDisplay isCpu={false} firstOrSecond="first" /> */}
      {/* <PlayerDisplay isCpu={false} firstOrSecond="second" /> */}
      {/* <div></div> */}
      {/* <div></div> */}
    </React.Fragment>
  );
}
