// create function to combine two arrays

const horizontalChips = createTwoWayArraysFunctions();

const diagonalTopLeftBottomRightChips = createTwoWayArraysFunctions();

const diagonalTopRightBottomLeftChips = createTwoWayArraysFunctions();

// row one methodsForRowOne
const methodsForRowOne = {
  first: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    goingUpRight,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    console.log("first column");
    /**
     * not using for loop
     * **/
    // goingTopRight, right
    // get chips going up right
    const arrayOfChipsGoingUpRight = goingUpRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going up right
    const isWinnerGoingUpRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingUpRight
    );
    console.log("isWinnerGoingUpRight", isWinnerGoingUpRight);
    if (isWinnerGoingUpRight == "winner") {
      console.log("isWinnerGoingUpRight", isWinnerGoingUpRight);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going right
    const isWinnerGoingRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingRight
    );

    console.log("isWinnerGoingRight", isWinnerGoingRight);
    if (isWinnerGoingRight == "winner") {
      console.log("isWinnerGoingRight", isWinnerGoingRight);
      return;
    }
    /**
     * not using for loop
     * **/
    // check for connect four with func connectFourChecker
    // connectFourChecker(getValuesForCheckFunc, arrayOfChipsGoingUpRight);

    // connectFourChecker(getValuesForCheckFunc, arrayOfChipsGoingRight);
    // using for loop?

    // const subarrays = [arrayOfChipsGoingUpRight, arrayOfChipsGoingRight];

    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }

    // use some array method
    // const isWinner = checkForWinner.some(function isThereWinner(
    //   element,
    //   index,
    //   list
    // ) {
    //   return element == "winner";
    // });

    // if (isWinner) {
    //   return;
    // }
  },
  second: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingLeft,
    goingUpRight,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
    horizontalChips,
  }) {
    console.log("second column");
    /**
     * not using for loop
     * **/
    // goingLeft, topRight and right
    // get chips going top right
    const arrayOfChipsGoingTopRight = goingUpRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going up right
    const isWinnerGoingTopRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopRight
    );
    console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
    if (isWinnerGoingTopRight == "winner") {
      console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going right
    const isWinnerGoingRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingRight
    );

    console.log("isWinnerGoingRight", isWinnerGoingRight);
    if (isWinnerGoingRight == "winner") {
      console.log("isWinnerGoingRight", isWinnerGoingRight);
      return;
    }
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // get chips going horizontal
    const arrayOfChipsHorizontal = horizontalChips(
      arrayOfChipsGoingLeft,
      arrayOfChipsGoingRight
    );

    // check winner going horizontally
    const isWinnerGoingHorizontal = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsHorizontal
    );

    console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
    if (isWinnerGoingHorizontal == "winner") {
      console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
      return;
    }

    /**
     * not using for loop
     * **/
    /**
     * combine arrays then pass array into subarrays before passing the array into connectFourChecker
     * **/
    // using for loop
    // console.log("horizontalChips", horizontalChips);

    // const subarrays = [
    //   horizontalChips(arrayOfChipsGoingLeft, arrayOfChipsGoingRight),
    //   arrayOfChipsGoingTopRight,
    // ];
    /**
     * start here
     * **/
    // console.log("subarrays", subarrays);
    /**
     * start here
     * **/
    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }
    // return "second";
  },
  third: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingLeft,
    goingUpRight,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
    horizontalChips,
  }) {
    console.log("third column");
    console.log("arrayNodes", arrayNodes);
    console.log("positionRow", positionRow);
    console.log("positionColumn", positionColumn);
    /**
     * not using for loop
     * **/
    // goingLeft, topRight and right
    // get chips going top right
    const arrayOfChipsGoingTopRight = goingUpRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going up right
    const isWinnerGoingTopRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopRight
    );
    console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
    if (isWinnerGoingTopRight == "winner") {
      console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going right
    const isWinnerGoingRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingRight
    );

    console.log("isWinnerGoingRight", isWinnerGoingRight);
    if (isWinnerGoingRight == "winner") {
      console.log("isWinnerGoingRight", isWinnerGoingRight);
      return;
    }
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // get chips going horizontal
    const arrayOfChipsHorizontal = horizontalChips(
      arrayOfChipsGoingLeft,
      arrayOfChipsGoingRight
    );

    // check winner going horizontally
    const isWinnerGoingHorizontal = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsHorizontal
    );

    console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
    if (isWinnerGoingHorizontal == "winner") {
      console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
      return;
    }

    /**
     * not using for loop
     * **/
    /**
     * start here
     * **/
    // console.log("subarrays", subarrays);
    /**
     * start here
     * **/
    /**
     * change this, it is a nested loop
     * **/
    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }
    /**
     * change this, it is a nested loop
     * **/
    // return "third";
  },
  fourth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingLeft,
    goingUpLeft,
    goingUpRight,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
    horizontalChips,
  }) {
    console.log("fourth column");
    // goingLeft, topLeft, topRight and right
    /**
     * not using for loop
     * **/
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going left
    const isWinnerGoingLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingLeft
    );
    console.log("isWinnerGoingLeft", isWinnerGoingLeft);
    if (isWinnerGoingLeft == "winner") {
      console.log("isWinnerGoingLeft", isWinnerGoingLeft);
      return;
    }
    // get chips going top left
    const arrayOfChipsGoingTopLeft = goingUpLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going top left
    const isWinnerGoingTopLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopLeft
    );

    console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
    if (isWinnerGoingTopLeft == "winner") {
      console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
      return;
    }
    // get chips going top right
    const arrayOfChipsGoingTopRight = goingUpRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going top right
    const isWinnerGoingTopRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopRight
    );

    console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
    if (isWinnerGoingTopRight == "winner") {
      console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going right
    const isWinnerGoingRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingRight
    );

    console.log("isWinnerGoingRight", isWinnerGoingRight);
    if (isWinnerGoingRight == "winner") {
      console.log("isWinnerGoingRight", isWinnerGoingRight);
      return;
    }

    // get chips going horizontal
    const arrayOfChipsHorizontal = horizontalChips(
      arrayOfChipsGoingLeft,
      arrayOfChipsGoingRight
    );
    // check winner going horizontally
    const isWinnerGoingHorizontal = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsHorizontal
    );

    console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
    if (isWinnerGoingHorizontal == "winner") {
      console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
      return;
    }

    /**
     * not using for loop
     * **/
    // using for loop

    // const subarrays = [
    //   horizontalChips(arrayOfChipsGoingLeft, arrayOfChipsGoingRight),
    //   arrayOfChipsGoingTopLeft,
    //   arrayOfChipsGoingTopRight,
    // ];

    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }
    // return "fourth";
  },
  fifth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingLeft,
    goingUpLeft,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
    horizontalChips,
  }) {
    console.log("fifth column");
    // goingLeft, topLeft, and right
    /**
     * not using for loop
     * **/
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going left
    const isWinnerGoingLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingLeft
    );
    console.log("isWinnerGoingLeft", isWinnerGoingLeft);
    if (isWinnerGoingLeft == "winner") {
      console.log("isWinnerGoingLeft", isWinnerGoingLeft);
      return;
    }
    // get chips going top left
    const arrayOfChipsGoingTopLeft = goingUpLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going top left
    const isWinnerGoingTopLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopLeft
    );

    console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
    if (isWinnerGoingTopLeft == "winner") {
      console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // get chips going horizontal
    const arrayOfChipsHorizontal = horizontalChips(
      arrayOfChipsGoingLeft,
      arrayOfChipsGoingRight
    );
    // check winner going horizontally
    const isWinnerGoingHorizontal = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsHorizontal
    );

    console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
    if (isWinnerGoingHorizontal == "winner") {
      console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
      return;
    }

    /**
     * not using for loop
     * **/
    // using for loop

    // const subarrays = [
    //   horizontalChips(arrayOfChipsGoingLeft, arrayOfChipsGoingRight),
    //   arrayOfChipsGoingTopLeft,
    // ];

    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }
    // return "fifth";
  },
  sixth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingLeft,
    goingUpLeft,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    console.log("sixth column");
    // goingLeft, topLeft
    /**
     * not using for loop
     * **/
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check for winner going left
    const isWinnerGoingLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingLeft
    );
    console.log("isWinnerGoingLeft", isWinnerGoingLeft);
    if (isWinnerGoingLeft == "winner") {
      console.log("isWinnerGoingLeft", isWinnerGoingLeft);
      return;
    }
    // get chips going top left
    const arrayOfChipsGoingTopLeft = goingUpLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );

    // check for winner going top left
    const isWinnerGoingTopLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopLeft
    );

    console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
    if (isWinnerGoingTopLeft == "winner") {
      console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
      return;
    }

    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    const arrayOfHorizontalChips = horizontalChips(
      arrayOfChipsGoingLeft,
      arrayOfChipsGoingRight
    );
    // check winner going horizontally
    const isWinnerHorizontalChips = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfHorizontalChips
    );

    console.log("isWinnerHorizontalChips", isWinnerHorizontalChips);
    if (isWinnerHorizontalChips == "winner") {
      console.log("isWinnerHorizontalChips", isWinnerHorizontalChips);
      return;
    }

    /**
     * not using for loop
     * **/

    // using for loop

    // const subarrays = [arrayOfChipsGoingLeft, arrayOfChipsGoingTopLeft];

    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }
    // return "sixth";
  },
  seventh: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingLeft,
    goingUpLeft,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    console.log("seventh column");
    // goingLeft, topLeft
    /**
     * not using for loop
     * **/
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check for winner going left
    const isWinnerGoingLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingLeft
    );
    console.log("isWinnerGoingLeft", isWinnerGoingLeft);
    if (isWinnerGoingLeft == "winner") {
      console.log("isWinnerGoingLeft", isWinnerGoingLeft);
      return;
    }
    // get chips going top left
    const arrayOfChipsGoingTopLeft = goingUpLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );

    // check for winner going top left
    const isWinnerGoingTopLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopLeft
    );

    console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
    if (isWinnerGoingTopLeft == "winner") {
      console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
      return;
    }

    /**
     * not using for loop
     * **/
    // using for loop

    // const subarrays = [arrayOfChipsGoingLeft, arrayOfChipsGoingTopLeft];

    // for (let index = 0; index < subarrays.length; index++) {
    //   // call connectFourChecker
    //   const isWinner = connectFourChecker(
    //     getValuesForCheckFunc,
    //     subarrays[index]
    //   );
    //   // when connectFourChecker return "winner" return
    //   if (isWinner) {
    //     return;
    //   }
    // }
    // return "seventh";
  },
};

