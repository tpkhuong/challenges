// when user click on play again button
// clear the board
/**
 * get all div element of div with id="row-" 1 to 6
 * **/
/********/
// how do we clear array of nodes in connect four board closure?
/********/
// clear the scores
// the player that went second will go first
// reset chip drop pointer to "first"
function closureGameFunction() {
  const restartGameObj = {
    previouStarter: "one",
  };
  return function innerFunction(event, checkFunction) {
    // change player turn display color
    // change player turn to "two"
    console.log(checkFunction, "checkFunction");
    if (restartGameObj.previouStarter == "one") {
      // change data-playerturn attr on main element with id "game-board-bg-selector" to "two"
      document
        .getElementById("game-board-bg-selector")
        .setAttribute("data-playerturn", "two");
      return;
    }
    // change player turn to "one"
    if (restartGameObj.previouStarter == "two") {
      // change data-playerturn attr on main element with id "game-board-bg-selector" to "one"
      document
        .getElementById("game-board-bg-selector")
        .setAttribute("data-playerturn", "one");
      return;
    }
  };
}

export const gameFunctions = closureGameFunction();
