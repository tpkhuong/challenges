import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/geocoding?zipcode=30308"
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