// row two
const methodsForRowTwo = {
  first: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    goingUpRight,
    testLoopGoingRight,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    console.log("first column");
    /**
     * not using for loop
     * **/
    // goingTopRight, right
    // get chips going up right
    const arrayOfChipsGoingUpRight = goingUpRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going up right
    const isWinnerGoingUpRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingUpRight
    );
    console.log("isWinnerGoingUpRight", isWinnerGoingUpRight);
    if (isWinnerGoingUpRight == "winner") {
      console.log("isWinnerGoingUpRight", isWinnerGoingUpRight);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going right
    const isWinnerGoingRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingRight
    );

    console.log("isWinnerGoingRight", isWinnerGoingRight);
    if (isWinnerGoingRight == "winner") {
      console.log("isWinnerGoingRight", isWinnerGoingRight);
      return;
    }
  },
  second: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    goingUpRight,
    testLoopGoingLeft,
    testLoopGoingRight,
    goingDownLeft,
    horizontalChips,
    diagonalTopRightBottomLeftChips,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, topRight and right
    // get chips going top right
    const arrayOfChipsGoingTopRight = goingUpRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going top right
    const isWinnerGoingTopRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingTopRight
    );
    console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
    if (isWinnerGoingTopRight == "winner") {
      console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
      return;
    }
    // get chips going right
    const arrayOfChipsGoingRight = testLoopGoingRight(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // check winner going right
    const isWinnerGoingRight = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingRight
    );

    console.log("isWinnerGoingRight", isWinnerGoingRight);
    if (isWinnerGoingRight == "winner") {
      console.log("isWinnerGoingRight", isWinnerGoingRight);
      return;
    }
    // get chips going left
    const arrayOfChipsGoingLeft = testLoopGoingLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // get chips going horizontal
    const arrayOfChipsHorizontal = horizontalChips(
      arrayOfChipsGoingLeft,
      arrayOfChipsGoingRight
    );
    // check winner going horizontal
    const isWinnerGoingHorizontal = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsHorizontal
    );

    console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
    if (isWinnerGoingHorizontal == "winner") {
      console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
      return;
    }
    // get chips going down left
    const arrayOfChipsGoingDownLeft = goingDownLeft(
      arrayNodes,
      positionRow,
      positionColumn
    );
    // get chips going diagonal top right bottom left
    const arrayOfChipsDiagonalTopRightBottomLeft =
      diagonalTopRightBottomLeftChips(
        arrayOfChipsGoingTopRight,
        arrayOfChipsGoingDownLeft
      );
    // check for winner going diagonal top right bottom left
    const isWinnerGoingDiagonalTopRightBottomLeft = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsDiagonalTopRightBottomLeft
    );

    console.log(
      "isWinnerGoingDiagonalTopRightBottomLeft",
      isWinnerGoingDiagonalTopRightBottomLeft
    );
    if (isWinnerGoingDiagonalTopRightBottomLeft == "winner") {
      console.log(
        "isWinnerGoingDiagonalTopRightBottomLeft",
        isWinnerGoingDiagonalTopRightBottomLeft
      );
      return;
    }
    // return "second";
  },
  third: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    goingUpLeft,
    goingUpRight,
    testLoopGoingLeft,
    testLoopGoingRight,
    goingDownRight,
    goingDownLeft,
    horizontalChips,
    diagonalTopRightBottomLeftChips,
    diagonalTopLeftBottomRightChips,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingDownLeft, goingLeft, goingTopLeft, topRight, right, downRight
    // get chips going up right
    // get chips going down left
    // get chips going diagonal up right to down left
    // check for winner going diagonal up right to down left
    // get chips going up left
    // get chips going down right
    // get chips going diagonal up left to down right
    // check for winner going diagonal up left to down right
    // check for winner going up right
    // get chips going right
    // check for winner going right
    // get chips going left
    // get chips going horizontal
    // check for winner going horizontal
    return "third";
  },
  fourth: function () {
    // goingDownLeft, goingLeft, goingTopLeft, topRight, right, downRight
    return "fourth";
  },
  fifth: function () {
    // goingDownLeft, goingLeft, goingTopLeft, topRight, right, downRight
    return "fifth";
  },
  sixth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    goingUpLeft,
    testLoopGoingLeft,
    testLoopGoingRight,
    goingDownRight,
    horizontalChips,
    diagonalTopLeftBottomRightChips,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, right, downRight
    // get chips going up left
    // check for winner going up left
    // get chips going down right
    // get chips going diagonal up left to down right
    // check for winner going diagonal up left to down right
    // get chips going left
    // check for winner going left
    // get chips going right
    // get chips going horizontal
    // check for winner going horizontal
    return "sixth";
  },
  seventh: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    goingUpLeft,
    testLoopGoingLeft,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, topLeft
    // get chips going up left
    // check for winner going up left
    // get chips going left
    // check for winner going left
    return "seventh";
  },
};

// row three
const methodsForRowThree = {
  first: function ({ arrayNodes, positionRow, positionColumn }) {
    // goingTopRight, right
    return "first";
  },
  second: function () {
    // goingDownLeft, left, topLeft, topRight, right, downRight
    return "second";
  },
  third: function () {
    // goingDownLeft, left, topLeft, topRight, right, downRight
    return "third";
  },
  fourth: function () {
    // goingDownLeft, left, topLeft, topRight, right, downRight
    return "fourth";
  },
  fifth: function () {
    // goingDownLeft, left, topLeft, topRight, right, downRight
    return "fifth";
  },
  sixth: function () {
    // goingDownLeft, left, topLeft, topRight, right, downRight
    return "sixth";
  },
  seventh: function () {
    // goingLeft, topLeft
    return "seventh";
  },
};
/**
 * start here
 * **/

// row one to three

// const methodsForRowOneToThree = {
//   first: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     goingUpRight,
//     testLoopGoingRight,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("first column");
//     /**
//      * not using for loop
//      * **/
//     // goingTopRight, right
//     // get chips going up right
//     const arrayOfChipsGoingUpRight = goingUpRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going up right
//     const isWinnerGoingUpRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingUpRight
//     );
//     console.log("isWinnerGoingUpRight", isWinnerGoingUpRight);
//     if (isWinnerGoingUpRight == "winner") {
//       console.log("isWinnerGoingUpRight", isWinnerGoingUpRight);
//       return;
//     }
//     // get chips going right
//     const arrayOfChipsGoingRight = testLoopGoingRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going right
//     const isWinnerGoingRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingRight
//     );

//     console.log("isWinnerGoingRight", isWinnerGoingRight);
//     if (isWinnerGoingRight == "winner") {
//       console.log("isWinnerGoingRight", isWinnerGoingRight);
//       return;
//     }
//     /**
//      * not using for loop
//      * **/
//     // check for connect four with func connectFourChecker
//     // connectFourChecker(getValuesForCheckFunc, arrayOfChipsGoingUpRight);

//     // connectFourChecker(getValuesForCheckFunc, arrayOfChipsGoingRight);
//     // using for loop?

//     // const subarrays = [arrayOfChipsGoingUpRight, arrayOfChipsGoingRight];

//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }

//     // use some array method
//     // const isWinner = checkForWinner.some(function isThereWinner(
//     //   element,
//     //   index,
//     //   list
//     // ) {
//     //   return element == "winner";
//     // });

