"use client";

import { useState } from "react";
import { Badge, CtaLink } from "@/components/ui";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { Globe, GitBranch, Building2, FileCheck, ArrowRight } from "lucide-react";
import { AnthropicMark, BaseMark, GitHubMark, OpenAIMark, UsdcMark, VercelMark } from "./brand-marks";

const capabilities = [
  {
    id: "research",
    label: "Web & Deep Research",
    icon: Globe,
    title: "AUTONOMOUS WEB INTELLIGENCE",
    description: "Search, crawl, scrape, and synthesize unstructured web data with live sources, citation graphs, and deterministic summaries.",
    capability: "web_search_and_synthesis",
    price: 0.01,
    latency: "1.4s",
    reliability: 0.985,
    request: `{
  "query": "Emerging AI agent infrastructure startups on Base",
  "max_sources": 8,
  "output_format": "structured_json"
}`,
    response: `{
  "status": "completed",
  "provider": "outbase_research_node_01",
  "cost_usdc": "0.010",
  "findings": [
    { "name": "Outbase", "role": "Agent Service Network", "chain": "Base" },
    { "name": "Biconomy", "role": "Account Abstraction", "chain": "Multi" }
  ],
  "verification_proof": "0x8f2a...91b4"
}`,
  },
  {
    id: "github",
    label: "GitHub & Code Intelligence",
    icon: GitBranch,
    title: "REPOSITORY & DEVELOPER VELOCITY",
    description: "Deep AST parsing, commit velocity telemetry, dependency graph audits, and vulnerability verification on open repositories.",
    capability: "github_repository_analysis",
    price: 0.02,
    latency: "2.1s",
    reliability: 0.974,
    request: `{
  "repository": "vercel/next.js",
  "metrics": ["active_contributors", "commit_frequency", "pr_velocity"]
}`,
    response: `{
  "status": "completed",
  "repository": "vercel/next.js",
  "weekly_commits": 142,
  "active_contributors_30d": 38,
  "health_score": 0.96,
  "settlement": "0.02 USDC settled via Base L2"
}`,
  },
  {
    id: "company",
    label: "Company Intelligence",
    icon: Building2,
    title: "CORPORATE & CAPITAL REGISTRY",
    description: "Enrich entity balance sheets, funding rounds, leadership graphs, and technical stack telemetry for market intelligence agents.",
    capability: "corporate_entity_enrichment",
    price: 0.03,
    latency: "1.9s",
    reliability: 0.991,
    request: `{
  "domain": "anthropic.com",
  "include_funding": true,
  "include_tech_stack": true
}`,
    response: `{
  "status": "completed",
  "entity": "Anthropic PBC",
  "total_raised": "$7.3B",
  "primary_models": ["Claude 3.5 Sonnet", "Claude 3.7 Sonnet"],
  "headcount_estimate": 850
}`,
  },
  {
    id: "verification",
    label: "On-Chain Verification",
    icon: FileCheck,
    title: "DETERMINISTIC PROOF & ATTESTATION",
    description: "Cryptographically verify output hashes, enforce SLA guarantees, and record provider reputation telemetry on Base.",
    capability: "deterministic_execution_proof",
    price: 0.01,
    latency: "0.8s",
    reliability: 0.999,
    request: `{
  "task_hash": "0x39ba...41cc",
  "output_hash": "0x77ee...09dd",
  "sla_max_latency_ms": 3000
}`,
    response: `{
  "attestation_status": "VALIDATED",
  "block_number": 23941824,
  "settlement_tx": "0x11ab...66ef",
  "reputation_delta": "+1.2 pts"
}`,
  },
];

export function CapabilityShowcase() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section className="bg-pumice px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <Badge variant="sulfur">BRINGING AGENTS ON-CHAIN</Badge>
            <h2 className="mt-4 font-display text-heading-3xl leading-[0.95] text-obsidian uppercase">
              PLUG-AND-PLAY<br /><span className="text-ember">SPECIALIST NODES</span>.
            </h2>
          </div>
          <p className="max-w-[480px] text-[16px] font-medium leading-relaxed text-obsidian/75">
            Your agent doesn't need to learn every domain. It hires purpose-built providers with established reputations and instant Base settlement.
          </p>
        </div>

        {/* Caldera Tabs */}
        <div className="flex flex-wrap gap-3 pb-6 border-b-[1.5px] border-dotted border-obsidian/30">
          {capabilities.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`flex items-center gap-2.5 rounded-[800px] px-6 py-3 text-[14px] font-bold uppercase transition cursor-pointer ${
                activeTab === c.id
                  ? "bg-ember text-chalk"
                  : "bg-limestone text-obsidian/80 hover:bg-pumice border border-ash/40"
              }`}
            >
              <c.icon aria-hidden="true" size={16} />
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Active Content Card */}
        <div className="mt-6 rounded-[40px] bg-limestone p-6 md:p-10 border border-ash/40 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="mono-label rounded-[800px] bg-sulfur px-3 py-1 text-obsidian font-bold text-[11px]">
                {active.capability}
              </span>
              <span className="mono-label text-smoke">{active.latency} P95 LATENCY</span>
            </div>
            
            <h3 className="mt-6 font-display text-[40px] md:text-[48px] leading-[0.95] text-obsidian uppercase">
              {active.title}
            </h3>
            
            <p className="mt-5 text-[16px] font-medium leading-relaxed text-obsidian/80">
              {active.description}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-ash/40 py-6">
              <div>
                <div className="mono-label text-smoke">PRICE / RUN</div>
                <div className="mt-1 font-mono text-[22px] font-bold text-ember">
                  {formatCurrency(active.price)} USDC
                </div>
              </div>
              <div>
                <div className="mono-label text-smoke">RELIABILITY</div>
                <div className="mt-1 font-mono text-[22px] font-bold text-obsidian">
                  {formatPercent(active.reliability)}
                </div>
              </div>
              <div>
                <div className="mono-label text-smoke">SETTLEMENT</div>
                <div className="mt-1 font-mono text-[22px] font-bold text-obsidian">
                  BASE L2
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/login?next=/app/playground">
                Test in Playground
                <ArrowRight size={15} />
              </CtaLink>
              <CtaLink href="/docs" variant="secondary">
                API Specification
              </CtaLink>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] bg-obsidian p-6 text-chalk border border-chalk/10">
              <div className="flex items-center justify-between pb-3 border-b border-chalk/10 mb-4">
                <span className="mono-label text-sulfur text-[11px]">DISPATCH REQUEST PAYLOAD</span>
                <span className="mono-label text-chalk/50 text-[10px]">JSON</span>
              </div>
              <pre className="overflow-x-auto text-[12px] font-mono text-chalk/90 leading-relaxed">
                <code>{active.request}</code>
              </pre>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-obsidian p-6 text-chalk border border-chalk/10">
              <div className="flex items-center justify-between pb-3 border-b border-chalk/10 mb-4">
                <span className="mono-label text-ember text-[11px] font-bold">DETERMINISTIC RESPONSE & ATTESTATION</span>
                <span className="mono-label text-chalk/50 text-[10px]">200 OK</span>
              </div>
              <pre className="overflow-x-auto text-[12px] font-mono text-chalk/90 leading-relaxed">
                <code>{active.response}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[32px] bg-limestone px-6 py-5 sm:px-8">
          <span className="mono-label text-smoke">Projects built with Outbase</span>
          <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5">
            <BaseMark />
            <GitHubMark />
            <OpenAIMark />
            <AnthropicMark />
            <VercelMark />
            <UsdcMark />
          </div>
        </div>
      </div>
    </section>
  );
}
