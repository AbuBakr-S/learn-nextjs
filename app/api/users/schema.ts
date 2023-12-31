import { z } from "zod"

const geoSchema = z.object({
  lat: z.string(),
  lng: z.string()
})

const companySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string()
})

const addressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: geoSchema
})

export const userSchema = z.object({
  // id: z.number(),
  name: z.string().min(3),
  // username: z.string(),
  email: z.string().email()
  // address: addressSchema,
  // phone: z.string(),
  // website: z.string(),
  // company: companySchema
})