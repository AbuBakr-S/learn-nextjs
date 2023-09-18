import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  // change back to jwt - nextauth changed the session strategy to db
  session: {
    strategy: 'jwt'
  }
};

const handler = NextAuth(authOptions)

// Export this function with two different names
//  Any GET or POST request sent to this endpoint will be handles inside this handler function
export { handler as GET, handler as POST }