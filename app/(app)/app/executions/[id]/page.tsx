import { ExecutionDetail } from "@/components/execution-detail";

export default async function ExecutionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ExecutionDetail id={id} />;
}
