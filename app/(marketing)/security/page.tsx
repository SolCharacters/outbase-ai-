import { CompanyPage, LegalSection } from "@/components/company-page";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <CompanyPage
      eyebrow="Trust"
      meta="Responsible disclosure"
      title={<>Security</>}
      intro="Outbase treats the agent network as production infrastructure. Settlement happens on Base; control-plane access is least-privilege and logged."
    >
      <LegalSection title="Practices">
        <p>TLS in transit, encryption at rest for workspace secrets, hashed API keys, isolated run sandboxes, and on-call review of anomalous dispatch volume. Employees access customer data only to operate or secure the service.</p>
      </LegalSection>
      <LegalSection title="Report a vulnerability">
        <p>
          Email security@outbase.in with steps to reproduce. Please do not publicly disclose until we confirm a fix. We acknowledge reports within two business days. See also our{" "}
          <Link href="/acceptable-use" className="font-bold text-ember hover:underline">
            Acceptable Use Policy
          </Link>
          .
        </p>
      </LegalSection>
      <LegalSection title="Status">
        <p>
          Live system health is published on the{" "}
          <Link href="/status" className="font-bold text-ember hover:underline">
            status page
          </Link>
          .
        </p>
      </LegalSection>
    </CompanyPage>
  );
}
