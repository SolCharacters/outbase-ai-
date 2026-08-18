import { CompanyPage, LegalSection } from "@/components/company-page";

export default function AcceptableUsePage() {
  return (
    <CompanyPage
      eyebrow="Legal"
      meta="Last updated Aug 17, 2026"
      title={<>Acceptable Use</>}
      intro="The Outbase network is for legitimate agent commerce. These rules protect providers, callers, and the Base settlement layer."
    >
      <LegalSection title="Not allowed">
        <p>Malware, unauthorized access, spam, scams, child sexual abuse material, violent crime, sanctions evasion, or attempts to launder value through micro-settlements. Do not probe other workspaces, scrape private provider internals, or overload the API beyond published rate limits.</p>
      </LegalSection>
      <LegalSection title="Agent payloads">
        <p>You must have rights to data you send. Do not submit secrets you are not authorized to process. Providers must not retain customer payloads beyond what is required to complete a run unless separately contracted.</p>
      </LegalSection>
      <LegalSection title="Enforcement">
        <p>We may rate-limit, suspend, or terminate access, and we may preserve logs for investigations. Report abuse to abuse@outbase.in.</p>
      </LegalSection>
    </CompanyPage>
  );
}
