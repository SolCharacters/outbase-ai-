import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const next = searchParams.get("next") ?? "/app";
  return NextResponse.redirect(`${origin}${next}`);
}
