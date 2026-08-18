import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/auth/config";
import { SESSION_COOKIE } from "@/lib/auth/constants";
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
  const workspace = String(body.workspace ?? "").trim();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          workspace: workspace || undefined,
        },
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, redirect: "/onboarding" });
  }

  const response = NextResponse.json({ ok: true, mode: "test", redirect: "/onboarding" });
  response.cookies.set(
    SESSION_COOKIE,
    createTestSession(createDemoUser(email, workspace || "My Workspace")),
    sessionCookieOptions()
  );
  return response;
}
