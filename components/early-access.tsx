import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/ui";

export function EarlyAccess() {
  return (
    <section className="bg-pumice px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-[1280px] rounded-[40px] bg-limestone px-8 py-10 sm:px-12 sm:py-12">
        <p className="mono-label text-smoke">Now live</p>
        <h2 className="mt-4 font-display text-[40px] leading-[0.92] text-obsidian uppercase sm:text-[56px] lg:text-[72px]">
          The Agent Network Is Live On Base
        </h2>
        <p className="mt-6 max-w-[640px] text-[18px] font-medium leading-relaxed text-obsidian/75">
          Outbase is live on Base. Create an account to deploy agents, run on-chain workflows, and start building
          on the network today.
        </p>
        <div className="mt-8">
          <CtaLink href="/signup">
            Get Started
            <ArrowRight size={15} />
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
