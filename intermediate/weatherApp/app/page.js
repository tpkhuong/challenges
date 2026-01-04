"use client";

import React from "react";
import indexStyles from "../styles/IndexPage.module.css";
import Title from "../src/components/Title/index.js";

export default function RootPage({ children }) {
  /**
   * works
   * **/

  // const response = await fetch(
  //   `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,showers,rain,snowfall,weather_code,visibility,wind_speed_10m,temperature_80m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,precipitation,rain,showers,snowfall,weather_code`
  // );

  // if (response) {
  //   const data = await response.json();

  //   console.log("data", data);
  // }

  /**
   * works
   * **/

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

        <button onClick={getForecastData}>GET Forecast Data</button>
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
async function getForecastData(event) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/api/getforecast`,
    { method: "GET" }
  );

  if (response) {
    const data = await response.json();

    console.log("forecast data", data);

    return data;
  }
}
