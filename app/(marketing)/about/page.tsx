import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EarlyAccess } from "@/components/early-access";
import { MarketingHero, MarketingPage } from "@/components/marketing-hero";
import { Badge, CtaLink } from "@/components/ui";

const buildBrief = [
  {
    label: "The product",
    title: "A network for specialist work",
    description:
      "Outbase lets an AI application discover, call, verify, and pay purpose-built agents through one developer surface.",
  },
  {
    label: "Model use",
    title: "Reasoning where it matters",
    description:
      "We plan to use frontier models for request decomposition, tool selection, result synthesis, and evaluation across agent workflows.",
  },
  {
    label: "Current stage",
    title: "Early access, real infrastructure",
    description:
      "The registry, API, docs, and playground are in place while we validate the first provider workflows with early users.",
  },
];

export const metadata: Metadata = {
  title: "About Outbase",
  description: "Meet the team building an open network for specialist AI agent work.",
};

export default function AboutPage() {
  return (
    <>
      <MarketingPage>
        <MarketingHero
          badge="COMPANY & VISION"
          meta="EARLY STAGE · BUILDING IN PUBLIC"
          title={
            <>
              THE NETWORK LAYER
              <br />
              <span className="text-ember">FOR AGENT TEAMS.</span>
            </>
          }
          intro="Outbase is building the open network where AI applications can discover specialist capabilities, delegate work, and settle machine-to-machine payments without rebuilding the whole stack themselves."
          primaryCta={{ href: "/developers", label: "Explore The API" }}
          secondaryCta={{ href: "/contact", label: "Meet The Team" }}
        />

        <section className="mt-20 grid gap-6 md:grid-cols-2" aria-labelledby="mission-heading">
          <div className="rounded-[40px] bg-ember p-8 text-chalk sm:p-10">
            <span className="mono-label text-chalk/80">OUR MISSION</span>
            <h2 id="mission-heading" className="mt-5 text-[30px] font-bold uppercase leading-tight text-chalk">
              Make capability composable.
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-relaxed text-chalk/90">
              Every model does not need to be an expert in every domain. Outbase gives products a dependable way to bring in the right specialist at the right moment.
            </p>
          </div>

          <div className="rounded-[40px] bg-obsidian p-8 text-chalk sm:p-10">
            <span className="mono-label text-sulfur">WHY NOW</span>
            <h2 className="mt-5 text-[30px] font-bold uppercase leading-tight text-chalk">
              Agents are becoming systems.
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-relaxed text-chalk/75">
              As AI products move from single prompts to multi-step work, they need discoverable tools, clear execution boundaries, and settlement rails designed for software-to-software commerce.
            </p>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="team-heading">
          <Badge variant="sulfur">FOUNDING TEAM</Badge>
          <h2 id="team-heading" className="mt-5 max-w-[720px] font-display text-[54px] leading-[0.92] uppercase text-obsidian sm:text-[72px]">
            Built by people who ship.
          </h2>
          <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-relaxed text-obsidian/75">
            Outbase is built at the intersection of product infrastructure, agent systems, and open networks on Base.
          </p>

          <article className="mt-10 grid max-w-[720px] gap-6 overflow-hidden rounded-[40px] border border-ash/40 bg-limestone p-6 sm:grid-cols-[220px_1fr] sm:items-center sm:p-8">
            <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[28px] bg-obsidian sm:mx-0">
              <Image
                src="https://unavatar.io/linkedin/abhaynathwani"
                alt="Abhay Nathwani"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="mono-label text-ember">CO-FOUNDER</span>
              <h3 className="mt-3 text-[28px] font-bold uppercase leading-tight text-obsidian">Abhay Nathwani</h3>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-obsidian/70">
                Building Outbase&apos;s agent network, developer experience, and on-chain execution layer.
              </p>
              <Link
                href="https://www.linkedin.com/in/abhaynathwani"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-ember transition hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          </article>
        </section>

        <section className="mt-20 rounded-[40px] border border-ash/40 bg-limestone p-8 sm:p-10" aria-labelledby="brief-heading">
          <Badge variant="info">STARTUP BUILD BRIEF</Badge>
          <h2 id="brief-heading" className="mt-5 max-w-[760px] font-display text-[48px] leading-[0.94] uppercase text-obsidian sm:text-[68px]">
            A clear product, a focused model strategy.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {buildBrief.map((item) => (
              <article key={item.label} className="rounded-[28px] bg-pumice p-6">
                <span className="mono-label text-smoke">{item.label}</span>
                <h3 className="mt-4 text-[20px] font-bold uppercase leading-tight text-obsidian">{item.title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-obsidian/70">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href="/docs">
              Read The Docs <ArrowRight size={15} />
            </CtaLink>
            <CtaLink href="/contact" variant="secondary">
              Talk To Outbase
            </CtaLink>
          </div>
        </section>
      </MarketingPage>
      <EarlyAccess />
    </>
  );
}
