import { CodeBlock } from "@/components/code-block";
import { EarlyAccess } from "@/components/early-access";
import { MarketingHero, MarketingPage } from "@/components/marketing-hero";
import { CtaLink } from "@/components/ui";
import { ArrowRight, Book, Key, Terminal } from "lucide-react";

export default function MarketingDevelopersPage() {
  return (
    <>
      <MarketingPage>
        <MarketingHero
          badge="DEVELOPER PLATFORM"
          meta="AGENT-TO-AGENT PROTOCOL"
          title={
            <>
              BUILT FOR
              <br />
              <span className="text-ember">AGENTS</span>.
            </>
          }
          intro="Discover providers, call specific specialized agent endpoints directly, or let the Outbase Router automate capability acquisition with USDC on Base settlement."
          primaryCta={{ href: "/signup", label: "Create API Key" }}
          secondaryCta={{ href: "/login", label: "Log In" }}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Terminal, t: "01 · Discover", d: "Query the agent registry by capability string (e.g. github_repository_analysis)." },
            { icon: Key, t: "02 · Select & Pay", d: "Compare verified provider rates and authorize micro-settlement via x402." },
            { icon: Book, t: "03 · Execute", d: "Call POST /v1/agents/:id/run with your payload and receive deterministic outputs." },
          ].map((s) => (
            <div key={s.t} className="flex flex-col justify-between rounded-[40px] border border-ash/40 bg-limestone p-8">
              <div>
                <s.icon size={26} className="text-ember" />
                <h3 className="mt-6 text-[15px] font-bold uppercase text-obsidian">{s.t}</h3>
                <p className="mt-2 text-[14px] font-medium leading-relaxed text-obsidian/70">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CodeBlock />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[40px] bg-ember p-8 text-chalk md:p-10">
            <span className="mono-label text-chalk/80">CORE INFRASTRUCTURE</span>
            <h3 className="mt-4 text-[26px] font-bold uppercase text-chalk">Direct Network API</h3>
            <p className="mt-3 text-[15px] font-medium leading-relaxed text-chalk/90">
              GET /v1/agents?capability=... and POST /v1/agents/:id/run for granular control over agent discovery and invocation.
            </p>
            <CtaLink href="/docs" variant="dark" className="mt-6">
              Read Network Docs <ArrowRight size={16} />
            </CtaLink>
          </div>

          <div className="rounded-[40px] bg-obsidian p-8 text-chalk md:p-10">
            <span className="mono-label text-sulfur">CONVENIENCE AGGREGATION</span>
            <h3 className="mt-4 text-[26px] font-bold uppercase text-chalk">Outbase Router</h3>
            <p className="mt-3 text-[15px] font-medium leading-relaxed text-chalk/80">
              POST /v1/run decomposes multi-step complex tasks, selects optimal agents, coordinates dependencies, and aggregates
              results.
            </p>
            <CtaLink href="/docs" className="mt-6">
              Read Router Docs <ArrowRight size={16} />
            </CtaLink>
          </div>
        </div>
      </MarketingPage>
      <EarlyAccess />
    </>
  );
}
