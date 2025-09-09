export function formInputAlgorithm(event) {
  console.log(event, "event");
  const currentInput = event.target;
  const attrForFuncObj = currentInput.getAttribute("data-objselector");
  // call func based on input
  inputFuncObj[attrForFuncObj](event);

  console.log(attrForFuncObj, "attrForFuncObj");
  console.log(inputFuncObj, "inputFuncObj");
}

/**
 *
 * funcObj
 * ***/

const inputFuncObj = {
  // full-name
  fullName: function (event) {
    const parent = getTargetParentElement(event.target);
    const valueOfLength = getLengthOfInputValue(event.target.value);
    console.log(parent, "parent");
    console.log(valueOfLength, "valueOfLength");
    checkLengthOfInputValue(valueOfLength, parent);
    // console.log(event, "event");
    // console.log("this is full name");
  },
  // email
  email: function (event) {
    const parent = getTargetParentElement(event.target);
    const valueOfLength = getLengthOfInputValue(event.target.value);
    console.log(event, "event");
    console.log("this is email");
    checkLengthOfInputValue(valueOfLength, parent);
  },
  // phone-number
  phoneNumber: function (event) {
    // remove numbers for users
    // const regex = /[0-9\-]/gi;
    // automatically set pattern for users
    console.log(event.target.value, "target value");
    const parent = getTargetParentElement(event.target);
    const valueOfLength = getLengthOfInputValue(event.target.value);
    console.log(event, "event");
    console.log("this is phone number");
    checkLengthOfInputValue(valueOfLength, parent);
  },
  // customer-message
  customerMessage: function (event) {
    const parent = getTargetParentElement(event.target);
    const valueOfLength = getLengthOfInputValue(event.target.value);
    console.log(event, "event");
    console.log("this is customer message");
    checkLengthOfInputValue(valueOfLength, parent);
  },
};

/**
 *
 * funcObj
 * ***/

function getLengthOfInputValue(inputValue) {
  const valueLength = inputValue.length;

  return valueLength;
}

function checkLengthOfInputValue(length, parentElement) {
  // if length equal 0
  if (length == 0) {
    changeDataAttrTrue(parentElement);
    return;
  }
  // if length is greater than 0
  if (length > 0) {
    changeDataAttrFalse(parentElement);
    return;
  }
}

function getTargetParentElement(target) {
  const parentElement = target.parentElement;

  return parentElement;
}

// change attr data-isempty to "true"

function changeDataAttrTrue(parentElement) {
  parentElement.setAttribute("data-isempty", "true");
}

// change attr data-isempty to "false"
function changeDataAttrFalse(parentElement) {
  parentElement.setAttribute("data-isempty", "false");
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
