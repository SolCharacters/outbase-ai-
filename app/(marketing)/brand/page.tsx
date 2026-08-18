import { CompanyPage } from "@/components/company-page";
import { OutbaseWedge } from "@/components/brand-marks";

const colors = [
  { name: "Ember", hex: "#fc5000", className: "bg-ember" },
  { name: "Plasma", hex: "#524ae9", className: "bg-plasma-violet" },
  { name: "Sulfur", hex: "#f5f28e", className: "bg-sulfur" },
  { name: "Pumice", hex: "#e2e2df", className: "bg-pumice border border-ash" },
  { name: "Limestone", hex: "#f7f6f2", className: "bg-limestone border border-ash" },
  { name: "Obsidian", hex: "#070607", className: "bg-obsidian" },
];

export default function BrandPage() {
  return (
    <CompanyPage
      eyebrow="Company"
      meta="Brand kit"
      title={<>Brand</>}
      intro="Use these marks when you write about Outbase, ship an integration, or list us as infrastructure. Don’t stretch the wedge, recolor it off-brand, or lock it up with unverified claims."
    >
      <div className="rounded-[32px] border border-ash/40 bg-limestone p-8 sm:p-10">
        <span className="mono-label text-smoke">Logo</span>
        <div className="mt-6 flex flex-wrap items-center gap-10">
          <div className="flex items-center gap-3">
            <OutbaseWedge className="h-8 w-11" />
            <span className="text-[28px] font-bold lowercase tracking-tight">outbase</span>
          </div>
          <div className="flex items-center gap-3 rounded-[24px] bg-obsidian px-6 py-4">
            <OutbaseWedge className="h-8 w-11" />
            <span className="text-[28px] font-bold lowercase tracking-tight text-chalk">outbase</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[22px] font-bold uppercase text-obsidian">Color</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {colors.map((c) => (
            <div key={c.hex} className={`rounded-[28px] p-6 ${c.className}`}>
              <div className={`text-[16px] font-bold ${c.hex === "#070607" ? "text-chalk" : "text-obsidian"}`}>{c.name}</div>
              <div className={`mt-1 font-mono text-[13px] ${c.hex === "#070607" ? "text-chalk/70" : "text-obsidian/70"}`}>{c.hex}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[16px] font-medium text-obsidian/75">
        Press and partnership assets: press@outbase.in
      </p>
    </CompanyPage>
  );
}
