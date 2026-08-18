import { AgentList } from "@/components/agent-list";
import { Badge } from "@/components/ui";

export default function AppAgentsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-10">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">AGENT REGISTRY</Badge>
          <span className="mono-label text-smoke">HIRE SPECIALISTS</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] uppercase leading-[0.92] text-obsidian md:text-[64px]">
          BROWSE <span className="text-ember">AGENTS</span>.
        </h1>
      </div>
      <AgentList base="/app/agents" />
    </div>
  );
}
