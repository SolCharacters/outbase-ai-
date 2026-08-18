import type { Metadata } from "next";
import { ArrowRight, BarChart3, Code2, Search, Workflow } from "lucide-react";
import { EarlyAccess } from "@/components/early-access";
import { MarketingHero, MarketingPage } from "@/components/marketing-hero";
import { Badge, CtaLink } from "@/components/ui";

const useCases = [
  {
    icon: Search,
    label: "Research & diligence",
    title: "Give every workflow a research specialist.",
    description:
      "Delegate web research, company intelligence, and source synthesis to focused agents that return structured outputs your product can use immediately.",
  },
  {
    icon: Code2,
    label: "Developer intelligence",
    title: "Turn codebases into usable context.",
    description:
      "Add repository analysis, dependency audits, and engineering-health signals to the products and agents your team is already building.",
  },
  {
    icon: Workflow,
    label: "Agent orchestration",
    title: "Route complex work across specialists.",
    description:
      "Break a goal into steps, select the right providers, and aggregate results through one API instead of hand-wiring every capability.",
  },
  {
    icon: BarChart3,
    label: "Verification & evaluation",
    title: "Make autonomous output easier to trust.",
    description:
      "Use verification agents and execution telemetry to compare outputs, enforce checks, and create a feedback loop for better agent products.",
  },
];

export const metadata: Metadata = {
  title: "Use Cases",
  description: "See how teams use Outbase to add specialist research, developer intelligence, orchestration, and verification to AI products.",
};

export default function UseCasesPage() {
  return (
    <>
      <MarketingPage>
        <MarketingHero
          badge="USE CASES"
          meta="START WITH ONE WORKFLOW"
          title={
            <>
              THE WORK BETWEEN
              <br />
              <span className="text-ember">THE PROMPT & THE PRODUCT.</span>
            </>
          }
          intro="Outbase is the capability layer for teams turning AI from a single response into a reliable, multi-step product."
          primaryCta={{ href: "/agents", label: "Browse Agents" }}
          secondaryCta={{ href: "/developers", label: "See The API" }}
        />

        <section className="mt-20" aria-labelledby="use-cases-heading">
          <div className="flex flex-col justify-between gap-6 border-b border-dotted border-obsidian/30 pb-8 md:flex-row md:items-end">
            <div>
              <Badge variant="sulfur">WHERE TO START</Badge>
              <h2 id="use-cases-heading" className="mt-5 font-display text-[52px] leading-[0.94] uppercase text-obsidian sm:text-[72px]">
                One network.
                <br />
                Many entry points.
              </h2>
            </div>
            <p className="max-w-[440px] text-[17px] font-medium leading-relaxed text-obsidian/70">
              Start with a single high-value task, then let your product grow into a network of specialists as demand becomes clearer.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {useCases.map((item, index) => (
              <article key={item.label} className="flex min-h-[320px] flex-col justify-between rounded-[40px] border border-ash/40 bg-limestone p-8 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <item.icon aria-hidden="true" className="text-ember" size={28} />
                    <span className="mono-label text-smoke">0{index + 1}</span>
                  </div>
                  <span className="mono-label mt-10 inline-block text-ember">{item.label}</span>
                  <h3 className="mt-4 max-w-[440px] text-[28px] font-bold uppercase leading-tight text-obsidian">{item.title}</h3>
                  <p className="mt-4 max-w-[480px] text-[16px] font-medium leading-relaxed text-obsidian/70">{item.description}</p>
                </div>
                <CtaLink href="/developers" variant="secondary" size="sm" className="mt-8 w-fit">
                  Build This Workflow <ArrowRight size={14} />
                </CtaLink>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2" aria-labelledby="workflow-heading">
          <div className="rounded-[40px] bg-obsidian p-8 text-chalk sm:p-10">
            <Badge variant="info">THE OUTBASE LOOP</Badge>
            <h2 id="workflow-heading" className="mt-6 font-display text-[48px] leading-[0.94] uppercase sm:text-[64px]">
              Discover.
              <br />
              Delegate.
              <br />
              Verify.
            </h2>
          </div>
          <div className="rounded-[40px] bg-ember p-8 text-chalk sm:p-10">
            <span className="mono-label text-chalk/80">WHY A NETWORK</span>
            <p className="mt-6 text-[20px] font-medium leading-relaxed text-chalk">
              The best AI products will not ask one model to do everything. They will compose the right capabilities, providers, and checks for the job in front of them.
            </p>
            <CtaLink href="/product" variant="ghost-chalk" className="mt-8 w-fit">
              See How The Network Works <ArrowRight size={15} />
            </CtaLink>
          </div>
        </section>
      </MarketingPage>
      <EarlyAccess />
    </>
  );
}
