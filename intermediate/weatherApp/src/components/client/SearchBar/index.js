import React from "react";
import styles from "./SearchBar.module.css";

const searchBtnAlgorithm = closureWrapper();

export default function SearchBar({ children }) {
  const [] = React.useState();

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
            id="search-bar-selector"
            type="text"
            aria-description="format: city comma uppercase state abbreviation zip code or zip code."
            placeholder="example: Los Angeles, CA 90031 or zip code: 80019"
          />
          {/* saved location will use .map on array of saved location. */}
        </div>
        <button onClick={searchBtnAlgorithm}>Search</button>
      </div>
    </React.Fragment>
  );
}

function closureWrapper() {
  // recent searches array
  const dataObj = {
    recentSearchesArray: [],
  };

  return function innerFunction(event) {
    console.log(event, "event");
    console.lof(
      dataObj.recentSearchesArray,
      " before dataObj.recentSearchesArray"
    );
    // have user recent search be first on recent searches list
    const searchBarInputValue = document.getElementById(
      "search-bar-selector"
    ).value;
    const correctOrderOfSearchesArray = dataObj.recentSearchesArray.reduce(
      function workWithSearchOrder(buildingUp, currentValue) {
        if (dataObj.recentSearchesArray.length == 0) {
          buildingUp = [searchBarInputValue, ...dataObj.recentSearchesArray];

          return buildingUp;
        }
        buildingUp = [searchBarInputValue, ...buildingUp];

        return buildingUp;
      },
      []
    );
    // here

    dataObj.recentSearchesArray = correctOrderOfSearchesArray;

    console.lof(
      dataObj.recentSearchesArray,
      " after dataObj.recentSearchesArray"
    );
  };
}
