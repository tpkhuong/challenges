import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,showers,rain,snowfall,weather_code,visibility,wind_speed_10m,temperature_80m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,precipitation,rain,showers,snowfall,weather_code"
  );

  if (response) {
    const data = await response.json();

    console.log("data from api call", data);

    return NextResponse.json({
      message: "This is data from fetch call",
      forecastData: data,
    });
  }
}
