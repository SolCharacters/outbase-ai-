import type { Agent } from "@/lib/data";

export function generateAgentMeta(agent: Agent) {
  return {
    title: `${agent.name} — Outbase`,
    description: agent.description,
  };
}
