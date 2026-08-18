import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Badge, CtaLink } from "@/components/ui";

type Cta = { href: string; label: string };

export function MarketingPage({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">{children}</div>;
}

export function MarketingHero({
  badge,
  meta,
  title,
  intro,
  primaryCta = { href: "/signup", label: "Get Started" },
  secondaryCta = { href: "/docs", label: "View Docs" },
  centered = false,
}: {
  badge: string;
  meta?: string;
  title: ReactNode;
  intro: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-[760px] text-center" : "max-w-[900px]"}>
      <div className={`inline-flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <Badge variant="sulfur">{badge}</Badge>
        {meta ? <span className="mono-label text-smoke">{meta}</span> : null}
      </div>
      <h1 className="mt-6 font-display text-[64px] leading-[0.92] text-obsidian uppercase md:text-[96px]">
        {title}
      </h1>
      <p
        className={`mt-6 text-[18px] font-medium leading-relaxed text-obsidian/80 md:mt-8 ${
          centered ? "mx-auto max-w-[560px]" : "max-w-[720px]"
        }`}
      >
        {intro}
      </p>
      <div className={`mt-8 flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
        <CtaLink href={primaryCta.href}>
          {primaryCta.label}
          <ArrowRight size={15} />
        </CtaLink>
        <CtaLink href={secondaryCta.href} variant="secondary">
          {secondaryCta.label}
        </CtaLink>
      </div>
    </div>
  );
}
