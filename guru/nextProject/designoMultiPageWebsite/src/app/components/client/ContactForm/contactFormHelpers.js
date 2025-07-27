export function formInputAlgorithm(event) {
  console.log(event, "event");
  const currentInput = event.target;
}

export function subminBtnMessage(event) {
  //  select done btn
  const doneBtn = document.getElementById("done-btn-message-selector");
  const thankyouMessageModalContainer = document.getElementById(
    "success-message-modal-selector"
  ).parentElement;

  // change attr of data-showmodal="false" to "true" to show modal
  thankyouMessageModalContainer.setAttribute("data-showmodal", "true");
  // select done btn and focus
  doneBtn.focus();
}
