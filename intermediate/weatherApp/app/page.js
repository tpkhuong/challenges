import React from "react";
import indexStyles from "../styles/IndexPage.module.css";
import Title from "../src/components/Title/index.js";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <main role="main">
        {/* get date from API */}
        {/* app title + units changer */}
        {/* h2 + search container */}
        {/* content container */}
        <section>
          {/* content cotnainer */}
          <div>
            {/* Location display */}
            {/* feels like, humidity, wind, and precipitation */}
            {/* Daily Forecast */}
          </div>
          <div>
            {/* h3 + button */}
            {/* hourly display elements */}
          </div>
        </section>
        <Title>{"This is the Weather App!!!"}</Title>
        <h2 className={indexStyles[`title`]}>This is another title.</h2>
      </main>
    </React.Fragment>
  );
}

// @ts-check

/**
 * @/type {import('next').NextConfig}
 */
// const nextConfig = {
//     experimental: {
//       turbopackFileSystemCacheForDev: true,
//     },
//   };
//   export default nextConfig;