//     // if (isWinner) {
//     //   return;
//     // }
//   },
//   second: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingLeft,
//     goingUpRight,
//     testLoopGoingRight,
//     getValuesForCheckFunc,
//     connectFourChecker,
//     horizontalChips,
//   }) {
//     console.log("second column");
//     /**
//      * not using for loop
//      * **/
//     // goingLeft, topRight and right
//     // get chips going top right
//     const arrayOfChipsGoingTopRight = goingUpRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going up right
//     const isWinnerGoingTopRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopRight
//     );
//     console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
//     if (isWinnerGoingTopRight == "winner") {
//       console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
//       return;
//     }
//     // get chips going right
//     const arrayOfChipsGoingRight = testLoopGoingRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going right
//     const isWinnerGoingRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingRight
//     );

//     console.log("isWinnerGoingRight", isWinnerGoingRight);
//     if (isWinnerGoingRight == "winner") {
//       console.log("isWinnerGoingRight", isWinnerGoingRight);
//       return;
//     }
//     // get chips going left
//     const arrayOfChipsGoingLeft = testLoopGoingLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // get chips going horizontal
//     const arrayOfChipsHorizontal = horizontalChips(
//       arrayOfChipsGoingLeft,
//       arrayOfChipsGoingRight
//     );

//     // check winner going horizontally
//     const isWinnerGoingHorizontal = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsHorizontal
//     );

//     console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//     if (isWinnerGoingHorizontal == "winner") {
//       console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     /**
//      * combine arrays then pass array into subarrays before passing the array into connectFourChecker
//      * **/
//     // using for loop
//     // console.log("horizontalChips", horizontalChips);

//     // const subarrays = [
//     //   horizontalChips(arrayOfChipsGoingLeft, arrayOfChipsGoingRight),
//     //   arrayOfChipsGoingTopRight,
//     // ];
//     /**
//      * start here
//      * **/
//     // console.log("subarrays", subarrays);
//     /**
//      * start here
//      * **/
//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }
//     // return "second";
//   },
//   third: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingLeft,
//     goingUpRight,
//     testLoopGoingRight,
//     getValuesForCheckFunc,
//     connectFourChecker,
//     horizontalChips,
//   }) {
//     console.log("third column");
//     console.log("arrayNodes", arrayNodes);
//     console.log("positionRow", positionRow);
//     console.log("positionColumn", positionColumn);
//     /**
//      * not using for loop
//      * **/
//     // goingLeft, topRight and right
//     // get chips going top right
//     const arrayOfChipsGoingTopRight = goingUpRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going up right
//     const isWinnerGoingTopRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopRight
//     );
//     console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
//     if (isWinnerGoingTopRight == "winner") {
//       console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
//       return;
//     }
//     // get chips going right
//     const arrayOfChipsGoingRight = testLoopGoingRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going right
//     const isWinnerGoingRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingRight
//     );

//     console.log("isWinnerGoingRight", isWinnerGoingRight);
//     if (isWinnerGoingRight == "winner") {
//       console.log("isWinnerGoingRight", isWinnerGoingRight);
//       return;
//     }
//     // get chips going left
//     const arrayOfChipsGoingLeft = testLoopGoingLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // get chips going horizontal
//     const arrayOfChipsHorizontal = horizontalChips(
//       arrayOfChipsGoingLeft,
//       arrayOfChipsGoingRight
//     );

//     // check winner going horizontally
//     const isWinnerGoingHorizontal = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsHorizontal
//     );

//     console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//     if (isWinnerGoingHorizontal == "winner") {
//       console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     /**
//      * start here
//      * **/
//     // console.log("subarrays", subarrays);
//     /**
//      * start here
//      * **/
//     /**
//      * change this, it is a nested loop
//      * **/
//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }
//     /**
//      * change this, it is a nested loop
//      * **/
//     // return "third";
//   },
//   fourth: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingLeft,
//     goingUpLeft,
//     goingUpRight,
//     testLoopGoingRight,
//     getValuesForCheckFunc,
//     connectFourChecker,
//     horizontalChips,
//   }) {
//     console.log("fourth column");
//     // goingLeft, topLeft, topRight and right
//     /**
//      * not using for loop
//      * **/
//     // get chips going left
//     const arrayOfChipsGoingLeft = testLoopGoingLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going left
//     const isWinnerGoingLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingLeft
//     );
//     console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//     if (isWinnerGoingLeft == "winner") {
//       console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//       return;
//     }
//     // get chips going top left
//     const arrayOfChipsGoingTopLeft = goingUpLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going top left
//     const isWinnerGoingTopLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopLeft
//     );

//     console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//     if (isWinnerGoingTopLeft == "winner") {
//       console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//       return;
//     }
//     // get chips going top right
//     const arrayOfChipsGoingTopRight = goingUpRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going top right
//     const isWinnerGoingTopRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopRight
//     );

//     console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
//     if (isWinnerGoingTopRight == "winner") {
//       console.log("isWinnerGoingTopRight", isWinnerGoingTopRight);
//       return;
//     }
//     // get chips going right
//     const arrayOfChipsGoingRight = testLoopGoingRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going right
//     const isWinnerGoingRight = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingRight
//     );

//     console.log("isWinnerGoingRight", isWinnerGoingRight);
//     if (isWinnerGoingRight == "winner") {
//       console.log("isWinnerGoingRight", isWinnerGoingRight);
//       return;
//     }

//     // get chips going horizontal
//     const arrayOfChipsHorizontal = horizontalChips(
//       arrayOfChipsGoingLeft,
//       arrayOfChipsGoingRight
//     );
//     // check winner going horizontally
//     const isWinnerGoingHorizontal = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsHorizontal
//     );

//     console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//     if (isWinnerGoingHorizontal == "winner") {
//       console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // using for loop

//     // const subarrays = [
//     //   horizontalChips(arrayOfChipsGoingLeft, arrayOfChipsGoingRight),
//     //   arrayOfChipsGoingTopLeft,
//     //   arrayOfChipsGoingTopRight,
//     // ];

//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }
//     // return "fourth";
//   },
//   fifth: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingLeft,
//     goingUpLeft,
//     testLoopGoingRight,
//     getValuesForCheckFunc,
//     connectFourChecker,
//     horizontalChips,
//   }) {
//     console.log("fifth column");
//     // goingLeft, topLeft, and right
//     /**
//      * not using for loop
//      * **/
//     // get chips going left
//     const arrayOfChipsGoingLeft = testLoopGoingLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going left
//     const isWinnerGoingLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingLeft
//     );
//     console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//     if (isWinnerGoingLeft == "winner") {
//       console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//       return;
//     }
//     // get chips going top left
//     const arrayOfChipsGoingTopLeft = goingUpLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check winner going top left
//     const isWinnerGoingTopLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopLeft
//     );

//     console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//     if (isWinnerGoingTopLeft == "winner") {
//       console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//       return;
//     }
//     // get chips going right
//     const arrayOfChipsGoingRight = testLoopGoingRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // get chips going horizontal
//     const arrayOfChipsHorizontal = horizontalChips(
//       arrayOfChipsGoingLeft,
//       arrayOfChipsGoingRight
//     );
//     // check winner going horizontally
//     const isWinnerGoingHorizontal = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsHorizontal
//     );

//     console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//     if (isWinnerGoingHorizontal == "winner") {
//       console.log("isWinnerGoingHorizontal", isWinnerGoingHorizontal);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // using for loop

//     // const subarrays = [
//     //   horizontalChips(arrayOfChipsGoingLeft, arrayOfChipsGoingRight),
//     //   arrayOfChipsGoingTopLeft,
//     // ];

//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }
//     // return "fifth";
//   },
//   sixth: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingLeft,
//     goingUpLeft,
//     testLoopGoingRight,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("sixth column");
//     // goingLeft, topLeft
//     /**
//      * not using for loop
//      * **/
//     // get chips going left
//     const arrayOfChipsGoingLeft = testLoopGoingLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check for winner going left
//     const isWinnerGoingLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingLeft
//     );
//     console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//     if (isWinnerGoingLeft == "winner") {
//       console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//       return;
//     }
//     // get chips going top left
//     const arrayOfChipsGoingTopLeft = goingUpLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     // check for winner going top left
//     const isWinnerGoingTopLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopLeft
//     );

//     console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//     if (isWinnerGoingTopLeft == "winner") {
//       console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//       return;
//     }

//     // get chips going right
//     const arrayOfChipsGoingRight = testLoopGoingRight(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     const arrayOfHorizontalChips = horizontalChips(
//       arrayOfChipsGoingLeft,
//       arrayOfChipsGoingRight
//     );
//     // check winner going horizontally
//     const isWinnerHorizontalChips = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfHorizontalChips
//     );

//     console.log("isWinnerHorizontalChips", isWinnerHorizontalChips);
//     if (isWinnerHorizontalChips == "winner") {
//       console.log("isWinnerHorizontalChips", isWinnerHorizontalChips);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/

//     // using for loop

//     // const subarrays = [arrayOfChipsGoingLeft, arrayOfChipsGoingTopLeft];

