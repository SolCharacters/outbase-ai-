"use client";

import { cn } from "@/lib/utils";

const nodes = [
  { id: "router", label: "Outbase Router", x: 300, y: 40, kind: "router" as const },
  { id: "web", label: "Web Research", price: "$0.02", x: 110, y: 150, kind: "agent" as const, tile: "#fce0ee" },
  { id: "company", label: "Company Intelligence", price: "$0.03", x: 300, y: 150, kind: "agent" as const, tile: "#ffe9cf" },
  { id: "github", label: "GitHub Intelligence", price: "$0.04", x: 490, y: 150, kind: "agent" as const, tile: "#daf7ee" },
  { id: "verify", label: "Verification", price: "$0.01", x: 300, y: 260, kind: "agent" as const, tile: "#cef1e1" },
  { id: "result", label: "Final result", x: 300, y: 370, kind: "result" as const },
];

const edges = [
  ["router", "web"],
  ["router", "company"],
  ["router", "github"],
  ["web", "verify"],
  ["company", "verify"],
  ["github", "verify"],
  ["verify", "result"],
];

export function HeroDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl border border-ink/8 bg-bone p-8", className)}>
      <div className="mb-6 flex items-center justify-between">
        <span className="lab-label text-[11px] text-smoke">Example execution</span>
        <span className="lab-label text-[10px] text-smoke">DEMO</span>
      </div>
      <svg viewBox="0 0 600 420" className="w-full">
        {edges.map(([from, to], i) => {
          const a = nodes.find((n) => n.id === from)!;
          const b = nodes.find((n) => n.id === to)!;
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y + (from === "router" ? 22 : 0)}
              x2={b.x}
              y2={b.y - 22}
              stroke="#c094e4"
              strokeWidth={1.5}
              strokeOpacity={from === "router" ? 0.5 : 0.7}
              strokeDasharray={from === "router" ? "3 3" : "0"}
            />
          );
        })}
        {nodes.map((n) => {
          if (n.kind === "router") {
            return (
              <g key={n.id}>
                <rect
                  x={n.x - 95}
                  y={n.y - 22}
                  width={190}
                  height={44}
                  rx={9999}
                  fill="#222222"
                />
                <text
                  x={n.x}
                  y={n.y + 5}
                  textAnchor="middle"
                  className="text-[13px] font-w500"
                  fill="#ffffff"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {n.label}
                </text>
              </g>
            );
          }
          if (n.kind === "result") {
            return (
              <g key={n.id}>
                <rect
                  x={n.x - 80}
                  y={n.y - 20}
                  width={160}
                  height={40}
                  rx={12}
                  fill="#ffffff"
                  stroke="#c094e4"
                  strokeWidth={1.5}
                />
                <text
                  x={n.x}
                  y={n.y + 5}
                  textAnchor="middle"
                  className="text-[13px] font-w500"
                  fill="#222222"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {n.label}
                </text>
              </g>
            );
          }
          return (
            <g key={n.id}>
              <rect
                x={n.x - 90}
                y={n.y - 22}
                width={180}
                height={44}
                rx={12}
                fill={n.tile}
                stroke="none"
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                className="text-[12px] font-w500"
                fill="#222222"
                style={{ letterSpacing: "-0.025em" }}
              >
                {n.label}
              </text>
              {n.price && (
                <text
                  x={n.x}
                  y={n.y + 36}
                  textAnchor="middle"
                  className="lab-label text-[9px]"
                  fill="#7a7876"
                >
                  {n.price}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-ink/8 pt-6">
        <div>
          <div className="lab-label text-[10px] text-smoke">Total cost</div>
          <div className="mt-1 font-mono text-[18px] font-w500 text-ink">$0.09</div>
        </div>
        <div>
          <div className="lab-label text-[10px] text-smoke">Agents used</div>
          <div className="mt-1 font-mono text-[18px] font-w500 text-ink">4</div>
        </div>
        <div>
          <div className="lab-label text-[10px] text-smoke">Time</div>
          <div className="mt-1 font-mono text-[18px] font-w500 text-ink">8.4 sec</div>
        </div>
      </div>
    </div>
  );
}
