"use client";

import { cn } from "@/lib/utils";
import type { Execution } from "@/lib/data";

const statusColors: Record<string, { fill: string; text: string }> = {
  completed: { fill: "#f5f28e", text: "#070607" },
  running: { fill: "#fc5000", text: "#ffffff" },
  pending: { fill: "#e2e2df", text: "#070607" },
  failed: { fill: "#fc5000", text: "#ffffff" },
};

export function ExecutionGraph({
  execution,
  className,
}: {
  execution: Execution;
  className?: string;
}) {
  const steps = execution.steps;
  const width = 600;
  const height = 220;
  const x = (i: number) => 60 + i * 160;
  const y = (i: number) => (i % 2 === 0 ? 50 : 150);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={cn("w-full", className)}>
      {steps.map((step, i) => {
        const next = steps[i + 1];
        if (!next) return null;
        return (
          <line
            key={`l-${i}`}
            x1={x(i)}
            y1={y(i) + 22}
            x2={x(i + 1)}
            y2={y(i + 1) - 22}
            stroke="#070607"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            className="animate-draw-line"
          />
        );
      })}
      {steps.map((step, i) => {
        const style = statusColors[step.status] || { fill: "#f7f6f2", text: "#070607" };
        return (
          <g key={step.id}>
            <rect
              x={x(i) - 70}
              y={y(i) - 22}
              width={140}
              height={44}
              rx={22}
              fill={style.fill}
              stroke="#070607"
              strokeWidth={1.5}
            />
            <text
              x={x(i)}
              y={y(i) + 5}
              textAnchor="middle"
              className="text-[11px] font-mono font-bold uppercase"
              fill={style.text}
            >
              {step.agentId}
            </text>
            <text
              x={x(i)}
              y={y(i) + 34}
              textAnchor="middle"
              className="text-[10px] font-mono font-medium"
              fill="#7a7975"
            >
              ${step.cost.toFixed(3)} USDC
            </text>
          </g>
        );
      })}
    </svg>
  );
}
