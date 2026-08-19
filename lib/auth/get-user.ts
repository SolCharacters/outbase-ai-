import { cookies } from "next/headers";
import { isFirebaseConfigured } from "./config";
import { getFirebaseAdminAuth } from "@/lib/firebase/server";
import { getTestSessionUser } from "./session";
import { SESSION_COOKIE } from "./constants";
import type { SessionUser } from "./constants";

export async function getUser(): Promise<SessionUser | null> {
  if (isFirebaseConfigured()) {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return null;

    try {
      const decoded = await getFirebaseAdminAuth().verifySessionCookie(token, true);
      const email = decoded.email ?? "";
      const workspace = (decoded.name as string | undefined) || "Workspace";
      const name = email.split("@")[0] || "User";

      return {
        id: decoded.uid,
        email,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        workspace,
      };
    } catch {
      return null;
    }
  }

  return getTestSessionUser();
}
