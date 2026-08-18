import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  TEST_CREDENTIALS,
  type SessionUser,
  type TestSessionPayload,
} from "./constants";

export function createTestSession(user: SessionUser) {
  const payload: TestSessionPayload = { type: "test", user };
  return JSON.stringify(payload);
}

export function parseTestSession(value: string): SessionUser | null {
  try {
    const payload = JSON.parse(value) as TestSessionPayload;
    if (payload?.type === "test" && payload.user?.email) {
      return payload.user;
    }
  } catch {
    return null;
  }
  return null;
}

export async function getTestSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;
  if (!raw) return null;
  return parseTestSession(raw);
}

export function validateTestLogin(email: string, password: string) {
  return (
    email.toLowerCase() === TEST_CREDENTIALS.email.toLowerCase() &&
    password === TEST_CREDENTIALS.password
  );
}

export function createDemoUser(email?: string, workspace?: string): SessionUser {
  const resolvedEmail = email?.toLowerCase() || TEST_CREDENTIALS.email;
  const name = resolvedEmail.split("@")[0] ?? "demo";

  return {
    id: `test_${name}`,
    email: resolvedEmail,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    workspace: workspace || "Demo Workspace",
  };
}
