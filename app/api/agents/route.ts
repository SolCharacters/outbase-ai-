import { NextResponse } from "next/server";
import { agents } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const capability = searchParams.get("capability");
  const filtered = capability
    ? agents.filter((a) => a.capabilities.includes(capability))
    : agents;
  return NextResponse.json({
    agents: filtered.map((a) => ({
      id: a.id,
      name: a.name,
      slug: a.slug,
      capabilities: a.capabilities,
      price: a.startingPrice,
      currency: a.currency,
      network: a.network,
      reliability: a.reliability,
      latency_ms: a.avgLatencyMs,
      provider: a.provider,
    })),
  });
}
