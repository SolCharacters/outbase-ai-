"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GitBranch, Globe } from "lucide-react";
import { Button, Input, Label } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";

const supabaseReady =
  typeof window !== "undefined" &&
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/app";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unable to sign in.");
        return;
      }

      router.push(next);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleOAuth(provider: "github" | "google") {
    if (!supabaseReady) {
      setError("Social sign-in is not available right now. Please use your email and password.");
      return;
    }

    const supabase = createClient();
    const origin = window.location.origin;
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
  }

  return (
    <div className="w-full max-w-[440px] rounded-[40px] border border-ash/40 bg-limestone p-10">
      <div className="text-center">
        <h1 className="font-display text-[36px] uppercase tracking-tight text-obsidian">SIGN IN</h1>
        <p className="mt-2 text-[15px] font-medium text-obsidian/75">Access your agent workspace.</p>
      </div>

      <div className="mt-8 space-y-3">
        <Button type="button" variant="secondary" className="w-full" onClick={() => handleOAuth("github")}>
          <GitBranch size={18} /> Continue with GitHub
        </Button>
        <Button type="button" variant="secondary" className="w-full" onClick={() => handleOAuth("google")}>
          <Globe size={18} /> Continue with Google
        </Button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-ash/40" />
        <span className="mono-label text-smoke">or</span>
        <div className="h-px flex-1 bg-ash/40" />
      </div>

      <form className="mt-0 space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="field-input mt-1.5 rounded-[800px] border border-ash/60 bg-pumice/50 px-4 text-[15px]"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="field-input mt-1.5 rounded-[800px] border border-ash/60 bg-pumice/50 px-4 text-[15px]"
          />
        </div>

        {error && <p className="text-[14px] font-medium text-ember">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Continue to Dashboard"}
        </Button>
      </form>

      <p className="mt-6 text-center text-[15px] font-medium text-obsidian/70">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-bold text-ember hover:underline">
          Create account
        </Link>
      </p>
    </div>
  );
}
