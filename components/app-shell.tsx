"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Play,
  Bot,
  Activity,
  Key,
  BarChart3,
  CreditCard,
  Code2,
  Settings,
  FileText,
  ArrowLeftRight,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SessionUser } from "@/lib/auth/constants";
import { SignOutButton } from "@/components/auth/sign-out-button";

const nav = [
  { href: "/app", label: "Overview", icon: LayoutDashboard },
  { href: "/app/playground", label: "Playground", icon: Play },
  { href: "/app/agents", label: "Agents", icon: Bot },
  { href: "/app/executions", label: "Executions", icon: Activity },
  { href: "/app/transactions", label: "Transactions", icon: ArrowLeftRight },
  { href: "/app/api-keys", label: "API Keys", icon: Key },
  { href: "/app/usage", label: "Usage", icon: BarChart3 },
  { href: "/app/billing", label: "Billing", icon: CreditCard },
  { href: "/app/developers", label: "Developers", icon: Code2 },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

function SidebarContent({
  user,
  onNavigate,
}: {
  user: SessionUser;
  onNavigate?: () => void;
}) {
  const initial = user.name?.charAt(0)?.toUpperCase() || user.email.charAt(0).toUpperCase();

  return (
    <>
      <div className="flex h-20 items-center px-8">
        <Link href="/app" className="font-display text-[26px] uppercase tracking-wide text-obsidian" onClick={onNavigate}>
          OUTBASE
        </Link>
      </div>
      <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-4">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="flex items-center gap-3.5 rounded-[800px] px-4 py-2.5 text-[14px] font-medium text-obsidian/80 transition hover:bg-pumice hover:text-ember"
          >
            <item.icon size={18} className="text-obsidian/70" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-ash/40 p-4">
        <Link
          href="/docs"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-[800px] px-4 py-2 text-[14px] font-medium text-obsidian/75 transition hover:bg-pumice hover:text-ember"
        >
          <FileText size={16} /> Docs
        </Link>
        <div className="mt-4 flex items-center gap-3 rounded-[24px] border border-ash/30 bg-pumice p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[800px] bg-ember text-[13px] font-bold text-chalk">
            {initial}
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <p className="truncate text-[14px] font-bold text-obsidian">{user.name}</p>
            <p className="truncate font-mono text-[11px] text-smoke">{user.workspace}</p>
          </div>
        </div>
        <div className="mt-3">
          <SignOutButton />
        </div>
      </div>
    </>
  );
}

export function AppShell({ user, children }: { user: SessionUser; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-full bg-pumice">
      <div className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-ash/40 bg-limestone px-4 md:hidden">
        <Link href="/app" className="font-display text-[22px] uppercase tracking-wide text-obsidian">
          OUTBASE
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-obsidian"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-obsidian/40 md:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-ash/40 bg-limestone transition-transform duration-300 md:sticky md:top-0 md:z-auto md:h-screen md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent user={user} onNavigate={() => setOpen(false)} />
      </aside>

      <main className="flex-1 overflow-x-hidden p-6 pt-24 md:p-10 md:pt-10">{children}</main>
    </div>
  );
}