//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }
//     // return "sixth";
//   },
//   seventh: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingLeft,
//     goingUpLeft,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("seventh column");
//     // goingLeft, topLeft
//     /**
//      * not using for loop
//      * **/
//     // get chips going left
//     const arrayOfChipsGoingLeft = testLoopGoingLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );
//     // check for winner going left
//     const isWinnerGoingLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingLeft
//     );
//     console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//     if (isWinnerGoingLeft == "winner") {
//       console.log("isWinnerGoingLeft", isWinnerGoingLeft);
//       return;
//     }
//     // get chips going top left
//     const arrayOfChipsGoingTopLeft = goingUpLeft(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     // check for winner going top left
//     const isWinnerGoingTopLeft = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingTopLeft
//     );

//     console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//     if (isWinnerGoingTopLeft == "winner") {
//       console.log("isWinnerGoingTopLeft", isWinnerGoingTopLeft);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // using for loop

//     // const subarrays = [arrayOfChipsGoingLeft, arrayOfChipsGoingTopLeft];

//     // for (let index = 0; index < subarrays.length; index++) {
//     //   // call connectFourChecker
//     //   const isWinner = connectFourChecker(
//     //     getValuesForCheckFunc,
//     //     subarrays[index]
//     //   );
//     //   // when connectFourChecker return "winner" return
//     //   if (isWinner) {
//     //     return;
//     //   }
//     // }
//     // return "seventh";
//   },
// };

// row four
const methodsForRowFour = {
  first: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingRight,goingDownRight,goingDown
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );
    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/

    // return "first";
  },
  second: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );
    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/
    // return "second";
  },
  third: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );
    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/
    // return "third";
  },
  fourth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );

    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/
    // return "fourth";
  },
  fifth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );

    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/
    // return "fifth";
  },
  sixth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );

    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/
    // return "sixth";
  },
  seventh: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingDownLeft, goingLeft
    // array chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );

    /**
     * not using for loop
     * **/

    const isWinnerGoingDown = connectFourChecker(
      getValuesForCheckFunc,
      arrayOfChipsGoingDown
    );

    console.log("isWinnerGoingDown", isWinnerGoingDown);
    if (isWinnerGoingDown) {
      console.log("isWinnerGoingDown", isWinnerGoingDown);
      return;
    }

    /**
     * not using for loop
     * **/
    // return "seventh";
  },
};

// row five
const methodsForRowFive = {
  first: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingRight,goingDownRight,goingDown
    /**
     * testing loop going down
     * **/
    // get chips going down
    const arrayOfChipsGoingDown = testLoopGoingDown(
      arrayNodes,
      positionRow,
      positionColumn
    );
    const subarrays = [arrayOfChipsGoingDown];
    for (let index = 0; index < subarrays.length; index++) {
      // call connectFourChecker
      const isWinner = connectFourChecker(
        getValuesForCheckFunc,
        subarrays[index]
      );
      if (isWinner) {
        return;
      }
    }
    /**
     * testing loop going down
     * **/
    return "first";
  },
  second: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingRight, goingDownRight, goingDown
    return "second";
  },
  third: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    return "third";
  },
  fourth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    return "fourth";
  },
  fifth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
    return "fifth";
  },
  sixth: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingLeft, goingTopRight, goingRight, goingDown, goingDownLeft
    return "sixth";
  },
  seventh: function ({
    arrayNodes,
    positionRow,
    positionColumn,
    testLoopGoingDown,
    getValuesForCheckFunc,
    connectFourChecker,
  }) {
    // goingDownLeft, goingLeft
    return "seventh";
  },
};

// row six
const methodsForRowSix = {
  first: function ({ arrayNodes, positionRow, positionColumn }) {
    // goingRight, goingDownRight, goingDown
    return "first";
  },
  second: function () {
    // goingLeft, goingRight, goingDownRight, goingDown
    return "second";
  },
  third: function () {
    // goingLeft, goingRight, goingDownRight, goingDown
    return "third";
  },
  fourth: function () {
    // goingLeft, goingRight, goingDownRight, goingDown, goingDownLeft
    return "fourth";
  },
  fifth: function () {
    // goingLeft, goingRight, goingDown, goingDownLeft
    return "fifth";
  },
  sixth: function () {
    // goingLeft, goingRight, goingDown, goingDownLeft
    return "sixth";
  },
  seventh: function () {
    // goingLeft, goingDown, goingDownLeft
    return "seventh";
  },
};

// row four to six
// const methodsForRowFourToSix = {
//   first: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("first column");
//     // goingRight,goingDownRight,goingDown
//     // get chips going right
//     // check for winner going right
//     // get chips going down right
//     // check for winner going down right
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );
//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/

//     // return "first";
//   },
//   second: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("second column");
//     // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
//     // get chips going right
//     // check for winner going right
//     // get chips going down right
//     // check for winner going down right
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );
//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }
//     // get chips going left
//     const arrayOfHorizontalChips = horizontalChips(
//       arrayOfChipsGoingLeft,
//       arrayOfChipsGoingRight
//     );
//     // check winner going horizontally
//     const isWinnerHorizontalChips = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfHorizontalChips
//     );

//     /**
//      * not using for loop
//      * **/
//     // return "second";
//   },
//   third: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("third column");
//     // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );
//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // return "third";
//   },
//   fourth: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("fourth column");
//     // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );

//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // return "fourth";
//   },
//   fifth: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("fifth column");
//     // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );

//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // return "fifth";
//   },
//   sixth: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("sixth column");
//     // goingLeft, goingTopLeft, goingTopRight, goingRight, goingDownRight, goingDown, goingDownLeft
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );

//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // return "sixth";
//   },
//   seventh: function ({
//     arrayNodes,
//     positionRow,
//     positionColumn,
//     testLoopGoingDown,
//     getValuesForCheckFunc,
//     connectFourChecker,
//   }) {
//     console.log("seventh column");
//     // goingDownLeft, goingLeft
//     // array chips going down
//     const arrayOfChipsGoingDown = testLoopGoingDown(
//       arrayNodes,
//       positionRow,
//       positionColumn
//     );

//     /**
//      * not using for loop
//      * **/

//     const isWinnerGoingDown = connectFourChecker(
//       getValuesForCheckFunc,
//       arrayOfChipsGoingDown
//     );

//     console.log("isWinnerGoingDown", isWinnerGoingDown);
//     if (isWinnerGoingDown) {
//       console.log("isWinnerGoingDown", isWinnerGoingDown);
//       return;
//     }

//     /**
//      * not using for loop
//      * **/
//     // return "seventh";
//   },
// };

