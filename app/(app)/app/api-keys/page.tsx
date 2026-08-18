"use client";

import { useState } from "react";
import { Card, Button, Input, Label, Select, Badge } from "@/components/ui";
import { apiKeys } from "@/lib/data";
import { Copy, Check, Trash2, Plus } from "lucide-react";

export default function ApiKeysPage() {
  const [keys, setKeys] = useState(apiKeys);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (id: string) => {
    navigator.clipboard.writeText("outbase_live_••••••••Q7Px");
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const create = () => {
    setKeys((k) => [
      ...k,
      {
        id: `key_${Math.random().toString(36).slice(2, 7)}`,
        name: "Production Agent Key",
        environment: "production",
        secret: "outbase_live_••••••••" + Math.random().toString(36).slice(2, 6).toUpperCase(),
        lastUsed: "Just now",
        createdAt: "Just now",
      },
    ]);
  };

  const revoke = (id: string) => setKeys((k) => k.filter((x) => x.id !== id));

  return (
    <div className="mx-auto max-w-[1000px] space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2">
            <Badge variant="sulfur">CREDENTIALS</Badge>
            <span className="mono-label text-smoke">AGENT AUTHENTICATION KEYS</span>
          </div>
          <h1 className="mt-4 font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">
            API <span className="text-ember">KEYS</span>.
          </h1>
        </div>
        <Button onClick={create} className="gap-2">
          <Plus size={16} /> Create API Key
        </Button>
      </div>

      <div className="space-y-4">
        {keys.map((k) => (
          <div key={k.id} className="rounded-[40px] bg-limestone p-8 border border-ash/40">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[18px] font-bold uppercase text-obsidian">{k.name}</span>
                  <Badge variant={k.environment === "production" ? "sulfur" : "default"}>{k.environment}</Badge>
                </div>
                <div className="mt-2 font-mono text-[14px] text-ember font-bold">{k.secret}</div>
                <div className="mt-2 mono-label text-smoke">Created {k.createdAt} · Last active {k.lastUsed}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => copy(k.id)}
                  className="inline-flex h-10 items-center gap-2 rounded-[800px] border-[1.5px] border-obsidian bg-transparent px-4 text-[12px] font-mono uppercase text-obsidian hover:bg-pumice transition cursor-pointer"
                >
                  {copied === k.id ? <Check size={14} className="text-ember" /> : <Copy size={14} />}
                  {copied === k.id ? "Copied" : "Copy"}
                </button>
                <button
                  onClick={() => revoke(k.id)}
                  className="inline-flex h-10 items-center gap-2 rounded-[800px] border-[1.5px] border-ash/80 bg-transparent px-4 text-[12px] font-mono uppercase text-ember hover:border-ember transition cursor-pointer"
                >
                  <Trash2 size={14} /> Revoke
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <span className="mono-label text-smoke font-bold">KEY PARAMETERS & SPENDING BOUNDS</span>
        <form className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <Label>Identifier Name</Label>
            <Input placeholder="Autonomous Worker 01" className="mt-1" />
          </div>
          <div>
            <Label>Environment</Label>
            <Select options={[{ value: "production", label: "Production (Base Mainnet)" }, { value: "development", label: "Testnet (Base Sepolia)" }]} className="mt-1" />
          </div>
          <div>
            <Label>Daily Spending Limit (USDC)</Label>
            <Input placeholder="50.00" className="mt-1" />
          </div>
        </form>
      </div>
    </div>
  );
}
