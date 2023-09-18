import { NextRequest } from "next/server";
// export the middleware object, which is the default object that is imported from the module 
export { default } from "next-auth/middleware";

// Matcher pattern for a restricted route
// By default these routes will be accessibile when signed in. Othewrwise you will be redirected to the login page
export const config = {
  //  *: zero or more
  //  +: one or more
  //  ?: zeri or one
  matcher: ['/admin/:id*']
}