function rowCounter({
  placeHolder,
  movePointer,
  countdownTimer,
  convertToText,
  getValuesForCheckFunc,
  connectFourChecker,
  testLoopGoingUp,
  testLoopGoingDown,
  testLoopGoingLeft,
  testLoopGoingRight,
  goingUpLeft,
  goingDownRight,
  goingUpRight,
  goingDownLeft,
  methodsForRowOne,
  methodsForRowTwo,
  methodsForRowThree,
  methodsForRowFour,
  methodsForRowFive,
  methodsForRowSix,
  horizontalChips,
  diagonalTopLeftBottomRightChips,
  diagonalTopRightBottomLeftChips,
}) {
  // const checkForWinner = {
  //   diagonalChips: [],
  //   verticalChips: [],
  //   horizontalChips: [],
  // };

  const arrayOfChipNodes = [
    // row 6 - 6
    // index 0
    [null, null, null, null, null, null, null],
    // row 5 - 4
    // index 1
    [null, null, null, null, null, null, null],
    // row 4 - 2
    // index 2
    [null, null, null, null, null, null, null],
    // row 3
    // index 3
    [null, null, null, null, null, null, null],
    // row 2 + 2
    // index 4
    [null, null, null, null, null, null, null],
    // row 1 + 4
    // index 5
    [null, null, null, null, null, null, null],
  ];

  const objOfCounters = {
    columnOne: 0,
    columnTwo: 0,
    columnThree: 0,
    columnFour: 0,
    columnFive: 0,
    columnSix: 0,
    columnSeven: 0,
    moveCounter: 0,
  };

  const obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
  };

  const objOfMethods = {
    // use objOfCounters and value of property of obj passed into
    // objOfMethods func call. For example {first,second, third etc}
    first: ({ first }) => {
      console.log(first);
      // there is no seventh row, return
      console.log(objOfCounters);
      if (objOfCounters.columnOne == 7) return;
      placeHolder({
        animateColumn: "animation-column-first",
        columnObj: objOfCounters,
        columnCounter: "columnOne",
        chipNodeColumnValue: first,
        childNodeValue: 0,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
      // // add 1 to column counter
      // objOfCounters.columnOne += 1;
      // // get value of data-playerturn attr of main element with id "game-board-bg-selector"
      // const currentPlayer = document
      //   .getElementById("game-board-bg-selector")
      //   .getAttribute("data-playerturn");
      // // select first column
      // const firstColumn = document.getElementById("animation-column-first");
      // // access position in arrayOfChipNodes here
      // // console.log(
      // //   document.querySelector(
      // //     `#row-${objOfCounters.columnOne} [data-chipselector='${objOfCounters.columnOne}-${first}']`
      // //   )
      // // );

      // const chipNodeElement = document.querySelector(
      //   `#row-${objOfCounters.columnOne} [data-chipselector='${objOfCounters.columnOne}-${first}']`
      // );

      // // console.log(chipNodeElement.);
      // // set value of data-droppedposition attr based on current counter
      // firstColumn.setAttribute(
      //   "data-droppedposition",
      //   `${objOfCounters.columnOne}`
      // );
      // // show player chip
      // // row 6
      // if (objOfCounters.columnOne == 6) {
      //   console.log(chipNodeElement, "row 6");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 6 - 6
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
      //     "array node"
      //   );
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-6")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, 100);
      //   // set "data-droppedposition" as empty string
      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, 150);
      // }

      // // row 5
      // if (objOfCounters.columnOne == 5) {
      //   console.log(chipNodeElement, "row 5");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 5 - 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1260 : 1310;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-5")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1360 : 1410;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 4
      // if (objOfCounters.columnOne == 4) {
      //   console.log(chipNodeElement, "row 4");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 4 - 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1290 : 1340;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-4")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1390 : 1440;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 3
      // if (objOfCounters.columnOne == 3) {
      //   console.log(chipNodeElement, "row 3");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 3
      //   console.log(
      //     arrayOfChipNodes[Number(row)][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1320 : 1370;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-3")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1420 : 1470;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 2
      // if (objOfCounters.columnOne == 2) {
      //   console.log(chipNodeElement, "row 2");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 2 + 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1350 : 1400;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-2")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1450 : 1500;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 1
      // if (objOfCounters.columnOne == 1) {
      //   console.log(chipNodeElement, "row 1");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 1 + 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1370 : 1420;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-1")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);
      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1520 : 1570;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }
    },
    second: ({ second }) => {
      console.log(second);
      // there is no seventh row, return
      if (objOfCounters.columnTwo == 7) return;
      placeHolder({
        animateColumn: "animation-column-second",
        columnObj: objOfCounters,
        columnCounter: "columnTwo",
        chipNodeColumnValue: second,
        childNodeValue: 1,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
      // // add 1 to column counter
      // objOfCounters.columnTwo += 1;
      // // select second column
      // const secondColumn = document.getElementById("animation-column-second");

      // const chipNodeElement = document.querySelector(
      //   `#row-${objOfCounters.columnTwo} [data-chipselector='${objOfCounters.columnTwo}-${second}']`
      // );

      // // set value of data-droppedposition attr based on current counter
      // secondColumn.setAttribute(
      //   "data-droppedposition",
      //   `${objOfCounters.columnTwo}`
      // );
      // // show player chip
      // // row 6
      // if (objOfCounters.columnTwo == 6) {
      //   console.log(chipNodeElement, "row 6");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 6 - 6
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
      //     "array node"
      //   );
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-6")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, 100);
      //   // set "data-droppedposition" as empty string
      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, 150);
      // }

      // // row 5
      // if (objOfCounters.columnTwo == 5) {
      //   console.log(chipNodeElement, "row 5");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 5 - 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1260 : 1310;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-5")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1360 : 1410;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 4
      // if (objOfCounters.columnTwo == 4) {
      //   console.log(chipNodeElement, "row 4");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 4 - 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1290 : 1340;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-4")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1390 : 1440;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 3
      // if (objOfCounters.columnTwo == 3) {
      //   console.log(chipNodeElement, "row 3");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 3
      //   console.log(
      //     arrayOfChipNodes[Number(row)][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1320 : 1370;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-3")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1420 : 1470;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 2
      // if (objOfCounters.columnTwo == 2) {
      //   console.log(chipNodeElement, "row 2");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 2 + 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1350 : 1400;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-2")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1450 : 1500;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 1
      // if (objOfCounters.columnTwo == 1) {
      //   console.log(chipNodeElement, "row 1");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 1 + 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1370 : 1420;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-1")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);
      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1520 : 1570;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }
    },
    third: ({ third }) => {
      console.log(third);
      // there is no seventh row, return
      if (objOfCounters.columnThree == 7) return;
      placeHolder({
        animateColumn: "animation-column-third",
        columnObj: objOfCounters,
        columnCounter: "columnThree",
        chipNodeColumnValue: third,
        childNodeValue: 2,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
      // objOfCounters.columnThree += 1;

      // // select third column
      // const thirdColumn = document.getElementById("animation-column-third");

      // const chipNodeElement = document.querySelector(
      //   `#row-${objOfCounters.columnThree} [data-chipselector='${objOfCounters.columnThree}-${third}']`
      // );

      // // set value of data-droppedposition attr based on current counter
      // thirdColumn.setAttribute(
      //   "data-droppedposition",
      //   `${objOfCounters.columnThree}`
      // );
      // // show player chip
      // // row 6
      // if (objOfCounters.columnThree == 6) {
      //   console.log(chipNodeElement, "row 6");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 6 - 6
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
      //     "array node"
      //   );
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-6")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, 100);
      //   // set "data-droppedposition" as empty string
      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, 150);
      // }

      // // row 5
      // if (objOfCounters.columnThree == 5) {
      //   console.log(chipNodeElement, "row 5");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 5 - 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1260 : 1310;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-5")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1360 : 1410;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 4
      // if (objOfCounters.columnThree == 4) {
      //   console.log(chipNodeElement, "row 4");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 4 - 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1290 : 1340;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-4")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1390 : 1440;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 3
      // if (objOfCounters.columnThree == 3) {
      //   console.log(chipNodeElement, "row 3");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 3
      //   console.log(
      //     arrayOfChipNodes[Number(row)][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1320 : 1370;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-3")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1420 : 1470;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 2
      // if (objOfCounters.columnThree == 2) {
      //   console.log(chipNodeElement, "row 2");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 2 + 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1350 : 1400;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-2")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1450 : 1500;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 1
      // if (objOfCounters.columnThree == 1) {
      //   console.log(chipNodeElement, "row 1");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 1 + 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1370 : 1420;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-1")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);
      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1520 : 1570;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }
    },
    fourth: ({ fourth }) => {
      console.log(fourth);
      // there is no seventh row, return
      if (objOfCounters.columnFour == 7) return;
      placeHolder({
        animateColumn: "animation-column-fourth",
        columnObj: objOfCounters,
        columnCounter: "columnFour",
        chipNodeColumnValue: fourth,
        childNodeValue: 3,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
    },
    fifth: ({ fifth }) => {
      console.log(fifth);
      // there is no seventh row, return
      if (objOfCounters.columnFive == 7) return;
      placeHolder({
        animateColumn: "animation-column-fifth",
        columnObj: objOfCounters,
        columnCounter: "columnFive",
        chipNodeColumnValue: fifth,
        childNodeValue: 4,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
    },
    sixth: ({ sixth }) => {
      console.log(sixth);
      // there is no seventh row, return
      if (objOfCounters.columnSix == 7) return;
      placeHolder({
        animateColumn: "animation-column-sixth",
        columnObj: objOfCounters,
        columnCounter: "columnSix",
        chipNodeColumnValue: sixth,
        childNodeValue: 5,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
    },
    seventh: ({ seventh }) => {
      console.log(seventh);
      // there is no seventh row, return
      if (objOfCounters.columnSeven == 7) return;
      placeHolder({
        animateColumn: "animation-column-seventh",
        columnObj: objOfCounters,
        columnCounter: "columnSeven",
        chipNodeColumnValue: seventh,
        childNodeValue: 6,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
        convertToText,
        getValuesForCheckFunc,
        connectFourChecker,
        testLoopGoingUp,
        testLoopGoingDown,
        testLoopGoingLeft,
        testLoopGoingRight,
        goingUpLeft,
        goingDownRight,
        goingUpRight,
        goingDownLeft,
        methodsForRowOne,
        methodsForRowTwo,
        methodsForRowThree,
        methodsForRowFour,
        methodsForRowFive,
        methodsForRowSix,
        horizontalChips,
        diagonalTopLeftBottomRightChips,
        diagonalTopRightBottomLeftChips,
      });
    },
  };

  return function innerFunc(event) {
    console.log(event, "event");
    const columnClicked = event.target.getAttribute("data-column");
    movePointer({ columnClicked });

    console.log(columnClicked, "columnClicked");
    if (columnClicked && objOfMethods[columnClicked]) {
      // clear setInterval
      const playersTurnTimer = JSON.parse(
        localStorage.getItem("stopCountdown")
      );
      if (playersTurnTimer) {
        // reset timer display to 30s
        document.getElementById("turn-countdown-selector").textContent = "30";
        // reset timer function
        clearInterval(playersTurnTimer);
      }
      objOfMethods[columnClicked]({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        sixth: 6,
        seventh: 7,
      });
    }
  };
}

export const checking = rowCounter({
  placeHolder,
  movePointer,
  countdownTimer,
  convertToText,
  getValuesForCheckFunc,
  connectFourChecker,
  testLoopGoingUp,
  testLoopGoingDown,
  testLoopGoingLeft,
  testLoopGoingRight,
  goingUpLeft,
  goingDownRight,
  goingUpRight,
  goingDownLeft,
  methodsForRowOne,
  methodsForRowTwo,
  methodsForRowThree,
  methodsForRowFour,
  methodsForRowFive,
  methodsForRowSix,
  horizontalChips,
  diagonalTopLeftBottomRightChips,
  diagonalTopRightBottomLeftChips,
});

// obj for each node in our matrix
const objForNode = {
  // each direction should be an array
  // we can loop while player matches, the data-playerturn
  // of main element with id "game-board-bg-selector"
  direction: {
    left: {},
    topLeft: {},
    up: {},
  },
};

function placeHolder({
  animateColumn,
  columnObj,
  columnCounter,
  chipNodeColumnValue,
  childNodeValue,
  arrayNodes,
  countdownTimer,
  convertToText,
  getValuesForCheckFunc,
  connectFourChecker,
  testLoopGoingUp,
  testLoopGoingDown,
  testLoopGoingLeft,
  testLoopGoingRight,
  goingUpLeft,
  goingDownRight,
  goingUpRight,
  goingDownLeft,
  methodsForRowOne,
  methodsForRowTwo,
  methodsForRowThree,
  methodsForRowFour,
  methodsForRowFive,
  methodsForRowSix,
  horizontalChips,
  diagonalTopLeftBottomRightChips,
  diagonalTopRightBottomLeftChips,
}) {
  // start counting each turns here
  // columnObj.moveCounter

  if (columnObj.moveCounter < 7) {
    // the seventh moves could win the game
    // add 1 to columnObj.moveCounter
    columnObj.moveCounter++;
  }

  // get current player
  console.log("hello");
  const currentPlayerChip = document
    .getElementById("game-board-bg-selector")
    .getAttribute("data-playerturn");
  // add 1 to column counter
  columnObj[columnCounter] += 1;
  // get value of data-playerturn attr of main element with id "game-board-bg-selector"
  // const currentPlayer = document
  //   .getElementById("game-board-bg-selector")
  //   .getAttribute("data-playerturn");
  // select a column
  const selectedColumn = document.getElementById(`${animateColumn}`);
  // access position in arrayNodes here
  // console.log(
  //   document.querySelector(
  //     `#row-${columnObj[columnCounter]} [data-chipselector='${columnObj[columnCounter]}-${chipNodeColumnValue}']`
  //   )
  // );

  // const chipNodeElement = document.querySelector(
  //   `#row-${columnObj[columnCounter]} [data-chipselector='${columnObj[columnCounter]}-${chipNodeColumnValue}']`
  // );

  const chipNodeElement = document.getElementById(
    `row-${columnObj[columnCounter]}`
  ).children[chipNodeColumnValue - 1];

  // console.log(
  //   document.getElementById(`row-${columnObj[columnCounter]}`).children[
  //     chipNodeColumnValue - 1
  //   ]
  // );
  console.log(
    "what is this",
    document.getElementById(`row-${columnObj[columnCounter]}`)
  );
  console.log("chipNodeColumnValue", chipNodeColumnValue);
  console.log(chipNodeElement, "chipNodeElement");
  // set value of data-droppedposition attr based on current counter
  selectedColumn.setAttribute(
    "data-droppedposition",
    `${columnObj[columnCounter]}`
  );
  // show player chip
  // row 6
  if (columnObj[columnCounter] == 6) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: right, diagonalDownRight, down
    // second: left, right, diagonalDownRight, down
    // third: left, right, diagonalDownRight, down
    // fourth: left, right, diagonalDownRight, down, diagonalDownLeft
    // fifth: left, right, down, diagonalDownLeft
    // sixth: left, right, down, diagonalDownLeft
    // seventh: left, diagonalDownLeft, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 6");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 6 - 6
    // console.log(arrayNodes[Number(row) - 6][Number(column) - 1], "array node");
    const positionRow = Number(row) - 6;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-6")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, 100);
    // set "data-droppedposition" as empty string
    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
      // check for winner here
      // we want to use positionRow and positionColumn
      console.log(columnObj.moveCounter, "columnObj.moveCounter");
      if (columnObj.moveCounter == 7) {
        console.log("this is the 7th move");
      }
    }, 150);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, 250);
  }

  // row 5
  if (columnObj[columnCounter] == 5) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: right, diagonalDownRight, down
    // second: left, diagonalTopLeft, up, right, diagonalDownRight, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: diagonalDownLeft, left, up, right, down
    // seventh: diagonalDownLeft, left, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 5");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 5 - 4
    // console.log(arrayNodes[Number(row) - 4][Number(column) - 1], "array node");
    const positionRow = Number(row) - 4;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1260 : 1310;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-5")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1360 : 1410;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
      // check for winner here
      // we want to use positionRow and positionColumn
      console.log(columnObj.moveCounter, "columnObj.moveCounter");
      if (columnObj.moveCounter == 7) {
        console.log("this is the 7th move");
      }
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 4
  if (columnObj[columnCounter] == 4) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, right, diagonalDownRight, down
    // second: diagonalDownLeft, left, up, diagonalTopRight, right, diagonalDownRight, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // seventh: diagonalDownLeft, left, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 4");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 4 - 2
    // console.log(arrayNodes[Number(row) - 2][Number(column) - 1], "array node");
    const positionRow = Number(row) - 2;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    console.log(row, "row");
    console.log(column, "column");
    console.log(positionRow, "positionRow");
    console.log(positionColumn, "positionColumn");
    const time = window.innerWidth <= 378 ? 1290 : 1340;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-4")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1390 : 1440;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
      // check for winner here
      // we want to use positionRow and positionColumn
      console.log(columnObj.moveCounter, "columnObj.moveCounter");
      if (columnObj.moveCounter == 7) {
        console.log("this is the 7th move");
        methodsForRowFour[convertToText(column)]({
          arrayNodes,
          positionRow,
          positionColumn,
          testLoopGoingLeft,
          testLoopGoingRight,
          testLoopGoingDown,
          goingUpLeft,
          goingDownRight,
          goingUpRight,
          goingDownLeft,
          getValuesForCheckFunc,
          connectFourChecker,
          horizontalChips,
          diagonalTopLeftBottomRightChips,
          diagonalTopRightBottomLeftChips,
        });
      }
      // const goingDownArrayValues = testLoopGoingDown(
      //   arrayNodes,
      //   positionRow,
      //   positionColumn
      // );
      // console.log(goingDownArrayValues, "goingDownArrayValues");
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 3
  if (columnObj[columnCounter] == 3) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, diagonalTopRight, right, down
    // second: diagonalDownLeft, left, up, diagonalTopRight, right, diagonalDownRight, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // seventh: left, diagonalTopLeft, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 3");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 3
    // console.log(arrayNodes[Number(row)][Number(column) - 1], "array node");
    const positionRow = Number(row);
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1320 : 1370;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-3")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1420 : 1470;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
      // check for winner here
      // we want to use positionRow and positionColumn
      console.log(columnObj.moveCounter, "columnObj.moveCounter");
      if (columnObj.moveCounter == 7) {
        console.log("this is the 7th move row 3");
        // methodsForRowOneToThree[convertToText(column)]({
        //   arrayNodes,
        //   positionRow,
        //   positionColumn,
        //   testLoopGoingLeft,
        //   testLoopGoingRight,
        //   goingUpLeft,
        //   goingDownRight,
        //   goingUpRight,
        //   goingDownLeft,
        //   getValuesForCheckFunc,
        //   connectFourChecker,
        //   horizontalChips,
        //   diagonalTopLeftBottomRightChips,
        //   diagonalTopRightBottomLeftChips,
        // });
      }
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 2
  if (columnObj[columnCounter] == 2) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, diagonalTopRight, right, down
    // second: diagonalDownLeft, left, up, diagonalTopRight, right, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: left, diagonalTopLeft, up, right, diagonalDownRight, down
    // seventh: left, diagonalTopLeft, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 2");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 2 + 2
    // console.log(arrayNodes[Number(row) + 2][Number(column) - 1], "array node");

    const positionRow = Number(row) + 2;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1350 : 1400;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-2")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1450 : 1500;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
      // check for winner here
      // we want to use positionRow and positionColumn
      console.log(columnObj.moveCounter, "columnObj.moveCounter");
      if (columnObj.moveCounter == 7) {
        console.log("this is the 7th move row 2");
        methodsForRowTwo[convertToText(column)]({
          arrayNodes,
          positionRow,
          positionColumn,
          testLoopGoingLeft,
          testLoopGoingRight,
          goingUpLeft,
          goingDownRight,
          goingUpRight,
          goingDownLeft,
          horizontalChips,
          diagonalTopLeftBottomRightChips,
          diagonalTopRightBottomLeftChips,
          getValuesForCheckFunc,
          connectFourChecker,
        });
      }
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 1
  if (columnObj[columnCounter] == 1) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, diagonalTopRight, right
    // second: left, up, diagonalTopRight, right
    // third: left, up, diagonalTopRight, right
    // fourth: left, diagonalTopLeft, up, diagonalTopRight, right
    // fifth: left, diagonalTopLeft, up, right
    // sixth: left, diagonalTopLeft, up, right
    // seventh: left, diagonalTopLeft, up

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 1");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 1 + 4
    // console.log(arrayNodes[Number(row) + 4][Number(column) - 1], "array node");
    // console.log(typeof arrayNodes[Number(row) + 2][Number(column) - 1]);
    // console.log(
    //   Object.is(arrayNodes[Number(row) + 2][Number(column) - 1], null)
    // );
    // const position = [Number(row) + 4][Number(column) - 1];
    const positionRow = Number(row) + 4;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1370 : 1420;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-1")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);
    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1520 : 1570;

    // setTimeout(() => {
    //   selectedColumn.setAttribute("data-droppedposition", "");
    // }, removeDroppedPositionTimer);
    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
      // check for winner here
      // we want to use positionRow and positionColumn
      // start here, work on argument passed into methodsForRowOne func call/execution
      // only run algorithm below when objOfCounters.moveCounter == || > 7
      console.log(columnObj.moveCounter, "columnObj.moveCounter");
      if (columnObj.moveCounter == 7) {
        console.log("this is the 7th move row 1");
        methodsForRowOne[convertToText(column)]({
          arrayNodes,
          positionRow,
          positionColumn,
          testLoopGoingLeft,
          testLoopGoingRight,
          goingUpLeft,
          goingDownRight,
          goingUpRight,
          goingDownLeft,
          horizontalChips,
          getValuesForCheckFunc,
          connectFourChecker,
          // diagonalTopLeftBottomRightChips,
          // diagonalTopRightBottomLeftChips,
        });
      }
    }, time + 150);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }
}

