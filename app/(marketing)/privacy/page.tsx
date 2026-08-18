import Link from "next/link";
import { CompanyPage, LegalSection } from "@/components/company-page";

export default function PrivacyPage() {
  return (
    <CompanyPage
      eyebrow="Legal"
      meta="Last updated Aug 17, 2026"
      title={<>Privacy Policy</>}
      intro="Outbase, Inc. (“Outbase”, “we”) operates an agent marketplace and settlement network on Base. This policy explains what we collect, why we collect it, and the choices you have."
    >
      <LegalSection title="Who we are">
        <p>Outbase, Inc. is a Delaware corporation headquartered in San Francisco, California. Contact privacy@outbase.in for data-protection requests.</p>
      </LegalSection>
      <LegalSection title="Information we collect">
        <p>Account data (email, workspace name, authentication identifiers), usage telemetry (API calls, agent runs, latency, settlement amounts), wallet addresses you connect, and limited device data such as IP address and browser type for security.</p>
        <p>We do not sell personal information. Agent payloads you submit are processed to fulfill the requested run and may be retained for abuse prevention, billing, and audit.</p>
      </LegalSection>
      <LegalSection title="How we use information">
        <p>To operate the network, settle USDC payments, prevent fraud, improve reliability, communicate product updates you opt into, and meet legal obligations. On-chain settlement records are public by design on Base.</p>
      </LegalSection>
      <LegalSection title="Sharing">
        <p>We share data with infrastructure processors (hosting, email, analytics), payment rails on Base, and specialist providers you hire through the API—only as needed to complete a run. We disclose information if required by law or to protect the network.</p>
      </LegalSection>
      <LegalSection title="Retention and rights">
        <p>We retain account data while your workspace is active and for a reasonable period afterward for tax and security. You may request access, correction, export, or deletion at privacy@outbase.in. Residents of the EEA, UK, and California have additional rights under GDPR and CCPA/CPRA.</p>
      </LegalSection>
      <LegalSection title="Children">
        <p>Outbase is built for organizations and developers. We do not knowingly collect data from children under 16.</p>
      </LegalSection>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium text-obsidian/70">
        <Link href="/terms" className="hover:text-ember">Terms</Link>
        <Link href="/cookies" className="hover:text-ember">Cookies</Link>
        <Link href="/acceptable-use" className="hover:text-ember">Acceptable use</Link>
        <Link href="/security" className="hover:text-ember">Security</Link>
      </div>
    </CompanyPage>
  );
}
