import { NextResponse } from "next/server";
import { agents } from "@/lib/data";
import { generateExecution } from "@/lib/execution";

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
  const task = typeof body.task === "string" ? body.task : `Run ${agent.name}`;
  const execution = generateExecution(task, agent.id);

  return NextResponse.json({
    ...execution,
    result: {
      summary: `${agent.name} completed: ${task}`,
      data: null,
    },
  });
}
