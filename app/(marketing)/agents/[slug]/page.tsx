import { AgentDetail } from "@/components/agent-detail";

export default async function MarketingAgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-20 md:py-28">
      <AgentDetail slug={slug} mode="marketing" />
    </div>
  );
}
