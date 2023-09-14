import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "./schema";

// Without the request object, Next.js will cache the result of this response
export const GET = (request: NextRequest) => {
  return NextResponse.json(
    [
      { id: 1, name: 'Abz' },
      { id: 2, name: 'Waseema' }
    ]
  );
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
  // ID should be generated
  return NextResponse.json({ id: 3, name: body.name }, { status: 201 });
}