"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

export function SignOutButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className={`flex w-full items-center gap-3 rounded-[800px] px-4 py-2 text-[14px] font-medium text-obsidian/75 transition hover:bg-pumice hover:text-ember ${className}`}
    >
      <LogOut size={16} />
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
