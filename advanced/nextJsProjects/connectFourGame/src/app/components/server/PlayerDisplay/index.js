import React from "react";
import PlayerDisplayStyles from "./PlayerDisplay.module.css";

export default function PlayerDisplay({
  children,
  isDesktop,
  isCpu,
  firstOrSecond,
}) {
  return (
    <div
      data-isplayercpu={isCpu}
      data-firstorsecondplayer={firstOrSecond}
      data-isdesktop={isDesktop}
      className={PlayerDisplayStyles[`player-display-container`]}
    >
      {isCpu && firstOrSecond == "second" && (
        <img
          className={PlayerDisplayStyles[`image`]}
          src="/images/cpu.svg"
          alt="circle with yellow background. top two horizontal lines. bottom one horizontal line"
        />
      )}
      {!isCpu && firstOrSecond == "first" && (
        <img
          className={PlayerDisplayStyles[`image`]}
          src="/images/player-one.svg"
          alt="circle with red background. top two vertical lines. bottom curved line in smiley shape."
        />
      )}
      {!isCpu && firstOrSecond == "second" && (
        <img
          className={PlayerDisplayStyles[`image`]}
          src="/images/player-two.svg"
          alt="circle with yellow background. top two vertical lines. bottom curved line in smiley shape."
        />
      )}
      <h2 className={PlayerDisplayStyles[`title`]}>
        {isCpu && firstOrSecond == "second" && "CPU"}
        {!isCpu && firstOrSecond == "first" && "PLAYER 1"}
        {!isCpu && firstOrSecond == "second" && "PLAYER 2"}
      </h2>
      <span className={PlayerDisplayStyles[`score`]}>26</span>
    </div>
  );
}
