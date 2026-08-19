import { NextResponse } from "next/server";
import { isFirebaseConfigured } from "@/lib/auth/config";
import { SESSION_COOKIE } from "@/lib/auth/constants";
import { createDemoUser, createTestSession } from "@/lib/auth/session";
import { getFirebaseAdminAuth } from "@/lib/firebase/server";

function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { idToken, email, password, workspace } = body as {
    idToken?: string;
    email?: string;
    password?: string;
    workspace?: string;
  };

  if (isFirebaseConfigured()) {
    if (!idToken) {
      return NextResponse.json({ error: "Missing Firebase ID token." }, { status: 400 });
    }

    try {
      const adminAuth = getFirebaseAdminAuth();
      const decoded = await adminAuth.verifyIdToken(idToken, true);
      if (!decoded.email_verified) {
        return NextResponse.json({ error: "Email not verified", requiresVerification: true }, { status: 403 });
      }
      const expiresIn = 60 * 60 * 24 * 7 * 1000;
      const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
      const response = NextResponse.json({ ok: true, redirect: "/onboarding" });
      response.cookies.set(SESSION_COOKIE, sessionCookie, sessionCookieOptions());
      return response;
    } catch {
      return NextResponse.json({ error: "Invalid or expired token." }, { status: 401 });
    }
  }

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, mode: "test", redirect: "/onboarding" });
  response.cookies.set(
    SESSION_COOKIE,
    createTestSession(createDemoUser(email, workspace || "My Workspace")),
    sessionCookieOptions()
  );
  return response;
}
