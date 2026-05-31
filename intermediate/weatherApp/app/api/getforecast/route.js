import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=33.9163&longitude=-84.8278&hourly=temperature_2m&current=is_day&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
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
