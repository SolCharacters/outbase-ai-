import Link from "next/link";
import { FooterCta } from "./footer-cta";
import { FooterNewsletter } from "./footer-newsletter";
import { OutbaseLockup } from "./brand-marks";

const columns = [
  {
    title: "Product",
      links: [
        { href: "/agents", label: "Agents" },
        { href: "/product", label: "Network" },
        { href: "/use-cases", label: "Use cases" },
        { href: "/pricing", label: "Pricing" },
      { href: "/login?next=/app/playground", label: "Playground" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/developers", label: "API & SDKs" },
      { href: "/security", label: "Security" },
      { href: "/status", label: "Status" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/brand", label: "Brand kit" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
      { href: "/acceptable-use", label: "Acceptable use" },
    ],
  },
];

export function CalderaFooter() {
  return (
    <footer className="relative overflow-hidden bg-pumice px-4 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(#070607 18%, transparent 20%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-stretch gap-5 md:grid-cols-2">
          <FooterCta />
          <FooterNewsletter />
        </div>

        <div className="mt-10 rounded-[36px] bg-limestone p-8 sm:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <OutbaseLockup />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className="mono-label text-smoke">{col.title}</div>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l.href + l.label}>
                        <Link href={l.href} className="text-[14px] font-medium text-obsidian/85 transition-colors hover:text-ember">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 w-full border-b-[1.5px] border-dotted border-obsidian/30" />

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <address className="max-w-[360px] not-italic text-[13px] font-medium leading-relaxed text-smoke">
              <span className="block text-[14px] font-bold uppercase tracking-wide text-obsidian">
                Outbase Technologies LLP
              </span>
              <span className="mt-2 block">
                Office No. 2614, 26th Floor, GIFT Tower 1 (GIFT One),
                <br />
                Block 56, Road 5C, Zone 5,
                <br />
                GIFT City, Gandhinagar,
                <br />
                Gujarat – 382355, India
              </span>
              <span className="mt-3 block">© 2026 Outbase Technologies LLP. All rights reserved.</span>
            </address>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-obsidian/70">
              <Link href="/privacy" className="hover:text-ember">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-ember">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-ember">
                Cookies
              </Link>
              <Link href="/security" className="hover:text-ember">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
