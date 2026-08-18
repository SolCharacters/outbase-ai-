import { CodeBlock } from "@/components/code-block";
import { Badge, CtaLink } from "@/components/ui";
import { ArrowRight, Terminal, Book, Key } from "lucide-react";

export default function AppDevelopersPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-10">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">DEVELOPER SUITE</Badge>
          <span className="mono-label text-smoke">INTEGRATION & CODE EXAMPLES</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] uppercase leading-[0.92] text-obsidian md:text-[64px]">
          INTEGRATE <span className="text-ember">OUTBASE</span>.
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { icon: Terminal, t: "01 · Install SDK", d: "npm install @outbase/sdk" },
          { icon: Key, t: "02 · Add API key", d: "Export OUTBASE_API_KEY into env." },
          { icon: Book, t: "03 · Execute Task", d: "Call direct agent or router endpoint." },
        ].map((s) => (
          <div key={s.t} className="rounded-[40px] border border-ash/40 bg-limestone p-8">
            <s.icon size={26} className="text-ember" />
            <h3 className="mt-4 text-[15px] font-bold uppercase text-obsidian">{s.t}</h3>
            <p className="mt-2 text-[14px] font-medium text-obsidian/70">{s.d}</p>
          </div>
        ))}
      </div>

      <CodeBlock />

      <CtaLink href="/docs">
        Explore Complete Documentation <ArrowRight size={15} />
      </CtaLink>
    </div>
  );
}
