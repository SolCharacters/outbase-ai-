"use client";

import { useState, useEffect } from "react";
import { Button, Textarea, Input, Label, Select, Card, StatusBadge, Badge } from "@/components/ui";
import { ExecutionGraph } from "@/components/execution-graph";
import { agents, sampleExecution, sampleProviders, type Execution, type ExecutionStep } from "@/lib/data";
import { formatCurrency, formatLatency, formatPercent } from "@/lib/utils";
import { ChevronDown, ChevronUp, Loader2, Play, Search, Wallet, CheckCircle } from "lucide-react";

const suggestions = [
  "Analyze the developer health of Base's major AI projects",
  "Research Linear and analyze their developer ecosystem",
  "Analyze github.com/vercel/next.js",
  "Research emerging Base AI projects",
  "Compare OpenAI, Anthropic and Google agent frameworks",
];

const initialSteps: ExecutionStep[] = sampleExecution.steps.map((s) => ({ ...s, status: "pending" as const }));
const githubProviders = sampleProviders["github_repository_analysis"];
const selectedProvider = githubProviders[0];

export default function PlaygroundPage() {
  const [task, setTask] = useState("");
  const [advanced, setAdvanced] = useState(false);
  const [phase, setPhase] = useState<"input" | "searching" | "discover" | "pay" | "executing" | "done">("input");
  const [execution, setExecution] = useState<Execution | null>(null);

  useEffect(() => {
    if (phase !== "executing" || !execution) return;
    let index = 0;
    const timer = setInterval(() => {
      setExecution((prev) => {
        if (!prev) return prev;
        const next = [...prev.steps];
        if (index > 0) next[index - 1].status = "completed";
        if (index < next.length) next[index].status = "running";
        if (index >= next.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            setExecution((p) =>
              p
                ? { ...p, steps: p.steps.map((s) => ({ ...s, status: "completed" })), status: "completed" }
                : p
            );
            setPhase("done");
          }, 1000);
        }
        return { ...prev, steps: next };
      });
      index++;
    }, 1200);
    return () => clearInterval(timer);
  }, [phase]);

  const run = () => {
    setExecution({
      ...sampleExecution,
      task: task || sampleExecution.task,
      steps: initialSteps,
      status: "running",
    });
    setPhase("searching");
    setTimeout(() => setPhase("discover"), 1200);
    setTimeout(() => setPhase("pay"), 2600);
    setTimeout(() => setPhase("executing"), 3600);
  };

  return (
    <div className="mx-auto max-w-[1000px] space-y-8">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">INTERACTIVE RUNTIME</Badge>
          <span className="mono-label text-smoke">AGENT-TO-AGENT HIRING SIMULATOR</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">
          WHAT SHOULD YOUR<br /><span className="text-ember">AGENT DO?</span>
        </h1>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <Textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Describe a goal requiring specialized external agents (e.g. Research AI startups and verify repo velocity)..."
          className="min-h-[140px] resize-none"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setTask(s)}
              className="mono-label rounded-[800px] bg-pumice px-4 py-2 text-[11px] text-obsidian hover:bg-pumice/80 border border-ash/30 transition cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-6 border-t border-ash/40 pt-6">
          <button
            onClick={() => setAdvanced(!advanced)}
            className="flex items-center gap-2 mono-label text-smoke hover:text-obsidian cursor-pointer"
          >
            Advanced runtime parameters {advanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {advanced && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Maximum Budget (USDC)</Label>
                <Input type="number" defaultValue="1" className="mt-1" />
              </div>
              <div>
                <Label>Max Parallel Specialists</Label>
                <Input type="number" defaultValue="6" className="mt-1" />
              </div>
              <div>
                <Label>Execution Pipeline</Label>
                <Select options={[{ value: "router", label: "Outbase Router (Auto-discovery)" }, { value: "direct", label: "Direct Specific Agent" }]} className="mt-1" />
              </div>
              <div>
                <Label>Preferred Registry</Label>
                <Select options={[{ value: "all", label: "All Verified Providers" }, ...agents.map((a) => ({ value: a.id, label: a.name }))]} className="mt-1" />
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-ash/40 pt-6">
          <span className="mono-label text-smoke">{task.length} characters</span>
          <Button onClick={run} disabled={phase !== "input"} className="gap-2">
            {phase !== "input" ? <Loader2 className="animate-spin" size={16} /> : <Play size={16} />}
            {phase !== "input" ? "Executing Network..." : "Hire Agents on Base"}
          </Button>
        </div>
      </div>

      {execution && phase !== "input" && (
        <div className="space-y-6">
          {phase === "searching" && (
            <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
              <div className="flex items-center gap-3">
                <Loader2 className="animate-spin text-ember" size={24} />
                <span className="font-display text-[24px] uppercase text-obsidian">Querying Agent Registry...</span>
              </div>
              <p className="mt-2 text-[15px] font-medium text-obsidian/75">Discovering providers with capability: <strong className="font-mono text-ember">github_repository_analysis</strong></p>
            </div>
          )}

          {phase === "discover" && (
            <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
              <div className="flex items-center justify-between pb-4 border-b border-ash/40">
                <span className="mono-label text-ember font-bold">3 ACTIVE PROVIDERS MATCHED</span>
                <Badge variant="sulfur">COMPARING RATES</Badge>
              </div>
              <div className="mt-6 space-y-3">
                {githubProviders.map((p) => (
                  <div key={p.id} className={`rounded-[24px] border p-5 transition ${p.id === selectedProvider.id ? "border-ember bg-pumice" : "border-ash/40 bg-limestone"}`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[17px] font-bold uppercase text-obsidian">{p.name}</span>
                          {p.id === selectedProvider.id && <Badge variant="ember">SELECTED</Badge>}
                        </div>
                        <div className="mt-1 font-mono text-[12px] text-smoke">{formatPercent(p.reliability)} reliability · {formatLatency(p.avgLatencyMs)} · {p.jobsCompleted.toLocaleString()} runs</div>
                      </div>
                      <div className="font-mono text-[20px] font-bold text-ember">{formatCurrency(p.price)} USDC</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[14px] font-medium text-obsidian/75">
                Automatically selected <strong className="text-obsidian">{selectedProvider.name}</strong> for highest deterministic score and lowest latency.
              </p>
            </div>
          )}

          {phase === "pay" && (
            <div className="rounded-[40px] bg-obsidian p-8 text-chalk">
              <div className="flex items-center gap-3">
                <Wallet size={24} className="text-ember" />
                <span className="font-display text-[26px] uppercase text-chalk">Base L2 Micro-Payment Settled</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-chalk/80">
                Authorized and settled <strong className="text-ember">{formatCurrency(selectedProvider.price)} USDC</strong> via x402 protocol for {selectedProvider.name}.
              </p>
            </div>
          )}

          {(phase === "executing" || phase === "done") && (
            <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40 space-y-8">
              <div className="flex items-start justify-between">
                <div>
                  <span className="mono-label text-smoke">EXECUTION OBJECTIVE</span>
                  <p className="mt-2 text-[22px] font-bold uppercase text-obsidian">{execution.task}</p>
                </div>
                <StatusBadge status={execution.status} />
              </div>

              <div className="grid gap-4 rounded-[32px] bg-pumice/70 p-6 sm:grid-cols-3 border border-ash/30">
                <div>
                  <div className="mono-label text-smoke">Total Cost</div>
                  <div className="mt-1 font-mono text-[28px] font-bold text-ember">{phase === "done" ? formatCurrency(execution.totalCost) + " USDC" : "—"}</div>
                </div>
                <div>
                  <div className="mono-label text-smoke">Duration</div>
                  <div className="mt-1 font-mono text-[28px] font-bold text-obsidian">{phase === "done" ? formatLatency(execution.durationMs) : "—"}</div>
                </div>
                <div>
                  <div className="mono-label text-smoke">Specialists Hired</div>
                  <div className="mt-1 font-mono text-[28px] font-bold text-obsidian">{phase === "done" ? execution.agentsUsed : "—"}</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {execution.steps.map((step) => (
                  <div key={step.id} className="rounded-[24px] bg-limestone p-5 border border-ash/40">
                    <div className="flex items-center justify-between">
                      <span className="mono-label text-obsidian font-bold capitalize">{step.agentId}</span>
                      <StatusBadge status={step.status} />
                    </div>
                    <p className="mt-2 text-[14px] font-medium text-obsidian/75">{step.task}</p>
                    <div className="mt-4 font-mono text-[12px] font-bold text-ember">
                      {step.cost ? `${formatCurrency(step.cost)} ${step.currency}` : "No cost"}
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-smoke">{formatLatency(step.latencyMs)} · {step.settlement || "—"}</div>
                  </div>
                ))}
              </div>

              <ExecutionGraph execution={execution} className="mt-8" />

              {phase === "done" && (
                <div className="rounded-[32px] bg-sulfur p-6 text-obsidian">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-obsidian" />
                    <span className="mono-label font-bold text-obsidian">SYNTHESIZED AGENT OUTPUT</span>
                  </div>
                  <p className="mt-3 text-[16px] font-medium leading-relaxed text-obsidian">
                    Identified top AI infrastructure startups — Anthropic, Vercel, Replicate, Railway, and Supabase. Each has raised significant capital and maintains active GitHub repositories. Anthropic and Vercel lead in developer commit velocity.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
