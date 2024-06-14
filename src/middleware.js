import { NextResponse } from "next/server";
import { VerifyToken } from "./utils/jwtHelper";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    try {
      let token = req.cookies.get("token");
      const reqHeaders = new Headers(req.headers);
      let payload = await VerifyToken(token["value"]);
      reqHeaders.set("id", payload["id"]);
      reqHeaders.set("firstName", payload["firstName"]);
      reqHeaders.set("email", payload["email"]);
      reqHeaders.set("type", payload["type"]);
      if (payload["email"] === "abdulhay.me@gmail.com") {
        return NextResponse.next({ request: { headers: reqHeaders } });
      } else {
        return NextResponse.redirect(new URL("/user/login", req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/user/login", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/api")) {
    try {
      let token = req.cookies.get("token");
      const reqHeaders = new Headers(req.headers);
      let payload = await VerifyToken(token["value"]);
      reqHeaders.set("id", payload["id"]);
      reqHeaders.set("firstName", payload["firstName"]);
      reqHeaders.set("email", payload["email"]);
      reqHeaders.set("type", payload["type"]);
      return NextResponse.next({ request: { headers: reqHeaders } });
    } catch (error) {
      const reqHeaders = new Headers(req.headers);
      reqHeaders.set("id", "0");
      reqHeaders.set("firstName", "0");
      reqHeaders.set("email", "0");
      reqHeaders.set("type", "0");
      return NextResponse.next({ request: { headers: reqHeaders } });
    }
  }
}