function changePlayerChip({ currentPlayerChip }) {
  // change data-playerturn value after animation
  // make this work with each column and row combination
  if (currentPlayerChip == "one") {
    // change value to "two"
    document
      .getElementById("game-board-bg-selector")
      .setAttribute("data-playerturn", "two");
  } else {
    // change value to "one"
    document
      .getElementById("game-board-bg-selector")
      .setAttribute("data-playerturn", "one");
  }
}

function movePointer({ columnClicked }) {
  // get data-column value then assign that value to data-chipdroplocation
  // of element with id "chip-drop-pointer-selector"
  const chipPointerElement = document.getElementById(
    "chip-drop-pointer-selector"
  );
  // assign value of columnClicked to chipPointerElement
  chipPointerElement.setAttribute("data-chipdroplocation", `${columnClicked}`);
}

function stopTimer({ getItemValue }) {
  const playersTurnTimer = JSON.parse(localStorage.getItem(getItemValue));
  if (playersTurnTimer) {
    clearInterval(playersTurnTimer);
  }
}

function countdownTimer(element) {
  let startingNumber = 30;
  // make the time value dynamic
  const stopInterval = setInterval(() => {
    console.log(startingNumber);
    startingNumber = startingNumber - 1;
    element.textContent = `${startingNumber}`;

    if (startingNumber === 0) {
      const stopIntervalDigit = JSON.parse(
        localStorage.getItem("stopCountdown")
      );
      element.textContent = `00`;
      clearInterval(stopIntervalDigit);
    }
  }, 1000);
  localStorage.setItem("stopCountdown", JSON.stringify(stopInterval));
}

