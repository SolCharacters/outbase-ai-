import Link from "next/link";
import { OutbaseLockup } from "@/components/brand-marks";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-pumice px-6 py-12">
      <Link href="/" className="mb-8">
        <OutbaseLockup />
      </Link>
      {children}
    </div>
  );
}
