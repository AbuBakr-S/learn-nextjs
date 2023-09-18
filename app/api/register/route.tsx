import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

// create a schema for the user registration fields to check in the body
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
})

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  // ? Validate the request body against the schema and handle an error response
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // ? Lookup the user by email
  const user = await prisma.user.findUnique({ where: { email: body.email } })

  // ? If the user already exists, return an error
  if (user) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  } else {
    // ? Otherwise create the user
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        hashedPassword
      }
    })
    return NextResponse.json({ email: newUser.email })
  }
}