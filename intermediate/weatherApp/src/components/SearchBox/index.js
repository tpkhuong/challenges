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
  return (
    <div>
      <SearchBox
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
        options={{ language: "en", country: "US" }}
      />
    </div>
  );
};

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
