import { NextResponse } from "next/server";
import { sampleExecution } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    id: `exe_${Math.floor(Math.random() * 1_000_000)}`,
    status: "completed",
    task: body.task || sampleExecution.task,
    result: {
      summary: "Research completed for AI infrastructure startups.",
      data: {},
    },
    execution: {
      agents_used: 4,
      duration_ms: 8300,
      cost: 0.07,
      currency: "USDC",
      network: "base",
    },
    steps: sampleExecution.steps,
  });
}
