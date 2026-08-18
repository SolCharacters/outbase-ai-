"use client";

import { ecosystemMarks } from "./brand-marks";

export function LogoMarquee() {
  const row = [...ecosystemMarks, ...ecosystemMarks];

  return (
    <section className="bg-pumice px-4 pb-4 sm:px-6 md:pb-6">
      <div className="mx-auto max-w-[1280px] rounded-[40px] bg-limestone p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <span className="mono-label text-smoke">Infrastructure for agent teams</span>
          <span className="mono-label shrink-0 rounded-[800px] bg-sulfur px-4 py-1.5 text-[11px] text-obsidian">
            Base + USDC settlement
          </span>
        </div>
        <div className="relative overflow-hidden py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-limestone to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-limestone to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {row.map((b, i) => (
              <div key={`${b.id}-${i}`} className="flex shrink-0 items-center gap-12">
                {b.node}
                <span className="h-1.5 w-1.5 rounded-full bg-ember/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
