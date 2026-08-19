"use client";

import { useState } from "react";
import { agents, sampleProviders } from "@/lib/data";
import { Button, Card, Badge, StatCard, CtaLink } from "@/components/ui";
import { formatCurrency, formatLatency, formatPercent } from "@/lib/utils";
import { Play, Terminal, Wallet, CheckCircle2 } from "lucide-react";

const tabs = ["Overview", "API", "Providers", "Performance"];

export function AgentDetail({ slug, mode = "app" }: { slug: string; mode?: "marketing" | "app" }) {
  const agent = agents.find((a) => a.slug === slug);
  const [active, setActive] = useState("Overview");

  if (!agent) return <div className="text-[14px] font-medium text-smoke">Agent not found in registry.</div>;

  const cta = mode === "marketing" ? "/signup" : "/app/playground";
  const providers = sampleProviders[agent.capabilities[0]] || [
    { id: "outbase-1", name: `${agent.name} — Primary Node`, price: agent.startingPrice, currency: agent.currency, network: agent.network, reliability: agent.reliability, avgLatencyMs: agent.avgLatencyMs, jobsCompleted: agent.runs },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">{agent.name}</h1>
            <Badge variant="sulfur">VERIFIED</Badge>
          </div>
          <p className="mt-2 mono-label text-smoke">Provider: {agent.provider} · Category: {agent.category} · {agent.currency} on {agent.network}</p>
          <p className="mt-4 max-w-[640px] text-[16px] font-medium leading-relaxed text-obsidian/80">{agent.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CtaLink href={cta}>
            <Play size={16} /> Hire Provider
          </CtaLink>
          <CtaLink href="/docs" variant="secondary" className="hover:bg-limestone">
            <Terminal size={16} /> API Spec
          </CtaLink>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Price per run", value: `${formatCurrency(agent.startingPrice)} ${agent.currency}`, sub: `Settled on ${agent.network}` },
          { label: "Reliability", value: formatPercent(agent.reliability), sub: "Verified outcome rate" },
          { label: "Avg Latency", value: formatLatency(agent.avgLatencyMs), sub: "P95 execution" },
          { label: "Completed Jobs", value: agent.runs.toLocaleString(), sub: "On-chain track record" },
        ].map((s) => (
          <div key={s.label} className="rounded-[40px] bg-limestone p-6 border border-ash/40">
            <div className="mono-label text-smoke">{s.label}</div>
            <div className="mt-2 font-mono text-[26px] font-bold text-obsidian">{s.value}</div>
            {s.sub && <div className="mt-1 font-mono text-[11px] text-smoke">{s.sub}</div>}
          </div>
        ))}
      </div>

      <div className="border-b-[1.5px] border-dotted border-obsidian/30">
        <div className="flex gap-8">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`border-b-4 pb-4 mono-label text-[12px] transition cursor-pointer ${active === t ? "border-ember text-obsidian font-bold" : "border-transparent text-smoke hover:text-obsidian"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {active === "Overview" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <span className="mono-label text-smoke">Agent Capabilities</span>
            <ul className="mt-6 space-y-3">
              {agent.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[15px] font-medium text-obsidian">
                  <CheckCircle2 size={18} className="text-ember" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <span className="mono-label text-smoke">Settlement & Pricing</span>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-ember/15 text-ember">
                <Wallet size={24} />
              </div>
              <div>
                <p className="text-[20px] font-bold uppercase text-obsidian">{formatCurrency(agent.startingPrice)} {agent.currency}</p>
                <p className="text-[14px] font-medium text-obsidian/70">Instant micro-settlement on {agent.network} L2</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {active === "API" && (
        <div className="space-y-4">
          <p className="text-[16px] font-medium text-obsidian">Direct HTTP execution endpoint.</p>
          <div className="overflow-hidden rounded-[40px] bg-obsidian p-8 text-chalk">
            <pre className="overflow-x-auto text-[13px] leading-relaxed font-mono text-chalk/90">
              <code>{`POST /v1/agents/${agent.slug}/run
  -H "Authorization: Bearer $OUTBASE_API_KEY"
  -H "Content-Type: application/json"
  -d '${JSON.stringify(Object.fromEntries(Object.entries(agent.inputSchema).map(([k, v]) => {
    const t = v.endsWith("?") ? v.slice(0, -1) : v;
    let val: unknown = "";
    if (t === "string") val = "...";
    else if (t === "number") val = 0;
    else if (t === "boolean") val = false;
    else if (t === "object") val = {};
    else if (t === "any[]") val = [];
    return [k, val];
  })))}'`}</code>
            </pre>
          </div>
        </div>
      )}

      {active === "Providers" && (
        <Card>
          <span className="mono-label text-smoke">Available Network Providers</span>
          <div className="mt-6 space-y-4">
            {providers.map((p) => (
              <div key={p.id} className="rounded-[28px] bg-pumice/60 p-5 border border-ash/40">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[17px] font-bold uppercase text-obsidian">{p.name}</div>
                    <div className="mt-1 font-mono text-[12px] text-smoke">
                      {formatPercent(p.reliability)} reliability · {formatLatency(p.avgLatencyMs)} latency · {p.jobsCompleted.toLocaleString()} jobs
                    </div>
                  </div>
                  <div className="font-mono text-[18px] font-bold text-ember">
                    {formatCurrency(p.price)} {p.currency}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {active === "Performance" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <span className="mono-label text-smoke">Network Uptime</span>
            <div className="mt-4 font-display text-[64px] leading-[0.95] text-obsidian">{formatPercent(agent.reliability)}</div>
            <p className="mt-2 text-[14px] text-smoke">Evaluated over the last 10,000 dispatched calls</p>
          </Card>
          <Card>
            <span className="mono-label text-smoke">Response Latency</span>
            <div className="mt-4 font-display text-[64px] leading-[0.95] text-obsidian">{formatLatency(agent.avgLatencyMs)}</div>
            <p className="mt-2 text-[14px] text-smoke">Median execution duration</p>
          </Card>
        </div>
      )}
    </div>
  );
}
