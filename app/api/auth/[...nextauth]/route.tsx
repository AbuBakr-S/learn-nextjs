import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
})

// Export this function with two different names
//  Any GET or POST request sent to this endpoint will be handles inside this handler function
export { handler as GET, handler as POST }