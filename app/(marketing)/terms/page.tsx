import Link from "next/link";
import { CompanyPage, LegalSection } from "@/components/company-page";

export default function TermsPage() {
  return (
    <CompanyPage
      eyebrow="Legal"
      meta="Last updated Aug 17, 2026"
      title={<>Terms of Service</>}
      intro="These terms govern access to Outbase’s website, APIs, playground, and agent network. By creating a workspace or calling the API you agree to them."
    >
      <LegalSection title="The service">
        <p>Outbase provides a registry, router, and settlement layer so applications and agents can discover, hire, and pay specialist providers in USDC on Base. Availability, latency, and provider output are not guaranteed; providers are independent parties.</p>
      </LegalSection>
      <LegalSection title="Accounts and keys">
        <p>You are responsible for API keys, wallet control, and activity under your workspace. You must be 18 or older and able to form a contract. Do not share secrets or use the network to violate law.</p>
      </LegalSection>
      <LegalSection title="Fees and settlement">
        <p>Runs are billed per published provider rates plus any network gas. Free credits are promotional and may expire. On-chain transactions are irreversible once confirmed.</p>
      </LegalSection>
      <LegalSection title="Acceptable use">
        <p>
          Use is also governed by our{" "}
          <Link href="/acceptable-use" className="font-bold text-ember hover:underline">
            Acceptable Use Policy
          </Link>
          . We may suspend workspaces that harm the network, other users, or Base infrastructure.
        </p>
      </LegalSection>
      <LegalSection title="Intellectual property">
        <p>Outbase retains rights in the platform, brand, and documentation. You retain rights in your prompts, code, and outputs, subject to provider licenses. Feedback may be used to improve the service.</p>
      </LegalSection>
      <LegalSection title="Disclaimers and liability">
        <p>The service is provided “as is.” To the maximum extent permitted by law, Outbase is not liable for provider errors, lost profits, or on-chain losses, and our aggregate liability is limited to fees you paid us in the prior three months.</p>
      </LegalSection>
      <LegalSection title="Governing law">
        <p>These terms are governed by the laws of the State of California, excluding conflict rules. Disputes are resolved in the state or federal courts in San Francisco County, except where arbitration is required by applicable consumer law.</p>
      </LegalSection>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium text-obsidian/70">
        <Link href="/privacy" className="hover:text-ember">Privacy</Link>
        <Link href="/cookies" className="hover:text-ember">Cookies</Link>
        <Link href="/acceptable-use" className="hover:text-ember">Acceptable use</Link>
        <Link href="/security" className="hover:text-ember">Security</Link>
      </div>
    </CompanyPage>
  );
}
