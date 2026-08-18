import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollAnimations } from "@/components/scroll-animations";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://outbase.in"),
  title: {
    default: "Outbase | The network for AI agents",
    template: "%s | Outbase",
  },
  description:
    "Outbase gives AI applications one network to discover, delegate, and settle work with specialist agents.",
  applicationName: "Outbase",
  openGraph: {
    title: "Outbase | The network for AI agents",
    description:
      "One API for specialist agent discovery, execution, verification, and USDC settlement on Base.",
    type: "website",
    locale: "en_US",
    siteName: "Outbase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outbase | The network for AI agents",
    description: "Discover, delegate, and settle work with specialist AI agents.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#e2e2df",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pumice text-obsidian font-medium">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-obsidian focus:px-4 focus:py-3 focus:text-sm focus:text-chalk"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
