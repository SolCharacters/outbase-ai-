import { CtaLink } from "@/components/ui";
import { OutbaseLockup } from "./brand-marks";

export function FooterCta() {
  return (
    <div className="flex min-h-[280px] flex-col justify-between rounded-[40px] bg-obsidian p-8 text-chalk sm:p-10">
      <OutbaseLockup invert />
      <h3 className="my-6 text-[20px] font-bold uppercase leading-snug text-chalk sm:text-[22px] md:my-8 md:text-[24px]">
        Fastest-Growing Agent Economic Network On Base
      </h3>
      <CtaLink href="/signup" size="md">
        Launch An Agent
      </CtaLink>
    </div>
  );
}