function setPlayerChip({
  arrayNodes,
  positionRow,
  positionColumn,
  currentPlayerChip,
  row,
  column,
}) {
  if (
    typeof arrayNodes[positionRow][positionColumn] == "object" &&
    Object.is(arrayNodes[positionRow][positionColumn], null)
  ) {
    console.log("positionRow", positionRow);
    console.log("positionColumn", positionColumn);
    console.log(
      "arrayNodes[positionRow][positionColumn]",
      arrayNodes[positionRow][positionColumn]
    );
    /**
     * remove was giving errors
     * **/
    // console.log("before", document.getElementById(`row-${positionRow}`));
    // console.log(
    //   document.getElementById(`row-${positionRow}`).children[positionColumn - 1]
    // );
    /**
     * remove was giving errors
     * **/
    console.log("hello this is chip.");
    // change value null to string "one" or "two"
    // needs to be an obj with player and position
    // with row and column we can target chip element to apply winning circle attr
    // arrayNodes[positionRow][positionColumn] = currentPlayerChip;
    arrayNodes[positionRow][positionColumn] = {
      playerChip: currentPlayerChip,
      chipPosition: [`${row}`, `${column}`],
    };
    // testing
    // testingAlgorithm({ arrayNodes, positionRow, positionColumn });
  }
}

function testingAlgorithm({ arrayNodes, positionRow, positionColumn }) {
  // get value at chip position
  console.log("this is testingAlgorithm function");
  console.log(arrayNodes[positionRow][positionColumn]);
  const chipObj = arrayNodes[positionRow][positionColumn];
  const [chipRow, chipColumn] = chipObj.chipPosition;
  // the position property in our obj at arrayNodes[positionRow][positionColumn]
  // will have the correct row and column we can use to select the chip element
  console.log(
    document
      .getElementById(`row-${chipRow}`)
      .children[chipColumn - 1].children[3].setAttribute(
        "data-connectfour",
        "true"
      ),
    "chip element in testingAlgorithm"
  );
}

