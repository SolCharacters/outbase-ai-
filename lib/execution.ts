import { agents, type Execution, type ExecutionStep } from "./data";

const planner = {
  id: "planner",
  name: "Outbase Router",
  startingPrice: 0,
  currency: "USDC",
  network: "base",
  avgLatencyMs: 900,
};

function detectAgentIds(task: string): string[] {
  const t = task.toLowerCase();
  const matches: string[] = [];

  if (t.includes("github") || t.includes("repo") || t.includes("commit") || t.includes("contributor")) {
    matches.push("github-intelligence");
  }
  if (t.includes("company") || t.includes("startup") || t.includes("funding") || t.includes("valuation")) {
    matches.push("company-intelligence");
  }
  if (t.includes("crypto") || t.includes("token") || t.includes("wallet") || t.includes("on-chain") || t.includes("protocol")) {
    matches.push("crypto-intelligence");
  }
  if (t.includes("code") || t.includes("audit") || t.includes("vulnerability")) {
    matches.push("code-analysis");
  }
  if (t.includes("extract") || t.includes("scrape") || t.includes("parse")) {
    matches.push("data-extraction");
  }
  if (t.includes("web") || t.includes("research") || t.includes("search") || t.includes("find ")) {
    matches.push("web-research");
  }

  if (matches.length === 0) {
    matches.push("deep-research");
  }

  return matches.slice(0, 2);
}

export function generateExecution(task: string, baseId?: string): Execution {
  const agentIds = baseId ? [baseId] : detectAgentIds(task);
  const selectedAgents = agentIds
    .map((id) => agents.find((a) => a.id === id))
    .filter((a): a is typeof agents[0] => Boolean(a));

  const verification = agents.find((a) => a.id === "verification")!;

  const steps: ExecutionStep[] = [
    {
      id: "step_0",
      agentId: planner.id,
      task: `Plan execution: ${task}`,
      status: "completed",
      cost: planner.startingPrice,
      currency: planner.currency,
      network: planner.network,
      latencyMs: planner.avgLatencyMs,
      output: "Execution plan ready",
    },
    ...selectedAgents.map((agent, i) => ({
      id: `step_${i + 1}`,
      agentId: agent.id,
      task: `Run ${agent.name} on: ${task}`,
      status: "completed" as const,
      cost: agent.startingPrice,
      currency: agent.currency,
      network: agent.network,
      latencyMs: agent.avgLatencyMs,
      output: `${agent.name} returned structured results.`,
      settlement: "settled" as const,
    })),
    {
      id: `step_${selectedAgents.length + 1}`,
      agentId: verification.id,
      task: `Verify and synthesize: ${task}`,
      status: "completed" as const,
      cost: verification.startingPrice,
      currency: verification.currency,
      network: verification.network,
      latencyMs: verification.avgLatencyMs,
      output: "Findings verified with 96% confidence.",
      settlement: "settled" as const,
    },
  ];

  const totalCost = steps.reduce((sum, s) => sum + s.cost, 0);
  const durationMs = steps.reduce((sum, s) => sum + s.latencyMs, 0);

  return {
    id: `exe_${Math.floor(Math.random() * 1_000_000)}`,
    task,
    status: "completed",
    steps,
    totalCost,
    currency: "USDC",
    network: "base",
    durationMs,
    agentsUsed: steps.filter((s) => s.agentId !== "planner").length,
    requests: steps.length * 2 - 1,
    createdAt: new Date().toISOString(),
  };
}
