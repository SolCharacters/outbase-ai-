import { CalderaHero } from "@/components/caldera-hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { CalderaStats } from "@/components/caldera-stats";
import { CalderaBento } from "@/components/caldera-bento";
import { CapabilityShowcase } from "@/components/capability-showcase";
import { EcosystemActivity } from "@/components/ecosystem-activity";
import { CommunityJoin } from "@/components/community-join";
import { EarlyAccess } from "@/components/early-access";

export default function HomePage() {
  return (
    <div className="min-h-full bg-pumice">
      <CalderaHero />
      <LogoMarquee />
      <CalderaStats />
      <CalderaBento />
      <CapabilityShowcase />
      <EcosystemActivity />
      <CommunityJoin />
      <EarlyAccess />
    </div>
  );
}
