import { type NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/auth/config";
import { SESSION_COOKIE } from "@/lib/auth/constants";
import { parseTestSession } from "@/lib/auth/session";
import { updateSession } from "@/lib/supabase/middleware";

function redirectToLogin(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = pathname.startsWith("/app");
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isOnboarding = pathname.startsWith("/onboarding");

  if (isSupabaseConfigured()) {
    const { response, user } = await updateSession(request);

    if (isProtected && !user) {
      return redirectToLogin(request);
    }

    if (isAuthPage && user) {
      return NextResponse.redirect(new URL("/app", request.url));
    }

    if (isOnboarding && !user) {
      return redirectToLogin(request);
    }

    return response;
  }

  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const user = session ? parseTestSession(session) : null;

  if (isProtected && !user) {
    return redirectToLogin(request);
  }

  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  if (isOnboarding && !user) {
    return redirectToLogin(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/login", "/signup", "/onboarding"],
};
