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
 * funcObj
 * ***/

const inputFuncObj = {
  convertLengthToTextObj: {
    1: "first",
    2: "second",
    3: "third",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  },
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
    console.log(this.convertLengthToTextObj, "this.convertLengthToTextObj");
    // remove numbers for users
    // const regex = /[0-9\-]/gi;
    // automatically set pattern for users
    // phone number format: (213)323-8778
    const numberRegex = /[0-9\-]/gi;
    const onlyNumberArray = event.target.value.match(numberRegex);
    console.log("onlyNumberArray before", onlyNumberArray);
    if (!onlyNumberArray) {
      // first key press is not a number key
      event.target.value = "";
      return;
    }
    console.log("onlyNumberArray after", onlyNumberArray);
    console.log("onlyNumberArray.length after", onlyNumberArray.length);
    /*****
     * get here there is an number in the array
     * *****/
    /****
     * extra helpers
     * *****/

    leftSidePhoneNumber(onlyNumberArray, event);
    middlePhoneNumber(onlyNumberArray, event);
    /****
     * extra helpers
     * *****/
    /*****
     * get here there is an number in the array
     * *****/
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

/*****
 * Phone number algorithm helpers
 * *****/

function leftSidePhoneNumber(arrayOfNumbers, event) {
  if (arrayOfNumbers.length <= 2) {
    const arrayForLeftSide = ["(", ...arrayOfNumbers];
    event.target.value = arrayForLeftSide.join("");
    return;
  }
  if (arrayOfNumbers.length == 3) {
    // check to see if user hit/press back key
    // if user did hit/press back key remove ) parentheses
    const stringOfLeftSideWithParentheses = ["(", ...arrayOfNumbers, ")"].join(
      ""
    );
    event.target.value = stringOfLeftSideWithParentheses;
    /*****
     * when user hit/press back key
     * *****/

    if (event.key == "Backspace") {
      console.log(event.target.value, "target value");
      console.log(event, "event length is 3");
      const splitTargetValue = event.target.value.split("");
      const rightSideParenthese = splitTargetValue.pop();
      if (rightSideParenthese == ")") {
        const leftSideParentheseWithNumbers = splitTargetValue.join("");
        event.target.value = leftSideParentheseWithNumbers;
        return;
      }
    }

    /*****
     * when user hit/press back key
     * *****/
    return;
  }
}

function middlePhoneNumber(arrayOfNumbers, event) {
  if (arrayOfNumbers.length > 3) {
    console.log("middle side");
  }
}

/*****
 * Phone number algorithm helpers
 * *****/

// ["0","1","2","3","4","5","6","7","8","9"].some(function findOnlyNumber(element,index,list){
//   return element == "2"
// });
