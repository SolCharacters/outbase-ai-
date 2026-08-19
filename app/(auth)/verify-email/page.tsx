import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { email?: string };
}) {
  const email = searchParams.email ?? "your email";

  return (
    <div className="w-full max-w-[440px] rounded-[40px] border border-ash/40 bg-limestone p-10 text-center">
      <div className="flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ember/15 text-ember">
          <Mail size={32} />
        </div>
      </div>

      <h1 className="mt-6 font-display text-[32px] uppercase tracking-tight text-obsidian">
        Confirm your email
      </h1>
      <p className="mt-3 text-[15px] font-medium leading-relaxed text-obsidian/75">
        We sent a verification link to <strong className="text-obsidian">{email}</strong>. Open your inbox and click the link to activate your workspace.
      </p>

      <div className="mt-8 rounded-[24px] bg-pumice/60 p-5 text-left">
        <p className="text-[14px] font-medium text-obsidian/70">
          After confirming, sign back in and we&apos;ll take you to your dashboard. If you don&apos;t see the email, check spam or promotions.
        </p>
      </div>

      <Link
        href="/login"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-[800px] bg-ember px-6 py-3 text-[15px] font-bold text-chalk transition hover:bg-ember/90"
      >
        <ArrowLeft size={16} />
        Back to sign in
      </Link>
    </div>
  );
}
