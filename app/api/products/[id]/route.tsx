import { NextRequest, NextResponse } from "next/server";
import { productSchema } from "../schema";

export const GET = (request: NextRequest, { params }: { params: { id: number } }) => {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json({ id: 3, name: "Eggs", price: 2 });
}

export const PUT = async (request: NextRequest, { params }: { params: { id: number } }) => {
  // Validate the request body. If invalid, return 400 error
  const body = await request.json();
  // User schema from zod validation for types
  const validation = productSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // If the ID doesn't exist, return 404 error
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  }

  // Otherwise fetch the user with the given ID

  // Otherwise update the user and return
  return NextResponse.json({ id: 1, name: body.name });
}


export const DELETE = (request: NextRequest, { params }: { params: { id: number } }) => {
  // Fetch the user from DB
  // If not found, return 404
  // Delete the user
  // Return 200

  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  }

  return NextResponse.json({ });

}