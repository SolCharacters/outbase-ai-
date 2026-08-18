import { NextResponse } from "next/server";
import { agents, sampleExecution } from "@/lib/data";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);
  if (!agent) {
    return NextResponse.json({ error: "Agent not found" }, { status: 404 });
  }
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    id: `exe_${Math.floor(Math.random() * 1_000_000)}`,
    status: "completed",
    agent: agent.id,
    task: body.task || `Run ${agent.name}`,
    result: {
      summary: `${agent.name} completed the requested work.`,
      data: {},
    },
    cost: agent.startingPrice,
    currency: agent.currency,
    network: agent.network,
    duration_ms: agent.avgLatencyMs,
    settlement: "settled",
  });
}
