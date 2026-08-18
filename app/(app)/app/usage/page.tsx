import { Card, Badge } from "@/components/ui";
import { UsageChart } from "@/components/usage-chart";
import { formatCurrency } from "@/lib/utils";

export default function UsagePage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-8">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">TELEMETRY</Badge>
          <span className="mono-label text-smoke">AGENT CONSUMPTION ANALYTICS</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">
          USAGE & <span className="text-ember">METRICS</span>.
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { label: "Total Dispatched Runs", value: "1,284" },
          { label: "Settled Volume", value: `${formatCurrency(8.42)} USDC` },
          { label: "Avg Cost / Task", value: `${formatCurrency(0.0065)} USDC` },
          { label: "P95 Latency", value: "1.8s" },
          { label: "Execution Success", value: "99.4%" },
        ].map((m) => (
          <div key={m.label} className="rounded-[40px] bg-limestone p-6 border border-ash/40">
            <div className="mono-label text-smoke">{m.label}</div>
            <div className="mt-3 font-mono text-[22px] font-bold text-obsidian">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <span className="mono-label text-smoke font-bold">DISPATCH VOLUME OVER TIME</span>
        <div className="mt-6">
          <UsageChart />
        </div>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <span className="mono-label text-smoke font-bold">SPECIALIST NODE BREAKDOWN</span>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-[14px] font-medium">
            <thead>
              <tr className="border-b border-ash/40 text-left">
                <th className="pb-3 mono-label text-smoke">Specialist Agent</th>
                <th className="pb-3 mono-label text-smoke">Executed Calls</th>
                <th className="pb-3 mono-label text-smoke">Settled Volume</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Web Research Agent", calls: 832, spend: 3.72 },
                { name: "GitHub Intelligence", calls: 418, spend: 4.82 },
                { name: "Company Intelligence", calls: 292, spend: 3.41 },
                { name: "Data Extraction Specialist", calls: 187, spend: 1.13 },
                { name: "Verification Node", calls: 510, spend: 1.02 },
              ].map((u) => (
                <tr key={u.name} className="border-b border-ash/30">
                  <td className="py-4 font-bold uppercase text-obsidian">{u.name}</td>
                  <td className="py-4 font-mono text-obsidian">{u.calls.toLocaleString()}</td>
                  <td className="py-4 font-mono font-bold text-ember">{formatCurrency(u.spend)} USDC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
