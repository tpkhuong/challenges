export function formInputAlgorithm(event) {
  console.log(event, "event");
  const currentInput = event.target;

  console.log(currentInput, "currentInput");
  console.log(inputFuncObj, "inputFuncObj");
}

/**
 *
 * funcObj
 * ***/

const inputFuncObj = {
  // full-name
  fullName: function (event) {
    console.log(event, "event");
    console.log("this is full name");
  },
  // email
  email: function (event) {
    console.log(event, "event");
    console.log("this is email");
  },
  // phone-number
  phoneNumber: function (event) {
    console.log(event, "event");
    console.log("this is phone number");
  },
  // customer-message
  customerMessage: function (event) {
    console.log(event, "event");
    console.log("this is customer message");
  },
};

/**
 *
 * funcObj
 * ***/

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
