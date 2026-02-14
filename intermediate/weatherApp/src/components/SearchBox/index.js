// "use client";

import React from "react";
import styles from "./SearchBox.module.css";
import { SearchBox } from "@mapbox/search-js-react";

export default function SearchBoxComponent({ children }) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(function renderSearchBox() {
    setIsClient(true);
  }, []);

  return (
    <React.Fragment>
      <div className={styles[`Search-Box-Wrapper`]}>
        {isClient ? (
          <SearchBox
            accessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
            options={{ language: "en", country: "US" }}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}
