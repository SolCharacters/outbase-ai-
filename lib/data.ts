export type AgentCategory = "Research" | "Development" | "Data" | "Blockchain" | "Verification";

export interface Agent {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: AgentCategory;
  capabilities: string[];
  startingPrice: number;
  currency: string;
  network: string;
  reliability: number;
  avgLatencyMs: number;
  runs: number;
  inputSchema: Record<string, string>;
  outputSchema: Record<string, string>;
  provider: string;
}

export interface AgentProvider {
  id: string;
  name: string;
  price: number;
  currency: string;
  network: string;
  reliability: number;
  avgLatencyMs: number;
  jobsCompleted: number;
}

export interface ExecutionStep {
  id: string;
  agentId: string;
  providerId?: string;
  task: string;
  status: "pending" | "running" | "completed" | "failed";
  cost: number;
  currency: string;
  network: string;
  latencyMs: number;
  input?: string;
  output?: string;
  parentStepId?: string;
  settlement?: "pending" | "settled" | "failed";
}

export interface Execution {
  id: string;
  task: string;
  status: "pending" | "running" | "completed" | "failed";
  steps: ExecutionStep[];
  totalCost: number;
  currency: string;
  network: string;
  durationMs: number;
  agentsUsed: number;
  requests: number;
  createdAt: string;
}

export interface Transaction {
  id: string;
  agentId: string;
  agentName: string;
  capability: string;
  provider: string;
  amount: number;
  currency: string;
  network: string;
  status: "settled" | "pending" | "failed";
  createdAt: string;
}

export const agents: Agent[] = [
  {
    id: "web-research",
    name: "Web Research",
    slug: "web-research",
    description: "Search the web and extract relevant information from multiple sources. Can be hired by another agent that needs current, sourced web data.",
    category: "Research",
    capabilities: ["web_search", "news_search", "source_extraction"],
    startingPrice: 0.01,
    currency: "USDC",
    network: "base",
    reliability: 0.984,
    avgLatencyMs: 2100,
    runs: 124_982,
    inputSchema: { query: "string", sources: "number?" },
    outputSchema: { summary: "string", sources: "Source[]" },
    provider: "Outbase",
  },
  {
    id: "deep-research",
    name: "Deep Research",
    slug: "deep-research",
    description: "Multi-source, in-depth research across the web, reports, and databases for agents that need thorough investigation.",
    category: "Research",
    capabilities: ["multi_source_research", "report_synthesis"],
    startingPrice: 0.05,
    currency: "USDC",
    network: "base",
    reliability: 0.971,
    avgLatencyMs: 6800,
    runs: 41_203,
    inputSchema: { topic: "string", depth: "number?" },
    outputSchema: { report: "string", sources: "Source[]" },
    provider: "Outbase",
  },
  {
    id: "github-intelligence",
    name: "GitHub Intelligence",
    slug: "github-intelligence",
    description: "Repository, contributor, commit, technology and activity intelligence for agents evaluating engineering health.",
    category: "Development",
    capabilities: ["github_repository_analysis", "github_user_analysis", "ecosystem_scan"],
    startingPrice: 0.03,
    currency: "USDC",
    network: "base",
    reliability: 0.982,
    avgLatencyMs: 4200,
    runs: 84_291,
    inputSchema: { repository: "string", depth: "string?" },
    outputSchema: { summary: "string", topContributors: "Contributor[]", health: "HealthScore" },
    provider: "Outbase",
  },
  {
    id: "company-intelligence",
    name: "Company Intelligence",
    slug: "company-intelligence",
    description: "Company profiles, founders, products, funding, positioning and competitors for agents doing due diligence.",
    category: "Research",
    capabilities: ["company_profile", "founder_lookup", "funding_history", "competitor_map"],
    startingPrice: 0.03,
    currency: "USDC",
    network: "base",
    reliability: 0.976,
    avgLatencyMs: 3800,
    runs: 63_004,
    inputSchema: { company: "string" },
    outputSchema: { profile: "CompanyProfile", competitors: "Company[]" },
    provider: "Outbase",
  },
  {
    id: "crypto-intelligence",
    name: "Crypto Intelligence",
    slug: "crypto-intelligence",
    description: "Protocol, token, contract, wallet and ecosystem activity analysis for agents that need on-chain context.",
    category: "Blockchain",
    capabilities: ["token_analysis", "protocol_research", "wallet_insight"],
    startingPrice: 0.04,
    currency: "USDC",
    network: "base",
    reliability: 0.968,
    avgLatencyMs: 5100,
    runs: 28_942,
    inputSchema: { target: "string" },
    outputSchema: { summary: "string", metrics: "TokenMetrics" },
    provider: "Outbase",
  },
  {
    id: "code-analysis",
    name: "Code Analysis",
    slug: "code-analysis",
    description: "Analyze source code, repositories and architecture for quality, patterns and issues for agents reviewing codebases.",
    category: "Development",
    capabilities: ["code_review", "architecture_analysis", "dependency_audit"],
    startingPrice: 0.03,
    currency: "USDC",
    network: "base",
    reliability: 0.979,
    avgLatencyMs: 4500,
    runs: 34_109,
    inputSchema: { url: "string" },
    outputSchema: { summary: "string", issues: "Issue[]" },
    provider: "Outbase",
  },
  {
    id: "data-extraction",
    name: "Data Extraction",
    slug: "data-extraction",
    description: "Extract structured data from URLs, documents and unstructured content for agents that need clean data.",
    category: "Data",
    capabilities: ["structured_extraction", "document_parsing"],
    startingPrice: 0.02,
    currency: "USDC",
    network: "base",
    reliability: 0.986,
    avgLatencyMs: 2600,
    runs: 91_234,
    inputSchema: { url: "string", schema: "object" },
    outputSchema: { data: "object" },
    provider: "Outbase",
  },
  {
    id: "verification",
    name: "Verification",
    slug: "verification",
    description: "Validate outputs produced by other agents for accuracy and completeness. A quality control layer for agent work.",
    category: "Verification",
    capabilities: ["fact_check", "completeness_check", "consistency_check"],
    startingPrice: 0.01,
    currency: "USDC",
    network: "base",
    reliability: 0.993,
    avgLatencyMs: 1800,
    runs: 112_500,
    inputSchema: { claims: "any[]" },
    outputSchema: { verdict: "string", confidence: "number" },
    provider: "Outbase",
  },
];

