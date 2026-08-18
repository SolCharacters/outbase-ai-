import Link from "next/link";
import { Card, Badge, StatusBadge, CtaLink } from "@/components/ui";
import { UsageChart } from "@/components/usage-chart";
import { sampleExecution, sampleTransactions } from "@/lib/data";
import { formatCurrency, formatLatency } from "@/lib/utils";
import { ArrowRight, Plus, Bot, Play, ArrowLeftRight } from "lucide-react";

export default function AppOverviewPage() {
  const totalSettled = sampleTransactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="mx-auto max-w-[1200px] space-y-10">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">DASHBOARD</Badge>
          <span className="mono-label text-smoke">BASE L2 AGENT RUNTIME</span>
        </div>
        <h1 className="mt-4 font-display text-[56px] md:text-[72px] leading-[0.92] text-obsidian uppercase">
          YOUR AGENTS<br /><span className="text-ember">ARE HIRING</span>.
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Completed Hires", value: "1,284" },
          { label: "Success Rate", value: "99.4%" },
          { label: "Active Specialists", value: "8 Agents" },
          { label: "Settled on Base", value: `${formatCurrency(8.42)} USDC` },
        ].map((s, i) => (
          <div key={s.label} className="rounded-[40px] bg-limestone p-8 border border-ash/40 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="mono-label text-smoke">0{i + 1}</span>
              <Badge variant="sulfur">{s.label}</Badge>
            </div>
            <div className="mt-6 font-mono text-[32px] font-bold text-obsidian">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between">
              <span className="mono-label text-smoke">RECENT DISPATCHED JOBS</span>
              <Link href="/app/executions" className="mono-label text-ember hover:underline">
                View all runs
              </Link>
            </div>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-[14px] font-medium">
                <thead>
                  <tr className="border-b border-ash/40 text-left">
                    <th className="pb-3 mono-label text-smoke">Task</th>
                    <th className="pb-3 mono-label text-smoke">Status</th>
                    <th className="pb-3 mono-label text-smoke">Agents</th>
                    <th className="pb-3 mono-label text-smoke">Settlement</th>
                    <th className="pb-3 mono-label text-smoke">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-ash/30">
                    <td className="py-4 font-bold uppercase text-obsidian max-w-[280px] truncate">{sampleExecution.task}</td>
                    <td className="py-4"><StatusBadge status={sampleExecution.status} /></td>
                    <td className="py-4 font-mono text-obsidian">{sampleExecution.agentsUsed}</td>
                    <td className="py-4 mono-label text-smoke">{sampleExecution.network}</td>
                    <td className="py-4 font-mono font-bold text-ember">{formatCurrency(sampleExecution.totalCost)} {sampleExecution.currency}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <Card>
          <span className="mono-label text-smoke">QUICK DISPATCH</span>
          <div className="mt-6 space-y-3">
            <CtaLink href="/app/playground" className="w-full justify-start">
              <Play size={18} /> Run in Playground
            </CtaLink>
            <CtaLink href="/app/agents" variant="secondary" className="w-full justify-start">
              <Bot size={18} /> Explore Registry
            </CtaLink>
            <CtaLink href="/app/transactions" variant="secondary" className="w-full justify-start">
              <ArrowLeftRight size={18} /> Transactions
            </CtaLink>
            <CtaLink href="/app/api-keys" variant="secondary" className="w-full justify-start">
              <Plus size={18} /> New API Key
            </CtaLink>
          </div>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between pb-4 border-b border-ash/40">
            <span className="mono-label text-smoke">BASE ON-CHAIN SETTLEMENTS</span>
            <span className="mono-label rounded-[800px] bg-sulfur px-3 py-0.5 text-obsidian text-[11px]">LIVE</span>
          </div>
          <div className="mt-5 space-y-4">
            {sampleTransactions.slice(0, 3).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between rounded-[20px] bg-pumice/50 p-4 border border-ash/30">
                <div>
                  <div className="text-[15px] font-bold uppercase text-obsidian">{tx.agentName}</div>
                  <div className="mono-label text-smoke">{tx.provider} · {tx.network}</div>
                </div>
                <div className="font-mono text-[16px] font-bold text-ember">{formatCurrency(tx.amount)} {tx.currency}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-ash/40">
            <span className="mono-label text-smoke">Total Volume Settled</span>
            <span className="font-mono text-[20px] font-bold text-obsidian">{formatCurrency(totalSettled)} USDC</span>
          </div>
        </Card>

        <Card>
          <span className="mono-label text-smoke">AGENT CONSUMPTION TELEMETRY</span>
          <div className="mt-6">
            <UsageChart />
          </div>
        </Card>
      </div>
    </div>
  );
}
