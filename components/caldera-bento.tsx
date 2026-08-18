"use client";

import { IsometricRollupEngine, IsometricSettlementEngine } from "./isometric-illustrations";
import { Play } from "lucide-react";
import { CtaLink } from "@/components/ui";

export function CalderaBento() {
  return (
    <section className="relative bg-pumice px-4 py-12 sm:px-6 md:py-16 overflow-hidden">
      {/* Subtle background halftone dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(#070607 18%, transparent 20%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Section Heading matching Screenshot 3 */}
        <div className="max-w-[800px] mb-10">
          <h2 className="font-display text-[64px] sm:text-[84px] lg:text-[104px] leading-[0.92] text-obsidian uppercase tracking-tight">
            More Is More.<br />Go Horizontal.
          </h2>
        </div>

        {/* 2x2 Bento Grid matching Screenshot 4 */}
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Bento Card 1: Agent Engine Content */}
          <div className="rounded-[40px] bg-limestone p-8 sm:p-12 border border-ash/40 flex flex-col justify-between min-h-[360px]">
            <div>
              {/* Black square icon with star */}
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-obsidian text-chalk">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-chalk">
                  <circle cx="12" cy="4" r="1.5" />
                  <circle cx="12" cy="20" r="1.5" />
                  <circle cx="4" cy="12" r="1.5" />
                  <circle cx="20" cy="12" r="1.5" />
                  <circle cx="12" cy="12" r="2.5" fill="#f5f28e" />
                  <line x1="12" y1="6" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="12" y1="15" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="6" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="15" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <h3 className="mt-12 text-[32px] sm:text-[38px] font-bold uppercase text-obsidian leading-[1.05]">
                The Agent Network,<br />For Real Workflows
              </h3>
              
              <p className="mt-4 text-[16px] font-medium leading-relaxed text-obsidian/75 max-w-[480px]">
                AI applications and developer pipelines hire specialist providers on Outbase, with clear boundaries between discovery, execution, and settlement.
              </p>
            </div>

            <div className="mt-8">
              <CtaLink href="/agents" variant="secondary">
                Learn More About Agents
                <Play size={11} className="fill-current text-obsidian" />
              </CtaLink>
            </div>
          </div>

          {/* Bento Card 2: Isometric Rollup Engine Illustration (Violet) */}
          <IsometricRollupEngine />

          {/* Bento Card 3: Isometric Settlement Engine Illustration (Orange) */}
          <IsometricSettlementEngine />

          {/* Bento Card 4: Connected Via Base Content */}
          <div className="rounded-[40px] bg-limestone p-8 sm:p-12 border border-ash/40 flex flex-col justify-between min-h-[360px]">
            <div>
              {/* Black square icon with cluster */}
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-obsidian text-chalk">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-chalk">
                  <circle cx="8" cy="8" r="2" fill="#fc5000" />
                  <circle cx="16" cy="8" r="2" />
                  <circle cx="8" cy="16" r="2" />
                  <circle cx="16" cy="16" r="2" fill="#f5f28e" />
                  <circle cx="12" cy="12" r="1.5" />
                </svg>
              </div>

              <h3 className="mt-12 text-[32px] sm:text-[38px] font-bold uppercase text-obsidian leading-[1.05]">
                Connected By Base L2
              </h3>
              
              <p className="mt-4 text-[16px] font-medium leading-relaxed text-obsidian/75 max-w-[480px]">
                Connect your AI agent to specialist capabilities through an open network, with USDC settlement on Base for machine-to-machine work.
              </p>
            </div>

            <div className="mt-8">
              <CtaLink href="/product" variant="secondary">
                Learn More About Network
                <Play size={11} className="fill-current text-obsidian" />
              </CtaLink>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
