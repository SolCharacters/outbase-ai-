"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GitBranch, Globe } from "lucide-react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { Button, Input, Label } from "@/components/ui";
import { auth } from "@/lib/firebase/client";

export function SignupForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workspace, setWorkspace] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth) return;
    let active = true;

    getRedirectResult(auth)
      .then(async (result) => {
        if (!active || !result) return;
        const idToken = await getIdToken(result.user);
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Unable to create account.");
          return;
        }
        sessionStorage.removeItem("auth_next");
        router.push(data.redirect ?? "/onboarding");
        router.refresh();
      })
      .catch((err: any) => {
        if (active) setError(err?.message ?? "Social sign-up failed.");
      });

    return () => {
      active = false;
    };
  }, [router]);

  async function finishSignup(idToken: string) {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Unable to create account.");
      return null;
    }
    return data.redirect ?? "/onboarding";
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
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credential.user, {
        displayName: workspace.trim() || email.split("@")[0] || "Workspace",
      });
      const idToken = await getIdToken(credential.user, true);
      const redirect = await finishSignup(idToken);
      if (redirect) {
        router.push(redirect);
        router.refresh();
      }
    } catch (err: any) {
      setError(err?.message ?? "Unable to create account.");
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
      const idToken = await getIdToken(result.user);
      const redirect = await finishSignup(idToken);
      if (redirect) {
        router.push(redirect);
        router.refresh();
      }
    } catch (err: any) {
      if (err?.code === "auth/popup-blocked" || err?.code === "auth/popup-closed-by-user") {
        sessionStorage.setItem("auth_next", "/onboarding");
        await signInWithRedirect(auth, provider);
      } else {
        setError(err?.message ?? "Social sign-up failed.");
      }
    }
  }

  return (
    <div className="w-full max-w-[440px] rounded-[40px] border border-ash/40 bg-limestone p-10">
      <div className="text-center">
        <span className="mono-label rounded-[800px] bg-sulfur px-3 py-1 text-[11px] text-obsidian">FREE CREDITS INCLUDED</span>
        <h1 className="mt-4 font-display text-[36px] uppercase tracking-tight text-obsidian">GET STARTED</h1>
        <p className="mt-2 text-[15px] font-medium text-obsidian/75">Receive $1.00 in free Base execution credits.</p>
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
          <Label htmlFor="workspace">Workspace name</Label>
          <Input
            id="workspace"
            type="text"
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
            placeholder="Acme Autonomous Labs"
            className="field-input mt-1.5 rounded-[800px] border border-ash/60 bg-pumice/50 px-4 text-[15px]"
          />
        </div>
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
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className="field-input mt-1.5 rounded-[800px] border border-ash/60 bg-pumice/50 px-4 text-[15px]"
          />
        </div>

        {error && <p className="text-[14px] font-medium text-ember">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating workspace..." : "Create Workspace"}
        </Button>
      </form>

      <p className="mt-6 text-center text-[15px] font-medium text-obsidian/70">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-ember hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
