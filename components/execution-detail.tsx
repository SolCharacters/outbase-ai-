"use client";

import { useState } from "react";
import { sampleExecution } from "@/lib/data";
import { Card, StatusBadge, Badge } from "@/components/ui";
import { ExecutionGraph } from "@/components/execution-graph";
import { formatCurrency, formatLatency } from "@/lib/utils";
import { ChevronDown, ChevronUp, Wallet, CheckCircle } from "lucide-react";

export function ExecutionDetail({ id }: { id: string }) {
  const [rawOpen, setRawOpen] = useState(false);
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({});
  const e = sampleExecution;

  const toggleStep = (stepId: string) => setOpenSteps((o) => ({ ...o, [stepId]: !o[stepId] }));

  return (
    <div className="mx-auto max-w-[1000px] space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2">
            <Badge variant="sulfur">EXECUTION RUN</Badge>
            <span className="font-mono text-[13px] text-smoke">{id}</span>
          </div>
          <h1 className="mt-4 font-display text-[40px] md:text-[56px] leading-[0.95] text-obsidian uppercase">{e.task}</h1>
        </div>
        <StatusBadge status={e.status} />
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Total Cost", value: `${formatCurrency(e.totalCost)} ${e.currency}` },
          { label: "Settlement", value: `${e.network} L2` },
          { label: "Specialists", value: String(e.agentsUsed) },
          { label: "Dispatched Tasks", value: String(e.requests) },
        ].map((s) => (
          <div key={s.label} className="rounded-[40px] bg-limestone p-6 border border-ash/40">
            <div className="mono-label text-smoke">{s.label}</div>
            <div className="mt-2 font-mono text-[24px] font-bold text-obsidian">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
        <div className="flex items-center gap-3 pb-4 border-b border-ash/40">
          <Wallet size={20} className="text-ember" />
          <span className="mono-label text-smoke font-bold">BASE L2 SETTLEMENT BREAKDOWN</span>
        </div>
        <p className="mt-4 text-[16px] font-medium text-obsidian/80">
          {formatCurrency(e.totalCost)} USDC settled on Base across {e.agentsUsed} specialized agent nodes.
        </p>
        <div className="mt-4 space-y-2">
          {e.steps.map((step) => (
            step.cost > 0 && (
              <div key={step.id} className="flex items-center justify-between border-b border-ash/30 py-3 font-mono text-[14px]">
                <span className="uppercase font-bold text-obsidian">{step.agentId}</span>
                <span className="text-ember font-bold">{formatCurrency(step.cost)} {step.currency} · {step.settlement}</span>
              </div>
            )
          ))}
        </div>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
        <span className="mono-label text-smoke mb-4 block">DEPENDENCY EXECUTION GRAPH</span>
        <ExecutionGraph execution={e} className="mt-4" />
      </div>

      <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
        <span className="mono-label text-smoke mb-6 block">EXECUTION TIMELINE</span>
        <div className="space-y-4 border-l-2 border-ash/50 pl-6">
          {[
            { t: "00:00", e: "Main planner decomposes task requirements" },
            { t: "00:01", e: "Outbase queries registry for matching providers" },
            { t: "00:02", e: "USDC micro-settlements pre-authorized on Base" },
            { t: "00:03", e: "Web Research specialist executes query" },
            { t: "00:05", e: "Company Intelligence specialist processes entity profiles" },
            { t: "00:07", e: "GitHub Intelligence specialist analyzes commit graphs" },
            { t: "00:08", e: "Verification node validates deterministic output" },
            { t: "00:09", e: "Aggregated results returned to caller" },
          ].map((item) => (
            <div key={item.e} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-ember" />
              <span className="font-mono text-[12px] text-smoke">{item.t}</span>
              <p className="mt-0.5 text-[15px] font-bold uppercase text-obsidian">{item.e}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
        <span className="mono-label text-smoke mb-6 block">AGENT OUTPUTS & REPUTATION IMPACT</span>
        <div className="space-y-3">
          {e.steps.filter((s) => s.agentId !== "planner").map((step) => (
            <div key={step.id} className="rounded-[24px] bg-pumice/50 border border-ash/40 overflow-hidden">
              <button onClick={() => toggleStep(step.id)} className="flex w-full items-center justify-between p-5 text-left cursor-pointer">
                <span className="mono-label font-bold text-obsidian uppercase">{step.agentId} Node</span>
                {openSteps[step.id] ? <ChevronUp size={18} className="text-obsidian" /> : <ChevronDown size={18} className="text-obsidian" />}
              </button>
              {openSteps[step.id] && (
                <div className="border-t border-ash/40 p-5 space-y-3 text-[14px] font-medium text-obsidian/80">
                  <p className="leading-relaxed">{step.output || "No output captured."}</p>
                  <div className="font-mono text-[12px] text-smoke pt-2 border-t border-ash/30">
                    {formatCurrency(step.cost)} {step.currency} on {step.network} · {formatLatency(step.latencyMs)} latency · {step.settlement}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[40px] bg-obsidian p-8 text-chalk">
        <button onClick={() => setRawOpen(!rawOpen)} className="flex w-full items-center justify-between cursor-pointer">
          <span className="mono-label text-sulfur">RAW PROTOCOL JSON</span>
          {rawOpen ? <ChevronUp size={18} className="text-chalk" /> : <ChevronDown size={18} className="text-chalk" />}
        </button>
        {rawOpen && (
          <pre className="mt-6 overflow-x-auto rounded-[24px] bg-obsidian/80 p-6 text-[12px] font-mono text-chalk/90 border border-chalk/10">{JSON.stringify(e, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}
