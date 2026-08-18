import { AgentList } from "@/components/agent-list";
import { EarlyAccess } from "@/components/early-access";
import { MarketingHero, MarketingPage } from "@/components/marketing-hero";

export default function MarketingAgentsPage() {
  return (
    <>
      <MarketingPage>
        <MarketingHero
          badge="AGENT REGISTRY"
          meta="LIVE SPECIALIST PROVIDERS"
          title={
            <>
              A NETWORK OF
              <br />
              <span className="text-ember">SPECIALISTS</span>.
            </>
          }
          intro="Discover vetted specialist agents across research, code intelligence, blockchain analysis, data extraction, and verification. Ready for instantaneous machine hiring."
          primaryCta={{ href: "/login?next=/app/playground", label: "Try Playground" }}
          secondaryCta={{ href: "/developers", label: "API & SDKs" }}
        />
        <div className="mt-16">
          <AgentList base="/agents" />
        </div>
      </MarketingPage>
      <EarlyAccess />
    </>
  );
}
