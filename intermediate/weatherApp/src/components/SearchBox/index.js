// "use client";

import React from "react";
import styles from "./SearchBox.module.css";
import { SearchBox } from "@mapbox/search-js-react";
// import dynamic from "next/dynamic";

// const MapComponent = dynamic(
//   () =>
//     import(`@mapbox/search-js-react`).then((mod) => {
//       return mod.MapComponent;
//     }),
//   {
//     ssr: false,
//     loading: () => <p>Loading map...</p>,
//   }
// );

// export default MapComponent;

const MapComponent = () => {
  // if user only enter zipcode find city and state
  return (
    <div onKeyDown={checkLocation}>
      <SearchBox
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
        options={{ language: "en", country: "US" }}
        aria-description="format: city comma uppercase state abbreviation  zip code"
        placeholder="example: Los Angeles, CA 90031"
      />
    </div>
  );
};

async function checkLocation(event) {
  // hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw
  console.log(event, "event");
  if (event.code == "Enter") {
    console.log("User hit Enter key");
    const response = await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=Atlanta&state=Georgia&country=US&zipcode=30308`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw",
        },
      }
    );

    if (response) {
      const data = await response.json();
      console.log(data, "data");
    }
  }
}

export default MapComponent;
// export default function SearchBox({ children }) {
//   // const [isClient, setIsClient] = React.useState(false);

//   // React.useEffect(function renderSearchBox() {
//   //   setIsClient(true);
//   // }, []);

//   return (
//     <React.Fragment>
//       <div className={styles[`Search-Box-Wrapper`]}>
//         <SearchBox
//           accessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
//           options={{ language: "en", country: "US" }}
//         />
//         {/* {isClient ? (
//           <SearchBox
//             accessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
//             options={{ language: "en", country: "US" }}
//           />
//         ) : null} */}
//         {/* <MapComponent /> */}
//       </div>
//     </React.Fragment>
//   );
// }
