export function doneMessageBtn(event) {
  // select modal container
  const modalContainer = document.getElementById(
    "success-message-modal-selector"
  ).parentElement;
  // change attr to hide modal
  modalContainer.setAttribute("data-showmodal", "false");
  // focus on first input of contact form
  document.getElementById("full-name").focus();
}
