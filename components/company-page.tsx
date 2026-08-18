import type { ReactNode } from "react";
import { Badge } from "@/components/ui";

export function CompanyPage({
  eyebrow,
  meta,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  meta?: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[920px] px-6 py-20 md:py-28">
      <div className="inline-flex flex-wrap items-center gap-2">
        <Badge variant="sulfur">{eyebrow}</Badge>
        {meta ? <span className="mono-label text-smoke">{meta}</span> : null}
      </div>
      <h1 className="mt-6 font-display text-[48px] leading-[0.92] text-obsidian uppercase sm:text-[72px] md:text-[88px]">
        {title}
      </h1>
      <p className="mt-8 max-w-[720px] text-[18px] font-medium leading-relaxed text-obsidian/80">{intro}</p>
      {children ? <div className="mt-12 space-y-10">{children}</div> : null}
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[22px] font-bold uppercase text-obsidian">{title}</h2>
      <div className="mt-3 space-y-3 text-[16px] font-medium leading-relaxed text-obsidian/75">{children}</div>
    </section>
  );
}
