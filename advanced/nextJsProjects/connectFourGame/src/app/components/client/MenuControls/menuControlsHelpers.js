export function showPauseMenu({ event }) {
  const clickedBtn = event.target.closest("BUTTON");

  if (clickedBtn) {
    document
      .getElementById("pause-modal-selector")
      .getAttribute("data-showpausemenu") == "false"
      ? document
          .getElementById("pause-modal-selector")
          .setAttribute("data-showpausemenu", "true")
      : null;
  }
}
