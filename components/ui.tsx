"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "ember";
  size?: "sm" | "md" | "lg";
}) {
  const base =
    "cta-pill inline-flex items-center justify-center gap-2 font-medium transition-[background-color,border-color,color,opacity,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variants = {
    primary: "bg-ember text-chalk hover:bg-[#e64900] font-bold",
    ember: "bg-ember text-chalk hover:bg-[#e64900] font-bold",
    secondary: "bg-transparent text-obsidian border-[1.5px] border-obsidian hover:bg-limestone",
    ghost: "text-obsidian hover:bg-limestone/60 rounded-[800px]",
    danger: "bg-ember text-chalk hover:opacity-90",
  };

  const sizes = {
    sm: "h-9 px-4 text-[14px]",
    md: "h-12 px-6 text-[16px]",
    lg: "h-14 px-8 text-[16px]",
  };

  const radii = {
    sm: "rounded-[800px]",
    md: "rounded-[800px]",
    lg: "rounded-[800px]",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], radii[size], className)} {...props}>
      {children}
    </button>
  );
}

export function CtaLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "dark" | "ghost-chalk";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link
      className={cn(
        "cta-pill inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[800px] leading-snug transition-[background-color,border-color,color,opacity,transform,box-shadow] duration-200",
        size === "sm" && "cta-pill-sm text-[14px]",
        size === "md" && "text-[15px]",
        size === "lg" && "cta-pill-lg text-[16px]",
        variant === "primary" && "bg-ember font-bold text-chalk hover:bg-[#e64900]",
        variant === "secondary" &&
          "border-[1.5px] border-obsidian bg-transparent font-medium text-obsidian hover:bg-pumice/80",
        variant === "dark" && "bg-obsidian font-medium text-chalk hover:bg-obsidian/80",
        variant === "ghost-chalk" &&
          "border-[1.5px] border-chalk/40 bg-transparent font-medium text-chalk hover:bg-chalk/10",
        className
      )}
      {...props}
    />
  );
}

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "sulfur" | "ember";
}) {
  // Caldera: Sulfur (#f5f28e) is the primary tag background with Obsidian text, 800px pill radius
  const variants = {
    default: "bg-sulfur text-obsidian",
    success: "bg-sulfur text-obsidian",
    warning: "bg-sulfur text-obsidian",
    danger: "bg-ember text-chalk",
    info: "bg-plasma-violet text-chalk",
    sulfur: "bg-sulfur text-obsidian",
    ember: "bg-ember text-chalk",
  };
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center rounded-[800px] px-3.5 py-1 text-[12px] font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "field-input flex w-full rounded-[100px] border-[1.5px] border-ash bg-limestone px-6 text-[16px] font-medium text-obsidian placeholder:text-smoke focus-visible:outline-none focus-visible:border-obsidian focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

export function Label({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn("mono-label block text-[12px] font-medium text-smoke mb-1.5", className)} {...props}>
      {children}
    </label>
  );
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-[24px] border-[1.5px] border-ash bg-limestone p-5 text-[16px] font-medium text-obsidian placeholder:text-smoke focus-visible:outline-none focus-visible:border-obsidian focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }) {
  return (
    <select
      className={cn(
        "field-input flex w-full rounded-[100px] border-[1.5px] border-ash bg-limestone px-5 text-[16px] font-medium text-obsidian focus-visible:outline-none focus-visible:border-obsidian focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 cursor-pointer",
        className
      )}
      {...props}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Caldera: Limestone (#f7f6f2) background, 40px radius, 40px padding, flat (no shadow, no border)
  return (
    <div className={cn("rounded-[40px] bg-limestone p-8 md:p-10 transition duration-200", className)}>
      {children}
    </div>
  );
}

export function StatCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Caldera: Stat Feature Card in Ember (#fc5000), Chalk (#ffffff) text, 40px radius, 40px padding
  return (
    <div className={cn("rounded-[40px] bg-ember p-8 md:p-10 text-chalk transition duration-200", className)}>
      {children}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { variant: "default" | "success" | "warning" | "danger" | "info" | "sulfur" | "ember"; label: string }> = {
    completed: { variant: "sulfur", label: "Completed" },
    running: { variant: "ember", label: "Running" },
    pending: { variant: "default", label: "Pending" },
    failed: { variant: "danger", label: "Failed" },
  };
  const s = map[status.toLowerCase()] || { variant: "default", label: status };
  return <Badge variant={s.variant}>{s.label}</Badge>;
}

export function MonoLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("mono-label text-[12px] text-smoke", className)}>{children}</span>;
}

export function DottedDivider({ className }: { className?: string }) {
  return <div className={cn("w-full border-b-[1.5px] border-dotted border-obsidian/30 my-6", className)} />;
}
