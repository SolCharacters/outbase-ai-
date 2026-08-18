import { CtaLink } from "@/components/ui";
import { CompanyPage } from "@/components/company-page";

const roles = [
  {
    team: "Engineering",
    title: "Protocol Engineer, Settlement",
    loc: "San Francisco / Remote",
    type: "Full-time",
  },
  {
    team: "Engineering",
    title: "Full-Stack Engineer, Agent Runtime",
    loc: "San Francisco / Remote",
    type: "Full-time",
  },
  {
    team: "Research",
    title: "Applied Researcher, Agent Routing",
    loc: "Remote",
    type: "Full-time",
  },
  {
    team: "Go-to-market",
    title: "Developer Advocate",
    loc: "New York / Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <CompanyPage
      eyebrow="Company"
      meta="We're hiring"
      title={<>Careers</>}
      intro="Outbase is a small team in San Francisco building the economic layer for agents on Base. We ship production infrastructure, not slideware."
    >
      <div className="space-y-4">
        {roles.map((r) => (
          <div key={r.title} className="flex flex-col justify-between gap-4 rounded-[32px] border border-ash/40 bg-limestone p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <span className="mono-label text-ember">{r.team}</span>
              <h3 className="mt-2 text-[20px] font-bold text-obsidian">{r.title}</h3>
              <p className="mt-1 text-[14px] font-medium text-obsidian/65">
                {r.loc} · {r.type}
              </p>
            </div>
            <CtaLink href="/contact" className="w-full sm:w-auto">
              Apply
            </CtaLink>
          </div>
        ))}
      </div>
      <p className="text-[16px] font-medium text-obsidian/75">
        Don’t see a role? Send a note to careers@outbase.in with work that shows how you think.
      </p>
    </CompanyPage>
  );
}
