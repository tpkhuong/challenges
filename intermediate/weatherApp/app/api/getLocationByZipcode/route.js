import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/geocoding?zipcode=30308",
    {
      headers: {
        Authorization: `Bearer ${hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw}`,
        "x-api-key": "hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw",
        "Content-Type": "application/json",
      },
    }
  );

  if (response) {
    const data = await response.json();

    console.log("Location from Using Zipcode", data);

    return NextResponse.json({
      message: "This is Location lat and long.",
      locationData: data,
    });
  }
}
