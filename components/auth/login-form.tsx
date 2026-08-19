"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GitBranch, Globe } from "lucide-react";
import {
  signInWithEmailAndPassword,
  getIdToken,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  sendEmailVerification,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { Button, Input, Label } from "@/components/ui";
import { auth } from "@/lib/firebase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/app";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth) return;
    let active = true;

    getRedirectResult(auth)
      .then(async (result) => {
        if (!active || !result) return;
        if (!result.user.emailVerified) {
          await sendEmailVerification(result.user, {
            url: `${window.location.origin}/login`,
          });
          router.push(`/verify-email?email=${encodeURIComponent(result.user.email ?? "")}`);
          return;
        }
        const idToken = await getIdToken(result.user);
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Unable to sign in.");
          return;
        }
        const redirectTarget = sessionStorage.getItem("auth_next") ?? next;
        sessionStorage.removeItem("auth_next");
        router.push(redirectTarget);
        router.refresh();
      })
      .catch((err: any) => {
        if (active) setError(err?.message ?? "Social sign-in failed.");
      });

    return () => {
      active = false;
    };
  }, [router, next]);

  async function finishLogin(idToken: string) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Unable to sign in.");
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!auth) {
      setError("Authentication is not configured.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      if (!credential.user.emailVerified) {
        await sendEmailVerification(credential.user, {
          url: `${window.location.origin}/login`,
        });
        router.push(`/verify-email?email=${encodeURIComponent(credential.user.email ?? email)}`);
        return;
      }
      const idToken = await getIdToken(credential.user);
      if (await finishLogin(idToken)) {
        router.push(next);
        router.refresh();
      }
    } catch (err: any) {
      setError(err?.message ?? "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  async function handleOAuth(providerName: "github" | "google") {
    if (!auth) {
      setError("Authentication is not configured.");
      return;
    }
    setError(null);
    const provider = providerName === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      if (!result.user.emailVerified) {
        await sendEmailVerification(result.user, {
          url: `${window.location.origin}/login`,
        });
        router.push(`/verify-email?email=${encodeURIComponent(result.user.email ?? "")}`);
        return;
      }
      const idToken = await getIdToken(result.user);
      if (await finishLogin(idToken)) {
        router.push(next);
        router.refresh();
      }
    } catch (err: any) {
      if (err?.code === "auth/popup-blocked" || err?.code === "auth/popup-closed-by-user") {
        sessionStorage.setItem("auth_next", next);
        await signInWithRedirect(auth, provider);
      } else {
        setError(err?.message ?? "Social sign-in failed.");
      }
    }
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
