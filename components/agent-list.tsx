"use client";

import { useState } from "react";
import Link from "next/link";
import { agents, type AgentCategory } from "@/lib/data";
import { Input, Badge } from "@/components/ui";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { Search, Globe, GitBranch, Building2, Code2, Database, Coins, FileCheck, Layers } from "lucide-react";

const iconMap: Record<string, typeof Search> = {
  "Web Research": Globe,
  "Deep Research": Search,
  "Company Intelligence": Building2,
  "GitHub Intelligence": GitBranch,
  "Crypto Intelligence": Coins,
  "Code Analysis": Code2,
  "Data Extraction": Database,
  Verification: FileCheck,
};

const categories: (AgentCategory | "All")[] = ["All", "Research", "Development", "Data", "Blockchain", "Verification"];

export function AgentList({ base = "/app/agents" }: { base?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AgentCategory | "All">("All");

  const filtered = agents.filter((a) => {
    const q = query.toLowerCase();
    const matchesQuery = a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.capabilities.some(c => c.includes(q));
    const matchesCat = category === "All" || a.category === category;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-smoke" size={18} />
          <Input aria-label="Search agents by name or capability" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or capability…" className="pl-12" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`mono-label rounded-[800px] px-4 py-2 text-[11px] font-medium border transition cursor-pointer ${
                category === c ? "bg-ember text-obsidian border-ember font-bold" : "bg-limestone text-obsidian border-ash/50 hover:border-obsidian"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((agent) => {
          const Icon = iconMap[agent.name] || Layers;
          return (
            <Link
              key={agent.id}
              href={`${base}/${agent.slug}`}
              className="group rounded-[40px] bg-limestone p-8 transition hover:bg-limestone/80 border border-ash/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-ember/15 text-ember">
                    <Icon size={26} />
                  </div>
                  <Badge variant="sulfur">VERIFIED</Badge>
                </div>
                <h3 className="mt-6 text-[22px] font-bold uppercase text-obsidian group-hover:text-ember transition">
                  {agent.name}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-relaxed text-obsidian/70 line-clamp-2">
                  {agent.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {agent.capabilities.slice(0, 2).map((c) => (
                    <span key={c} className="mono-label rounded-[800px] bg-pumice px-3 py-1 text-[10px] text-obsidian">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ash/40 pt-4">
                <div>
                  <div className="mono-label text-smoke">PRICE</div>
                  <div className="font-mono text-[16px] font-bold text-ember">{formatCurrency(agent.startingPrice)} {agent.currency}</div>
                  <div className="font-mono text-[11px] text-smoke">on {agent.network}</div>
                </div>
                <div>
                  <div className="mono-label text-smoke">RELIABILITY</div>
                  <div className="font-mono text-[16px] font-bold text-obsidian">{formatPercent(agent.reliability)}</div>
                  <div className="font-mono text-[11px] text-smoke">{agent.avgLatencyMs}ms latency</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
