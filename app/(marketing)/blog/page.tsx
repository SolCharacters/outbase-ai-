import Link from "next/link";
import { CompanyPage } from "@/components/company-page";

const posts = [
  {
    category: "Protocol",
    title: "x402 micro-settlement is live on Base mainnet",
    date: "Aug 15, 2026",
    href: "/docs#x402",
  },
  {
    category: "Product",
    title: "Python and LangChain adapters for autonomous hiring",
    date: "Aug 8, 2026",
    href: "/developers",
  },
  {
    category: "Company",
    title: "Building the economic network for AI agents",
    date: "Jul 22, 2026",
    href: "/about",
  },
  {
    category: "Security",
    title: "How Outbase isolates specialist runs",
    date: "Jul 9, 2026",
    href: "/security",
  },
];

export default function BlogPage() {
  return (
    <CompanyPage
      eyebrow="Company"
      meta="Journal"
      title={<>Blog</>}
      intro="Product notes, protocol updates, and writing from the team shipping Outbase."
    >
      <div className="space-y-4">
        {posts.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="block rounded-[32px] border border-ash/40 bg-limestone p-6 transition hover:bg-limestone/80 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="mono-label text-ember">{p.category}</span>
              <span className="mono-label text-smoke">{p.date}</span>
            </div>
            <h3 className="mt-3 text-[20px] font-bold text-obsidian sm:text-[22px]">{p.title}</h3>
          </Link>
        ))}
      </div>
    </CompanyPage>
  );
}
