import { NextResponse } from "next/server";
import { isFirebaseConfigured } from "@/lib/auth/config";
import { SESSION_COOKIE, TEST_CREDENTIALS } from "@/lib/auth/constants";
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
  const { idToken, email, password } = body as {
    idToken?: string;
    email?: string;
    password?: string;
  };

  if (isFirebaseConfigured()) {
    if (!idToken) {
      return NextResponse.json({ error: "Missing Firebase ID token." }, { status: 400 });
    }

    try {
      const expiresIn = 60 * 60 * 24 * 7 * 1000;
      const sessionCookie = await getFirebaseAdminAuth().createSessionCookie(idToken, { expiresIn });
      const response = NextResponse.json({ ok: true });
      response.cookies.set(SESSION_COOKIE, sessionCookie, sessionCookieOptions());
      return response;
    } catch {
      return NextResponse.json({ error: "Invalid or expired token." }, { status: 401 });
    }
  }

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const testEmail = process.env.OUTBASE_TEST_EMAIL ?? TEST_CREDENTIALS.email;
  const testPassword = process.env.OUTBASE_TEST_PASSWORD ?? TEST_CREDENTIALS.password;

  if (email.toLowerCase() !== testEmail.toLowerCase() || password !== testPassword) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true, mode: "test" });
  response.cookies.set(SESSION_COOKIE, createTestSession(createDemoUser(email)), sessionCookieOptions());
  return response;
}
