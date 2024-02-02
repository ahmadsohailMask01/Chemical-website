import { NextResponse } from "next/server";
import { BASE_API_URL } from "../utils/constants";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed!");
  // return NextResponse.redirect(new URL("/home", request.url));
  let verify = request.cookies.get("loggedin");
  let url = request.url;

  console.log(url);

  let condition1 = !verify && url.includes("/admin_dashboard");
  let condition2 = !verify && url.includes("/addProduct");
  let condition3 = !verify && url.includes("/editProduct/");
  let condition4 = verify && url.includes("/admin_login");

  if (condition1 || condition2 || condition3) {
    return NextResponse.redirect(`${BASE_API_URL}/admin_login`);
  } else if (condition4) {
    return NextResponse.redirect(`${BASE_API_URL}/admin_dashboard`);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/admin_dashboard",
    "/addProduct",
    "/editProduct/:path*",
    "/admin_login",
  ],
};
