import React from "react";
import styles from "./SearchBar.module.css";

/***
 * have to move SearchBar algorithm to js file where we want to render the weather forecast data
 * ***/

export default function SearchBar({ children }) {
  const [isThereSearches, setRecentSearches] = React.useState();

  const searchBtnAlgorithm = closureWrapper(setRecentSearches);

  return (
    <React.Fragment>
      <div className="search-bar-search-btn-container">
        <div>
          <span className={styles[`icon-wrapper`]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                fill="#D4D3D9"
                d="M19.844 18.82c.195.196.195.508 0 .664l-.899.899c-.156.195-.468.195-.664 0l-4.726-4.727a.63.63 0 0 1-.117-.351v-.508c-1.446 1.21-3.282 1.953-5.313 1.953A8.119 8.119 0 0 1 0 8.625C0 4.172 3.633.5 8.125.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.781 3.906-1.992 5.313h.508c.117 0 .234.078.351.156l4.727 4.726ZM8.125 14.875a6.243 6.243 0 0 0 6.25-6.25c0-3.438-2.813-6.25-6.25-6.25a6.243 6.243 0 0 0-6.25 6.25 6.219 6.219 0 0 0 6.25 6.25Z"
              />
            </svg>
          </span>
          <label className="visually-hidden" htmlFor="search-bar-selector">
            Search Bar
          </label>
          <input
            onKeyUp={zipCodeHelper}
            id="search-bar-selector"
            type="text"
            aria-description="format: city comma uppercase state abbreviation zip code or zip code."
            placeholder="example: Los Angeles, CA 90031 or zip code: 80019"
          />
          {/* saved location will use .map on array of saved location. */}
        </div>
        <button onClick={searchBtnAlgorithm}>Search</button>
        {/* add recent search here */}
        {!isThereSearches ? (
          <span>No Searches</span>
        ) : (
          <span>Recent Searches</span>
        )}
      </div>
    </React.Fragment>
  );
}

function closureWrapper(setStateFunc) {
  // recent searches array
  const dataObj = {
    recentSearchesArray: [],
  };

  return function innerFunction(event) {
    console.log(setStateFunc, "setStateFunc at beginning");
    console.log(event, "event");
    console.log(
      dataObj.recentSearchesArray,
      " before dataObj.recentSearchesArray"
    );
    // have user recent search be first on recent searches list
    const searchBarInputValue = document.getElementById(
      "search-bar-selector"
    ).value;

    console.log(searchBarInputValue, "searchBarInputValue");

    const addValueToArray = [
      searchBarInputValue,
      ...dataObj.recentSearchesArray,
    ];

    console.log(addValueToArray, "addValueToArray");

    dataObj.recentSearchesArray = addValueToArray;

    // const correctOrderOfSearchesArray = dataObj.recentSearchesArray.reduce(
    //   function workWithSearchOrder(buildingUp, currentValue) {
    //     if (dataObj.recentSearchesArray.length == 0) {
    //       buildingUp = [searchBarInputValue, ...dataObj.recentSearchesArray];

    //       return buildingUp;
    //     }
    //     buildingUp = [searchBarInputValue, ...buildingUp];

    //     return buildingUp;
    //   },
    //   []
    // );
    // here

    // console.log(correctOrderOfSearchesArray, "correctOrderOfSearchesArray");

    // dataObj.recentSearchesArray = correctOrderOfSearchesArray;
    /*****/
    /** when length is 10  ***/

    if (dataObj.recentSearchesArray.length > 10) {
      // get the first 10 values of array
      console.log(
        dataObj.recentSearchesArray,
        "dataObj.recentSearchesArray inside if statement"
      );

      const firstTenCities = dataObj.recentSearchesArray.slice(
        0,
        dataObj.recentSearchesArray.length - 1
      );

      dataObj.recentSearchesArray = firstTenCities;

      console.log(firstTenCities, "firstTenCities inside if statement");
    }

    /** when length is 10  ***/
    /*****/

    console.log(
      dataObj.recentSearchesArray,
      " after dataObj.recentSearchesArray"
    );

    console.log(setStateFunc, "setStateFunc at end");
    setStateFunc(dataObj.recentSearchesArray);
  };
}

/***
 * Need to move zipZodeHelper algorithm into closureWrapper function
 ***/

function zipCodeHelper(event) {
  console.log(event, "event");
  console.log(event._reactName, "event _reactName");
  const { code, key, target } = event;

  const searchBarInput = document.getElementById("search-bar-selector");

  const valueOfSearchBar = searchBarInput.value;

  console.log("value", valueOfSearchBar);
  console.log("value length", valueOfSearchBar.length);

  if (valueOfSearchBar.length > 5) {
    const checkEachDigitsObj = {
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      NaN: false,
    };
    console.log("length is greater 5");
    // get first 5 digits
    const originalInputValues = valueOfSearchBar;

    const arrOfDigits = valueOfSearchBar.split("");
    // remove sixth digit
    const removeLastDigit = arrOfDigits.pop();
    // check if all digits are number
    const isAllNumbers = arrOfDigits.every(function checkAllDigits(
      value,
      index,
      list
    ) {
      const strToNumber = Number(value);

      return checkEachDigitsObj[`${strToNumber}`];
    });

    // if all digits are number show only first 5 digits

    if (isAllNumbers) {
      console.log(arrOfDigits, "arrOfDigits");
      const onlyFiveDigitsZipCode = arrOfDigits.join("");
      searchBarInput.value = onlyFiveDigitsZipCode;
      return;
    }
    // else show user current entered values

    searchBarInput.value = originalInputValues;
  }

  // if(key == "Enter"){

  // }
}

// "80808".split("").every(function convertToNumber(value, index, list) {
//   const strToNumber = Number(value);

//   console.log(strToNumber);
//   // have to use !! to make Number("a") falsy
//   // Number("a") will return NaN then !NaN is true because NaN is 1 of 7 falsy values
//   // return NaN && typeof strToNumber == "number";
// });

// ["8", "0", "a", "B", "9"].every(function isAllDigitsNumbers(
//   value,
//   index,
//   list
// ) {
//   const strToNumber = Number(value);

//   return checkEachDigitsObj[strToNumber];
// });
