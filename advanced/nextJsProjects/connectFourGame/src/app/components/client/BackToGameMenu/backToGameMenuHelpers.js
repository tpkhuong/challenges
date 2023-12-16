export function backToGameOptions({ event }) {
  const clickedBtn = event.target.closest("BUTTON");

  if (clickedBtn) {
    // focus rules button
    setTimeout(() => {
      document.getElementById("rules-btn-selector").focus();
    }, 80);
    // select main element with game options class
    // assign "false" to data-showrules attribute
    document
      .getElementById("game-options-selector")
      .getAttribute("data-showrules") == "true"
      ? document
          .getElementById("game-options-selector")
          .setAttribute("data-showrules", "false")
      : null;
  }
}
