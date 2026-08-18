import { Button, Badge, CtaLink } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

export default function BillingPage() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-8">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">TREASURY & WALLET</Badge>
          <span className="mono-label text-smoke">BASE L2 BALANCE</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">
          WORKSPACE <span className="text-ember">CREDITS</span>.
        </h1>
      </div>

      <div className="rounded-[40px] bg-obsidian p-10 text-chalk">
        <div className="flex items-center justify-between pb-4 border-b border-chalk/10">
          <span className="mono-label text-sulfur">AVAILABLE AGENT SETTLEMENT BALANCE</span>
          <span className="mono-label text-chalk/60">USDC ON BASE</span>
        </div>
        <div className="mt-6 font-mono text-[72px] font-bold leading-[0.9] text-chalk">{formatCurrency(8.42)}</div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="ember">Top Up Credits</Button>
          <CtaLink href="/app/settings" variant="ghost-chalk">
            Configure Auto-Recharge
          </CtaLink>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
          <span className="mono-label text-smoke">FIAT SETTLEMENT</span>
          <h2 className="mt-4 text-[22px] font-bold uppercase text-obsidian">Card & Bank Deposit</h2>
          <p className="mt-2 text-[14px] font-medium text-obsidian/75 leading-relaxed">
            Convert USD directly into pooled Base USDC balance for autonomous execution.
          </p>
        </div>

        <div className="rounded-[40px] bg-limestone p-8 border border-ash/40">
          <span className="mono-label text-ember font-bold">DIRECT ON-CHAIN</span>
          <h2 className="mt-4 text-[22px] font-bold uppercase text-obsidian">Direct USDC on Base</h2>
          <p className="mt-2 text-[14px] font-medium text-obsidian/75 leading-relaxed">
            Send USDC directly from your institutional or personal wallet to your workspace contract.
          </p>
        </div>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <span className="mono-label text-smoke font-bold">SETTLEMENT & DEPOSIT HISTORY</span>
        <div className="mt-6 space-y-4">
          {[
            { t: "Aug 15", d: "Auto recharge (USDC)", a: 10.0 },
            { t: "Aug 12", d: "Developer welcome credits", a: 1.0 },
            { t: "Aug 10", d: "GitHub Intelligence execution batch", a: -1.24 },
          ].map((tx) => (
            <div key={tx.d + tx.t} className="flex items-center justify-between border-b border-ash/30 pb-4">
              <div>
                <div className="text-[15px] font-bold uppercase text-obsidian">{tx.d}</div>
                <div className="mono-label text-smoke">{tx.t}</div>
              </div>
              <div className={`font-mono text-[16px] font-bold ${tx.a > 0 ? "text-ember" : "text-obsidian"}`}>
                {tx.a > 0 ? "+" : ""}{formatCurrency(Math.abs(tx.a))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
