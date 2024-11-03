import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  return NextResponse.json({
    message: "Hi, this is GET",
  });
}

export async function POST(req, res) {
  //   const { method, body } = req;
  //   const { name, email, password } = body;
  //   For nextjs 13.4 and above

  const body = await req.json();
  console.log(body, "body");

  //   console.log(name, "name");
  //   console.log(email, "email");
  //   console.log(password, "password");
  /**
   * Working on adding user data to database(postgresql)
   * **/
  return NextResponse.json({
    message: "Hi, this is POST",
  });
}
