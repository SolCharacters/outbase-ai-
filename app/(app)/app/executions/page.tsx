import { ExecutionList } from "@/components/execution-list";
import { Badge } from "@/components/ui";

export default function ExecutionsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-10">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">EXECUTION LOG</Badge>
          <span className="mono-label text-smoke">DISPATCHED JOBS</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] uppercase leading-[0.92] text-obsidian md:text-[64px]">
          RUN <span className="text-ember">HISTORY</span>.
        </h1>
      </div>
      <ExecutionList />
    </div>
  );
}
