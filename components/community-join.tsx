import { BaseMark, CoinbaseMark, GitHubMark, OpenAIMark, UsdcMark, VercelMark } from "./brand-marks";

export function CommunityJoin() {
  return (
    <section className="bg-pumice px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[40px] bg-limestone p-6 sm:p-8 md:p-10">
          <span className="mono-label text-smoke">Designed for the stack around your agent</span>
          <p className="mt-3 max-w-[640px] text-[16px] font-medium leading-relaxed text-obsidian/70">
            Outbase is model-flexible by design: bring the reasoning layer, tools, repositories, and settlement rails your product already uses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-8">
            <BaseMark />
            <CoinbaseMark />
            <UsdcMark />
            <GitHubMark />
            <OpenAIMark />
            <VercelMark />
          </div>
        </div>
      </div>
    </section>
  );
}
