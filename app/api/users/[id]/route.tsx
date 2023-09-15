import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "../schema";
import prisma from "@/prisma/client";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  // Fetch the user with the ID specified in the URL query string
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }
  })
  // If the user is not found, we will receive null
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  // Return the user object
  return NextResponse.json(user);
}

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  // Validate the request body. If invalid, return 400 error
  const body = await request.json();
  // User schema from zod validation for types
  const validation = userSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // If the ID doesn't exist, return 404 error
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }
  })
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  }

  // Otherwise fetch the user with the given ID
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email
    }
  })

  // Otherwise update the user and return
  return NextResponse.json(updatedUser);
}

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  // Fetch the user from DB
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }
  })
  // If not found, return 404
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 400 })
  }
  // Delete the user
  await prisma.user.delete({
    where: { id: parseInt(params.id) }
  })

  return NextResponse.json({ });

}