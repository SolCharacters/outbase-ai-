import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/auth/config";
import { SESSION_COOKIE, TEST_CREDENTIALS } from "@/lib/auth/constants";
import { createDemoUser, createTestSession } from "@/lib/auth/session";
import { createClient } from "@/lib/supabase/server";

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
  const body = await request.json();
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    return NextResponse.json({ ok: true });
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
