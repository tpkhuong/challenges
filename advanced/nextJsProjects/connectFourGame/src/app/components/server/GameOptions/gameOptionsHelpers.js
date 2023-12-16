export function showRulesModal({ event }) {
  const clickedBtn = event.target.closest("BUTTON");

  if (clickedBtn) {
    console.log(clickedBtn, "this is clicked btn");
  }
}
