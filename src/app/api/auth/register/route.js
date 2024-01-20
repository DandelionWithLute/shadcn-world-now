import prisma from "@/lib/connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  const validEmail = email.trim().toLowerCase();

  try {
    const existEmail = await prisma.user.findUnique({
      where: {
        email: validEmail,
      },
    });
    if (existEmail) {
      return new NextResponse(JSON.stringify("The email already exists!"), {
        status: 500,
      });
    }

    await prisma.User.create({
      data: {
        name,
        email: validEmail,
        hashedPassword,
      },
    });
    return new NextResponse(
      JSON.stringify("User has been created!", { status: 201 })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify("Failed to create user!", { status: 500 })
    );
  }
};