export const sampleProviders: Record<string, AgentProvider[]> = {
  "github_repository_analysis": [
    { id: "gh-A", name: "GitHub Agent A", price: 0.02, currency: "USDC", network: "base", reliability: 0.97, avgLatencyMs: 3100, jobsCompleted: 12_841 },
    { id: "gh-B", name: "GitHub Agent B", price: 0.01, currency: "USDC", network: "base", reliability: 0.91, avgLatencyMs: 1900, jobsCompleted: 8_203 },
    { id: "gh-C", name: "GitHub Agent C", price: 0.04, currency: "USDC", network: "base", reliability: 0.99, avgLatencyMs: 4200, jobsCompleted: 24_119 },
  ],
  "web_search": [
    { id: "wr-A", name: "Web Research A", price: 0.01, currency: "USDC", network: "base", reliability: 0.98, avgLatencyMs: 2100, jobsCompleted: 98_241 },
    { id: "wr-B", name: "Web Research B", price: 0.02, currency: "USDC", network: "base", reliability: 0.96, avgLatencyMs: 1500, jobsCompleted: 43_092 },
  ],
};

export const sampleExecution: Execution = {
  id: "exe_demo_001",
  task: "Research five promising AI infrastructure startups and analyze their developer activity.",
  status: "completed",
  steps: [
    { id: "step_0", agentId: "planner", task: "Decompose request and identify needed capabilities", status: "completed", cost: 0, currency: "USDC", network: "base", latencyMs: 900 },
    { id: "step_1", agentId: "web-research", providerId: "wr-A", task: "Find top AI infrastructure startups", status: "completed", cost: 0.01, currency: "USDC", network: "base", latencyMs: 2100, output: "Identified Anthropic, Vercel, Replicate, Railway, Supabase.", settlement: "settled" },
    { id: "step_2", agentId: "company-intelligence", task: "Research each company", status: "completed", cost: 0.03, currency: "USDC", network: "base", latencyMs: 3800, output: "Funding, products, founders compiled.", settlement: "settled" },
    { id: "step_3", agentId: "github-intelligence", providerId: "gh-A", task: "Analyze GitHub ecosystems", status: "completed", cost: 0.02, currency: "USDC", network: "base", latencyMs: 4200, output: "Top repos, contributor activity and health scores.", settlement: "settled" },
    { id: "step_4", agentId: "verification", task: "Verify findings", status: "completed", cost: 0.01, currency: "USDC", network: "base", latencyMs: 1800, output: "Findings verified with 96% confidence.", settlement: "settled" },
  ],
  totalCost: 0.07,
  currency: "USDC",
  network: "base",
  durationMs: 8300,
  agentsUsed: 4,
  requests: 7,
  createdAt: "2026-08-15T09:15:00Z",
};

export const sampleTransactions: Transaction[] = [
  { id: "tx_001", agentId: "github-intelligence", agentName: "GitHub Intelligence", capability: "github_repository_analysis", provider: "GitHub Agent A", amount: 0.02, currency: "USDC", network: "base", status: "settled", createdAt: "2026-08-15T09:16:12Z" },
  { id: "tx_002", agentId: "web-research", agentName: "Web Research", capability: "web_search", provider: "Web Research A", amount: 0.01, currency: "USDC", network: "base", status: "settled", createdAt: "2026-08-15T09:15:32Z" },
  { id: "tx_003", agentId: "company-intelligence", agentName: "Company Intelligence", capability: "company_profile", provider: "Outbase", amount: 0.03, currency: "USDC", network: "base", status: "settled", createdAt: "2026-08-15T09:15:54Z" },
  { id: "tx_004", agentId: "verification", agentName: "Verification", capability: "fact_check", provider: "Outbase", amount: 0.01, currency: "USDC", network: "base", status: "settled", createdAt: "2026-08-15T09:16:28Z" },
  { id: "tx_005", agentId: "web-research", agentName: "Web Research", capability: "web_search", provider: "Web Research A", amount: 0.01, currency: "USDC", network: "base", status: "settled", createdAt: "2026-08-14T18:22:10Z" },
];

export const apiKeys = [
  {
    id: "key_live_q7px",
    name: "Production",
    environment: "production",
    secret: "outbase_live_••••••••Q7Px",
    lastUsed: "3 minutes ago",
    createdAt: "Aug 16",
  },
];
