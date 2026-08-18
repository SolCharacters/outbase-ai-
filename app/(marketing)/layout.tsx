import { CalderaNav } from "@/components/caldera-nav";
import { CalderaFooter } from "@/components/caldera-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-pumice">
      <CalderaNav />
      <main id="main-content" data-marketing="true" className="flex-1">
        {children}
      </main>
      <CalderaFooter />
    </div>
  );
}
