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

  // const body = await req.json();
  // console.log(body, "body");

  // with password
  // const { name, email, password } = body;

  // console.log(name, "name");
  // console.log(email, "email");
  // console.log(password, "password");

  // const user = await prisma.user.create({
  //   data: {
  //     // name,
  //     email,
  //     password,
  //   },
  // });

  // console.log(user, "user");
  /**
   * Working on adding user data to database(postgresql)
   * **/
  // return NextResponse.json({
  //   message: "Hi, this is POST with password",
  //   data: {
  //     name,
  //     email,
  //     password,
  //   },
  // });

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
  /**
   * paid customers
   * **/

  const body = await req.json();
  console.log(body, "body");

  const { firstName, lastName, billingAddress, shippingAddress } = body;

  console.log(firstName, "firstName");
  console.log(lastName, "lastName");
  console.log(billingAddress, "billingAddress");
  console.log(shippingAddress, "shippingAddress");

  const createdPaidCustomer = await prisma.paidCustomers.create({
    data: {
      firstName,
      lastName,
      billingAddress,
      shippingAddress,
    },
  });

  // after creating paid customer
  console.log(createdPaidCustomer, "createdPaidCustomer");

  return NextResponse.json({
    message: "Hi, this is POST for paid customers",
    data: {
      firstName,
      lastName,
      billingAddress,
      shippingAddress,
    },
  });
}

export async function PUT(req, res) {
  const body = await req.json();

  console.log(body, "body");

  const { email, password } = body;

  // use email to find user
  const userFoundByEmail = await prisma.user.findMany({
    where: {
      email: `${email}`,
    },
  });
  // then update user data with password
  // use .update method
  const updateUser = await prisma.user.update({
    where: {
      email: `${email}`,
    },
    data: {
      password: `${password}`,
    },
  });

  return NextResponse.json({
    message: "Hi, this is PUT method",
    data: {
      email,
      userFoundByEmail,
      updatedUser: updateUser,
    },
  });
}
