import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const sessionCookie = getSessionCookie(request); // cookie ache kina check kore, DB call kore na (Edge-safe)

  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Kon kon route protected thakbe
export const config = {
  matcher: [
    
   
    "/booked-cars/:path*",
    "/add-car/:path*",
    "/profile/:path*",
  ],
};