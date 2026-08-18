import { AgentDetail } from "@/components/agent-detail";

export default async function AppAgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-[1000px]">
      <AgentDetail slug={slug} mode="app" />
    </div>
  );
}
