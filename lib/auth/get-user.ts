import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "./config";
import { getTestSessionUser } from "./session";
import type { SessionUser } from "./constants";

export async function getUser(): Promise<SessionUser | null> {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    return {
      id: user.id,
      email: user.email ?? "",
      name:
        (user.user_metadata?.full_name as string | undefined) ??
        (user.user_metadata?.name as string | undefined) ??
        user.email?.split("@")[0] ??
        "User",
      workspace: (user.user_metadata?.workspace as string | undefined) ?? "Workspace",
    };
  }

  return getTestSessionUser();
}