// push string "one" or "two" in to array
// then run check to see if there are four consecutive "one" or "two"
function diagonalTopLeft({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[-][-]
}
function diagonalTopRight({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[-][+]
}
function diagonalBottomRight({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[+][+]
}
function diagonalBottomLeft({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[+][-]
}

function Up({ arrayNodes, positionRow, positionColumn }) {
  // check if item in array of nodes at dropped position is an string
  // arr[-][same]
  // positionRow is the index position of our matrix
  for (let index = positionRow; index !== 0; index--) {}
}
function right({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[same][+]
}
function down({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[+][same]
}
function left({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[same][-]
}

// make a recursive function

function testLoopGoingUp(array, row, column) {
  console.log("testLoopGoingUp");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (let index = row - 1; index != -1; index--) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (array[index][column] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof array[index][column] == "object" &&
      array[index][column].hasOwnProperty("playerChip")
    ) {
      console.log("something is here");
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = array[index][column];
      const currentChip = array[index][column].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function testLoopGoingDown(array, row, column) {
  console.log("testLoopGoingDown");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (let index = row + 1; index < array.length; index++) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (array[index][column] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof array[index][column] == "object" &&
      array[index][column].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = array[index][column];
      const currentChip = array[index][column].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function testLoopGoingLeft(array, row, column) {
  console.log("testLoopGoingLeft");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  console.log("array", array);
  console.log("row", row);
  console.log("column", column);
  // break
  const rowArray = array[row];

  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (let index = column - 1; index != -1; index--) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (rowArray[index] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof rowArray[index] == "object" &&
      rowArray[index].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = rowArray[index];
      const currentChip = rowArray[index].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function testLoopGoingRight(array, row, column) {
  console.log("testLoopGoingRight");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  console.log("array", array);
  console.log("row", row);
  console.log("column", column);
  const rowArray = array[row];

  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (let index = column + 1; index < rowArray.length; index++) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (rowArray[index] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof rowArray[index] == "object" &&
      rowArray[index].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = rowArray[index];
      const currentChip = rowArray[index].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function goingUpLeft(array, row, column) {
  console.log("goingUpLeft");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (
    let index = row - 1, columnIndex = column - 1;
    index != -1;
    index--, columnIndex--
  ) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (array[index][columnIndex] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof array[index][columnIndex] == "object" &&
      array[index][columnIndex].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = array[index][columnIndex];
      const currentChip = array[index][columnIndex].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function goingDownRight(array, row, column) {
  console.log("goingDownRight");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (
    let index = row + 1, columnIndex = column + 1;
    index < array.length;
    index++, columnIndex++
  ) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (array[index][columnIndex] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof array[index][columnIndex] == "object" &&
      array[index][columnIndex].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = array[index][columnIndex];
      const currentChip = array[index][columnIndex].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function goingUpRight(array, row, column) {
  console.log("goingUpRight");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (
    let index = row - 1, columnIndex = column + 1;
    index != -1;
    index--, columnIndex++
  ) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (array[index][columnIndex] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      array[index][columnIndex] !== null &&
      typeof array[index][columnIndex] == "object" &&
      array[index][columnIndex].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = array[index][columnIndex];
      const currentChip = array[index][columnIndex].playerChip;
      // console.log(previousValue);
      console.log("goingUpRight");
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

function goingDownLeft(array, row, column) {
  console.log("goingDownLeft");
  // each array[row][column] is an obj
  // loop through array add chip to arrayOfObjs if last value in array does not match currentVale of our loop
  // break
  const firstObj = array[row][column];
  const arrayOfObjs = [firstObj];

  for (
    let index = row + 1, columnIndex = column - 1;
    index < array.length;
    index++, columnIndex--
  ) {
    // if there is no obj at array[index][column] or array[index][column] is null return
    if (array[index][columnIndex] == null) {
      // return arrayOfObjs since there will always be an obj in arrayOfObjs
      // even though the value of array[index][column] is null
      console.log("return");
      return arrayOfObjs;
    }

    if (
      typeof array[index][columnIndex] == "object" &&
      array[index][columnIndex].hasOwnProperty("playerChip")
    ) {
      // only run algorithm if value in an is an "object" and has property "playerChip"
      // check if the value at array indexes is an obj in our loop
      // when user click on a column our algorithm will make an obj with properties "playerChip" and "position"
      // assign that obj to correct array index
      // push value into array
      const currentObj = array[index][columnIndex];
      const currentChip = array[index][columnIndex].playerChip;
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      if (currentChip == arrayOfObjs[arrayOfObjs.length - 1].playerChip) {
        arrayOfObjs.push(currentObj);
      } else {
        // to break out of our function/loop
        return arrayOfObjs;
      }
      // console.log(previousValue);
      console.log(currentObj);
      console.log(arrayOfObjs, "arrayOfObjs");
      console.log(array);
    }
  }
  return arrayOfObjs;
}

/**
 * combine two arrays functions
 * **/

function createTwoWayArraysFunctions() {
  return function innerFunc(firstArray, secondArray) {
    return [...firstArray, ...secondArray];
  };
}

/**
 * combine two arrays functions
 * **/

function getValuesForCheckFunc(array) {
  console.log("get values", array);
  // combine both arrays values into one array
  // const objValuesOfArray =
  //   subarrays.length == 1
  //     ? [...subarrays[0]]
  //     : subarrays.length == 2
  //     ? [...subarrays[0], ...subarrays[1]]
  //     : null;
  // copy first four values
  const firstFourValues = array.slice(0, 4);
  // if array length is 3, objValuesOfArray.slice(0,4) will return an array with items at index 0,1,2
  // if length of array is == to 4 return the array
  if (firstFourValues.length == 4) {
    return firstFourValues;
  }
  // if the length is < 4 return string not connect four
  if (firstFourValues.length < 4) {
    return null;
  }
}

function connectFourChecker(getValuesForCheckFunc, arrays) {
  console.log("this is checker");
  // find out value of calling/executing func getValuesForCheckFunc
  const isConnectFour = getValuesForCheckFunc(arrays);
  console.log(isConnectFour, "isConnectFour");
  if (Array.isArray(isConnectFour) && isConnectFour.length == 4) {
    console.log("isConnectFour", isConnectFour);
    console.log("winner");
    return "winner";
    // when we get here it means isConnectFour is an array with four objs
    // get values of position of obj in array
    // use values to find element and apply winning circle attr
    isConnectFour.forEach(function loopThroughArrayAddAttr(obj, index, list) {
      const [chipRow, chipColumn] = obj.chipPosition;
      // select chip element and add winning circle attr
      document
        .getElementById(`row-${chipRow}`)
        .children[chipColumn - 1].children[3].setAttribute(
          "data-connectfour",
          "true"
        );
    });
  }
  // // when we get here it means isConnectFour is null meaning the length of the array is less than 4
  return null;
}

const testArray = [
  // row 6 - 6
  // index 0
  [null, null, "one", "two", "one", "one", "one"],
  // row 5 - 4
  // index 1
  [null, null, "one", "one", "one", "two", "two"],
  // row 4 - 2
  // index 2
  ["one", "two", "one", "one", null, null, null],
  // row 3
  // index 3
  ["tow", "one", "two", "two", null, null, null],
  // row 2 + 2
  // index 4
  [null, null, "two", "one", null, null, null],
  // row 1 + 4
  // index 5
  [null, null, null, null, null, null, null],
];

const anotherArray = [
  // row 6 - 6
  // index 0
  ["two", "one", "one", "two", "one", "one", "one"],
  // row 5 - 4
  // index 1
  ["two", "one", "one", "one", "one", "two", "two"],
  // row 4 - 2
  // index 2
  ["one", "two", "one", "one", "one", "one", "one"],
  // row 3
  // index 3
  ["two", "one", "two", "two", "one", "one", "two"],
  // row 2 + 2
  // index 4
  ["one", "two", "two", "one", "two", "two", "one"],
  // row 1 + 4
  // index 5
  ["two", "one", "two", "two", "two", "two", "two"],
];

const arrayOfTestObjs = [
  // row 6 - 6
  // index 0
  [
    { playerChip: "two", chipPosition: [`6`, `1`] },
    { playerChip: "one", chipPosition: [`6`, `2`] },
    { playerChip: "one", chipPosition: [`6`, `3`] },
    { playerChip: "two", chipPosition: [`6`, `4`] },
    { playerChip: "one", chipPosition: [`6`, `5`] },
    { playerChip: "one", chipPosition: [`6`, `6`] },
    { playerChip: "one", chipPosition: [`6`, `7`] },
  ],
  // ["two", "one", "one", "two", "one", "one", "one"],
  // row 5 - 4
  // index 1
  [
    { playerChip: "two", chipPosition: [`5`, `1`] },
    { playerChip: "one", chipPosition: [`5`, `2`] },
    { playerChip: "one", chipPosition: [`5`, `3`] },
    { playerChip: "one", chipPosition: [`5`, `4`] },
    { playerChip: "one", chipPosition: [`5`, `5`] },
    { playerChip: "two", chipPosition: [`5`, `6`] },
    { playerChip: "two", chipPosition: [`5`, `7`] },
  ],
  // ["two", "one", "one", "one", "one", "two", "two"],
  // row 4 - 2
  // index 2
  [
    { playerChip: "one", chipPosition: [`4`, `1`] },
    { playerChip: "two", chipPosition: [`4`, `2`] },
    { playerChip: "one", chipPosition: [`4`, `3`] },
    { playerChip: "one", chipPosition: [`4`, `4`] },
    { playerChip: "one", chipPosition: [`4`, `5`] },
    { playerChip: "one", chipPosition: [`4`, `6`] },
    { playerChip: "one", chipPosition: [`4`, `7`] },
  ],
  // ["one", "two", "one", "one", "one", "one", "one"],
  // row 3
  // index 3
  [
    { playerChip: "two", chipPosition: [`3`, `1`] },
    { playerChip: "one", chipPosition: [`3`, `2`] },
    { playerChip: "two", chipPosition: [`3`, `3`] },
    { playerChip: "two", chipPosition: [`3`, `4`] },
    { playerChip: "one", chipPosition: [`3`, `5`] },
    { playerChip: "one", chipPosition: [`3`, `6`] },
    { playerChip: "two", chipPosition: [`3`, `7`] },
  ],
  // ["two", "one", "two", "two", "one", "one", "two"],
  // row 2 + 2
  // index 4
  [
    { playerChip: "one", chipPosition: [`2`, `1`] },
    { playerChip: "two", chipPosition: [`2`, `2`] },
    { playerChip: "two", chipPosition: [`2`, `3`] },
    { playerChip: "one", chipPosition: [`2`, `4`] },
    { playerChip: "two", chipPosition: [`2`, `5`] },
    { playerChip: "two", chipPosition: [`2`, `6`] },
    { playerChip: "one", chipPosition: [`2`, `7`] },
  ],
  // ["one", "two", "two", "one", "two", "two", "one"],
  // row 1 + 4
  // index 5
  [
    { playerChip: "two", chipPosition: [`1`, `1`] },
    { playerChip: "one", chipPosition: [`1`, `2`] },
    { playerChip: "two", chipPosition: [`1`, `3`] },
    { playerChip: "two", chipPosition: [`1`, `4`] },
    { playerChip: "two", chipPosition: [`1`, `5`] },
    { playerChip: "two", chipPosition: [`1`, `6`] },
    { playerChip: "two", chipPosition: [`1`, `7`] },
  ],
  // ["two", "one", "two", "two", "two", "two", "two"],
];

function convertToText(columnNumberValue) {
  switch (columnNumberValue) {
    case "1":
      return "first";
    case "2":
      return "second";
    case "3":
      return "third";
    case "4":
      return "fourth";
    case "5":
      return "fifth";
    case "6":
      return "sixth";
    case "7":
      return "seventh";
  }
}

/**
 * Testing
 * **/

// function getValuesForCheckFunc(...subarrays) {
//   // combine both arrays values into one array
//   const objValuesOfArray =
//     subarrays.length == 1 ? "winner" : subarrays.length == 2 ? null : null;

//   return objValuesOfArray;
// }

// function connectFourChecker(getValuesForCheckFunc, ...arrays) {
//   // find out value of calling/executing func getValuesForCheckFunc
//   const isConnectFour = getValuesForCheckFunc(...arrays);
//   if (Array.isArray(isConnectFour) && isConnectFour.length == 4) {
//     // when we get here it means isConnectFour is an array with four objs
//     // get values of position of obj in array
//     // use values to find element and apply winning circle attr
//     isConnectFour.forEach(function loopThroughArrayAddAttr(obj, index, list) {
//       const [chipRow, chipColumn] = obj.chipPosition;
//       // select chip element and add winning circle attr
//       document
//         .getElementById(`row-${chipRow}`)
//         .children[chipColumn - 1].children[3].setAttribute(
//           "data-connectfour",
//           "true"
//         );
//     });
//     return "winner";
//   }
//   // when we get here it means isConnectFour is null meaning the length of the array is less than 4
//   return null;
// }
