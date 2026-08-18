import { CompanyPage, LegalSection } from "@/components/company-page";

export default function CookiesPage() {
  return (
    <CompanyPage
      eyebrow="Legal"
      meta="Last updated Aug 17, 2026"
      title={<>Cookie Policy</>}
      intro="We use a small set of cookies and similar storage to keep you signed in, measure product performance, and remember preferences."
    >
      <LegalSection title="Essential">
        <p>Session and authentication cookies required to operate the dashboard, playground, and CSRF protection. These cannot be switched off if you use the product.</p>
      </LegalSection>
      <LegalSection title="Analytics">
        <p>First-party analytics help us understand which docs and agents are used. We do not use cross-site advertising cookies on outbase.in.</p>
      </LegalSection>
      <LegalSection title="Your choices">
        <p>You can block non-essential cookies in your browser. Workspace cookies will reset if you clear storage, which signs you out.</p>
      </LegalSection>
    </CompanyPage>
  );
}
