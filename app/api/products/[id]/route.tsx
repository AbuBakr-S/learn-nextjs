import { NextRequest, NextResponse } from "next/server";
import { productSchema } from "../schema";
import prisma from "@/prisma/client";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  // Validate the request body. If invalid, return 400 error
  const body = await request.json();
  // User schema from zod validation for types
  const validation = productSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // If the ID doesn't exist, return 404 error
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) }
  })
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 400 });
  }

  // Otherwise fetch the user with the given ID
  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      price: body.price
    }
  })

  // Otherwise update the user and return
  return NextResponse.json(updatedProduct);
}


export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  // Fetch the product from DB
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) }
  })
  // If not found, return 404
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 400 });
  }
  // Delete the product
  await prisma.product.delete({
    where: { id: parseInt(params.id) }
  })
  
  return NextResponse.json({});

}