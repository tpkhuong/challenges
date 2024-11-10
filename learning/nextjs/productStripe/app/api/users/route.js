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

  // with password
  const { name, email, password } = body;

  console.log(name, "name");
  console.log(email, "email");
  console.log(password, "password");

  const user = await prisma.user.create({
    data: {
      // name,
      email,
      password,
    },
  });

  console.log(user, "user");
  /**
   * Working on adding user data to database(postgresql)
   * **/
  return NextResponse.json({
    message: "Hi, this is POST with password",
    data: {
      name,
      email,
      password,
    },
  });

  // // without password
  // const { name, email } = body;

  // console.log(name, "name");
  // console.log(email, "email");

  // const userWithoutPassword = await prisma.user.create({
  //   data: {
  //     email,
  //   },
  // });

  // console.log(userWithoutPassword, "userWithoutPassword");

  // return NextResponse.json({
  //   message: "Hi, this is POST without password",
  //   data: {
  //     name,
  //     email,
  //   },
  // });
}

export async function PUT(req, res) {
  // use email to find user
  // then update user data with password
  const body = await req.json();

  console.log(body, "body");

  return NextResponse.json({
    message: "Hi, this is PUT method",
  });
}
