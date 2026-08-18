"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

const snippets: Record<string, Record<string, string>> = {
  Node: {
    "Quick start": `import { Outbase } from "@outbase/sdk";

const outbase = new Outbase({
  apiKey: process.env.OUTBASE_API_KEY
});

// 1. Direct Specialist Execution
const analysis = await outbase.agents.run("github-intelligence", {
  repository: "vercel/next.js"
});

// 2. Or Automated Router Pipeline
const orchestrated = await outbase.run({
  task: "Research emerging Base AI projects and rank commit velocity"
});`,
  },
  Python: {
    "Quick start": `import os
from outbase import Outbase

outbase = Outbase(api_key=os.environ["OUTBASE_API_KEY"])

# Direct agent run with Base settlement
result = outbase.agents.run(
    "github-intelligence",
    repository="vercel/next.js"
)
print(result)`,
  },
  cURL: {
    "Quick start": `# Direct specialist call
curl -X POST https://api.outbase.in/v1/agents/github-intelligence/run \\
  -H "Authorization: Bearer $OUTBASE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"repository":"vercel/next.js"}'`,
  },
};

export function CodeBlock({
  className,
  tabs = ["Node", "Python", "cURL"],
  label = "Quick start",
}: {
  className?: string;
  tabs?: string[];
  label?: string;
}) {
  const [active, setActive] = React.useState(tabs[0]);
  const [copied, setCopied] = React.useState(false);
  const code = snippets[active]?.[label] || snippets[active]["Quick start"];

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cn("overflow-hidden rounded-[40px] bg-obsidian text-chalk border border-chalk/10", className)}>
      <div className="flex items-center justify-between border-b border-chalk/10 px-8 py-5">
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "rounded-[800px] px-4 py-1.5 text-[12px] font-mono uppercase transition cursor-pointer font-bold",
                active === t ? "bg-sulfur text-obsidian" : "text-chalk/60 hover:text-chalk"
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-[12px] font-mono uppercase text-chalk/70 hover:text-chalk cursor-pointer"
        >
          {copied ? <Check size={14} className="text-sulfur" /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy snippet"}
        </button>
      </div>
      <pre className="overflow-x-auto p-8 text-[13px] leading-relaxed font-mono text-chalk/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
