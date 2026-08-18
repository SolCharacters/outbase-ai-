"use client";

import { useState } from "react";
import { Button, Input, Label, Badge, CtaLink } from "@/components/ui";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [building, setBuilding] = useState("");
  const [useMode, setUseMode] = useState("");
  const [workspace, setWorkspace] = useState("");

  return (
    <div className="w-full max-w-[500px] rounded-[40px] border border-ash/40 bg-limestone p-10">
      <div className="mb-8 flex items-center justify-between">
        <Badge variant="sulfur">STEP 0{step} OF 03</Badge>
        <span className="font-mono text-[13px] font-bold text-ember">{Math.round((step / 3) * 100)}% COMPLETE</span>
      </div>
      {step === 1 && (
        <>
          <h1 className="font-display text-[32px] uppercase tracking-tight text-obsidian md:text-[36px]">WHAT ARE YOU BUILDING?</h1>
          <div className="mt-8 space-y-2.5">
            {["Autonomous AI Agent", "Developer Infrastructure", "Multi-Agent Workflow", "Enterprise Automation", "Research Project", "Just Exploring"].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => setBuilding(o)}
                className={`w-full cursor-pointer rounded-[800px] px-6 py-3.5 text-left text-[15px] font-bold uppercase transition ${
                  building === o
                    ? "bg-ember font-bold text-chalk"
                    : "border-[1.5px] border-ash/60 bg-pumice/50 text-obsidian hover:border-obsidian"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
          <Button className="mt-8 w-full" onClick={() => setStep(2)} disabled={!building}>
            Continue
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <h1 className="font-display text-[32px] uppercase tracking-tight text-obsidian md:text-[36px]">HOW WILL YOU CONSUME?</h1>
          <div className="mt-8 space-y-2.5">
            {[
              { t: "Direct Agent APIs", d: "Query registry and invoke specific specialist endpoints directly." },
              { t: "Outbase Router", d: "Let Outbase orchestrate, select, and pay providers automatically." },
              { t: "Both Direct & Router", d: "Hybrid usage based on pipeline complexity." },
            ].map((o) => (
              <button
                key={o.t}
                type="button"
                onClick={() => setUseMode(o.t)}
                className={`w-full cursor-pointer rounded-[24px] p-5 text-left transition ${
                  useMode === o.t
                    ? "bg-ember font-bold text-chalk"
                    : "border-[1.5px] border-ash/60 bg-pumice/50 text-obsidian hover:border-obsidian"
                }`}
              >
                <div className="text-[16px] font-bold uppercase">{o.t}</div>
                <div className={`mt-1 text-[13px] font-medium ${useMode === o.t ? "text-chalk/85" : "text-smoke"}`}>{o.d}</div>
              </button>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button className="flex-1" onClick={() => setStep(3)} disabled={!useMode}>
              Continue
            </Button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h1 className="font-display text-[32px] uppercase tracking-tight text-obsidian md:text-[36px]">CREATE WORKSPACE</h1>
          <p className="mt-2 text-[15px] font-medium text-obsidian/75">
            Your shared environment for API keys, execution logs, and Base settlement.
          </p>
          <div className="mt-8">
            <Label htmlFor="workspace">Workspace Name</Label>
            <Input
              id="workspace"
              value={workspace}
              onChange={(e) => setWorkspace(e.target.value)}
              placeholder="Acme Autonomous Labs"
              className="mt-1.5"
            />
          </div>
          {workspace ? (
            <CtaLink href="/app" className="mt-8 w-full">
              Enter Outbase Runtime
            </CtaLink>
          ) : (
            <Button className="mt-8 w-full" disabled>
              Enter Outbase Runtime
            </Button>
          )}
          <div className="mt-4 rounded-[800px] bg-sulfur p-3 text-center">
            <span className="mono-label font-bold text-obsidian">$1.00 FREE BASE EXECUTION CREDITS ATTACHED</span>
          </div>
        </>
      )}
    </div>
  );
}
