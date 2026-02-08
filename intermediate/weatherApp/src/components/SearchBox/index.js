"use client";

import React from "react";
import styles from "./SearchBox.module.css";
import { SearchBox } from "@mapbox/search-js-react";

export default function SearchBox({ children }) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(function renderSearchBox() {
    setIsClient(true);
  }, []);

  return (
    <React.Fragment>
      <div className={styles[`Search-Box-Wrapper`]}>
        {isClient ? (
          <SearchBox
            accessToken={ProcessingInstruction.env.NEXT_PUBLIC_MAPBOX_API}
            options={{ language: "en", country: "US" }}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}
