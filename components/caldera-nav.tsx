"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { OutbaseLockup } from "./brand-marks";
import { CtaLink } from "./ui";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/developers", label: "Developers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Company" },
  { href: "/docs", label: "Docs" },
];

export function CalderaNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex w-full justify-center px-4 py-4 transition-[padding] duration-300",
        scrolled ? "pt-3" : "pt-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between rounded-[800px] border border-ash/50 bg-limestone px-5 py-2.5 transition-[max-width,background-color,padding,backdrop-filter] duration-300 sm:px-7",
          scrolled ? "max-w-[920px] w-full bg-limestone/95 backdrop-blur-md py-2 px-5" : "max-w-[1280px] w-full"
        )}
      >
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Outbase home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <OutbaseLockup />
          </Link>
          <span className="mx-2 hidden h-4 w-px border-r-[1.5px] border-dotted border-obsidian/40 sm:inline-block" />
        </div>

        <div className="hidden items-center gap-6 text-[15px] font-medium text-obsidian/85 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href || pathname.startsWith(`${l.href}/`) ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-ember",
                (pathname === l.href || pathname.startsWith(`${l.href}/`)) && "text-ember"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <CtaLink href="/signup" size="sm">
            Get Started
          </CtaLink>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-obsidian md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="primary-navigation" className="fixed inset-0 top-[76px] z-40 overscroll-contain bg-pumice/98 px-6 py-8 md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 text-[22px] font-medium">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ember" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/#newsletter" className="hover:text-ember" onClick={() => setOpen(false)}>
              Newsletter
            </Link>
            <CtaLink href="/signup" className="mt-4 w-full sm:w-auto" onClick={() => setOpen(false)}>
              Get Started
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
