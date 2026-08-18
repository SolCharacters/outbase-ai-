"use client";

import Link from "next/link";
import { sampleExecution } from "@/lib/data";
import { StatusBadge } from "@/components/ui";
import { formatCurrency, formatLatency } from "@/lib/utils";

const executions = [sampleExecution];

export function ExecutionList() {
  return (
    <div className="overflow-hidden rounded-[40px] bg-limestone border border-ash/40 p-6 md:p-8">
      <div className="overflow-x-auto">
        <table className="w-full text-[14px] font-medium">
          <thead>
            <tr className="border-b border-ash/40 text-left">
              <th className="px-4 py-4 mono-label text-smoke">Execution ID</th>
              <th className="px-4 py-4 mono-label text-smoke">Task Objective</th>
              <th className="px-4 py-4 mono-label text-smoke">Status</th>
              <th className="px-4 py-4 mono-label text-smoke">Specialists</th>
              <th className="px-4 py-4 mono-label text-smoke">Cost</th>
              <th className="px-4 py-4 mono-label text-smoke">Settlement</th>
              <th className="px-4 py-4 mono-label text-smoke">Latency</th>
            </tr>
          </thead>
          <tbody>
            {executions.map((e) => (
              <tr key={e.id} className="border-b border-ash/30 hover:bg-pumice/40 transition">
                <td className="px-4 py-4 font-mono text-[13px]">
                  <Link href={`/app/executions/${e.id}`} className="font-bold text-ember hover:underline">{e.id}</Link>
                </td>
                <td className="px-4 py-4 max-w-xs truncate font-bold uppercase text-obsidian">{e.task}</td>
                <td className="px-4 py-4"><StatusBadge status={e.status} /></td>
                <td className="px-4 py-4 font-mono text-obsidian">{e.agentsUsed}</td>
                <td className="px-4 py-4 font-mono font-bold text-ember">{formatCurrency(e.totalCost)} {e.currency}</td>
                <td className="px-4 py-4 mono-label text-smoke">{e.network}</td>
                <td className="px-4 py-4 font-mono text-obsidian">{formatLatency(e.durationMs)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
