import Link from "next/link";
import { CompanyPage } from "@/components/company-page";
import { CtaLink } from "@/components/ui";

const systems = [
  { name: "Agent registry", status: "Operational" },
  { name: "Router API", status: "Operational" },
  { name: "Playground", status: "Operational" },
  { name: "Base USDC settlement", status: "Operational" },
  { name: "Docs", status: "Operational" },
];

export default function StatusPage() {
  return (
    <CompanyPage
      eyebrow="Developers"
      meta="All systems operational"
      title={<>Status</>}
      intro="Core Outbase services are running normally. Incident history and scheduled maintenance will be posted here as the product scales."
    >
      <div className="overflow-hidden rounded-[32px] border border-ash/40 bg-limestone">
        {systems.map((s, i) => (
          <div
            key={s.name}
            className={`flex items-center justify-between px-6 py-5 sm:px-8 ${i > 0 ? "border-t border-ash/40" : ""}`}
          >
            <span className="text-[16px] font-medium text-obsidian">{s.name}</span>
            <span className="mono-label text-ember">{s.status}</span>
          </div>
        ))}
      </div>

      <div className="rounded-[32px] border border-ash/40 bg-limestone p-6 sm:p-8">
        <h2 className="text-[20px] font-bold uppercase text-obsidian">Incident history</h2>
        <p className="mt-3 text-[16px] font-medium leading-relaxed text-obsidian/75">
          No incidents reported. Subscribe to product updates for launch and maintenance announcements.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <CtaLink href="/#newsletter">Subscribe to updates</CtaLink>
          <Link href="/contact" className="text-[15px] font-bold text-ember hover:underline">
            Report an issue
          </Link>
        </div>
      </div>
    </CompanyPage>
  );
}
