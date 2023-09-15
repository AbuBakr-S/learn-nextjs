import { NextRequest, NextResponse } from "next/server";
import { productSchema } from "./schema";
import prisma from "@/prisma/client";

export const GET = async (request: NextRequest) => {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export const POST = async (request: NextRequest) => {
  //  handle the response body
  const body = await request.json();
  const validation = (productSchema.safeParse(body));

  // Validation against productSchema
  if(!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price
    }
  })

  return NextResponse.json(newProduct, { status: 201 })
}