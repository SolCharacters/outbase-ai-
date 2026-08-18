import type { ReactNode } from "react";

export function OutbaseWedge({ className = "h-5 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" fill="none" className={className} aria-hidden>
      <path
        d="M4 18L12 4C12.5 3 13.5 3 14 4L22 18C22.5 19 21.5 20 20 20H6C4.5 20 3.5 19 4 18Z"
        fill="#fc5000"
      />
    </svg>
  );
}

export function OutbaseLockup({
  invert = false,
  className = "",
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <OutbaseWedge />
      <span
        className={`font-bold text-[20px] tracking-tight lowercase ${invert ? "text-chalk" : "text-obsidian"}`}
      >
        outbase
      </span>
    </span>
  );
}

function BrandWordmark({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-obsidian">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center" aria-hidden>
        {children}
      </span>
      <span className="text-[17px] font-semibold tracking-tight">{label}</span>
    </span>
  );
}

export function BaseMark() {
  return (
    <BrandWordmark label="Base">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <rect width="24" height="24" rx="5.5" fill="#0052FF" />
        <path
          fill="#fff"
          d="M12 5.7C8.69 5.7 6 8.39 6 11.7s2.69 6 6 6c2.41 0 4.52-1.3 5.52-3.25H12v-2.29h7.71c.13.61.2 1.24.2 1.89 0 3.07-2.58 5.44-7.91 5.44-4.42 0-8-3.41-8-7.79 0-4.38 3.58-7.79 8-7.79 2.73 0 5.15 1.58 6.38 3.99l-2.62 1.46C14.97 7.53 13.57 5.7 12 5.7Z"
        />
      </svg>
    </BrandWordmark>
  );
}

export function CoinbaseMark() {
  return (
    <BrandWordmark label="Coinbase">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <circle cx="12" cy="12" r="12" fill="#0052FF" />
        <path
          fill="#fff"
          d="M12 4.05c-4.4 0-7.95 3.55-7.95 7.95s3.55 7.95 7.95 7.95c4.4 0 7.95-3.55 7.95-7.95S16.4 4.05 12 4.05Zm-.15 12.9c-2.73 0-4.95-2.22-4.95-4.95s2.22-4.95 4.95-4.95 4.95 2.22 4.95 4.95-2.22 4.95-4.95 4.95Z"
        />
      </svg>
    </BrandWordmark>
  );
}

export function UsdcMark() {
  return (
    <BrandWordmark label="USDC">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <circle cx="12" cy="12" r="12" fill="#2775CA" />
        <path
          fill="#fff"
          d="M12 21.5c5.25 0 9.5-4.25 9.5-9.5S17.25 2.5 12 2.5 2.5 6.75 2.5 12s4.25 9.5 9.5 9.5Zm.75-14.75v1.03c2.27.16 3.98 1.42 3.98 3.47 0 1.94-1.15 2.96-3.64 3.36-1.94.34-2.31.68-2.31 1.47 0 .75.63 1.23 1.66 1.23 1.02 0 1.66-.39 1.86-1.19h1.32c-.18 1.47-1.17 2.45-2.88 2.62v1.07h-1.28v-1.07c-2.36-.2-3.96-1.49-3.96-3.5 0-1.95 1.18-2.97 3.66-3.36 1.97-.35 2.29-.66 2.29-1.48 0-.74-.66-1.23-1.6-1.23-.98 0-1.57.44-1.75 1.22h-1.32c.19-1.38 1.14-2.33 2.67-2.5V6.75h1.28Z"
        />
      </svg>
    </BrandWordmark>
  );
}

export function GitHubMark() {
  return (
    <BrandWordmark label="GitHub">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </BrandWordmark>
  );
}

export function OpenAIMark() {
  return (
    <BrandWordmark label="OpenAI">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 3.31 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-3.31 6.046 6.046 0 0 0-.747-7.663zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    </BrandWordmark>
  );
}

export function AnthropicMark() {
  return (
    <BrandWordmark label="Anthropic">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z" />
      </svg>
    </BrandWordmark>
  );
}

export function VercelMark() {
  return (
    <BrandWordmark label="Vercel">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 1.67 2 21.33h20L12 1.67Z" />
      </svg>
    </BrandWordmark>
  );
}

export function RailwayMark() {
  return (
    <BrandWordmark label="Railway">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M4 19h16v2H4v-2Zm2-3.5 4.2-10.2h3.2L18 15.5h-3.1l-.6-1.6H9.7l-.6 1.6H6Zm4.5-4h3L12 7.4 10.5 11.5Z" />
      </svg>
    </BrandWordmark>
  );
}

export function ReplicateMark() {
  return (
    <BrandWordmark label="Replicate">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M2.25 7.5h8.25v2.25H2.25V7.5Zm0 4.5h14.25v2.25H2.25V12Zm6 4.5h8.25v2.25H8.25V16.5Z" />
      </svg>
    </BrandWordmark>
  );
}

export const ecosystemMarks = [
  { id: "base", node: <BaseMark /> },
  { id: "coinbase", node: <CoinbaseMark /> },
  { id: "usdc", node: <UsdcMark /> },
  { id: "github", node: <GitHubMark /> },
  { id: "openai", node: <OpenAIMark /> },
  { id: "anthropic", node: <AnthropicMark /> },
  { id: "vercel", node: <VercelMark /> },
  { id: "railway", node: <RailwayMark /> },
  { id: "replicate", node: <ReplicateMark /> },
];

export function IconDiscord({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function IconX({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function IconTelegram({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function IconGitHub({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .3A12 12 0 0 0 8.2 23.7c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.6 4.6 0 0 1 6.2 7.1c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.8 3.7 18.8 4 18.8 4c.6 1.6.2 2.8.1 3.1a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

export function IconLinkedIn({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function IconYouTube({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5V8.5L15.7 12l-5.9 3.5z" />
    </svg>
  );
}

export function IconDocs({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export const socialLinks = [
  { name: "Discord", href: "/#community", icon: IconDiscord },
  { name: "X", href: "/#community", icon: IconX },
  { name: "Telegram", href: "/#community", icon: IconTelegram },
  { name: "LinkedIn", href: "/#community", icon: IconLinkedIn },
  { name: "YouTube", href: "/#community", icon: IconYouTube },
  { name: "GitHub", href: "/docs", icon: IconGitHub },
  { name: "Docs", href: "/docs", icon: IconDocs },
];
