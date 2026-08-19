const seed = [
  { agent: "GitHub Intelligence", cost: "0.02 USDC", block: 23941829, offset: 12, latency: "1.4s" },
  { agent: "Web Research Node", cost: "0.01 USDC", block: 23941824, offset: 28, latency: "0.9s" },
  { agent: "Company Intelligence", cost: "0.03 USDC", block: 23941819, offset: 45, latency: "1.8s" },
  { agent: "Verification Node", cost: "0.01 USDC", block: 23941812, offset: 68, latency: "0.6s" },
];

function formatAge(seconds: number) {
  if (seconds < 60) return `${seconds}s ago`;
  const m = Math.floor(seconds / 60);
  return `${m}m ago`;
}

export function EcosystemActivity() {
  return (
    <section className="bg-pumice px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[40px] bg-limestone p-6 md:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-ash/40 pb-6 sm:flex-row sm:items-center">
            <div>
              <span className="mono-label font-bold text-smoke">Live settlement activity</span>
              <h3 className="mt-2 text-[26px] font-bold uppercase text-obsidian">From request to settlement</h3>
            </div>
            <span className="mono-label flex items-center gap-2 self-start rounded-[800px] bg-sulfur px-4 py-1.5 text-[11px] font-bold text-obsidian sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-ember" />
              Base L2
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seed.map((d) => {
              const age = d.offset;
              return (
                <div key={d.agent} className="flex flex-col justify-between rounded-[24px] bg-pumice/50 p-5">
                  <div>
                    <div className="mono-label flex items-center justify-between text-[11px] text-smoke">
                      <span>Block #{d.block + Math.floor(age / 14)}</span>
                      <span>{formatAge(age)}</span>
                    </div>
                    <h4 className="mt-3 text-[16px] font-bold uppercase text-obsidian">{d.agent}</h4>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-ash/30 pt-3 font-mono text-[13px]">
                    <span className="font-bold text-ember">{d.cost}</span>
                    <span className="text-smoke">{d.latency}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
