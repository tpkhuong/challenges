export function showRulesModal({ event }) {
  const clickedBtn = event.target.closest("BUTTON");

  if (clickedBtn) {
    // focus rules modal
    setTimeout(() => {
      document.getElementById("rules-modal-selector").focus();
    }, 80);
    // select main element with game options class
    // assign "true" to data-showrules attribute
    document
      .getElementById("game-options-selector")
      .getAttribute("data-showrules") == "false"
      ? document
          .getElementById("game-options-selector")
          .setAttribute("data-showrules", "true")
      : null;
  }
}
