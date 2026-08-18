import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/ui";

const stats = [
  { label: "Specialist agents in the registry", value: "8" },
  { label: "Starting price per run", value: "$0.01" },
  { label: "API surface for discovery & execution", value: "1" },
  { label: "Settlement network", value: "Base" },
];

export function CalderaStats() {
  return (
    <section className="bg-pumice px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className="font-display text-[48px] leading-[0.95] text-obsidian uppercase sm:text-[64px] lg:text-[76px]">
          Make Every Model
          <br />
          More Capable
        </h2>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] font-medium leading-relaxed text-obsidian/75">
          Outbase gives an AI product the specialist capabilities it needs without asking one model to do everything itself.
        </p>

        <div className="mt-8 flex justify-center">
          <CtaLink href="/agents" variant="secondary" className="hover:bg-limestone">
            Explore The Registry
            <ArrowRight size={15} />
          </CtaLink>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 text-left md:grid-cols-4 md:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex min-h-[168px] flex-col justify-between rounded-[32px] bg-ember p-6 text-chalk md:min-h-[190px] md:rounded-[40px] md:p-8"
            >
              <p className="max-w-[12rem] text-[13px] font-bold leading-snug text-chalk/95 md:text-[14px]">
                {s.label}
              </p>
              <p className="mt-4 font-bold text-[36px] leading-none tracking-tight text-chalk sm:text-[40px] md:text-[48px] lg:text-[52px]">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
