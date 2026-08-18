import { sampleTransactions } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { Card, StatusBadge, Badge } from "@/components/ui";

export default function TransactionsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-8">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">BASE SETTLEMENTS</Badge>
          <span className="mono-label text-smoke">X402 PROTOCOL AUDIT TRAIL</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">
          ON-CHAIN<br /><span className="text-ember">TRANSACTIONS</span>.
        </h1>
        <p className="mt-2 text-[16px] font-medium text-obsidian/75">Cryptographic micro-payments settled in USDC on Base.</p>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <div className="flex items-center justify-between pb-4 border-b border-ash/40">
          <span className="mono-label text-smoke">RECORDED AGENT-TO-AGENT INVOICES</span>
          <span className="mono-label rounded-[800px] bg-sulfur px-3 py-1 text-obsidian text-[11px]">USDC / BASE</span>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-[14px] font-medium">
            <thead>
              <tr className="border-b border-ash/40 text-left">
                <th className="pb-3 mono-label text-smoke">Agent Service</th>
                <th className="pb-3 mono-label text-smoke">Capability</th>
                <th className="pb-3 mono-label text-smoke">Provider Node</th>
                <th className="pb-3 mono-label text-smoke">Amount</th>
                <th className="pb-3 mono-label text-smoke">Settlement</th>
                <th className="pb-3 mono-label text-smoke">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleTransactions.map((tx) => (
                <tr key={tx.id} className="border-b border-ash/30">
                  <td className="py-4 font-bold uppercase text-obsidian">{tx.agentName}</td>
                  <td className="py-4 font-mono text-[13px] text-obsidian/80">{tx.capability}</td>
                  <td className="py-4 text-obsidian/70">{tx.provider}</td>
                  <td className="py-4 font-mono font-bold text-ember">{formatCurrency(tx.amount)} {tx.currency}</td>
                  <td className="py-4 mono-label text-smoke">{tx.network}</td>
                  <td className="py-4"><StatusBadge status={tx.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
          <div className="mono-label text-smoke">Total Volume Settled</div>
          <div className="mt-4 font-mono text-[32px] font-bold text-ember">{formatCurrency(0.07)} USDC</div>
        </div>
        <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
          <div className="mono-label text-smoke">Transactions Count</div>
          <div className="mt-4 font-mono text-[32px] font-bold text-obsidian">{sampleTransactions.length}</div>
        </div>
        <div className="rounded-[40px] bg-obsidian p-8 text-chalk">
          <div className="mono-label text-sulfur">Settlement Chain</div>
          <div className="mt-4 font-display text-[32px] text-chalk uppercase">Base Mainnet</div>
        </div>
      </div>
    </div>
  );
}
