import { NextResponse } from "next/server";
import { generateExecution } from "@/lib/execution";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const task = typeof body.task === "string" ? body.task : "Research the requested topic";
  const execution = generateExecution(task);

  return NextResponse.json({
    ...execution,
    result: {
      summary: `Completed: ${task}`,
      data: null,
    },
  });
}
