import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  console.log(req.headers, "req");
  // const response = await fetch(
  //   "https://api.api-ninjas.com/v1/geocoding?zipcode=30308",
  //   {
  //     headers: {
  //       "x-api-key": "hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw",
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // if (response) {
  //   const data = await response.json();

  //   console.log("Location from Using Zipcode", data);

  //   return NextResponse.json({
  //     message: "This is Location lat and long.",
  //     locationData: data,
  //   });
  // }

  /**
   * Testing Idea
   * **/

  // getting latitude and longitude using Zipcode
  // const dataObj = getGeocodingUsingZipcode();
  // using latitude and longitude to get geocoding. name = city, country and state

  // gettingLocationUsingGeocoding(dataObj);

  const arrayOfFunc = await Promise.all([
    getGeocodingUsingZipcode(),
    gettingLocationUsingGeocoding(),
  ]);

  console.log(arrayOfFunc, "arrayOfFunc");
  console.log(arrayOfFunc[0], "arrayOfFunc[0]");
  console.log(arrayOfFunc[1], "arrayOfFunc[1]");
}

async function getGeocodingUsingZipcode() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/geocoding?zipcode=30308",
    {
      headers: {
        "x-api-key": "hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw",
        "Content-Type": "application/json",
      },
    }
  );

  if (response) {
    const data = await response.json();

    // console.log(data, "data");

    const dataObj = data[0];

    // console.log(dataObj, "dataObj");

    const { latitude, longitude } = dataObj;

    // console.log(latitude, "latitude");
    // console.log(longitude, "longitude");

    return dataObj;
  }
}

async function gettingLocationUsingGeocoding() {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/reversegeocoding?lat=33.7718&lon=-84.3757`,
    {
      headers: {
        "x-api-key": "hep6buoD1Ddy4SbObyaI2BenJxFQY6l5gROxLdOw",
        "Content-Type": "application/json",
      },
    }
  );

  if (response) {
    const data = await response.json();

    // console.log(data, "data");

    return data;
  }
}
