import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "./schema";
import prisma from "@/prisma/client";

// Without the request object, Next.js will cache the result of this response
export const GET = async (request: NextRequest) => {
  // Retrieve all the users from the DB
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // User schema from zod validation for types
  // There is also a stricter userSchema.parse(body)
  const validation = userSchema.safeParse(body);
  // Validation against userSchema
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })

  // To prevent duplication, check for an existing user
  if (user) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  // ID will be generated and other fields have defaults
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })
  return NextResponse.json(newUser, { status: 201 });
}