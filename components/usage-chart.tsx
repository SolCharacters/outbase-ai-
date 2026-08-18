"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Aug 1", requests: 38 },
  { day: "Aug 2", requests: 52 },
  { day: "Aug 3", requests: 64 },
  { day: "Aug 4", requests: 89 },
  { day: "Aug 5", requests: 75 },
  { day: "Aug 6", requests: 110 },
  { day: "Aug 7", requests: 145 },
  { day: "Aug 8", requests: 128 },
  { day: "Aug 9", requests: 160 },
  { day: "Aug 10", requests: 195 },
  { day: "Aug 11", requests: 230 },
  { day: "Aug 12", requests: 215 },
  { day: "Aug 13", requests: 280 },
  { day: "Aug 14", requests: 312 },
];

export function UsageChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey="day" tick={{ fontSize: 11, fontFamily: "var(--font-mono)", fill: "#7a7975" }} stroke="#cfcec9" />
          <YAxis tick={{ fontSize: 11, fontFamily: "var(--font-mono)", fill: "#7a7975" }} stroke="#cfcec9" />
          <Tooltip
            contentStyle={{
              background: "#070607",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "#ffffff",
              padding: "10px 14px",
            }}
          />
          <Line
            type="monotone"
            dataKey="requests"
            stroke="#fc5000"
            strokeWidth={3.5}
            dot={{ fill: "#fc5000", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#f5f28e" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
